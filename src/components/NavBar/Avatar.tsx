import Ava from "../../public/BlankAva.jpg";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react"
import { MdOutlineAccountBox as ProfileIcon } from "react-icons/md";
import { MdOutlineSettings as SettingIcon } from "react-icons/md";
import { IoLogOutOutline as LogoutIcon } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom"
import useLogout from "../../hooks/social/LogOut";
import { useAppSelector } from '../../hooks/StoreHook'
import { useState, useEffect } from "react";

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}

const Avatar = () => {
   const logOut = useLogout()
   const navigate = useNavigate()
   const { user } = useAppSelector((state) => state.account)
   const [image, setImage] = useState<string>(Ava)
   useEffect(() => {
      const fetchPhotoURL = async () => {
         if (user && user.photoURL) {
            try {
               const response = await fetch(`${user.photoURL}`);
               if (response.ok) {
                  const blob = await response.blob();
                  const imageUrl = URL.createObjectURL(blob);
                  setImage(imageUrl);
               }
            } catch (error) {
               console.error('Failed to fetch photoURL:', error);
            }
         }
      };

      fetchPhotoURL();
   }, [user]);

   const handleLogOut = async () => {
      await logOut()
      navigate('/login')
   }
   return (
      <Menu as="div" className="relative inline-block text-left">
         <div>
            <MenuButton>
               <img className="rounded-full h-12 w-12" src={image}></img>
            </MenuButton>
         </div>

         <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
         >
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-30 focus:outline-none">
               <div className="py-1">
                  <MenuItem>
                     {({ focus }) => (
                        <div className={`${classNames(
                           focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                           'block px-4 py-2 text-sm items-center gap-2'
                        )} flex hover:cursor-pointer`}>
                           <div className="object-contain flex w-8 h-8 items-center">
                              <ProfileIcon className="text-4xl text-black" />
                           </div>
                           <Link to="/profile">
                              Your Profile
                           </Link>
                        </div>
                     )}
                  </MenuItem>
               </div>
               <div className="py-1">
                  <MenuItem>
                     {({ focus }) => (
                        <div className={`${classNames(
                           focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                           'block px-4 py-2 text-sm items-center gap-2'
                        )} flex hover:cursor-pointer`}>
                           <div className="object-contain flex w-8 h-8 items-center">
                              <SettingIcon className="text-4xl text-black" />
                           </div>
                           <Link to="#">
                              Settings
                           </Link>
                        </div>
                     )}
                  </MenuItem>
               </div>
               <div onClick={() => handleLogOut()} className="py-1 ">
                  <MenuItem>
                     {({ focus }) => (
                        <div className={`${classNames(
                           focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                           'block px-4 py-2 text-sm items-center gap-2'
                        )} flex hover:cursor-pointer`}  >
                           <div className="object-contain flex w-8 h-8 items-center">
                              <LogoutIcon className="text-4xl text-black" />
                           </div>
                           <button >
                              Log out
                           </button>
                        </div>
                     )}
                  </MenuItem>
               </div>
            </MenuItems>
         </Transition>
      </Menu>
   )
}

export default Avatar