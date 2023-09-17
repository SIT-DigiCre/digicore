"use client";
import { WorkDemo, workDemoData } from "@/demo-data/work";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { useState } from "react";

type TopPageWorkCardsProps = {
  kind: "following" | "new arrivals" | "illustlation" | "music" | "movie";
};
export const TopPageWorkCards = ({ kind }: TopPageWorkCardsProps) => {
  const [works, setWorks] = useState<WorkDemo[]>(workDemoData);
  return (
    <div className="mt-2">
      <h2>{kind}</h2>
      <div className="overflow-x-hidden whitespace-nowrap">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
};

type WorkCardProps = {
  work: WorkDemo;
};
const customCardTheme: CustomFlowbiteTheme["card"] = {
  root: {
    children: "pt-2 pl-4 pr-4 pb-2",
  },
};
export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Card
      theme={customCardTheme}
      className="w-36 h-60 m-1 inline-block"
      renderImage={() => (
        <img
          src={work.files[0].url}
          className="h-36 w-36 object-cover rounded-tl-lg rounded-tr-lg"
        />
      )}
    >
      <h5>{work.title}</h5>
      <div className="flex items-center mt-2">
        <img
          src={work.user.icon}
          className="w-6 h-6 rounded-full object-cover mr-1"
        />
        <small>{work.user.name}</small>
      </div>
    </Card>
  );
};
