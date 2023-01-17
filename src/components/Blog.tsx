import React  from "react";
import { motion } from "framer-motion"

export function Blog () {
    return(
        <div className="max-w-[1280px] mb-36">
            <motion.h2 className="font-title w-full text-[200px] mb-4"
            initial={{opacity:0, scale: 0.7}}
            whileInView={{ opacity: 1, scale: 1}}>Blog Elevenup</motion.h2>
            <div className="w-full h-28 bg-black-900"></div>
        </div>
    )
}