import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloGatewayDriver,
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: {
          path: 'schema.gql',
          federation: 2
        },
        gateway: {
          buildService: ({ url }) =>
            new RemoteGraphQLDataSource({
              url,
              willSendRequest: ({ request, context }) => {
                if (context.req && context.req.headers) {
                  // Copy over authentication
                  request.http!.headers.set('authorization', context.req.headers.authorization);
                }
              }
            }),
          supergraphSdl: new IntrospectAndCompose({
            subgraphs: [{ name: 'auth', url: configService.getOrThrow('AUTH_SERVICE_URL') }]
          })
        }
      })
    })
  ],
})
export class AppModule {}
