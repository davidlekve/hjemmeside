import React from 'react'
import Image from 'next/image'

const Kiona = () => {
  return (
    <section className="my-6">
        <h3 className='text-3xl font-bold'>Kiona summer internship</h3>
        <br />
        <strong>
            Our team created an application for the company Kiona from scratch.
            Their system sends out alarms to customers who own cooling and refrigation devices. Earlier, the notifications
            for new alarms was sent out by SM. Over the summer we enabled this to be done by push notifications.
        </strong>
        <div className='lg:flex'>
        <Image layout="responsive" width={100} height={100} src={'/static/kionalist.PNG'} alt={'Kiona app'}></Image>
        <Image width={100} height={30} src={'/static/kionadrawer.PNG'} alt={'Kiona app'}></Image>
        <Image width={100} height={30} src={'/static/kionadetail.PNG'} alt={'Kiona app'}></Image>

        </div>
       

        <div className='flex'>
            {/* <div className='relative w-1/3'>
            <Image src={'/static/kionalist.PNG'} alt={'Kiona app'}></Image>
            </div>
            <div className='relative w-1/3 h-auto'>
            <Image src={'/static/kionadrawer.PNG'} alt={'Kiona app'}></Image>

            </div>
            <div className="relative w-1/3">
            <Image src={'/static/kionadetail.PNG'} alt={'Kiona app'}></Image>

            </div> */}
        </div>

        <p>
            After the summer I accepted a 20% employment in the company.
            I have also included the recomandationletter I recieved after the summer internship.
        </p>
           
    </section>
  )
}

export default Kiona