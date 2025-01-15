"use client";

import { BallTriangle } from "react-loader-spinner";

export default function Loader({
  className = "h-svh",
}: {
  className?: string;
}) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color='#F97316'
        ariaLabel='ball-triangle-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
}
