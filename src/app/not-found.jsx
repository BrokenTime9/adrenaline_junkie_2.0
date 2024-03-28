"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function NotFound({ side }) {
<<<<<<< Updated upstream
  return <div>{}Ja na</div>;
=======
  const { siteName } = useParams();
  return <div> {siteName} Ja na</div>;
>>>>>>> Stashed changes
}
