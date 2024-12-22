import React from "react";

export const OutlinedButton = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <p
      className={`${className} rounded-full px-3 py-1 border border-gray-600 w-fit`}>
      {children}
    </p>
  );
};
