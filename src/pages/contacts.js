import React from 'react';
import {motion} from 'framer-motion';
const Contacts = () => {
  return (
    <motion.div
    initial={{ opacity: 0 ,x : 100 }}
    animate={{opacity: 1,x : 0}}
    exit={{opacity:0,x : -100}}
    transition={{duration:0.1}}
    >
        <div>
            hello
        </div>
    </motion.div>
  )
}

export default Contacts;
