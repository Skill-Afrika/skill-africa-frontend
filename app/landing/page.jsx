import React from "react";
import Landing from "../landing";

export async function generateMetadata({ params }) {
  return {
    icons: {
      icon: "/vercel.svg",
    },
    // title: '...',
  };
}

export default function LandingPage() {
  return <Landing />;
}
