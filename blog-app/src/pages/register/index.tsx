import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerValidation } from '../../features/register/validations/registerValidation';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidation),
  });

  return (
    <>
      <fieldset className='fieldset border-base-300 rounded-box w-xs border p-4'>
        <legend className='fieldset-legend'>Register</legend>

        <label className='label'>Email</label>
        <input
          type='email'
          {...register('email')}
          className='input'
          placeholder='Email'
        />
        <span className='text-red-500'>{errors?.email?.message}</span>

        <label className='label'>Password</label>
        <input
          type='password'
          {...register('password')}
          className='input'
          placeholder='Password'
        />
        <span className='text-red-500'>{errors?.password?.message}</span>

        <button className='btn btn-neutral mt-4'>Register</button>
      </fieldset>
    </>
  );
}
