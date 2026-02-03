'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-light'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h1 className='mb-6 text-2xl font-bold text-gray-dark'>
          Iniciar sesión
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label
              htmlFor='email'
              className='mb-1 block text-sm font-medium text-gray-dark'
            >
              Correo electrónico
            </label>
            <input
              id='email'
              type='email'
              {...register('email', {
                required: 'El correo electrónico es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Correo electrónico inválido',
                },
              })}
              className='w-full rounded border border-gray-medium px-3 py-2 focus:border-green focus:outline-none'
              placeholder='usuario@email.com'
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='password'
              className='mb-1 block text-sm font-medium text-gray-dark'
            >
              Contraseña
            </label>
            <input
              id='password'
              type='password'
              {...register('password', {
                required: 'La contraseña es requerida',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                },
              })}
              className='w-full rounded border border-gray-medium px-3 py-2 focus:border-green focus:outline-none'
              placeholder='••••••••'
            />
            {errors.password && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            className='w-full rounded bg-green py-2 font-medium text-white transition-colors hover:bg-green-bright'
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
