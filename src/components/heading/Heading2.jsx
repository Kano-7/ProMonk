import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const Heading2 = ({head,sp}) => {
    
  return (
    <>
        <TypeAnimation
  sequence={[
    // Same String at the start will only be typed once, initially
    `${head}`,
    1000,
    // 'We are here for you',
    // 1000,
    // 'We supply all products related to daily need',
    // 1000,
    // 'Lets make world a store--!!!',
    // 1000,
  ]}
  speed={sp}
//   style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
    </>
  )
}


export default Heading2;