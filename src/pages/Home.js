import React, { useState } from 'react'
import { FiPieChart } from 'react-icons/fi'
import Transaction from "../assets/transaction_icon.svg"
import { LuCalendarClock } from "react-icons/lu"
import { BiUserCircle } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"
import { BiSearch, BiBell } from "react-icons/bi"
import ProfileImg from '../assets/ProfileImage.png'
import Vector from '../assets/Vector.svg'
import Arrow from "../assets/Arrow.svg"
import Like from "../assets/Like.svg"
import Community from "../assets/Community.svg"
import { AiOutlinePlus } from "react-icons/ai"
import AddProfileForm from '../components/AddProfileForm'
import Whatsapp from '../assets/whatsapp.png'
import Insta from '../assets/color-insta.svg'
import Yt from '../assets/color-yt.svg'
import Mail from '../assets/Mail.svg'

export default function Home({ close }) {
  const [isAddProfileFormOpen, setIsAddProfileFormOpen] = useState(false)
  // const [isAddBlurStylesTrue, setIsAddBlurStylesTrue] = useState(false)
  // const [isFormClosed, setIsFormClosed] = useState(false)
  const [isProfileFormSubmitted, setIsProfileFormubmitted] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const handleAddClick = () => {
    setIsAddProfileFormOpen(true)

  }
  const handleClose = () => {
    setIsAddProfileFormOpen(false)
  }
  const handleSubmit = () => {
    if(name && email && phone){
    setIsProfileFormubmitted(true)}
    setIsAddProfileFormOpen(false)
  }
  return (
    <div className='w-full h-full flex flex-row gap-[67px] '>
      <div className='w-[280px] h-[944px] bg-gradient-to-b from-blue-500 to-blue-500 rounded-[20px] mt-[40px] ml-[43px] flex flex-col'>
        <p className='font-Montserrat text-[#ffffff] text-[36px] font-bold ml-[50px] mt-[60px]'>Board.</p>
        <div className='flex flex-col gap-[40px] mt-[60px] ml-[50px]'>
          <div className='flex flex-row gap-[20px] items-center'>
            <FiPieChart className='text-[#ffffff] w-[18px] h-[18px]' />
            <p className='font-Montserrat text-[#ffffff] text-[18px] font-bold'>Dashboard</p>
          </div>
          <div className='flex flex-row gap-[20px] items-center'>
            <img src={Transaction} alt="transaction" className='text-[#ffffff] w-[18px] h-[18px]' />
            <p className='font-Montserrat text-[#ffffff] text-[18px] font-normal'>Transactions</p>
          </div>
          <div className='flex flex-row gap-[20px] items-center'>
            <LuCalendarClock className='text-[#ffffff] w-[18px] h-[18px]' />
            <p className='font-Montserrat text-[#ffffff] text-[18px] font-normal'>Schedules</p>
          </div>
          <div className='flex flex-row gap-[20px] items-center'>
            <BiUserCircle className='text-[#ffffff] w-[18px] h-[18px]' />
            <p className='font-Montserrat text-[#ffffff] text-[18px] font-normal'>Users</p>
          </div>
          <div className='flex flex-row gap-[20px] items-center'>
            <FiSettings className='text-[#ffffff] w-[18px] h-[18px]' />
            <p className='font-Montserrat text-[#ffffff] text-[18px] font-normal'>Settings</p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] mt-[396px] ml-[50px]'>
          <p className='text-[#ffffff] font-Montserrat text-[14px] font-normal'>Help</p>
          <p className='text-[#ffffff] font-Montserrat text-[14px] font-normal'>Contact Us</p>
        </div>
      </div>
      <div className='flex flex-col mt-[71px]'>
        <div className='flex flex-row gap-[612px]'>
          <p className='text-[#000000] font-Montserrat font-bold text-[24px]'>Dashboard</p>
          <div className='flex flex-row items-center mr-[40px]'>
            <div className="w-[197.60px] h-[32.93px] relative">
              <input placeholder='Search...' className="placeholder-[#B0B0B0] outline-none w-[197.60px] h-[32.93px] left-0 top-0 absolute bg-white rounded-[10px] px-[15px] py-[6px]" />
              <BiSearch className='text-[#858585] relative left-[150px] top-2' />
            </div>
            <BiBell className='w-[18px] h-[26.888px] ml-[33.79px]' />
            <img src={ProfileImg} alt="profile" className='rounded-full ml-[27.6px]' />
          </div>
        </div>
        <div className='flex flex-row gap-[17px] mt-[40px]'>
          <div className="w-[237.32px] h-[120px] relative">
            <div className="w-[237.32px] h-[120px] left-0 top-0 absolute bg-white rounded-[20px] border-2 border-neutral-200">
              <div className='flex flex-col ml-[26px] mt-[18px]'>
                <div className='w-[31.829px] h-[31.829px] rounded-full bg-[#7FCD93] flex items-center'>
                  <img src={Vector} alt="Vector" className='w-[18.663px] h-[17.244px] mx-auto' />
                </div>
                <p className='font-Lato font-normal text-[11px] text-[#000000] mt-[7px]'>Total Revenues</p>
                <div className='flex flex-row gap-[5px]'>
                  <p className='font-Open Sans text-[#000000] text-[21px] font-bold'>$2,129,430</p>
                  <img src={Arrow} alt="arrow" className='mt-auto' />
                  <div className='bg-[#E9F9EB] text-[#3CC952] rounded-[34px] px-[8px] py-[4px]'>+2.5%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[237.32px] h-[120px] relative">
            <div className="w-[237.32px] h-[120px] left-0 top-0 absolute bg-white rounded-[20px] border-2 border-neutral-200">
              <div className='flex flex-col mt-[18px] ml-[26px]'>
                <div className='flex w-[31.829px] h-[31.829px] bg-[#DEBF85] rounded-full items-center'>
                  <img src={Transaction} alt="transaction" className='w-[14.901px] h-[17.2px] mx-auto' />
                </div>
                <p className='font-Lato font-normal text-[11px] text-[#000000] mt-[7px]'>Total Transactions</p>
                <div className='flex flex-row gap-[18px]'>
                  <p className='font-Open Sans text-[#000000] text-[21px] font-bold w-[124px]'>1,520</p>
                  <div className='bg-[#E9F9EB] text-[#3CC952] rounded-[34px] px-[8px] py-[4px] mr-[21px]'>+1.7%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[237.32px] h-[120px] relative">
            <div className="w-[237.32px] h-[120px] left-0 top-0 absolute bg-white rounded-[20px] border-2 border-neutral-200">
              <div className='flex flex-col mt-[18px] ml-[26px]'>
                <div className='flex w-[31.829px] h-[31.829px] bg-[#ECA4A4] rounded-full items-center'>
                  <img src={Like} alt="transaction" className='w-[14.901px] h-[17.2px] mx-auto' />
                </div>
                <p className='font-Lato font-normal text-[11px] text-[#000000] mt-[7px]'>Total Likes</p>
                <div className='flex flex-row gap-[18px]'>
                  <p className='font-Open Sans text-[#000000] text-[21px] font-bold w-[124px]'>9,721</p>
                  <div className='bg-[#E9F9EB] text-[#3CC952] rounded-[34px] px-[8px] py-[4px] mr-[21px]'>+1.4%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[237.32px] h-[120px] relative">
            <div className="w-[237.32px] h-[120px] left-0 top-0 absolute bg-white rounded-[20px] border-2 border-neutral-200">
              <div className='flex flex-col mt-[18px] ml-[26px]'>
                <div className='flex w-[31.829px] h-[31.829px] bg-[#A9B0E5] rounded-full items-center'>
                  <img src={Community} alt="transaction" className='w-[14.901px] h-[17.2px] mx-auto' />
                </div>
                <p className='font-Lato font-normal text-[11px] text-[#000000] mt-[7px]'>Total Users</p>
                <div className='flex flex-row gap-[18px]'>
                  <p className='font-Open Sans text-[#000000] text-[21px] font-bold w-[124px]'>9,721</p>
                  <div className='bg-[#E9F9EB] text-[#3CC952] rounded-[34px] px-[8px] py-[4px] mr-[21px]'>+4.2%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1000px] h-[359px] justify-center items-center inline-flex mt-[40px]">
          <div className="w-[1000px] h-[359px] bg-white rounded-[20px] shadow border-2 border-neutral-200" />
        </div>
        <div className='flex flex-row gap-[40px] mt-[40px]'>
          <div className="w-[480px] h-64 justify-center items-center inline-flex">
            <div className="w-[480px] h-64 bg-white rounded-[20px] shadow border-2 border-neutral-200" />
          </div>
          {isProfileFormSubmitted ? (<div className="w-[480px] h-64 bg-white rounded-[20px] shadow border-2 border-neutral-200 flex flex-col">
            <p className='text-[24px] text-[#000000] font-Figtree font-semibold mt-[48px] ml-[41px]'>{name}</p>
            <div className='flex flex-col gap-[26px] mt-[60px] ml-[41px]'>
              <div className='flex flex-row gap-[100px]'>
                <div className='flex flex-row gap-[17px]'>
                  <div className='h-[28px] w-[28px] bg-[#E9F9EB] rounded-full flex flex-crow items-center'>
                    <img src={Whatsapp} alt="whatsapp" className='w-[17px] h-[17px] mx-auto text-white'/>
                  </div>
                  <p className='text-[#231F20] font-normal text-[14px] underline font-Figtree'>{phone}</p>
                </div>
                <div className='flex flex-row gap-[17px]'>
                  {instagram && <div className='h-[28px] w-[28px] bg-[#FFE9EC] rounded-full flex flex-row items-center'>
                    <img src={Insta} alt="insta" className='w-[17px] h-[17px] mx-auto'/>
                  </div>}
                  <p className='text-[#231F20] font-normal text-[14px] underline font-Figtree'>{instagram}</p>
                </div>
              </div>
              <div className='flex flex-row gap-[100px]'>
                <div className='flex flex-row gap-[17px]'>
                  <div className='h-[28px] w-[28px] bg-[#A9B0E5] rounded-full flex flex-row items-center'>
                    <img src={Mail} alt="mail" className='w-[17px] h-[17px] mx-auto'/>
                  </div>
                  <p className='text-[#231F20] font-normal text-[14px] underline font-Figtree'>{email}</p>
                </div>
                <div className='flex flex-row gap-[17px]'>
                  {youtube && <div className='h-[28px] w-[28px] bg-[#FFE9EC] rounded-full flex flex-row items-center'>
                    <img src={Yt} alt="yt" className='w-[17px] h-[17px] mx-auto'/>
                  </div>}
                  <p className='text-[#231F20] font-normal text-[14px] underline font-Figtree'>{youtube}</p>
                </div>
              </div>
            </div>

          </div>) : (<div className="w-[480px] h-64 bg-white rounded-[20px] shadow border-2 border-neutral-200 flex items-center">
            <div className='w-[76.784px] h-[76.784px] bg-[#F5F5F5] rounded-full mx-auto flex items-center'>
              <AiOutlinePlus className='w-[51.189px] h-[51.189px] text-[#999CA0] mx-auto' onClick={handleAddClick} />
            </div>
          </div>)}
        </div>
        {isAddProfileFormOpen && (
          <div style={{
            position: "relative",
            zIndex: "10000", /* Ensure the modal is on top of the overlay */
            backgroundColor: "#fff"
          }} className="modal">
            <AddProfileForm isFormOpen={isAddProfileFormOpen} close={handleClose} isFormSubmitted={isProfileFormSubmitted} submit={handleSubmit} finalName={setName} finalEmail={setEmail} finalPhone={setPhone} finalYt={setYoutube} finalInsta={setInstagram} />
          </div>
        )}
      </div>
    </div>
  )
}
