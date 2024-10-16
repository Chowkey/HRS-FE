
import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "../../shared/types";
interface Props  {
  currentPage: string,
  selectedPage: SelectedPage,
  setSelectedPage: ( value: SelectedPage) => void;
  isSideBar: string;
}

const AnLink = ({
  currentPage,
  selectedPage,
  setSelectedPage,
  isSideBar,
}: Props) => {
  const page = currentPage.toLowerCase().replace(/ /g,"") as SelectedPage;
  return (
    <AnchorLink className={`${selectedPage == page && window.scrollY !=0 ? "text-yellow-300 " : "" } ${window.scrollY==0 && isSideBar != "true" ? "text-blue-500 " : "text-white"} duration-600 transition hover:text-yellow-400 font-medium`} href={`#${page}` } onClick = {() => setSelectedPage(page)}>{currentPage} 
    </AnchorLink>
  )
}

export default AnLink