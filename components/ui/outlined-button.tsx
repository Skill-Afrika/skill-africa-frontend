import React from "react";

export const OutlinedButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`${className} rounded-full px-3 py-1 border border-gray-600 w-fit`}>
      {children}
    </p>
  );
};
