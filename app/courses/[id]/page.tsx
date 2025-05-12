"use client"
import Loading from '@/app/components/utils/Loading';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Page() {
    const { id } = useParams();
    const [courseDetails, setCourseDetails] = useState<any>();
    useEffect(() => {
       const fetchCourse = async () => {
           const res = await fetch(`/api/courses/${id}`);
           const data = await res.json();
           setCourseDetails(data.response);
            console.log(data.response);
       }
       fetchCourse(); 
    },[])
    if(!courseDetails) return <Loading context={"Course Details"}/>
    
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-sky-500 mb-6">Course Details</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Author Title */}
                <p className="text-slate-500 mb-2">Author: {courseDetails?.authorDetails?.name}</p>

                {/* Course Title */}
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Course Title: {courseDetails.courseDatils.title}</h2>

                {/* Share Option */}
                <div className="mb-4">
                    <button className="text-sky-500 hover:underline">Share this course</button>
                </div>

                {/* Image */}
                <img
                    src={courseDetails.courseDatils.image}
                    alt="Course Image"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />

                {/* Description */}
                <p className="text-slate-600 mb-6">
                    {courseDetails.courseDatils.description}                </p>

                {/* Enroll Button */}
                <button
                    className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600"
                    onClick={() => window.location.href = `/courses/${id}/enroll`}
                >
                    Enroll in Course
                </button>
            </div>
        </div>
    );
}

export default Page;