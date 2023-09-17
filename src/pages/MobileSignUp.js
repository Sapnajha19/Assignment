import React, { useState } from 'react'
import LeftImg from '../assets/LeftSide.png'
import { BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoDiscord } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Apple from '../assets/apple1.svg';

export default function MobileSignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const navigate = useNavigate();
    const handleSuccess = (credentialResponse) => {
        console.log("Login successful");
        navigate("/dashboard");
    };

    const handleFailure = () => {
        console.log("Login failed");
    };
    const CLIENT_ID = process.env.REACT_APP_ASSIGNMENT_CLIENT_ID;

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className='w-full h-screen bg-[#F8FAFF] flex flex-row'>
                {/* <img src={LeftImg} alt="left-img" className='w-[30%] h-full'/> */}
                <div className='relative flex'>
                    <p className='absolute top-0 left-0 text-[#ffffff] font-Poppins text-[25px] mt-[2em] font-bold flex justify-center'>
                        LOGO
                    </p>
                    <img src={LeftImg} alt='Left' className='w-[20rem] h-screen' />
                    <div className='absolute top-[40%] left-[5%] flex flex-col gap-[200px]'>
                        <p className='font-Montserrat text-[#ffffff] text-[1em] font-bold'>Board.</p>

                    </div>
                </div>
                <div className='flex flex-col mt-[50%] ml-[1%]'>
                    <p className='text-[#000000] font-bold text-[2em] font-Montserrat'>Sign In</p>
                    <p className='text-[#000000] font-Lato text-[1em] font-normal'>Sign in to your account</p>
                    <div className='flex flex-col gap-5 lg:flex-row gap-10 mt-[28px]'>
                        <div className=''>
                            <GoogleLogin
                                theme="filled_white"
                                size="small"
                                onSuccess={handleSuccess}
                                onError={handleFailure}
                            />
                        </div>

                        <div className="w-[135.60px] h-[20.93px] bg-white rounded-[2px] flex items-center justify-center">
                            <div className="flex flex-row gap-[10px] items-center" >
                                <img src={Apple} alt="apple" className='w-[10.624px] h-[10.369px]' />
                                <p className='font-Montserrat text-[12px] font-normal text-[#858585]'>Sign in with Apple</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[13rem] h-[220px] bg-[#ffffff] rounded-[10px] mt-[27.44px]'>
                        <div className='ml-[15px] flex flex-col gap-[0.5em] mt-[20px] lg:ml-[32px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <label className='text-[#000000] text-[12px] font-Lato font-normal'>Email address</label>
                                <input
                                    placeholder="johndoe@gmail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className='w-[93%] outline-none placeholder-[#000000] bg-[#F5F5F5] p-[5px] rounded-[6px] text-[12px] font-Lato font-normal'
                                />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label className='text-[#000000] text-[12px] font-Lato font-normal'>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className='w-[93%] outline-none placeholder-[#000000] bg-[#EAEAEA] p-[5px] rounded-[6px] text-[12px] font-Lato font-normal'
                                />
                            </div>
                            <p className='text-[#346BD4] text-[12px] font-Lato font-normal'>Forgot password?</p>
                            <button className='bg-[#4285F4] w-[93%] text-[#ffffff] p-[5px] rounded-[6px] font-Montserrat font-bold text-[12px]'>
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row gap-1 mt-[0.5em] justify-center'>
                        <p className='text-[#858585] font-Lato text-[12px] font-normal'>Don’t have an account?</p>
                        <p className='text-[#346BD4] font-Lato text-[12px] font-normal'>Register here</p>
                    </div>
                    <div className='flex flex-row gap-[2em] justify-center absolute top-[95%] left-[110px]'>
                        <BsGithub className='text-black text-[1em]' />
                        <AiFillTwitterCircle className='text-black text-[1em]' />
                        <AiFillLinkedin className='text-black text-[1em]' />
                        <BiLogoDiscord className='text-black text-[1em]' />
                    </div>
                </div>

            </div>
        </GoogleOAuthProvider>
    )
}
