import React from 'react'
import Image from 'next/image'

const Textanalysis = () => {
  return (
    <section className='my-6'>
        <h3 className='text-3xl font-bold'>Tekstanalyse</h3>
        <div className='flex'>
        <Image src='/static/githublogo.svg' height={20} width={20} alt={'github'}/>
        <div className='w-3'></div>
        <a href='https://github.com/davidlekve/Tekstanalyse-prosjekt'>github/tekstanalyse</a>
        </div>
        <br />
        <strong>
            Dette programmet benytter kunstig intelligens for å finne ut hvordan sanglyrikk hadde sett ut dersom en vilkårlig artist hadde skrevet sangen.
            Resultatet som er vist under viser hvordan Empire State of Mind (Part II) kunne vært dersom verdenskjent rapper, Kendrick
            Lamar hadde skrevet sangen.
        </strong>
        <br />
        <br />
        <h6 className='font-bold'>Resultat</h6>
        <br />
        <div className='border-solid border-2 border-indigo-600 rounded-lg w-full p-3 h-[10rem] overflow-scroll'>
            <p>
                money, fuckin (2x) <br/>
                <br />
grew up in a fan, <br/>
That is famous as a world of picket signs Bitch is always loud <br/>
There are people all around <br/>
And the streets are mean <br/>
If I could make it here <br/>
I could make it anywhere <br/>
That’s what they say <br/>
get my vibe in hoes <br/>
Or my name in Things going down Metro <br/>
<br />
Even if it ain’t all it seems I’m a traffic jam of bitches Baby, I’m from <br/>
<br />
(Compton) <br/>
fuckin, everybody where bitches are made of <br/>
There’s nothing you can’t do <br/>
Now you’re in fuckin <br/>
These streets will make you feel Blow Hurt people will inspire you do it for fuckin, fuckin, fuckin <br/>
<br />
On the city, there ain’t never a nigga <br/>
problems, so hard <br />
Such a melting pot on the mirror selling life Babies pray to God <br/>
God a swimming pool <br/>
take me down from Harlem to the rough Compton Someone was tonight with a woman <br/>
For more than from an empty fridge <br/>
<br />
I’m not to make it by any means I’m a traffic jam of bitches Baby, I’m from <br/>
<br />
(Compton) <br/>
fuckin, everybody where bitches are made of <br/>
There’s nothing you can’t do <br/>
Now you’re in fuckin <br/>
These streets will make you feel Blow Hurt people will inspire you do it for fuckin, fuckin, fuckin <br/>
<br />
(Compton) <br/>
One curse in the truth for the illuminati, big bitches, all looking pretty No place in the truth that can compared <br/>
Put your feelings in the truth communication say yeah, yeah yeaah <br/>
<br />
(Compton) <br/>
fuckin, everybody where bitches are made of <br/>
There’s nothing you can’t do <br/>
Now you’re in fuckin <br/>
These streets will make you feel Blow Hurt people will inspire you take it for fuckin <br/>
</p>
        </div>
    </section>
  )
}

export default Textanalysis