import React from 'react'
import Image from 'next/future/image'

const About = () => {
  return (
    <section className='mx-16 mt-8'>
        <div className='border-solid border-2 border-indigo-600 p-8 rounded-lg'>
        <p className='font-bold text-lg'>Denne siden har som mål å
            vise mer om meg selv og prosjekt som jeg er stolt av. </p>
            <br />
        <h5>Innholdet er som følger: </h5>
        <br/>
        <ul className='list-disc'>
            <li className='hover:font-bold inline cursor-pointer'> Prosjekt </li><br />
                <li className='pl-4 hover:font-bold inline cursor-pointer'>Tekstanalyse</li><br />
                <li className='pl-4 hover:font-bold inline cursor-pointer'>Infoskjerm</li><br />
                <li className='pl-4 hover:font-bold inline cursor-pointer'>Opptakssystem</li><br />
                <li className='pl-4 hover:font-bold inline cursor-pointer'>Kiona sommerjobb</li><br />
            <li className='hover:font-bold inline-block cursor-pointer'>Om meg</li> <br />
            <li className='hover:font-bold inline cursor-pointer'>Hobbyer</li><br />
            <li className='hover:font-bold inline cursor-pointer'>Tidslinje</li><br />
            
        </ul>
        </div>
    </section>
  )
}

export default About