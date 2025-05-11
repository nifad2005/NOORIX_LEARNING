import React from 'react';
import CategoryCard from '../utils/CategoryCard';
import Link from 'next/link';

function Categorys() {
  const categories = [
    { id: 1, name: 'Web Development', description: 'Learn to build websites and web apps.' },
    { id: 2, name: 'Data Science', description: 'Master data analysis and machine learning.' },
    { id: 3, name: 'Graphic Design', description: 'Create stunning visuals and designs.' },
    { id: 4, name: 'Marketing', description: 'Become an expert in digital marketing.' },
    { id: 5, name: 'Cybersecurity', description: 'Learn to protect systems and networks.' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500 mb-6">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link href="/category">
          <p className="text-sky-500 hover:underline text-lg">See More Categories</p>
        </Link>
      </div>
    </section>
  );
}

export default Categorys;