"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import sports from "@/data/sports";

export default function Sport() {
  const params = useParams();
  const { sport } = params;
  const pathname = usePathname();
  const splitPath = pathname.split("/");
  const sportData = sports[splitPath[3]][splitPath[4]];
  console.log(sportData);

  return <>{sportData.name}</>;
//  signle sport data(id=1)
}
