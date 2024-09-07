import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { auth } from '../config';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { toast } from 'sonner';



export const signIn = (
  email: string,
  password: string,
  router: AppRouterInstance
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      //👇🏻 logs user's details

      toast.success("Logged in to admin dashboard")
      router.push('/admin');
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export const sendResetEmail = (email: string) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success('Password Email Sent!', {
        description: 'Check your mail for password reset link.',
      });
    })
    .catch((error: Error) => {
     toast.error(error.message);
    });
};