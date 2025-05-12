"use client"
import React, { useEffect, useState } from 'react';
import CategoryCard from '../utils/CategoryCard';
import Link from 'next/link';

function Categorys() {
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
    if(loading) return <div>Loading...</div>

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500 mb-6">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category : any) => (
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