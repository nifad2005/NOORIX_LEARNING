"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '../components/utils/CourseCard';
import Loading from '../components/utils/Loading';

const Page = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setDatas(data.response);
        console.log(data.response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCourses()
  },[])

  if(loading) return <Loading context={"Courses"}/>

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
        {datas.map((course,index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Page;