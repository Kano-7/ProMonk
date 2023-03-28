import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const Heading = () => {
  return (
    <>
        <TypeAnimation
  sequence={[
    // Same String at the start will only be typed once, initially
    'Hey Promonks see new Bananas here-- Grab Fast!!!',
    1000,
    'We are here for you',
    1000,
    'We supply all products related to daily needs',
    1000,
    'Lets make world a store--!!!',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
    </>
  )
}


export default Heading;