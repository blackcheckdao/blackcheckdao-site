import * as React from 'react';

type IProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
