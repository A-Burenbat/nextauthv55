import LoginFacebook from '@/components/LoginFacebook'
import LoginGithub from '@/components/LoginGithub'
import React from 'react'



const Page = () => {
  return (
    <div className='w-full flex mt-20 justify-center'>
      <div className='flex flex-col w-[400px]'>
        <h1 className='text-4xl w-full text-center font-bold mb-10'>Sign in page</h1>
        <LoginGithub />
        <LoginFacebook />
      </div>  
    </div>
  )
}

export default Page