import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Contact from '../components/contact'
import Gallery from '../components/gallery'
import Navbar from '../components/navbar'
import ProjectMain from '../components/projects/projectmain'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h2 className='text-4xl text-center my-8 mx-4 font-bold'>Hei &#x1f929;	<br /> Mitt navn er <span className='text-indigo-600'>David Lekve</span></h2>
      <Gallery></Gallery>
      <About></About>
      <ProjectMain></ProjectMain>
    </div>
  )
}

export default Home
