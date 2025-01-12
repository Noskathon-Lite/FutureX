import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image src={'/camshootlogin.jpg'} alt='login' width={600} height={200} className='h-full object-contain m-0 p-0'/>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <SignIn/>
      </div>
    </div>
  )
}