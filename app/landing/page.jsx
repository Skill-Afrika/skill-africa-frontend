import React from "react";
import Landing from "../landing2/landing2";

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
