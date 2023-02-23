import * as React from 'react';

import Layout from '@/components/Layout/Layout';
import SEO from '@/components/SEO/SEO';

import Logo from '~/svg/logo.svg';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO templateTitle='Black Check Not Found' />
      <main>
        <section>
          <div className='mx-auto flex max-w-xl flex-col items-center justify-center text-center'>
            <Logo className='h-64 w-64' />
            <h1 className='text-md mt-4 font-light uppercase text-white'>
              Black Check Not Found
            </h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}
