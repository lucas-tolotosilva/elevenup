import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from "framer-motion"
import { carousel1,carousel2 } from "./DataImg";
import { useTranslation } from 'react-i18next';

export function Clientes () {
    const {t, i18n} = useTranslation()
    return (
        <div className="w-full sm:mb-16 lg:mb-36">
            <motion.h2 
                className="dark:text-white-90 text-center font-title w-full lg:text-[150px] sm:text-[50px] sm:mt-10 sm:mb-10 lg:mb-24"
                initial={{ opacity: 0 , scale: 0}}
                whileInView={{ opacity: 1 , scale: 1}}
                viewport={{once:true}}> {t('Clientes')} </motion.h2>
                      
            <div className='sm:hidden lg:block'>
                <ParallaxProvider >
                    <Parallax speed={10} translateY={[0 ,0]} translateX={[-30, 5]}>
    
                        <motion.div 
                            className="w-full mb-4"
                            initial={{ opacity:0 , scale: 0}}
                            whileInView={{ opacity: 1 , scale: 1}}
                            viewport={{once:true}}> 

                                <div id="client-logo" className="flex gap-12 ">
                                    {carousel1.map((item, indice)=> (
                                        <img id="img" key={item.id} className="grayscale hover:grayscale-0 hover:scale-125  hover:cursor-pointer" src={item.img} alt='imagem' />
                                    ))}
                                    {carousel1.map((item, indice)=> (
                                        <img id="img" key={item.id} className="grayscale hover:grayscale-0 hover:scale-125  hover:cursor-pointer" src={item.img} alt='imagem' />
                                    ))}
                                </div>
                            
                        </motion.div>
                </Parallax>

                <Parallax translateX={[5, -30]}>
                    <motion.div 
                        className="w-full"
                        initial={{ opacity:0 , scale: 0}}
                        whileInView={{ opacity: 1 , scale: 1}}
                        viewport={{once:true}}> 
                        
                            <div id="client-logo" className="flex gap-12">
                                {carousel2.map((item, indice)=> (
                                    <img key={item.id} className="cover hover:grayscale-0 hover:cursor-pointer hover:scale-125 grayscale" src={item.img} alt='imagem' />
                                ))}
                                {carousel2.map((item, indice)=> (
                                    <img key={item.id} className="cover hover:grayscale-0 hover:cursor-pointer hover:scale-125 grayscale" src={item.img} alt='imagem' />
                                ))}
                            </div>
                    </motion.div>

                </Parallax>

            
            </ParallaxProvider>
            </div>

            <span className='sm:block lg:hidden font-default text-[15px] sm:mb-10 text-center dark:text-white-90'>{t('Arraste')}<br/> {t('ver')}</span>
            <div className='sm:ml-4 sm:block lg:hidden'>
                <div id="client-logo" className="flex gap-12 overflow-auto overflow-y-hidden touch-auto">
                    {carousel1.map((item, indice)=> (
                        <img id="img" key={item.id} className="grayscale hover:grayscale-0 hover:scale-125  hover:cursor-pointer" src={item.img} alt='imagem' />
                    ))}
                     {carousel2.map((item, indice)=> (
                        <img key={item.id} className="cover hover:grayscale-0 hover:cursor-pointer hover:scale-125 grayscale" src={item.img} alt='imagem' />
                    ))}
                </div>

            </div>
                        
        </div>
    )
}