import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"

import Decor from "../public/HomePage.svg"
import { SelectedPage } from "../shared/types";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({
  setSelectedPage,
}: Props) => {
  return (
    <section id="home" className="relative bg-white pt-20 z-0 md:h-screen">
      <motion.div
        onViewportEnter={() => { setSelectedPage(SelectedPage.Home) }}
        className="mx-auto w-5/6 md:flex md:items-center md:justify-center md:h-5/6">
        <div className="flex flex-col mt-6 z-10 md:mt-20 ">
          <h1 className="text-[48px] text-blue-500 text-nowrap font-medium md:text-[96px]">
            Your Health <br />Our Wealth
          </h1>
          <p className="mt-4 text-xl whitespace-normal md:w-3/4 md:text-2xl">
            We here to heal your health, no more worries in emergency, always available when you need
          </p>
          <Link to="/chat"
            className="flex justify-between items-center w-1/2 bg-orange-400 border-[1px] rounded-xl mt-4 px-5 py-[6px] 
          text-[16px] text-white font-medium cursor-pointer md:text-[22px] md:w-1/3
          hover:border-neutral-400 hover:bg-orange-500 hover:scale-[98%] hover:pr-3 transition duration-100">
            <span>Chat Now</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="flex justify-center">
          {<img src={Decor} className="w-[1600px] md:ml-10 hover:scale-[110%] hover:opacity-[95%] transition duration-500"></img>}
        </div>
      </motion.div>
    </section>
  )
}

export default Home