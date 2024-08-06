'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Inputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { push } = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async formValues => {
    setLoading(true);

    const response = await signIn('credentials', {
      email: formValues.email,
      password: formValues.password,
      redirect: false,
    });

    setLoading(false);

    if (response && response.error) {
      if (response.error === 'CredentialsSignin') {
        setErrorMessage('Incorrect email or password');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }

    if (response && !response.error) {
      push('/');
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-4xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="grid gap-4 pb-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
            />
            {errors?.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              })}
            />
            {errors?.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}
          <Button
            className="mt-2 w-full bg-primaryRed hover:bg-initial text-primary pill"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </CardFooter>
      </form>
      <div className="my-4 text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="link-underline">
          Register
        </Link>
      </div>
    </Card>
  );
}
