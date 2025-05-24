'use client';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { Toaster } from '@/components/ui/sonner';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      {children}
      <Toaster />
    </ReduxProvider>
  );
}