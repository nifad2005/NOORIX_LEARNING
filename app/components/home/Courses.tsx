import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Courses() {
  const trendingCourses = [
    { id: 1, title: 'Web Development', description: 'Learn to build websites and web apps.', image: '/images/learning_hero.png' },
    { id: 2, title: 'Data Science', description: 'Master data analysis and machine learning.', image: '/images/learning_hero.png' },
    { id: 3, title: 'Graphic Design', description: 'Create stunning visuals and designs.', image: '/images/learning_hero.png' },
    { id: 4, title: 'Marketing', description: 'Become an expert in digital marketing.', image: '/images/learning_hero.png' },
    { id: 5, title: 'Cybersecurity', description: 'Learn to protect systems and networks.', image: '/images/learning_hero.png' },
  ];

  return (
    <section className="py-12  mx-auto">
      <div className=" container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500 ">Trending Courses</h2>
        <p className='text-red-600 mb-6 '>This Feature is coming soon.</p>
        <div className="flex flex-wrap gap-6">
          {trendingCourses.map((course) => (
            <div
              key={course.id}
              className="border border-slate-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-700 mb-2">{course.title}</h3>
                <p className="text-slate-600 mb-4">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/courses">
            <p className="text-sky-500 hover:underline text-lg">See More Courses</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Courses;