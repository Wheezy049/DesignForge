import React from 'react'
import NavBar from '../components/NavBar'
import CodeForm from '../components/CodeForm'
import FormCard from '../components/FormCard'

function Verification() {
  return (
    <div className='flex flex-col items-center bg-[#FCFCFC] min-h-screen'>
        <NavBar />

        <div className='w-full max-w-[1200px] mx-auto px-4 mt-36 mb-24 block md:flex justify-center items-center gap-8'>
            <CodeForm />
            <div className="hidden md:block">
        <FormCard />
        </div>
        </div>
    </div>
  )
}

export default Verification