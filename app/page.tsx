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

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-[90rem] flex-col items-center">
      <div className="w-full p-4 sm:px-10 sm:py-[2.38rem] lg:px-[10.25rem]">
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
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
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
        </div>
      </div>
      <Reference />
    </main>
  )
}
