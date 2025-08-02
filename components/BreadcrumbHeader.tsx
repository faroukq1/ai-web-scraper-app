'use client';

import { usePathname } from 'next/navigation';
import { BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb';
import React from 'react';

const BreadcrumbHeader = () => {
  const pathname = usePathname();
  const segments = pathname === '/' ? [] : pathname.split('/').filter(Boolean);

  const buildHref = (index: number) => {
    return '/' + segments.slice(0, index + 1).join('/');
  };

  return (
    <div className="flex items-center justify-start">
      <BreadcrumbList>
        <BreadcrumbLink className="capitalize" href="/">
          home
        </BreadcrumbLink>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbLink className="capitalize" href={buildHref(index)}>
              {segment}
            </BreadcrumbLink>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </div>
  );
};

export default BreadcrumbHeader;
