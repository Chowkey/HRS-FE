
import { useEffect, useState } from 'react'
import Navbar from "../components/NavBar/Navbar"
import Home from '../pages/Home'
import Products from '../pages/Products'
import AboutUs from './AboutUs'
import Footer from './Footer'
import "./index.css"
import { SelectedPage } from '../shared/types'  


const MainPage = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else if (window.scrollY !==0) {
        setIsTopofPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll);};
  }
  )
  return (
    <div>
        <Navbar isTopofPage = {isTopofPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage = {setSelectedPage}/>
        <Products setSelectedPage={setSelectedPage}/>
        <AboutUs setSelectedPage={setSelectedPage}/>
        <Footer/>
    </div>
  )
}

export default MainPage