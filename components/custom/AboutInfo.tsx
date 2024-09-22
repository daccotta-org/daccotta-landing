import Image from "next/image";
import home from "../../assets/home.png";

export default function AboutDaccotta() {
  return (
    <div className="text-gray-100 py-8 px-0 sm:px-8 mx-10">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-purple-300 mb-14">
        About Daccotta
      </h2>

      <section className="flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image src={home} alt="" layout="responsive" className="rounded-lg" />
        </div>

        <div className="w-full md:w-1/2 space-y-4 md:ml-6">
          <p className="text-sm sm:text-md lg:text-lg text-gray-400">
            Daccotta is a platform for movie lovers to share, review, and
            discuss films with friends. Whether you're discovering new movies or
            sharing your favorites, our community brings people together through
            the love of cinema. Join us and start sharing today.
          </p>
          <p className="text-sm sm:text-md lg:text-lg text-gray-400">
            This version keeps it concise while still conveying the key points.
          </p>
        </div>
      </section>

    </div>
  );
}