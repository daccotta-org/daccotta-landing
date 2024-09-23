import Image from "next/image";
import home from "../../assets/home.png";
import BlurIn from "../magicui/blur-in";

export default function AboutDaccotta() {
  return (
    <div className="text-gray-100 py-8 px-0 sm:px-8 mx-10">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-purple-300 mb-14">
        <BlurIn word="About Daccotta" />
      </h2>

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image src={home} alt="" layout="responsive" className="rounded-lg" />
        </div>

        <div className="w-full md:w-1/2 space-y-4 md:ml-6">
          <p className="text-sm sm:text-md lg:text-lg text-gray-300">
            Daccotta is a platform built for film enthusiasts to discover, and
            showcase their taste in movies with like-minded individuals. You can
            create your own lists, add journal entries of the movies you have
            watched and get recommendations on the basis of your lists and
            journal entries. Daccotta a community that brings people together
            through a shared love of cinema.
          </p>
        </div>
      </section>
    </div>
  );
}
