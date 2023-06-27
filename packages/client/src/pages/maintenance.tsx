import { FC } from 'react';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@components/icon';
import ErrorLayout from '@layouts/error-layout';

export const Maintenance: FC = () => {
  return <ErrorLayout title="Website currently under maintenance" description="We are currently working hard on this page!" icon={<Icon icon={faToolbox} size="10x" />} />;
};
