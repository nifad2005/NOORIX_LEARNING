"use client"
import { useParams } from 'next/navigation';
import React from 'react'

function Page() {
  const { name } = useParams();

  const courses = [
    { id: 1, title: 'Web Development Basics', category: 'web', description: 'Learn the basics of web development.' },
    { id: 2, title: 'Advanced Data Science', category: 'data', description: 'Master advanced data science techniques.' },
    { id: 3, title: 'Graphic Design 101', category: 'design', description: 'Introduction to graphic design.' },
    { id: 4, title: 'Digital Marketing', category: 'marketing', description: 'Learn the fundamentals of digital marketing.' },
  ];

  const filteredCourses = courses.filter(course => course.category === name);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-sky-500 mb-6">Courses in {name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="border border-slate-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-700 mb-2">{course.title}</h3>
              <p className="text-slate-600 mb-4">{course.description}</p>
              <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;