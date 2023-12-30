import React, { useState, useRef } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImUser } from "react-icons/im";
import { GrUserFemale } from "react-icons/gr";



const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(true);
    const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
    const [verification, setVerfication] = useState(false);
    // const [userPhoneNumber, setUserPhoneNumber] = useState(['7484815513', '1234567890', '0987654321'])
    const [otp, setOtp] = useState("");

    const phone = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            if (value.length <= 10) {
                setPhoneNumber(value);
            }
        }
    }

    const getRandomOtp = () => {
        let otpValue = Math.floor(100000 + Math.random() * 90000);
        setOtp(otpValue.toString())
        console.log(otpValue);
    }

    const handleContinue = () => {
        if (phoneNumber.length == 10) {
            setShowOtpInput(false)
            getRandomOtp();
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
        if (index >= 0) {
            inputRefs[index - 1].current.focus();
            const updatedOtpDigits = [...otpDigits];
            updatedOtpDigits[index - 1] = "";
            setOtpDigits(updatedOtpDigits);
        }
    }

    const editPhoneNumber = () => {
        setShowOtpInput(true)
        setOtpDigits(["", "", "", "", "", ""])
    }
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));

    //verification code
    const handleVerify = () => {
        if (otp.length === 6) {
            const isOtpCorrect = otpDigits.join("") === otp;
            if (isOtpCorrect) {
                alert("welcome")
                setOtp("");
                setOtpDigits(["", "", "", "", "", ""]);
                setVerfication(true)
            }
            else {
                toast.warning("INCORRECT OTP! TRY AGAIN")
                // alert("incorrect otp")
            }
        }

    };


    return (
        <div>
            {showOtpInput ? (
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
                                <IoLogoWhatsapp className='mr-2' size={22} color='green' />
                                One tap login with Whatsapp
                            </button>
                        </div>
                    </div>
                </div>

            ) : (
                <div>
                    {verification ? (
                        <div>
                            {/* register page */}
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
                                            // placeholder={phoneNumber}
                                            value={phoneNumber}
                                            readOnly={true}
                                            className="p-2 w-full  bg-gray-100 outline-0 font-extrabold opacity-60 tracking-wider"
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
                        </div>
                    ) : (

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
                                <div className='text-lg font-medium text-zinc-700'>
                                    <span>Enter OTP </span>
                                    <span>send to {phoneNumber}</span>
                                    <span className='ml-2 text-xs font-bold text-indigo-600 cursor-pointer' onClick={editPhoneNumber}>Edit</span>
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

                                <button className='border rounded-[10px] mt-5 items-center bg-indigo-500 my-8 p-2 text-center text-white font-semibold text-lg cursor-pointer w-full sm:w-[37%]' onClick={handleVerify}>
                                    Verify & Proceed
                                </button>

                            </div>
                        </div>

                    )}
                </div>

            )}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />

        </div>

    )
}

export default Login
