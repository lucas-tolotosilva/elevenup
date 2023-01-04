import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { carousel1,carousel2 } from "./DataImg";

export function Clientes () {
    
    return (
        <div className="w-full mb-36">
            <h2 className="font-title w-full text-[200px] mb-28">Clientes</h2>
                      
            
            <ParallaxProvider >
            <Parallax speed={10} translateX={[-30, 5]}>
                <div className="w-full mb-12"> 
                    <div id="client-logo" className="flex gap-12 ">
                        {carousel1.map((item, indice)=> (
                            <img id="img" key={item.id} className="grayscale hover:grayscale-0 hover:cursor-pointer" src={item.img} alt='imagem' />
                        ))}
                        {carousel1.map((item, indice)=> (
                            <img id="img" key={item.id} className="grayscale hover:grayscale-0 hover:cursor-pointer" src={item.img} alt='imagem' />
                        ))}
                    </div>
                    
                </div>
            </Parallax>
            <Parallax translateX={[5, -30]}>
                <div className="w-full"> 
                    <div id="client-logo" className="flex gap-12">
                        {carousel2.map((item, indice)=> (
                            <img key={item.id} className="cover hover:grayscale-0 hover:cursor-pointer hover:scale-125 grayscale" src={item.img} alt='imagem' />
                        ))}
                        {carousel2.map((item, indice)=> (
                            <img key={item.id} className="cover hover:grayscale-0 hover:cursor-pointer hover:scale-125 grayscale" src={item.img} alt='imagem' />
                        ))}
                    </div>
                </div>

            </Parallax>
        </ParallaxProvider>
        </div>
    )
}