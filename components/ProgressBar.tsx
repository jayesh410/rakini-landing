'use client';

import React,{ useEffect} from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { usePathname, useSearchParams } from 'next/navigation';

// Configure NProgress
NProgress.configure({ showSpinner: false });

const ProgressBar: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500); // Delay to simulate loading

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]); // Trigger effect when path or query params change

  return null; // No visible UI element needed
};

export default ProgressBar;
