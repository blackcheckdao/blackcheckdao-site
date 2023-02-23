import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='absolute bottom-2 text-gray-700'>
      © {new Date().getFullYear()} By{' '}
    </footer>
  );
};

export default Footer;
