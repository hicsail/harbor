import { FC } from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@components/icon';
import ErrorLayout from '@layouts/error-layout';

export const Error: FC = () => {
  return (
    <ErrorLayout title="Sorry, something went wrong" description="Sorry for the inconvenience, we're working on it." icon={<Icon icon={faExclamationTriangle} size="10x" />} />
  );
};
