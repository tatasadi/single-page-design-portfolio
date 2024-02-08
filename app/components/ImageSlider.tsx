"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import iconArrowLeft from "@/public/images/icon-arrow-left.svg"
import iconArrowRight from "@/public/images/icon-arrow-right.svg"

const ImageSlider = ({ title }: { title: string }) => {
  const [currentImage, setCurrentImage] = useState(3)
  const [step, setStep] = useState(1)
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    setStep(window.innerWidth > 1024 ? 2 : 1)
    setTranslateX(window.innerWidth > 1024 ? 16.5 : 75)
  }, [])

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 5 ? 5 : prevImage + step > 5 ? 5 : prevImage + step,
    )
  }

  const handlePreviousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 1 ? 1 : prevImage - step < 1 ? 1 : prevImage - step,
    )
  }

  return (
    <div className="mt-[6.25rem] flex w-full flex-col gap-8">
      <h2 className="text-center text-[2rem] font-bold leading-normal">
        {title}
      </h2>
      <div className="w-full overflow-hidden">
        <div
          className={`whitespace-nowrap transition-transform duration-300 ease-in-out`}
          style={{
            transform: `translateX(${-(currentImage - 1) * translateX}%)`,
          }}
        >
          <div className="slider-image-wrapper">
            <div className="slider-image bg-[url('/images/image-slide-1.jpg')]"></div>
          </div>
          <div className="slider-image-wrapper">
            <div className="slider-image bg-[url('/images/image-slide-2.jpg')]"></div>
          </div>
          <div className="slider-image-wrapper">
            <div className="slider-image bg-[url('/images/image-slide-3.jpg')]"></div>
          </div>
          <div className="slider-image-wrapper">
            <div className="slider-image bg-[url('/images/image-slide-4.jpg')]"></div>
          </div>
          <div className="slider-image-wrapper">
            <div className="slider-image bg-[url('/images/image-slide-5.jpg')]"></div>
          </div>
        </div>
      </div>
      <div className="mb-[7.5rem] mt-10 flex justify-center">
        <button onClick={handlePreviousImage} className="slider-button mr-4">
          <Image src={iconArrowLeft} alt="Previous" />
        </button>
        <button onClick={handleNextImage} className="slider-button">
          <Image src={iconArrowRight} alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
