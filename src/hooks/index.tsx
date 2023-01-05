import React from 'react';
import { LanguageProvider } from 'src/hooks/language';

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<BaseLayoutProps> = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default AppProvider;
