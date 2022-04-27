import React from 'react';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 ,x : 100 }}
    animate={{opacity: 1,x : 0}}
    exit={{opacity:0,x : -100}}
    transition={{duration:0.1}}
    >
        <section className='home-section1'>
        </section>
        <section className='home-section2'>           
        </section>
    </motion.div>
  )
}

export default Home;
