import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  const session = await auth();
  
  if( !session?.user ){
    redirect('/sign-in');
  }
  return (
    <div className='flex h-full items-center justify-center flex-col gap-2'>
        <h1 className='text-3xl'>Dashboard Page</h1>
        <p className='text-2xl'>{ session.user.email }</p>
    </div>
  )
}

export default Page