"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import sports from "@/data/sports";
import states from "@/data/directions/states";

export default function State() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const { state } = params;

  console.log(states[state]);
  // state hero image data

  console.log(sports[state])

  if (!sports[state]) {
    return <div>State not found!</div>;
  }

  return (
    <>
      {Object.values(sports[state]).map((st, index) => {
        console.log(st);
        return (
          <div
            key={index}
            onClick={() => {
              router.push(pathname + "/" + st.id);
            }}
          >
            {st.name}
          </div>
        );
      })}
    </>
  );
}
