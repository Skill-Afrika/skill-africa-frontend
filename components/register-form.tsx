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
          router.replace("/profile");
          setLoading(false);
        }

        // console.log(res);

        if (res?.error) {
          const err = JSON.parse(res.error);
          setLoading(false);
          console.log(err);
          {
            err?.email?.[0] &&
              enqueueSnackbar(err.email[0], { variant: "error" });
          }
          {
            err?.username?.[0] &&
              enqueueSnackbar(err.username[0], { variant: "error" });
          }
          {
            err?.password?.[0] &&
              enqueueSnackbar(err.password[0], { variant: "error" });
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

              {/* <div className='text-red-500 mt-4 text-sm font-semibold'>
                {error?.username} <br />
                {error?.email} <br />
                {error?.password[0]}
              </div> */}

              <Button type='submit' className='w-full mt-4' disabled={pending}>
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </SnackbarProvider>
  );
}
