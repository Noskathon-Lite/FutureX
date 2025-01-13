import React from 'react'
import Image from 'next/image';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading}>
  <AlertDialogContent className='bg-white flex flex-col items-center my-10 justify-content'>
    <div className='bg-white'>
        <Image src={'/loading.gif'} width={100} height={100} alt='loading'/>
        <h2>Generating Your Video...</h2>
    </div>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default CustomLoading