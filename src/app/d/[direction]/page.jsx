"use client";

import { useParams, useRouter } from "next/navigation";
import directions from "@/data/directions/index.js";
import Card from "./components/card";

export default function Direction() {
  const params = useParams();
  const { direction } = params;
  const router = useRouter();

  const state = `/d/${direction}/`;
  console.log(directions);

  // state image card blah blah balh data
  return (
    <>
      {directions[direction].map((state, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              router.push(`/d/${direction}/${state.name}`);
            }}
          >
            <Card item={state} />
          </div>
        );
      })}
    </>
  );
}
