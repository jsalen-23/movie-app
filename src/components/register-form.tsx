'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [serverError, setServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async formValues => {
    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      setLoading(false);

      if (response.ok) {
        push('/login');
        return;
      } else {
        setServerError(true);

        if (response.status === 409) {
          setErrorMessage('User already exists');
        } else {
          setErrorMessage('Something went wrong');
        }
      }
    } catch (error) {
      setServerError(true);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Max Verstappen"
                required
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                  minLength: {
                    value: 2,
                    message: 'Name is too short',
                  },
                })}
              />
              {errors?.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mverstappen@example.com"
              required
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
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                maxLength: {
                  value: 16,
                  message: 'Password is too long',
                },
              })}
            />
            {errors?.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-primaryRed text-primary hover:bg-primaryRed hover:opacity-90"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Create an account'}
          </Button>
          {serverError && (
            <span className="text-red-500 text-center">{errorMessage}</span>
          )}
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="link-underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
