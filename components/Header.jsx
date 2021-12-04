import React, { useContext } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'webdev' },
  { name: 'Sports', slug: 'sports' },
];

const Header = () => {
  return (
    <header className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Bregacode Blog
            </span>
          </Link>
        </div>
        <nav className='hidden md:float-right md:contents'>
          {categories.map((categorie) => (
            <Link key={categorie.slug} href={`/category/${categorie.slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {categorie.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
