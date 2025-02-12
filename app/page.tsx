"use client"

import React from "react";
import {Card, CardHeader, CardFooter, Image} from "@heroui/react";
import { FocusCards } from "./components/homeCard";

interface ImageWithHoverProps {
  src: string;
  alt: string;
  text: string;
}

const cards = [
  { title: "Most played games", size: 70 , src: "https://cdn.discordapp.com/attachments/1329760065535737889/1337173502360424499/Placeholder1.png?ex=67a67b5e&is=67a529de&hm=7fd366d854857f534577ede4a1a02bf300f402065ad962affd9f6bf590c15fed&", link: "/mostPlayedGames" },
  { title: "Most downloaded games", size: 23 , src: "https://cdn.discordapp.com/attachments/1329760065535737889/1337173502058561566/Placeholder2.png?ex=67a67b5e&is=67a529de&hm=8317ad9ee2832ded85ba5a7e21e3b293a41d778bd45fbc7fe7ca36f6b3f7afbc&", link: ""  },
  { title: "Games on sale", size: 23 , src: "https://cdn.discordapp.com/attachments/1329760065535737889/1337173501752246393/Placeholder3.png?ex=67a67b5e&is=67a529de&hm=ea549ac48e7229e47f4e168499c710acd251090b0bb314447796b8c67526c193&", link: ""  },
  { title: "All games", size: 70 , src: "https://cdn.discordapp.com/attachments/1329760065535737889/1337173501353656373/Placeholder4.png?ex=67a67b5e&is=67a529de&hm=e50531267dd81e1f6b44b61c5cb46322d4d1e48345861547b051cdcbb4cf5e83&", link: ""   },
];


export default function Home() {
  return (
    <div className="h-screen w-full flex flex-wrap justify-end items-start ">
        <FocusCards cards={cards} />
    </div>
  );
}
  