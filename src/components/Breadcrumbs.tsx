import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="w-full bg-transparent mt-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base px-2 md:px-8 py-2 md:py-3 m-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1 text-blue-700">
            {item.path ? (
              <Link to={item.path} className="hover:underline font-medium">
                {item.name}
              </Link>
            ) : (
              <span className="text-blue-900 font-semibold">{item.name}</span>
            )}
            {index < items.length - 1 && <span className="text-gray-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
