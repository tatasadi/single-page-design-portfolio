import Image from "next/image"
import Reference from "./components/Reference"
import logo from "@/public/images/logo.svg"
import Button from "./components/Button"
import patternGraphicDesign from "@/public/images/pattern-graphic-design.svg"
import patternPhotography from "@/public/images/pattern-photography.svg"
import patternIllustrations from "@/public/images/pattern-illustrations.svg"
import patternApps from "@/public/images/pattern-apps.svg"
import patternUiUx from "@/public/images/pattern-ui-ux.svg"
import patternMotionGraphics from "@/public/images/pattern-motion-graphics.svg"
import Card from "./components/Card"
import imageAmy from "@/public/images/image-amy.webp"
import ImageSlider from "./components/ImageSlider"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-[90rem] flex-col items-center">
      <div className="w-full p-4 sm:px-10 sm:pt-[2.38rem] lg:px-[10.25rem]">
        <div className="flex w-full justify-between">
          <Image src={logo} alt="logo" />
          <Button className="">Free Consultation</Button>
        </div>
        <div className="mb-8 mt-[2.13rem] text-center sm:mb-16 sm:mt-[4.25rem] lg:mb-20 lg:mt-[4.37rem]">
          <h1 className="text-4xl font-bold leading-normal sm:text-[2.75rem] lg:text-[3.5rem]">
            Design solutions made easy
          </h1>
          <p className="text-medium-brown mx-7 mt-4 font-medium leading-[1.625rem] sm:mt-7 sm:text-lg sm:leading-7 lg:mt-[1.44rem]">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>
        <section className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
          <Card
            className="bg-galactic-blue col-span-2 md:row-span-2"
            title="Graphic Design"
          >
            <Image
              src={patternGraphicDesign}
              alt="patternGraphicDesign"
              className="mb-[5.88rem]"
            />
          </Card>
          <Card className="bg-summer-yellow" title="UI/UX">
            <Image src={patternUiUx} alt="patternUiUx" className="mb-10" />
          </Card>
          <Card className="bg-pink" title="Apps">
            <Image src={patternApps} alt="patternApps" className="mb-10" />
          </Card>
          <Card
            className="bg-light-red col-span-2 lg:col-start-3 lg:row-start-2"
            title="Illustrations"
          >
            <Image
              src={patternIllustrations}
              alt="patternIllustrations"
              className="mb-4"
            />
          </Card>

          <Card className="bg-cyan col-span-2" title="Photography">
            <Image
              src={patternPhotography}
              alt="patternPhotography"
              className="mb-10"
            />
          </Card>
          <Card className="bg-dark-purple col-span-2" title="Motion Graphics">
            <Image
              src={patternMotionGraphics}
              alt="patternMotionGraphics"
              className="mb-10"
            />
          </Card>
        </section>
      </div>
      <div className="mt-[6.25rem] w-full p-4 sm:p-0 sm:px-10 lg:px-[10.25rem]">
        <article className="flex flex-col items-center gap-10 sm:flex-row sm:gap-[4.31rem]">
          <div className="">
            <Image
              src={imageAmy}
              alt="imageAmy"
              className="px-[2.31rem] sm:-translate-x-5 sm:px-0 md:-translate-x-10 lg:translate-x-0"
            />
          </div>
          <div className="flex max-w-[33.75rem] flex-col items-center gap-6 text-center sm:items-start sm:pl-4 sm:text-left lg:gap-[2.12rem]">
            <h2 className="text-[1.625rem] font-bold leading-normal sm:text-[2rem] lg:text-[2.5rem]">
              I’m Amy, and I’d love to work on your next project
            </h2>
            <p className="text-medium-brown font-medium leading-[1.625rem] sm:text-lg sm:leading-7">
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </p>
            <Button className="bg-light-red hover:bg-summer-yellow">
              Free Consultation
            </Button>
          </div>
        </article>
      </div>
      <ImageSlider title="My Work" />
      <Reference />
    </main>
  )
}
