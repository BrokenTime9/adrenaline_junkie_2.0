"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function NotFound({ side }) {
  return <div>{}Ja na</div>;
  const { siteName } = useParams();
  return <div> {siteName} Ja na</div>;
}
