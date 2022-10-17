import React from 'react'
import Image from 'next/future/image'
import Textanalysis from './textanalysis'
import Kiona from './Kiona'

const ProjectMain = () => {
  return (
    <section className='my-10 mx-8'>
        <h1 className='text-5xl font-bold text-center'>Prosjekt</h1>
        <br />
        <strong>Denne seksjonen viser fram noen noen av prosjektene jeg har jobbet med opp igjennom tidene</strong>
        <br /> <br />

        <Textanalysis></Textanalysis>
        <Kiona></Kiona>
    </section>
  )
}

export default ProjectMain