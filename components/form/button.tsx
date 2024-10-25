import { ChangeEvent, MouseEventHandler } from "react";
import { useFormStatus } from "react-dom";

function ButtonClick({
  children,
  onClick,
  type = "button",
  className,
}: Readonly<{
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}>) {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        aria-disabled={pending}
        onClick={onClick}
        type={type}
        className={`bg-orange-500 w-fit rounded-3xl text-white cursor-pointer px-5 py-2.5 ${className}`}>
        {children}
      </button>
    </>
  );
}

export default ButtonClick;
