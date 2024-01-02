'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import LoadingPage from '@/components/atoms/LoadingPage';

const ClientInitData = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 1000);
    if (status === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, [status]);

  return isAuthenticated ? children : <LoadingPage />;
};

export default ClientInitData;
