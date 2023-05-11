import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import SmartDeviceIcon from "@mui/icons-material/SmartToyOutlined";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>WATT Intelligence</title>
        <meta
          name="description"
          content="Welcome to WATT Intelligence - where innovation meets results. Our team of experts provides cutting-edge technology solutions and exceptional customer service to help your business succeed. Explore our site to learn more about our services and how we can help you achieve your goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="LANDING bg-fixed w-screen bg-repeat bg-contain bg-blend-darken bg-[url('/assets/images/Background/bg.jpg')] bg-[#0000007f]">
          <div className="backdrop-blur-sm -mt-12 px-4 w-screen flex flex-col">
            {/* LANDING PAGE */}
            <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-5">
              <p
                className="text-blue-400 text-2xl font-medium mb-3 text-primary"
                data-aos="fade-right"
              >
                WELCOME TO WORLD OF ROBOTICS
              </p>
              <h1
                className="font-bold text-4xl md:text-5xl lg:text-5xl text-gray-100 mb-5"
                data-aos="fade-left"
              >
                Fast And Efficient Robotics Service
              </h1>
              <p
                className="max-w-2xl text-center text-lg md:text-2xl text-gray-400 mb-8"
                data-aos="fade-right"
              >
                WATT (World of Automation Technology & Trainings) is a robotics
                based company which uses emerging technologies like IOT, AI,
                Data Science, etc. to solve real world problems and automate the
                work that humans have to do repeatedly.
              </p>
              <div className="mt-4" data-aos="zoom-in">
                <Link href="#services">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg md:text-2xl px-4 md:px-6 py-2 md:py-3 rounded-md">
                    Get Started
                  </button>
                </Link>
              </div>
            </section>

            {/* SERVICES */}
            <section
              id="services"
              className="max-w-screen h-screen flex flex-col gap-y-24 justify-center items-center"
            >
              <div className="w-4/5 ">
                <div
                  className="text-md text-blue-400 text-priary tracking-widest font-medium mb-3"
                  data-aos="fade-right"
                  data-aos-once="true"
                >
                  #ROBOTICS
                </div>
                <div
                  className=" font-bold text-4xl text-gray-200 mb-5 "
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-once="true"
                >
                  WATT uses emerging technologies like IOT, AI, Data Science,
                  etc.
                </div>
                <p
                  className=" text-gray-300"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-once="true"
                >
                  WATT (World of Automation Technology & Trainings) is a
                  robotics based company which uses emerging technologies like
                  IOT, AI, Data Science, etc. to solve real world problems and
                  automate the work that humans have to do repeatedly. As of now
                  we have presented many Automation concepts for Industrial
                  Automation. Automated Appliances like Automatic Curtains, Room
                  Automation, Hospital Automation, Drone, Alarms are some of our
                  main projects.
                </p>
              </div>
              {/* cards */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center mb-12">
                {/* card 1 */}
                <div
                  className="min-w-[200px] max-w-[400px] lg:col-span-1 md:col-span-2"
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  <div className="my-3 text-gray-200">
                    <SmartDeviceIcon fontSize="large" />
                  </div>
                  <h2 className="text-gray-200 text-xl">
                    <span className="font-extralight">Use &nbsp;</span>
                    <span className="font-medium">our autonomous robots</span>
                  </h2>
                  <div className="mt-3 text-gray-300">
                    Automated Appliances like Automatic Curtains, Room
                    Automation, Hospital Automation, Drone, Alarms are some of
                    our main projects.
                  </div>
                </div>
                {/* card 2 */}
                <div
                  className="min-w-[200px] max-w-[400px] lg:col-span-1 md:col-span-1"
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="500"
                  data-aos-once="true"
                >
                  <div className="my-3 text-gray-200">
                    <SmartDeviceIcon fontSize="large" />
                  </div>
                  <div className="text-gray-200 text-xl">
                    <span className="font-medium">Bring your own &nbsp;</span>
                    <span className="font-extralight">Robots and Machines</span>
                  </div>
                  <div className="mt-3 text-gray-300">
                    You can automate your place by installing our automated
                    products like Automatic Curtains, Room Automation, Hospital
                    Automation etc
                  </div>
                </div>
                {/* card 3 */}
                <div
                  className="min-w-[200px] max-w-[400px] lg:col-span-1 md:col-span-1"
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-delay="500"
                  data-aos-once="true"
                >
                  <div className="my-3 text-gray-200">
                    <SmartDeviceIcon fontSize="large" />
                  </div>
                  <div className="text-gray-200 text-xl">
                    <span className="font-extralight">Connect your &nbsp;</span>
                    <span className="font-medium">Smart Devices</span>
                  </div>
                  <div className="mt-3 text-gray-300">
                    All our devices are smart by nature. They support wireless
                    connectivity across various handheld devices and over
                    internet networks.
                  </div>
                </div>
              </div>
            </section>

            {/*SHOWCASE */}

            <section className=" text-center flex flex-col items-center py-10 gap-y-6  px-2 backdrop-blur-sm">
              <div
                className=" pt-10 mb-1 text-blue-400 text-md uppercase font-medium text-primary tracking-widest"
                data-aos="fade-right"
                data-aos-once="true"
              >
                #EXPERIENCE
              </div>
              <div
                className="max-w-screen-lg font-bold text-4xl text-gray-200 mb-5"
                data-aos="fade-right"
                data-aos-once="true"
              >
                Our Projects that show our expertise on <br /> robotics and home
                automations
              </div>
              <p
                className="max-w-screen-lg text-gray-300"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-once="true"
              >
                Our startup specializes in creating automation robots that
                simplify everyday tasks and make life easier for both
                individuals and businesses. These robots are designed to
                increase efficiency, reduce the workload and free up time for
                more important activities. They can be used in various
                industries, such as manufacturing, logistics, and healthcare, to
                automate repetitive, time-consuming tasks and improve overall
                productivity. Our robots are user-friendly, easy to operate and
                customizable to meet the specific needs of our clients. With our
                automation robots, we aim to make a meaningful impact on
                people&apos;s lives by reducing stress and increasing
                productivity
              </p>
              <Link href="project">
                <h2
                  className="font-medium text-xl text-gray-200 hover:text-white my-5 underline underline-offset-4 cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-delay="300"
                >
                  Explore more of our projects
                </h2>
              </Link>
              <div className="container blogscroll scrollbar-none overflow-x-scroll overflow-y-hidden ">
                <div className="flex nowrap gap-x-4">
                  <div className="flex-shrink-0 w-1/3 h-auto p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-900 to-gray-600  border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                      Revolutionize Your Home with Room Automation Solutions
                    </h5>

                    <p className="mb-3 font-normal text-gray-400">
                      Transform your home into a smart home with room automation
                      solutions. Imagine being able to control the lighting,
                      temperature, and appliances in your home with just the
                      touch of a button or voice command. These solutions not
                      only provide convenience, but can also improve energy
                      efficiency and overall safety. With the ability to program
                      and schedule events, you can ensure your home is always at
                      the perfect temperature when you arrive and appliances are
                      turned off when not in use. Upgrade your home and take
                      control with room automation solutions.
                    </p>

                    <Image
                      className="rounded-lg self-center"
                      src={"/assets/images/LandingPage/homeAutomation.jpg"}
                      alt="homeAutomation"
                      width={400}
                      height={220}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-shrink-0 w-1/3 h-auto p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-900 to-gray-600  border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                      Transforming Healthcare: Innovative Medical Applications
                      and Products
                    </h5>

                    <p className="mb-3 font-normal text-gray-400">
                      Medical applications and products have been
                      revolutionizing the healthcare industry by providing new
                      and innovative ways to diagnose, treat, and care for
                      patients. From robotic wheelchairs that empower mobility
                      for those with physical disabilities, to telemedicine
                      platforms that connect patients with medical professionals
                      remotely, these advancements have greatly improved the
                      quality of care and accessibility for patients.
                    </p>

                    <Image
                      className="rounded-lg"
                      src={"/assets/images/LandingPage/HealthCare.jpg"}
                      alt="HealthCare"
                      width={400}
                      height={220}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-shrink-0 w-1/3 h-auto p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-900 to-gray-600  border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                      Unleashing Innovation: Custom Robotic Projects for
                      Industry Advancement
                    </h5>

                    <p className="mb-3 font-normal text-gray-400">
                      Custom robotic projects are pushing the boundaries of what
                      is possible in various industries, from manufacturing to
                      healthcare. These projects involve the design and
                      development of unique robotic systems tailored to meet
                      specific needs and requirements. They allow companies to
                      automate complex tasks, increase efficiency and
                      productivity, and improve overall performance. With the
                      integration of cutting-edge technology, custom robotic
                      projects are unleashing innovation and driving industry
                      advancement
                    </p>

                    <Image
                      className="rounded-lg"
                      src={"/assets/images/LandingPage/customSolution.gif"}
                      alt="customSolution"
                      width={400}
                      height={220}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-shrink-0 w-1/3 justify-around h-auto p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-900 to-gray-600  border-gray-100">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                      Workplace Automation: Improving Business Efficiency
                    </h5>

                    <p className="mb-3 font-normal text-gray-400">
                      Workplace automation is the implementation of technology
                      to automate repetitive, routine or dangerous tasks in the
                      workplace. The integration of automation technology in
                      various industries is leading to increased efficiency,
                      improved productivity and cost savings. From manufacturing
                      to retail, automation is changing the way businesses
                      operate and leading to a more efficient and streamlined
                      workflow.
                    </p>

                    <Image
                      className="rounded-lg"
                      src={"/assets/images/LandingPage/workplaceAutomation.png"}
                      alt="workplaceAutomation"
                      width={400}
                      height={220}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
