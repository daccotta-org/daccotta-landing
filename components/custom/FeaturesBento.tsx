import Image from "next/image";
import journal from "../../assets/Features/journal.png";
import listcreation from "../../assets/Features/List_creation.png";
import profile from "../../assets/Features/profile.png";
import reccomend from "../../assets/Features/reccomend.png";
import topmovies from "../../assets/Features/top-movies.png";

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
    title: "List Creation",
    description: "Create and manage your own movie lists.",
    header: (
      <Image
        src={listcreation}
        alt=""
        className=""
      />
    ),
  },


  {
    title: "Movie Journals",
    description: "Keep a personalized journal entry for every movie you watch.",
    header: (
        <Image
          src={journal}
          alt=""
          className=""
        />
      ),
  },


  {
    title: "User Stats",
    description: "Get insights into your movie-watching habits.",
    header: (
        <Image
          src={profile}
          alt=""
          className=""
        />
      ),
  },


  {
    title: "Your Favorites, Your Way",
    description:
      "Effortlessly curate and showcase your top movie picks in a sleek, customizable list that reflects your taste.",
    header: (
        <Image
          src={topmovies}
          alt=""
          className="w-max"
        />
      ),
  },


  {
    title: "Personalized reccomendations",
    description: "Get personalized reccomendations based on your movie watching habits.",
    header: (
        <Image
          src={reccomend}
          alt=""
          className=""
        />
      ),
  },


];
