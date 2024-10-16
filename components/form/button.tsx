import { useFormStatus } from "react-dom";

function ButtonClick({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        aria-disabled={pending}
        type='submit'
        className='bg-orange-500 w-fit rounded-full text-white cursor-pointer px-6 py-3'>
        {children}
      </button>
    </>
  );
}

export default ButtonClick;
