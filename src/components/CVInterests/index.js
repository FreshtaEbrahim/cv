import React from 'react';
import { ImWoman } from 'react-icons/im';
import './CVInterests.css';

export default function CVInterests() {
  return (
    <div className='CVInterests'>
      <div className='CVInterestsHeader-left'>
        Interests
        <ImWoman className='CVInterests-icon' />
      </div>

      <div className='CVInterests-text'>
        <h2 className='CVInterests-header'>DJ & Radio Host</h2>
        <p className='CVInterests-body'>
          I’ve spent the last 3 years DJing where I specialise in the
          underground genres of grime, dubstep, bass and club sounds. Alongside
          this, I regularly host my own radio show on global station NTS Radio
          and London-based female-led station Foundation FM, where I mix music
          and invite guests for interviews and guest mixes. Outside of the UK, I
          have featured on radio stations in Barcelona, China and India. My
          radio shows are a platform for me to connect with my audience through
          introducing and informing them to new and forthcoming music.
        </p>
        <br></br>
        <h2 className='CVInterests-header'>School of Code Community Class</h2>
        <p className='CVInterests-body'>
          Me and a handful of my fellow boot campers successfully hosted a 2
          hour 'Introduction to HTML & CSS' class in December 2020. We hosted
          this remote class to 55 participants over Zoom, which included
          lectures and workshops. It's extremely important to me to provide free
          opportunities to others where and when I can, particularly for
          underrepresented and marginalised groups. Hosting free coding classes
          is something I am looking into continuing, to allow for others to
          utilise opportunities to learn how to code without financial
          circumstances being a setback.
        </p>
      </div>
    </div>
  );
}
