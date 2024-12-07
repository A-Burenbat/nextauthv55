import { auth } from '@/auth';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'



const Page = async () => {
  const session = await auth();
  
  if( !session?.user ){
    redirect('/sign-in');
  }
  return (
    <div className='flex h-full items-center justify-center flex-col gap-2'>


        <p>
            <Link href={'https://youtu.be/wcDmA4uPqw0?t=1418'}>
            https://youtu.be/wcDmA4uPqw0?t=1418
            </Link> </p>
        <h1 className='text-3xl'>Add new Page</h1>
    </div>
  )
}

export default Page