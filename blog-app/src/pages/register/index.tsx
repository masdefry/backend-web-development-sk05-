import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  // RegisterInput,
  registerValidation,
} from '../../features/register/validations/registerValidation';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidation),
  });

  const { mutate: registerMutation } = useMutation({
    mutationFn: async ({ email, password }: any) => {
      return await axios.post('http://localhost:8000/api/v1/auth/register', {
        email,
        password,
      });
    },
    onSuccess: (res) => {
      toast.success(res?.data?.message);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message); 
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit((data) => registerMutation(data))}>
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
      </form>
    </>
  );
}
