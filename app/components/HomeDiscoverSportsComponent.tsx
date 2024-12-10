"use client"
import React,{useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import  {StaticImageData} from 'next/image'
import {  carouselDiscoverImg } from '@/public/static'
import CarouselImageComponent from './CarouselImageComponent'
function HomeDiscoverSportsComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  useEffect(() => {    if (emblaApi) {      console.log(emblaApi.slideNodes())   }  }, [emblaApi])

  return (
    <section className='h-screen w-full'>
      <div className='h-full w-full bg-gradient-to-b from-black to-gray py-12'>
        <div className=' flex justify-center flex-col items-center'>
          <h1 className='text-center text-white ' >
            Découvre les <span className='text-yellow font-bold'>SPORTS</span>
          </h1>
          <div className='bg-white w-1/4 h-px rounded-md'/>
        </div>
        <div className="embla text-white bg-red-500 w-full h-full py-14" ref={emblaRef}>
          <div className="embla__container">
            {
              carouselDiscoverImg.map((item:{id:number, img:StaticImageData, alt:string})=>(
                <CarouselImageComponent key={item.id} id={item.id} img={item.img} alt={item.alt}  />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeDiscoverSportsComponent