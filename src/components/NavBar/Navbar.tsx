import Logo from "../../public/Logo1.png"
import { Link } from "react-router-dom"

import { useState } from "react"
import { IoIosMenu } from "react-icons/io";
import SideBar from "../NavBar/Sidebar"
import Avatar from "../NavBar/Avatar"
import useMediaQuery from "../../hooks/MediaQuery"
import AnLink from "../AnLink/AnLink";
import { SelectedPage } from "../../shared/types";

interface Props {
  isTopofPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;

}

const Navbar = ({
  isTopofPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<boolean>(false);
  const flexbetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const navAttribute = (isTopofPage ? "" : "bg-bgprimary drop-shadow-md");
  return (
    <nav>
      {/* Navbar Container */}
      <div className={`${flexbetween} ${navAttribute} w-full top-0 fixed text-black z-10`}>
        <div className={`${flexbetween} mx-auto w-11/12`}>
          <div className={`${flexbetween} object-fit w-full gap-12`}>
            {/* Logo */}
            <div className="flex h-full w-[120px] items-center ">
              <img className="mt-2  h-[60px] w-full]" src={Logo} alt="logo" />
              {/* <p className="font-bold text-xl text-red-500">Sec<span className="text-red-500">Ton</span></p> */}
            </div>
            <div className={`${flexbetween} w-full gap-[5%]`}>
              {/* Pages */}
              {!isAboveMediumScreens ?
                <div></div> : (<div className={`${flexbetween} text-md gap-[60px]`}>
                  <AnLink currentPage="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isSideBar="false" />
                  <AnLink currentPage="Products" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isSideBar="false" />
                  <AnLink currentPage="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isSideBar="" />
                </div>)}
              {/* Sign In Buttons */}
              <div className={`${flexbetween} text-md gap-8`}>
                {(avatar)
                  ? (<Avatar ></Avatar>)
                  : (<Link to="#" className={`hover:text-yellow-400 ${window.scrollY == 0 ? 'text-blue-500' : 'text-white'}  font-medium`}>Sign in</Link>)
                  //onclick is for demo, remove it in production
                }
                {isAboveMediumScreens
                  ? (<Link to="/login"><button className={`hover:text-yellow-400 ${window.scrollY == 0 ? 'text-blue-500' : 'text-white'} text-center  font-medium`}>
                    Sign Up
                  </button></Link>)
                  : <IoIosMenu className={`rounded-md border-2 ${window.scrollY == 0 ? 'text-blue-500 border-blue-500' : 'text-white'} hover:border-gray-700  hover:text-gray-700 hover:cursor-pointer`} size={30} onClick={() => { setSidebar(!sidebar) }}>
                  </IoIosMenu>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Side bar */}
      {!sidebar
        ? null
        : (
          (!isAboveMediumScreens) ? (<SideBar setSideBar={setSidebar} />) : null
        )}
    </nav>
  )
}

export default Navbar