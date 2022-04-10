import React from 'react';
import PropTypes from 'prop-types'
import MainMenu from './MainMenu';
import FlashMessages from './FlashMessages';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import { Head, usePage } from '@inertiajs/inertia-react';

export default function Layout({ title, children }) {
  const { appName } = usePage().props

  return (
    <div>
      {/* <Helmet titleTemplate="%s | Ping CRM" title={title} /> */}
      <Head title={title} />
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="flex-shrink-0 hidden w-56 p-12 overflow-y-auto bg-indigo-800 md:block" />
            {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
            <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12">
              <FlashMessages />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
