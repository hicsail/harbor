import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

export interface DecodedToken {
  id: string;
  projectId: string;
  role: number;
  exp: number;
}

export interface AuthContextProps {
  initialized: boolean;
  token?: string;
  decoded_token?: DecodedToken;
  setToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [initialized, setInitialized] = useState(false);
  const [token, setToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();
  const [decoded_token, setDecodedToken] = useState<DecodedToken>();

  useEffect(() => {
    const token = restoreToken();
    const refreshToken = restoreRefreshToken();
    if (token) {
      const decoded_token: DecodedToken = jwt_decode(token);
      const current_time = new Date().getTime() / 1000;
      if (current_time < decoded_token.exp) {
        setToken(token);
        setDecodedToken(decoded_token);
      }
    }
    if (refreshToken) {
      setRefreshToken(refreshToken);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (token) {
      saveToken(token);
      setDecodedToken(jwt_decode(token));
    }
  }, [token]);

  useEffect(() => {
    if (refreshToken) {
      saveRefreshToken(refreshToken);
    }
  }, [refreshToken]);

  return <AuthContext.Provider value={{ token, decoded_token, setToken, setRefreshToken, initialized }} {...props} />;
};

const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

const restoreToken = (): string | null => {
  return localStorage.getItem('token');
};

const saveRefreshToken = (token: string) => {
  localStorage.setItem('refreshToken', token);
};

const restoreRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken');
};

export const useAuth = () => useContext(AuthContext);
