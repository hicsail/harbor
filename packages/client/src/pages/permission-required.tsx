import { FC } from 'react';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@components/icon';
import ErrorLayout from '@layouts/error-layout';

export const PermissionRequired: FC = () => {
  return (
    <ErrorLayout
      title="Access Denied"
      description="The page you are trying to access has restricted access. Please refer to your system administrator."
      icon={<Icon icon={faShield} size="10x" />}
    />
  );
};
