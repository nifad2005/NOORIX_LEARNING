"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';



function CreateCourse() {
  const [data, setData] = useState();
  const {data: session} = useSession()
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCategory, setNewCategory] = useState(false);
  const [newCategoryValue, setNewCategoryValue] = useState('');
  const [checkCategory, setCheckCategory] = useState(false);
  useEffect(()=>{
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
  },[])
  
  const handleNewCategory = (e) => {
    setCategories([...categories,newCategoryValue])
    setNewCategory(false);
    setCheckCategory(true)
    
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(e.target[0].value)
    const response = await fetch('/api/courses/course', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        authorDetails:{
          name:data?.author,
          authorId: session.user._id,
        },
        courseDatils :{
          title: data?.title,
          description: data?.description,
          image: data?.image,
          price: data?.price,
          category: data?.category.replaceAll(" ","-"),
        },
        courseContent:{
          sections:data?.content
        }
      }),
      
    })
    const resData  = await response.json();
    if (!response.ok) {
      console.log(resData.message);
      return;
    }
    console.log('Course created successfully');
    
  }
  console.log("-category", newCategory);
  const handleChange = (e)=>{
    if(e.target.id === "category"){
      e.target.value === "new" ? setNewCategory(true) : setNewCategory(false);
    }
    if(e.target.id === "image"){
      const file = e.target.files[0]
        if(file){

          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => {
            const base64Image = reader.result
            setData({...data,[e.target.id]:base64Image})   
          }
        }
    }
    setData({...data,[e.target.id]:e.target.value})
   }
  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-sky-500 mb-6">Create a New Course</h1>

      {/* Course Title */}
      <div className="mb-6">
        <label className="block text-slate-700 font-bold mb-2" htmlFor="title">Course Title</label>
        <input
          required
          type="text"
          id="title"
          placeholder="Enter course title"
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Author */}
      <div className="mb-6">
        <label className="block text-slate-700 font-bold mb-2" htmlFor="author">Author</label>
        <input
          required
          type="text"
          id="author"
          placeholder="Enter author name"
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Image */}
      <div className="mb-6">
        <label className="block text-slate-700 font-bold mb-2" htmlFor="image">Course Image</label>
        <input
          required
          type="file"
          id="image"
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Price Input */}
      <div className="mb-6">
        <label className="block text-slate-700 font-bold mb-2" htmlFor="price">Price</label>
        <input
          required
          type="number"
          id="price"
          placeholder="Enter course price"
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Category Dropdown */}
      <div className="mb-6">
        <label className="block text-slate-700 font-bold mb-2" htmlFor="category">Category</label>
        <select
          required
          id="category"
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="">Select a category</option>
          {
            categories?.map((category , index) => (
              <option key={index} value={category} className='text-sm'>{category.replace('-',' ').toUpperCase()} </option>
            ))
          }
          <option value="new" className='text-sm'>Add New Category✅</option>
          
        </select>
        {
          checkCategory && (<>
              <div className='text-green-300'>
                New Category added now you can add new category.
              </div>
            </>
          )
        }
        {
          newCategory && (<>
              <input
                required
                type="text"
                id="newCategory"
                value={newCategoryValue}
                onChange={(e) => setNewCategoryValue(e.target.value)}
                placeholder="Enter new category"
                className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              <button onClick={handleNewCategory} className='bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600'>add</button>
            </>
          )
        }
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-slate-700 font-bold mb-2" htmlFor="description">Description</label>
        <textarea
          required
          id="description"
          placeholder="Enter course description"
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows={4}
        ></textarea>
      </div>

      {/* Course Content */}
      <div className="mb-6">
        <label className="block text-slate-700 font-bold mb-2" htmlFor="content">Course Content</label>
        <textarea
            required
          id="content"
          placeholder="Enter course content"
          className="w-full p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows={6}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type='submit' className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600">
        Create Course
      </button>
    </form>
  );
}

export default CreateCourse;