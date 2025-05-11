import Image from "next/image";
import Hero from "./components/home/Hero";
import Courses from "./components/home/Courses";
import Category from "./components/home/Categorys";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Courses/>
      <Category/>
    </main>
  );
}
