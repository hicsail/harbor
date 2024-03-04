import { FC, useEffect } from 'react';
import { useAuth } from '@context/auth.context';
import { Paths } from '@constants/paths';
import { Outlet, useNavigate } from 'react-router-dom';
import { useProject } from '@context/project.context';

export const AdminGuard: FC = () => {
  const { token, decoded_token, initialized } = useAuth();
  const { project } = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialized && !token) {
      navigate(Paths.HOME);
    } else if (initialized && decoded_token?.role !== 1) {
      navigate(Paths.PERMISSION_REQUIRED);
    }
  }, [initialized, token, decoded_token, project]);

  return <Outlet />;
};
