import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"
import  AnLink  from "../AnLink/AnLink"
import { SelectedPage } from "../../shared/types";

interface Props {
  setSideBar: (value: boolean) => void
}
type AnLinkProps = {
  selectedPage: SelectedPage;
  setSelectedPage: ( value: SelectedPage) => void;
}

const SideBar = ({
  setSideBar,
}: Props , {
  selectedPage,
  setSelectedPage,
} : AnLinkProps) => {
  return (
    <motion.div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-bgprimary drop-shadow-xl
    " 
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -20, opacity: 0 }}
    >
      {/*Close Icon*/} 
      <div className="flex justify-end p-6 text-4xl">
        <button onClick ={() => 
          setSideBar(false)}>
          <IoClose className="text-white hover:text-gray-700 hover:cursor-pointer font-semibold"></IoClose>
          </button>
      </div>
      {/*Side Bar Content*/}
      <div className="flex flex-col gap-10 text-2xl text-white ml-[15%]">
          <AnLink currentPage="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isSideBar="true" />
          <AnLink currentPage="Products" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isSideBar="true"/>
          <AnLink currentPage="About Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} isSideBar="true"/>
      </div>
    </motion.div>
  )
}

export default SideBar