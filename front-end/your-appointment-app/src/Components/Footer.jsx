import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.078 3.703 9.295 8.531 9.953v-6.979H6.688V12h3.844v-2.834c0-3.797 2.266-5.891 5.722-5.891 1.656 0 3.391.296 3.391.296v3.734h-1.906c-1.891 0-2.484 1.172-2.484 2.375V12h4.219l-.672 4.973h-3.547v6.978C18.297 21.294 22 17.077 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 6.164a9.518 9.518 0 0 1-2.691.737 4.69 4.69 0 0 0 2.075-2.602 9.423 9.423 0 0 1-2.975 1.135 4.702 4.702 0 0 0-7.994 4.291A13.34 13.34 0 0 1 3 5.373a4.7 4.7 0 0 0 1.451 6.282A4.647 4.647 0 0 1 2.8 10.247v.059a4.7 4.7 0 0 0 3.758 4.607c-.689.184-1.414.184-2.103 0a4.703 4.703 0 0 0 4.394 3.266 9.423 9.423 0 0 1-5.834 2.014A9.503 9.503 0 0 1 2 20.31a13.322 13.322 0 0 0 7.186 2.102c8.605 0 13.33-7.127 13.33-13.331 0-.202-.004-.404-.013-.607A9.394 9.394 0 0 0 22 6.164z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M21.891 0H2.109C.949 0 0 .95 0 2.109v19.782C0 23.05.949 24 2.109 24h19.782C23.05 24 24 23.05 24 21.891V2.109C24 .95 23.05 0 21.891 0zM7.219 20.438H4.876V9.562h2.344v10.876zm-1.172-12a1.156 1.156 0 1 1 0-2.313 1.156 1.156 0 0 1 0 2.313zm1.172-.656H4.876V6.75h2.344v.032zm5.594 13.125h-2.344V13.97c0-1.188-.422-1.994-1.468-1.994-1.53 0-2.187 1.094-2.187 2.719v5.375H3.281V9.562h2.281v1.438h.032c.313-.594 1.094-1.219 2.25-1.219 2.406 0 2.844 1.594 2.844 3.656v5.781zM18.75 14.25c0-1.938-1.094-3.25-3-3.25-1.406 0-2.328.75-2.703 1.5h-.032V9.562h-2.344v10.876h2.344v-5.5c0-.625.094-1.25.625-1.594.656-.469 1.562-.469 2.313-.032v6.125h2.344V14.25z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400"> Help : amnevh@gmail.com</p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; Copyright 2024 MLZS ETAWAH. All rights reserved | Design by : MLZS ETAWAH.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
