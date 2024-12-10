import React,{useState} from 'react'
import Image, {StaticImageData} from 'next/image'
import {carouselDiscoverImg } from '@/public/static'
import { motion } from 'framer-motion'
interface Props {
    id:number,
    img:StaticImageData,
    alt:string
}

function CarouselImageComponent({id,img,alt}:Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <motion.div 
    whileHover={{
        scale:1.1,
    }} 
    className='embla__slide bg-yellow-400 h-full' onClick={()=>setIsOpen(!isOpen)}>
        <Image
            src={img}
            loading="lazy"
            alt={alt}
            className='h-full'
        />
    </motion.div>
  )
}

export default CarouselImageComponent