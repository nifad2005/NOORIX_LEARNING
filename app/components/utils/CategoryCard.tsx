import Link from "next/link";
import React from "react";

export default function CategoryCard({ category }:any) {
  console.log("Category -card", category);
  return (
    <div
      key={category.id}
      className="border border-slate-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-700 mb-2">
          {category}
        </h3>
        <p className="text-slate-600 mb-4">Click to see more courses of {category}</p>
        {/* <Link
          href={`/category/${category.name
            .toLocaleLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
            Explore
          </button>
        </Link> */}
      </div>
    </div>
  );
}
