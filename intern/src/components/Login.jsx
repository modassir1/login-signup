import React, { useState, useRef } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(true);
    const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
    const [userPhoneNumber, setUserPhoneNumber] = useState(['7484815513', '1234567890', '0987654321'])

    const phone = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            if (value.length <= 10) {
                setPhoneNumber(value);
            }
        }
    }

    const getRandomOtp = () => {
        let otp = Math.floor(100000 + Math.random() * 90000);
        console.log(otp);
    }

    const handleContinue = () => {
        if (phoneNumber.length == 10) {
            if (userPhoneNumber.includes(phoneNumber)) {
                alert("registered")
            } else {
                getRandomOtp();
                setShowOtpInput(false)
            }

        }
    }

    const handleOtpDigitchange = (index, digit) => {
        const updatedOtpDigits = [...otpDigits];
        if (!isNaN(digit)) {
            updatedOtpDigits[index] = digit;
            if (index < updatedOtpDigits.length - 1 && digit !== '') {
                inputRefs[index + 1].current.focus();
            }
            setOtpDigits(updatedOtpDigits);
        }
    };

    const handleBackspace = (index) => {
        if (index >= 1) {
            inputRefs[index - 1].current.focus();
            const updatedOtpDigits = [...otpDigits];
            updatedOtpDigits[index - 1] = "";
            setOtpDigits(updatedOtpDigits);
        }
    }

    const editPhoneNumber = () => {
        setShowOtpInput(true)
    }
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));


    return (
        <div>
            <div className='h-96 bg-indigo-500 flex justify-center items-center rounded-b-[30px] border-2 border-cyan-300'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='absolute top-8 right-9  lg:top-10 lg:right-20'>
                        <IoMdClose size={30} className='text-white' />
                    </div>

                    <div>
                        <h1 className='text-white text-5xl font-bold tracking-widest font-serif'>ebo</h1>
                    </div>
                    <div>
                        <p className='text-white text-2xl font-medium'>celebration ho toh ebo!</p>
                    </div>
                </div>
            </div>

            <div className='mt-5 ml-3 mr-3'>
                {showOtpInput ? (
                    <div>
                        <p className='text-xl font-semibold'>Login or Signup</p>
                        <div className='w-16 border-[1.5px] rounded-[10px] border-indigo-700 mt-2'></div>

                        <div className="mt-4 flex items-center border-2 border-gray-300 rounded-[10px] p-1 w-ful">
                            <label htmlFor="phoneNumber" className="text-black-900 ml-1 font-bold">+91</label>
                            <div className='ml-1 flex-1'>
                                <input
                                    autoFocus={true}
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    className="p-2 w-full focus:outline-none font-medium tracking-wider"
                                    onChange={phone}
                                />
                            </div>
                        </div>

                        <button className='bg-indigo-500 my-6 p-3 rounded-[10px] text-center text-white font-semibold tracking-widest w-full'
                            onClick={handleContinue}
                            style={{ opacity: phoneNumber.length == 10 ? '1' : '0.65' }}>Continue
                        </button>

                        <div className='flex justify-center items-center '>
                            <div className='w-[50%] border-b-2 border-gray-200 font-bold'></div>
                            <p className='mx-2'>OR</p>
                            <div className='w-[50%] border-b-2 border-gray-200'></div>
                        </div>

                        <div>
                            <button className='p-2 my-6 border-2 border-gray-300 rounded-[10px] text-center text-gray-500 font-semibold w-full flex justify-center items-center'>
                                <IoLogoWhatsapp className='mr-2' size={22} color='green'/>
                                One tap login with Whatsapp
                            </button>
                        </div>
                    </div>


                ) : (
                    <div>
                        <div className='text-lg font-medium text-zinc-700'>
                            <span>Enter OTP </span>
                            <span>send to {phoneNumber}</span>
                            <span className='ml-2 text-xs font-bold text-indigo-600' onClick={editPhoneNumber}>Edit</span>
                            <p className='border-b-[3px] border-indigo-600 w-20 mt-1 mb-4 rounded'></p>
                        </div>

                        <div className='flex mt-6 justify-between sm:justify-normal space-x-2'>
                            {otpDigits.map((digit, index) => (
                                <input
                                    autoFocus={index == 0}
                                    key={index}
                                    type='text'
                                    maxLength='1'
                                    value={digit}
                                    onChange={(e) => handleOtpDigitchange(index, e.target.value)}
                                    className='p-4 h-12 w-12 sm:w-16 sm:h-16 text-center border border-slate-500 rounded-[10px] focus:outline-none font-medium tracking-wider'
                                    onKeyUp={(e) => {
                                        if (e.key === 'Backspace') {
                                            e.preventDefault();
                                            handleBackspace(index)
                                        }
                                    }}
                                    ref={inputRefs[index]}
                                />
                            ))}

                        </div>

                        <div className='flex flex-col'>
                            <div className='text-center sm:text-left'>
                                <p className='mt-6'>Didn't receive the OTP? Verify via</p>
                            </div>
                            <div className='flex mt-5 justify-between  sm:justify-normal sm:space-x-4 items-center'>
                                <div className='border-2 rounded-lg flex items-center justify-center p-0.5 sm:p-2'>
                                    <MdOutlineTextsms className='mr-1 sm:mr-3' />
                                    <p className='font-medium'>Resend SMS</p>
                                </div>
                                <div className='border-2 rounded-lg flex items-center p-0.5 sm:p-2'>
                                    <IoLogoWhatsapp className='mr-1 sm:mr-3' color={'green'} />
                                    <p className='font-medium'>Whatsapp</p>

                                </div>
                                <div className='border-2 rounded-lg flex items-center p-0.5 sm:p-2'>
                                    <MdOutlineLocalPhone className='mr-1 sm:mr-3' />
                                    <p className='font-medium'>OTP on call</p>
                                </div>
                            </div>
                        </div>

                        <button className='border rounded-[10px] mt-5 items-center bg-indigo-500 my-8 p-2 text-center text-white font-semibold text-lg cursor-pointer w-full sm:w-[37%]'>
                            Verify & Proceed
                        </button>


                    </div>
                )}
            </div>

        </div>

    )
}

export default Login
