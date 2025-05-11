import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function CourseCard({ course }: any) {
  return (
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
              <Link href={`/courses/${course.id}`}>
                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
  )
}

export default CourseCard;