import Image from "next/image";
import journal from "../../assets/journal.png";
import friends from "../../assets/friends.png";
import favmovie from "../../assets/fav-movie.png";
import watchfriends from "../../assets/watch-friends.png";
import topmovies from "../../assets/top-movies.png";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";


export function FeaturesBento() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Image
        src={favmovie}
        alt=""
        className=""
      />
    ),
  },


  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
        <Image
          src={journal}
          alt=""
          className=""
        />
      ),
  },


  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
        <Image
          src={friends}
          alt=""
          className=""
        />
      ),
  },


  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
        <Image
          src={topmovies}
          alt=""
          className="w-max"
        />
      ),
  },


  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
        <Image
          src={watchfriends}
          alt=""
          className=""
        />
      ),
  },


];
