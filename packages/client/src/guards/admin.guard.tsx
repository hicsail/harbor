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
      const projectId = project?.id;
      const loginUrl = `${window._env_.VITE_AUTH_CLIENT}?projectId=${projectId}&redirectUrl=${encodeURIComponent(window.location.origin + Paths.AUTH_CALLBACK)}`;
      window.location.replace(loginUrl);
    } else if (initialized && decoded_token?.role !== 1) {
      navigate(Paths.PERMISSION_REQUIRED);
    }
  }, [initialized, token, decoded_token, project]);

  return <Outlet />;
};
