import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import img1 from "../../public/slide1.jpg"
import img2 from "../../public/slide2.jpg"
import img3 from "../../public/slide3.jpg"
import img4 from "../../public/slide4.jpg"
import img5 from "../../public/slide5.jpg"

const Slider = () => {
    const autoSlide = false
    const autoSlideInterval = 3000
    const slides = [
      { url: img1 },
      { url: img2 },
      { url: img3 },
      { url: img4 },
      { url: img5 },
     ]
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative w-full md:h-screen h-[400px] mb-4">
      <div
      className="flex transition-transform ease-out h-full duration-500"
      style={{ width: `${slides.length * 100}%`, transform: `translateX(-${curr * (100 / slides.length)}%)` }}
    >
      {slides.map((slide, i) => (
        <div key={i} className="slide w-full h-full" style={{ width: `${100 / slides.length}%`, flexShrink: 0, }}>
          <img
            src={slide.url}
            alt={`slide ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider