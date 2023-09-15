import React, { useState } from 'react'
import Cross from "../assets/Icon.svg";

export default function AddProfileForm({ close, submit, finalName, finalEmail, finalPhone, finalInsta, finalYt }) {
  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false);
  const [isBackButtonClicked, setIsBackButtonClicked] = useState(false);
  const [isNameNotFilled, setIsNameNotFilled] = useState(false)
  const [isEmailNotFilled, setIsEmailNotFilled] = useState(false)
  const [isPhoneNotFilled, setIsPhoneNotFilled] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value)
    finalName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    finalEmail(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
    finalPhone(event.target.value)
  }
  const handleInstagramChange = (event) => {
    setInstagram(event.target.value)
    finalInsta(event.target.value)
  }
  const handleYoutubeChange = (event) => {
    setYoutube(event.target.value)
    finalYt(event.target.value)
  }
  const handleNextClick = () => {
    if (name && email && phone) {
      setIsNextButtonClicked(true)
    }
    else if (!name && email && phone) {
      setIsNameNotFilled(true);
    }
    else if (name && !email && phone) {
      setIsEmailNotFilled(true);
    }
    else if (name && email && !phone) {
      setIsPhoneNotFilled(true);
    }
    else if (name && !email && !phone) {
      setIsEmailNotFilled(true)
      setIsPhoneNotFilled(true);
    }
    else if (!name && email && !phone) {
      setIsNameNotFilled(true)
      setIsPhoneNotFilled(true);
    }
    else if (!name && !email && phone) {
      setIsNameNotFilled(true)
      setIsEmailNotFilled(true);
    }
    
    else {
      setIsNameNotFilled(true);
      setIsEmailNotFilled(true);
      setIsPhoneNotFilled(true);
    }
  }
  const handleBackButton = () => {
    setIsBackButtonClicked(!isBackButtonClicked)
  }

  return (
    <div style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.50)",
      zIndex: "9999",
      transition: "opacity 0.3s ease-in-out"
    }} className='w-[544px] h-[553px] bg-[#ffffff] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.20),_0px_0px_32px_-8px_rgba(0,0,0,0.12),_0px_32px_32px_-8px_rgba(0,0,0,0.08)]'>
      {isNextButtonClicked && !isBackButtonClicked ?
        (
          <div className="w-[544px] h-[463px] absolute top-[235.5px] left-[448px] bg-white rounded-2xl shadow flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-16 pt-4 flex-col justify-between items-center flex">
              <div className="self-stretch px-6 justify-between items-center inline-flex flex flex-row">
                <div className='flex flex-row gap-[250px] items-center'>
                  <div className="w-[252px] self-stretch text-[#231F20] text-[20px] font-semibold font-Figtree leading-loose">Add New Profile</div>
                  <button onClick={close}><img src={Cross} alt="cross" className='w-[24px] h-[24px]' /></button>
                </div>
                <div className="p-1 rounded-lg justify-start items-center flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-zinc-100"></div>
            </div>
            <div className="self-stretch h-[312px] p-6 flex-col justify-start items-start gap-6 flex">
              <div className="w-[480px] h-10 relative">
                <div className="h-1 left-[275px] top-[-0.38px] absolute" />
                <div className="left-[86.96px] top-[1.14px] absolute text-[#231F20] text-[16px] font-semibold font-Figtree leading-normal">Basic</div>
                <div className="left-[351.29px] top-[1.14px] absolute text-[#231F20] text-[16px] font-semibold font-Figtree leading-normal">Social</div>
                <div className="w-[213.42px] h-1 left-[-0.25px] top-[37.14px] absolute bg-zinc-300 rounded-[30px]" />
                <div className="w-[213.42px] h-1 left-[266.58px] top-[37.14px] absolute bg-blue-500 rounded-[30px]" />
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="h-20 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch"><span className="text-[#231F20] text-[16px] font-normal font-Figtree leading-normal">Instagram Link </span><span className="text-[#999CA0] text-[16px] font-normal font-Figtree leading-normal">(Optional)  </span></div>
                  <div className="self-stretch h-12 px-4 py-3 bg-white rounded-lg border border-zinc-100 flex-col justify-start items-start flex">
                    <input placeholder='Eg. ..instagram.com/username' value={instagram} onChange={handleInstagramChange} className="w-[466px] placeholder-[#999CA0] self-stretch text-[#999CA0] text-[16px] outline-none font-normal font-Figtree leading-normal" />
                  </div>
                </div>
              </div>
              <div className="h-6 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch"><span className="text-[#231F20] text-[16px] font-normal font-Figtree leading-normal">Youtube Link </span><span className="text-[#999CA0] text-[16px] font-normal font-Figtree leading-normal">(Optional)</span></div>
              </div>
              <div className="self-stretch h-12 px-4 py-3 bg-white rounded-lg border border-zinc-100 flex-col justify-start items-start flex">
                <input placeholder='Eg. ..youtebe/username' value={youtube} onChange={handleYoutubeChange} className="placeholder-[#999CA0] self-stretch outline-none text-[#999CA0] text-[16px] font-normal font-Figtree leading-normal" />
              </div>
            </div>
            <div className="self-stretch h-[88px] pb-6 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[0.5px] w-[544px] bg-[#F2F2F2]"></div>
              <div className="self-stretch px-6 justify-between items-center inline-flex">
                <div className="px-4 py-2 rounded-lg justify-center items-center flex">
                  <div className="text-center"></div>
                </div>
                <div className="justify-start items-start gap-2 flex">
                  <div className="px-4 py-2 rounded-lg border border-[#999CA0] justify-center items-center flex">
                    <button className="text-center text-[#231F20] text-[14px] font-semibold font-Figtree leading-normal" onClick={handleBackButton}>Back</button>
                  </div>
                  <div className="px-4 py-2 bg-blue-500 rounded-lg justify-center items-center flex">
                    <button className="text-center text-white text-[14px] font-semibold font-Figtree leading-normal" onClick={submit}>Done</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (<div className="w-[544px] h-[553px] top-[150px] left-[448px] relative bg-white rounded-2xl shadow">
          <div className="w-[544px] h-16 pt-4 left-0 top-0 absolute flex-col justify-between items-center inline-flex">
            <div className="self-stretch px-6 justify-between items-center inline-flex">
              <div className='flex flex-row gap-[250px] items-center'>
                <div className="w-[252px] self-stretch text-[#231F20] text-[20px] font-semibold font-Figtree leading-loose">Add New Profile</div>
                <button onClick={close}><img src={Cross} alt="cross" className='w-[24px] h-[24px]' /></button>
              </div>
              <div className="p-1 rounded-lg justify-start items-center flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
            <div className="self-stretch h-[0px] border border-zinc-100"></div>
          </div>
          <div className="w-[544px] h-[376px] p-6 left-0 top-[63px] absolute flex-col justify-start items-start gap-[24px] inline-flex">
            <div className="w-[480px] h-10 relative">
              <div className="h-1 left-[275px] top-[-0.38px] absolute" />
              <div className="left-[86.96px] top-[1.14px] absolute text-[#231F20] text-[16px] font-semibold font-Figtree leading-normal">Basic</div>
              <div className="left-[343.29px] top-[1.14px] absolute text-[#231F20] text-[16px] font-semibold font-Figtree leading-normal">Contact</div>
              <div className="w-[213.42px] h-1 left-[-0.25px] top-[37.14px] absolute bg-blue-500 rounded-[30px]" />
              <div className="w-[213.42px] h-1 left-[266.58px] top-[37.14px] absolute bg-zinc-300 rounded-[30px]" />
            </div>
            <div className="flex-col justify-start items-start gap-4 flex mt-[40px]">
              <div className="h-20 flex-col justify-start items-start gap-2 flex">
                <div className="w-[496px] self-stretch text-[#231F20] text-[16px] font-normal font-Figtree leading-normal">Enter  Name*</div>
                <div className="self-stretch h-12 px-4 py-3 bg-white rounded-lg border border-zinc-100 flex-col justify-start items-start flex">
                  <input placeholder='Eg. John Doe' value={name} onChange={handleNameChange} className="placeholder-[#999CA0] outline-none self-stretch text-[#999CA0] text-[16px] font-normal font-Figtree leading-normal" />
                  {isNameNotFilled && <p className='text-[14px] text-[#FF4E64] font-normal font-Figtree mt-2.5'>Name filed is required*</p>}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex mt-[5px]">
              <div className="h-20 flex-col justify-start items-start gap-2 flex">
                <div className="w-[496px] self-stretch text-[#231F20] text-[16px] font-normal font-Figtree leading-normal">Enter  Email*</div>
                <div className="self-stretch h-12 px-4 py-3 bg-white rounded-lg border border-zinc-100 flex-col justify-start items-start flex">
                  <input placeholder='Eg. John@xyz.com' value={email} onChange={handleEmailChange} className="placeholder-[#999CA0] outline-none self-stretch text-[#999CA0] text-[16px] font-normal font-Figtree leading-normal" />
                  {isEmailNotFilled && <p className='text-[14px] text-[#FF4E64] font-normal font-Figtree mt-2.5'>Email filed is required*</p>}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex mt-[5px]">
              <div className="h-20 flex-col justify-start items-start gap-2 flex">
                <div className="w-[496px] self-stretch text-[#231F20] text-[16px] font-normal font-Figtree leading-normal">Enter  Phone*</div>
                <div className="self-stretch h-12 px-4 py-3 bg-white rounded-lg border border-zinc-100 flex-col justify-start items-start flex">
                  <input placeholder='Eg.  9123456789' value={phone} onChange={handlePhoneChange} className="placeholder-[#999CA0] outline-none self-stretch text-[#999CA0] text-[16px] font-normal font-Figtree leading-normal" />
                  {isPhoneNotFilled && <p className='text-[14px] text-[#FF4E64] font-normal font-Figtree mt-2.5'>Phone filed is required*</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[88px] pb-6 left-[4px] top-[465px] absolute flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch w-[540px] h-[0.5px] bg-[#F2F2F2]"></div>
            <div className="self-stretch px-6 justify-between items-center inline-flex">
              <div className="px-4 py-2 rounded-lg justify-center items-center flex">
                <div className="text-center"></div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <button className="px-4 py-2 bg-[#3E84F8] rounded-lg justify-center items-center flex text-center text-white text-[14px] font-semibold font-Figtree leading-normal" onClick={handleNextClick}>Next</button>
              </div>
            </div>
          </div>
        </div>)}
    </div>
  )
}
