import DisplayImg from "../public/AboutUsImg.png"
import AboutUsImg from "../public/AboutUsImg1.svg"
import { SelectedPage } from "../shared/types"
import { motion } from "framer-motion"
import useMediaQuery from "../hooks/MediaQuery"
import AboutUsImg2 from "../public/AboutUsImg2.svg"
interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({
  setSelectedPage,
}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  return (
    <section id="aboutus" className="flex flex-col justify-center bg-white md:flex-row md:h-screen">
      <motion.div
        onViewportEnter={() => { setSelectedPage(SelectedPage.AboutUs) }}
        className="md:h-full h-[500px] w-5/6 mx-auto flex flex-col justify-between pt-4 pb-8 md:py-12">
        <h1 className="flex text-blue-500 font-semibold items-center md:text-5xl text-3xl mx-auto h-16 text-bold ">Our Misson</h1>
        <div className="relative flex h-full w-full mx-auto flex-row gap-6 md:gap-20">
          <div className="flex flex-col justify-between h-full w-1/2">
            <div className="flex justify-center h-1/2 w-full">
              <img src={AboutUsImg} className="object-fill w-full" ></img>
            </div>
            <div className="flex items-center w-full my-auto h-1/2 text-wrap gap-12">
              <p className="w-full md:text-2xl text-sm text-wrap md:leading-10 ">
                <br />
                <br />
                We are a group of enthusiatic members who share the same dream of helping not only people in need but also potential victims prone to mental illnesses.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse h-full w-1/2">
            <div className="flex justify-center h-1/2 w-full">
              <img src={AboutUsImg2} className="object-fill w-full" ></img>
            </div>
            <div className="flex items-center w-full my-auto h-1/2 text-wrap gap-12">
              <p className="w-full md:text-2xl text-sm text-wrap md:leading-10 ">
                We are a group of enthusiatic members who share the same dream of helping not only people in need but also potential victims prone to mental illnesses.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutUs