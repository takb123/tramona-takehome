'use client'

import Image from 'next/image'
import { useState } from 'react'
import mermaidImage from '../../public/mermaid.jpg';
import googleSVG from '../../public/google-color.svg';

export default function Home() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [confirm, setConfirm] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="flex min-h-screen">
      <div className='flex bg-white rounded-xl m-auto w-3/4'>
        <Image src={mermaidImage} alt='Mermaid Picture' className='rounded-l-xl basis-1/2'/>
        <div className='flex basis-1/2 justify-center align-center items-center flex-col'>
          <span className="material-symbols-outlined text-gray-500 px-7 ml-auto cursor-pointer">close</span>
          <p className='font-bold text-2xl tracking-widest w-3/5 text-center mx-9'>Create Your Account</p>
          <span className='flex items-center border rounded-md border-blue-600 px-5 py-2 m-3 w-3/5'>
            <span className="material-symbols-outlined text-blue-600">person</span>
            <input type='text' placeholder='Username*' value={username} onChange={e => setUsername(e.target.value)} className='focus:outline-none px-2 text-sm'/>
          </span>
          <span className='flex items-center border rounded-md border-blue-600 px-5 py-2 m-3 w-3/5'>
            <span className="material-symbols-outlined text-blue-600">mail</span>
            <input type='text' placeholder='Email address*' value={email} onChange={e => setEmail(e.target.value)} className='focus:outline-none px-2 text-sm'/>
          </span>
          <span className='flex items-center border rounded-md border-blue-600 px-5 py-2 m-3 w-3/5'>
            <span className="material-symbols-outlined text-blue-600">call</span>
            <input type='text' placeholder='Phone number*' value={phoneNum} onChange={e => setPhoneNum(e.target.value)} className='focus:outline-none px-2 text-sm'/>
          </span>
          <span className='flex items-center border rounded-md border-blue-600 px-5 py-2 m-3 w-3/5'>
            <span className="material-symbols-outlined text-blue-600">key</span>
            <input type={showPass ? "text" : "password"} placeholder='Enter your password*' value={password} onChange={e => setPassword(e.target.value)} className='focus:outline-none px-2 text-sm'/>
            <span className="material-symbols-outlined text-blue-600 cursor-pointer ml-auto" onClick={() => setShowPass(!showPass)}>{"visibility" + (showPass ? "_off" : "")}</span>
          </span>
          <span className='flex items-center border rounded-md border-blue-600 px-5 py-2 m-3 w-3/5'>
            <span className="material-symbols-outlined text-blue-600">key</span>
            <input type={showConfirm ? "text" : "password"} placeholder='Confirm your password*' value={confirm} onChange={e => setConfirm(e.target.value)} className='focus:outline-none px-2 text-sm'/>
            <span className="material-symbols-outlined text-blue-600 cursor-pointer ml-auto" onClick={() => setShowConfirm(!showConfirm)}>{"visibility" + (showConfirm ? "_off" : "")}</span>
          </span>
          <span className='w-3/5'>
            <input className="inline-block mx-3 text-left" type="checkbox" id="terms" name="terms" value="terms"/>
            <label className="inline-block text-sm text-left" htmlFor="terms">I agree to the <span className='text-blue-600'>terms and conditions</span></label>
          </span>
          <span className='w-3/5'>
            <input className="inline-block mx-3 text-left" type="checkbox" id="terms" name="terms" value="terms"/>
            <label className="inline-block text-sm text-left" htmlFor="terms">I agree to the <span className='text-blue-600'>terms and conditions</span></label>
          </span>
          <span className='w-3/5'>
            <input className="inline-block mx-3 text-left" type="checkbox" id="terms" name="terms" value="terms"/>
            <label className="inline-block text-sm text-left" htmlFor="terms">I agree to the <span className='text-blue-600'>terms and conditions</span></label>
          </span>
          <button className='bg-blue-600 w-3/5 text-white rounded-md p-2 m-3'>Sign Up</button>
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 m-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <Image className="w-6 h-6" src={googleSVG} loading="lazy" alt="google logo"/>
                <span className='text-blue-600'>Sign In with Google</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}