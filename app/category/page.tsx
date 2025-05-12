"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/utils/CategoryCard';
import Loading from '../components/utils/Loading';

function Page() {
  const [categories, setCategories] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCategories = async () => {
      try{
        const res = await fetch('/api/categories');
        const data = await res.json();
        setCategories(data.response);
        console.log(data.response);
        setLoading(false);
      }catch(error){
        console.log(error);
      }
    }
    getCategories()
  }, [])
  if(loading) return <Loading context={"Categories"}/>
  return (
    <div className="container mx-auto py-8 px-4 ">
      <h1 className="text-3xl font-bold text-sky-500 mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          categories &&categories.map((category :any , index :any) => (
         <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Page