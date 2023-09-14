import React from 'react'
import LeftImg from "../assets/LeftSide.png"
import { BsGithub } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiLogoDiscord } from 'react-icons/bi'
export default function SignUp() {
    return (
        <div className='w-full h-full flex flex-row bg-[#F8FAFF]'>
            <div className='relative flex'>
                <p className='absolute top-0 left-0 text-[#ffffff] font-Poppins text-[24px] font-bold mt-[60px] ml-[60px]'>LOGO</p>
                <img src={LeftImg} alt='Left' />
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
            <div className='flex flex-col absolute top-[235.32px] left-[813.18px]'>
                <p className='text-[#000000] font-bold text-[36px] font-Montserrat'>Sign In</p>
                <p className='text-[#000000] font-Lato text-[16px] font-normal'>Sign in to your account</p>
                <div className='flex flex-row gap-10'>
                    <div className='border border-black w-[100px] h-[32px]'></div>
                    <div className='border border-black w-[100px] h-[32px]'></div>
                </div>
                <div className='w-[422.64px] h-[360.8px] bg-[#ffffff] rounded-[10px] mt-[27.44px]'>
                    <div className='flex flex-col gap-[20px] mt-[32px] ml-[32px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-[#000000] text-[16px] font-Lato font-normal'>Email address</label>
                            <input value="johndoe@gmail.com" className='w-[356.77px] outline-none placeholder-[#000000] bg-[#F5F5F5] p-[10px] rounded-[10px] text-[16px] font-Lato font-normal' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-[#000000] text-[16px] font-Lato font-normal'>Password</label>
                            <input type="password" className='w-[356.77px] outline-none placeholder-[#000000] bg-[#EAEAEA] p-[10px] rounded-[10px] text-[16px] font-Lato font-normal' />
                        </div>
                        <p className='text-[#346BD4] text-[16px] font-Lato font-normal'>Forgot password?</p>
                        <button className='bg-[#4285F4] w-[356.77px] text-[#ffffff] p-[10px] rounded-[10px] font-Montserrat font-bold text-[16px]'>Sign In</button>
                    </div>
                </div>
                <div className='flex flex-row gap-1 mt-[21px] justify-center'>
                    <p className='text-[#858585] font-Lato text-[16px] font-normal'>Don’t have an account?</p>
                    <p className='text-[#346BD4] font-Lato text-[16px] font-normal'>Register here</p>
                </div>
            </div>

        </div>
    )
}
