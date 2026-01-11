import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/Profile.png'
import Resume from '../../assets/Resume.pdf'

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />

      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>

        <p data-aos='fade-left'>
          Hello, I'm Mahender Vennapureddy, a Computer Science Engineering student pursuing my B.Tech (2026).
          I have a strong interest in front-end development and enjoy creating responsive and interactive web interfaces.
          <br /><br />
          My technical skills include HTML5, CSS, JavaScript, Java, SQL, Python, C Programming, and PHP.
          I have worked on multiple web-based projects including UI clones and JavaScript applications.
          <br /><br />
          I am continuously learning and improving my skills while aiming to contribute to real-world software projects.
        </p>

        <div className='flex mt-8 gap-2'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
