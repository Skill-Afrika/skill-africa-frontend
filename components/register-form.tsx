"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, z } from "zod";
import { apiRegister } from "@/lib/services/api/auth-api";
import { signIn } from "next-auth/react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { BallTriangle } from "react-loader-spinner";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "./ui/form";
import { useRouter } from "next/navigation";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(3),
  password_confirmation: z.string(),
});
type FormSchemaType = z.infer<typeof formSchema>;
type FormFieldType = keyof FormSchemaType;

export default function RegisterForm() {
  const { pending } = useFormStatus();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { password, password_confirmation } = values;

      if (password !== password_confirmation) {
        enqueueSnackbar("Password does not match", { variant: "error" });
      } else {
        setLoading(true);
        const res = await signIn("register", {
          redirect: false,
          username: values.username,
          email: values.email,
          password: values.password,
        });

        if (res?.ok) {
          enqueueSnackbar("Registration Successful", { variant: "success" });
          setTimeout(() => {
            router.replace("/profile");
          }, 2000);
          setLoading(false);
        }


        if (res?.error) {
          const err = JSON.parse(res.error);
          setLoading(false);
          console.log(err);
          {
            err?.email && enqueueSnackbar(err.email, { variant: "error" });
          }
          {
            err?.username &&
              enqueueSnackbar(err.username, { variant: "error" });
          }
          {
            err?.password &&
              enqueueSnackbar(err.password, { variant: "error" });
          }
        }
      }
    } catch (error: any) {
      console.log(error.response);
      if (error.response && error.response.data) {
        const serverErrors = error.response.data; // assuming errors are in this format
        (Object.keys(serverErrors) as FormFieldType[]).forEach((key) => {
          form.setError(key, { message: serverErrors[key].join(" ") });
        });
      }
    }

    console.log(values);
  }

  return (
    <SnackbarProvider maxSnack={3}>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-background p-8 rounded-lg shadow-md w-full max-w-md'>
          <h1 className='text-3xl font-bold mb-6 text-center'>Register</h1>
          <Form {...form}>
            <form action='' onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your username' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your Email'
                        {...field}
                        type='email'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder='***' {...field} type='password' />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password_confirmation'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password Confirmation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Confirm Your Password'
                        {...field}
                        type='password'
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='w-full mt-4' disabled={pending}>
                {loading ? (
                  <BallTriangle
                    height={30}
                    width={30}
                    radius={5}
                    color='#ffffff'
                    ariaLabel='ball-triangle-loading'
                    wrapperStyle={{}}
                    wrapperClass=''
                    visible={true}
                  />
                ) : (
                  "Register"
                )}
              </Button>
            </form>
            <div className='text-slate-500 mt-3'>
              Already have an account?{" "}
              <Link href='/login'>
                {" "}
                <span className='text-black font-semibold'>Login</span>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </SnackbarProvider>
  );
}
