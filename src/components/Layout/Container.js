import React from 'react'
import './Container.css'
import { motion } from 'framer-motion'
const Container = (props) => {
  return (
    <motion.div className="container wrapper"
    initial={{x: '-200vw'}}
    animate={{x: 0}}
    transition={{duration: 0.5, type: 'spring', stiffness: 70}}
     >{props.children}</motion.div>
  )
}

export default Container