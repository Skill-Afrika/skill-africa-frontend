import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

function ButtonClick({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pending } = useFormStatus();
  return (
    <>
      <Button
        aria-disabled={pending}
        type='submit'
        className='bg-orange-500 w-full rounded-lg text-white font-bold cursor-pointer px-6 py-3'>
        {children}
      </Button>
    </>
  );
}

export default ButtonClick;
