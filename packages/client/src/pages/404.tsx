import { FC } from 'react';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@components/icon';
import ErrorLayout from '@layouts/error-layout';

export const Page404: FC = () => {
  return (
    <ErrorLayout
      title="Sorry, page not found"
      description="Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."
      icon={<Icon icon={faQuestion} size="10x" />}
    />
  );
};
