import LoginForm from "@/components/login-form";
// import { authOptions } from "@/lib/auth-options";
// import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Page() {

  // const session = await getServerSession(authOptions)
  // console.log(session)
  return (
    <>
      <h1>Login</h1>

      <LoginForm />

      <ul>
        <li>
          <Link href='/register'>Register</Link>
        </li>
        <li>
          <Link href='/forgot-password'>Forgot password</Link>
        </li>
      </ul>
    </>
  );
}
