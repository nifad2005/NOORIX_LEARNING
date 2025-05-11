import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function Hero() {
  return (
    <section className="bg-slate-100 justify-evenly items-center flex py-12 h-auto">
      <div className="  flex flex-col items-center h-full justify-center  text-center">
        <h1 className="text-5xl font-bold text-sky-500 mb-6">Welcome to Noorix Learning</h1>
        <p className="text-xl text-slate-600 mb-8">
          Empowering you with the best learning resources to achieve your goals.
        </p>
        <Link href="/courses">
          <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600">
            Explore Courses
          </button>
        </Link>
      </div>
      <div>
        <Image src={'/images/learning_hero.png'} alt="Hero Image" width={500} height={500} className="mb-6 rounded-tl-[90px] rounded-xl overflow-hidden" />
      </div>
    </section>
  );
}

export default Hero;