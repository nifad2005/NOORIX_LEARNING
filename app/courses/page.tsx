import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '../components/utils/CourseCard';

const Page = () => {
  const courses = [
    { id: 1, title: 'Web Development', description: 'Learn to build websites and web apps.', image: '/images/learning_hero.png' },
    { id: 2, title: 'Data Science', description: 'Master data analysis and machine learning.', image: '/images/learning_hero.png' },
    { id: 3, title: 'Graphic Design', description: 'Create stunning visuals and designs.', image: '/images/learning_hero.png' },
    { id: 4, title: 'Marketing', description: 'Become an expert in digital marketing.', image: '/images/learning_hero.png' },
  ];

  return (
    <div className="container mx-auto py-8 px-4 ">
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for courses..."
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Page;