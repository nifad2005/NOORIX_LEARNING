import Link from 'next/link';
import React from 'react'
import CategoryCard from '../components/utils/CategoryCard';

function Page() {
  const categories = [
    { id: 1, name: 'Web Development', description: 'Learn to build websites and web apps.' },
    { id: 2, name: 'Data Science', description: 'Master data analysis and machine learning.' },
    { id: 3, name: 'Graphic Design', description: 'Create stunning visuals and designs.' },
    { id: 4, name: 'Marketing', description: 'Become an expert in digital marketing.' },
  ];

  return (
    <div className="container mx-auto py-8 px-4 ">
      <h1 className="text-3xl font-bold text-sky-500 mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
         <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Page