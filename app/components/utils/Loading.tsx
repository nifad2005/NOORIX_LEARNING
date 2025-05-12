import React from 'react'

function Loading({context}:{
    context: string
}) {
  return (
    <div className="flex justify-center mt-52 h-screen ">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-sky-500 border-solid"></div>
        <p className="mt-4 text-slate-600 text-lg">Loading {context}, please wait...</p>
      </div>
    </div>
  );
}

export default Loading