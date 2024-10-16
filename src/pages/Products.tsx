import { useState } from "react"
import img1 from "../public/slide1.jpg"
import img2 from "../public/slide2.jpg"
import img3 from "../public/slide3.jpg"
import img4 from "../public/slide4.jpg"
import img5 from "../public/slide5.jpg"
import { motion } from "framer-motion"
import { SelectedPage } from "../shared/types"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import Slider from "../components/slider/Slider"
import useMediaQuery from "../hooks/MediaQuery"
import {BentoCard, BentoGrid} from "../components/magicui/bento-grid"
import Bentodemo from "../components/magicui/bentodemo"
interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Products = ({
  setSelectedPage,
}: Props) => {
  const [index, setIndex] = useState<number>(0);
  const slides = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
  ]
  // const handleNext = () => {
  //   if (index === slides.length - 1) setIndex(0);
  //   else setIndex(index + 1);
  // };
  // const handlePrev = () => {
  //   if (index === 0) setIndex(slides.length - 1);
  //   else setIndex(index - 1);
  // }
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <section id="products" className={`${isAboveMediumScreens ? "h-screen " : ""} border-2 z-30 `}>
      <motion.div onViewportEnter={() => { setSelectedPage(SelectedPage.Products) }} className="flex flex-col md:gap-8 gap-2 mx-auto w-5/6 h-full">
        <h1 className="flex text-blue-500 font-semibold items-center md:mt-12 mt-4 md:text-5xl text-3xl mx-auto h-16 text-bold ">Our Products</h1>
        <Bentodemo/>
        {/* <Slider/> */}
        {/* <div className="w-full h-full mx-auto py-12 px-4 relative group">
          <div className="flex gap-8 justify-center h-full w-full overflow-x-clip overflow-y-visible">
            <img  src={slides[(index-1 < 0) ? slides.length-1 : index-1 ].url} className="rounded-2xl bg-center bg-cover object- "></img> 
            <img src={slides[index].url} className=" rounded-2xl bg-center bg-cover object- scale-105 z-[2px] "></img>
            <img  src={slides[(index+1 > slides.length -1) ? 0 : index +1 ].url} className=" rounded-2xl bg-center bg-cover object-  "></img>
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition duration-300 ease-in-out">
            <IoIosArrowBack onMouseUp={ handlePrev} size={50} />
          </div>
          <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <IoIosArrowForward onMouseUp = {handleNext} size={50} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((_, i) => ( <div>
              <RxDotFilled key={i} className={`cursor-pointer ${i === index ? 'text-black' : 'text-gray-300'}`} onClick={() => setIndex(i)} size={20} />
            </div>
            ))}
          </div>
        </div> */}
      </motion.div>
    </section>
  )
}

export default Products