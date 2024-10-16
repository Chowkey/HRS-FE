import React from 'react'
import Avatar from "../public/BlankAva.jpg"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineModeEditOutline as EditButton } from "react-icons/md";

type Props = {}

const Profile = (props: Props) => {
  const user = {
    username: "SecTon",
    name: "Second To None",
    bio: "cc",
    phone: "0102030405",
    email: "cc@gmail.com",
  }
  const [edit, setEdit] = useState(0);
  const [info, setInfo] = useState({...user});
  return (
    <>
      <section className="flex justify-center h-screen">
        <div className="flex flex-col my-8 gap-4 flex-between w-2/3">
          <h1 className="text-3xl">Account Settings</h1>
          <div className="flex border-gray-300 border-2 rounded-md">
            <div className="flex ml-4 my-4 flex-col gap-4 w-1/4">
              <h2 className="text-2xl hover:bg-gray-100 cursor-pointer">Profile</h2>
              <h2 className="text-2xl hover:bg-gray-100 cursor-pointer">Setting</h2>
              <Link to="/" className="text-2xl hover:bg-gray-100 text-red-500">Log Out</Link>
            </div>
            <div className="flex ml-4 my-4 w-2/3 flex-col gap-4">
              <div className="flex w-24 h-24">
                <img src={Avatar} className=""></img>
              </div>
              
              <div className="w-full flex flex-col gap-4">
                <div>
                  <h3 className="text-xl">Username</h3>
                  <div className="relative w-full h-10">
                    <input type="text" className="border-2 px-2 py-1 text-lg w-full rounded-md border-gray-300" value={info.username} onChange={edit == 0 ? (e) => {setInfo({...info, username: e.target.value})} : undefined}></input>
                    <EditButton 
                    onClick={() => {setEdit(0)}}
                    className="absolute right-4 top-[50%] transform -translate-y-1/2 text-2xl cursor-pointer" 
                    ></EditButton>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl">Name</h3>
                  <div className = "relative w-full h-10">
                    <input 
                    type="text" 
                    className="border-2 px-2 py-1 text-lg h-full w-full rounded-md border-gray-300  focus:border-blue-500" 
                    style={{ caretColor: "transparent"}}
                    value={info.name} 
                    onChange= {(edit == 1  ? (e) => {setInfo({...info, name: e.target.value})} : undefined)}>
                    </input>
                    <EditButton 
                    onClick={() => {setEdit(1)}}
                    className="absolute right-4 top-[50%] transform -translate-y-1/2 text-2xl cursor-pointer" 
                    ></EditButton>
                  </div>
                 
                </div>
                <div>
                  <h3 className="text-xl">Bio</h3>
                  <div className="relative w-full h-20">
                    <textarea className="border-2 h-20 px-2 py-1 text-lg w-full rounded-md border-gray-300" value={info.bio} 
                    onChange={edit == 2 ? (e) => {setInfo({...info, bio: e.target.value})} : undefined }></textarea>
                    <EditButton 
                    onClick={() => {setEdit(2)}}
                    className="absolute right-4 top-[50%] transform -translate-y-1/2 text-2xl cursor-pointer" 
                    ></EditButton>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl">Phone number</h3>
                  <input type="text" className="border-2 px-2 py-1 text-lg w-full rounded-md border-gray-300" value={info.phone} onChange={(e) => {setInfo({...info, phone: e.target.value})}}></input>
                </div>
                <div>
                  <h3 className="text-xl">Email</h3>
                  <input type="email" className="border-2 px-2 py-1 text-lg w-full rounded-md border-gray-300" value={info.email} onChange={(e) => {setInfo({...info, email: e.target.value})}}></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Profile