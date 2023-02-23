import Layout from 'components/Layout/Layout';
import SEO from 'components/SEO/SEO';
import Logo from 'public/svg/logo.svg';
import * as React from 'react';

export default function HomePage() {
  return (
    <Layout>
      <SEO />
      <main>
        <section>
          <div className='mx-auto flex max-w-xl flex-col items-center justify-center text-center'>
            <Logo className='h-64 w-64' />
            <h1 className='text-xl font-light uppercase text-white'>
              Join us in the burn for the Black Check
            </h1>
            <p className='text-md mt-2 uppercase text-dao-white'>
              Pool your checks with the community and receive fractionalized
              editions in return
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
