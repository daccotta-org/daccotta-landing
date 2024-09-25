"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import home from "../../assets/Features/daccotta-pfp.png";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="">
        <Image src={home} alt="" className="rounded-[22px]" />
      </BackgroundGradient>
    </div>
  );
}
