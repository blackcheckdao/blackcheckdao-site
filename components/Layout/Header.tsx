import Link from 'next/link';
import * as React from 'react';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <Link href='/' className='font-bold hover:text-gray-600'>
          <a>Home</a>
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} className='hover:text-gray-600'>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
