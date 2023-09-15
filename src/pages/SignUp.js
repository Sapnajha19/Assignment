import React, { useState } from 'react';
import LeftImg from '../assets/LeftSide.png';
import { BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoDiscord } from 'react-icons/bi';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Apple from '../assets/apple1.svg';

export default function SignUp() {
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
      <div className='w-full h-full flex flex-col-reverse sm:flex-row bg-[#F8FAFF]'>
        {/* Left Section */}
        <div className='relative flex w-full sm:w-auto'>
          <p className='absolute top-0 left-0 text-[#ffffff] font-Poppins text-[24px] font-bold mt-[60px] ml-[60px]'>
            LOGO
          </p>
          <img src={LeftImg} alt='Left' className='hidden sm:block w-full sm:w-auto' />
          <div className='absolute top-[464px] left-[171px] flex flex-col gap-[200px]'>
            <p className='font-Montserrat text-[#ffffff] text-[72px] font-bold'>Board.</p>
            <div className='flex flex-row gap-[40px] justify-center absolute top-[450px]'>
              <BsGithub className='text-white text-[48px]' />
              <AiFillTwitterCircle className='text-white text-[48px]' />
              <AiFillLinkedin className='text-white text-[48px]' />
              <BiLogoDiscord className='text-white text-[48px]' />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col sm:mt-0 lg:mt-[235.32px] lg:ml-[100px] sm:ml-0'>
          <p className='text-[#000000] font-bold text-[36px] font-Montserrat'>Sign In</p>
          <p className='text-[#000000] font-Lato text-[16px] font-normal'>Sign in to your account</p>
          <div className='flex flex-col gap-5 lg:flex-row gap-10 mt-[28px]'>
            <div className=''>
              <GoogleLogin
                theme="filled_white"
                size={100}
                onSuccess={handleSuccess}
                onError={handleFailure}
              />
            </div>

            <div className="w-[200.60px] h-[40.93px] bg-white rounded-[10px] flex items-center justify-center">
              <div className="flex flex-row gap-[10px]" >
                <img src={Apple} alt="apple" className='w-[12.624px] h-[15.369px]' />
                <p className='font-Montserrat text-[12px] font-normal text-[#858585]'>Sign in with Apple</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[422.64px] h-[360.8px] bg-[#ffffff] rounded-[10px] mt-[27.44px]'>
            <div className='ml-[15px] flex flex-col gap-[20px] mt-[32px] lg:ml-[32px]'>
              <div className='flex flex-col gap-[10px]'>
                <label className='text-[#000000] text-[16px] font-Lato font-normal'>Email address</label>
                <input
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  className='w-[356.77px] outline-none placeholder-[#000000] bg-[#F5F5F5] p-[10px] rounded-[10px] text-[16px] font-Lato font-normal'
                />
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label className='text-[#000000] text-[16px] font-Lato font-normal'>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className='w-[356.77px] outline-none placeholder-[#000000] bg-[#EAEAEA] p-[10px] rounded-[10px] text-[16px] font-Lato font-normal'
                />
              </div>
              <p className='text-[#346BD4] text-[16px] font-Lato font-normal'>Forgot password?</p>
              <button className='bg-[#4285F4] w-[356.77px] text-[#ffffff] p-[10px] rounded-[10px] font-Montserrat font-bold text-[16px]'>
                Sign In
              </button>
            </div>
          </div>
          <div className='flex flex-row gap-1 mt-[21px] justify-center'>
            <p className='text-[#858585] font-Lato text-[16px] font-normal'>Don’t have an account?</p>
            <p className='text-[#346BD4] font-Lato text-[16px] font-normal'>Register here</p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}