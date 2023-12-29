import React from 'react'
import { ImUser } from "react-icons/im";
import { GrUserFemale } from "react-icons/gr";

const Register = () => {
    return (
        <div className='max-w-screen-sm mx-auto p-4'>
            <div className='flex justify-between items-center mb-3'>
                <h1 className='text-3xl font-semibold text-indigo-700'>ebo</h1>
                <button className='border-2 pl-4 pr-4 rounded-full font-bold bg-gray-100'>SKIP</button>
            </div>
            <div>
                <span className='text-2xl font-medium'>Register</span>
                <div className='w-16 border-[1.5px] rounded-lg border-indigo-700 mt-2'></div>
            </div>

            <div className="mt-4 flex items-center  rounded-[10px] p-1 w-ful bg-gray-100">
                <label htmlFor="phoneNumber" className="text-black-900 ml-1 font-bold">+91</label>
                <div className='ml-1 flex-1'>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="7484815513"
                        className="p-2 w-full  bg-gray-100 outline-0"
                    />
                </div>
            </div>

            <div className='flex space-x-2 sm:space-x-8 my-5'>
                <div className='border rounded-lg h-8 w-24 flex items-center bg-blue-50 space-x-3 justify-center'>
                    <ImUser color='blue' size={20} />
                    <p className='font-bold text-base'>Male</p>
                </div>
                <div className='border rounded-lg h-8 w-24 flex items-center bg-blue-50 space-x-3 justify-center'>
                    <GrUserFemale color='blue' size={20} />
                    <p className='font-bold text-base'>Female</p>
                </div>
            </div>

            <div>
                <div>
                    <input type="text" id="" className='border-2 w-full p-2 rounded-[10px] focus:outline-none font-medium tracking-wider' placeholder='Enter your name' />
                </div>

                <div className='mt-3'>
                    <label htmlFor="dob" className='text-sm font-semibold text-gray-500'>Date of birth</label>
                    <input type="date" id="dob" className='border-2 w-full p-2 rounded-[10px] focus:outline-none font-medium tracking-wider mt-[5px]' />
                </div>

                <div className='my-6'>
                    <input type="email" id="" className='border-2 w-full p-2 rounded-[10px] focus:outline-none font-medium tracking-wider' placeholder='Email (OPTIONAL)' />
                </div>

                <button className='bg-indigo-500 p-2 border rounded-[10px] text-center text-white font-semibold tracking-widest w-full'>Continue</button>

            </div>

        </div>
    )
}

export default Register