import React from "react"
import { Footer } from "../Footer"
import { Nav } from "../Nav"
import img1 from "../../assets/quem-somos.jpg"

export function QuemSomos() {
    return (
        <div className="bg-gray-200 overflow-x-hidden">
            <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center mb-80 ">
                <Nav />

                <div className="inicio max-w-[1280px] absolute top-40">
                    <h1 className="font-title tracking-wider font-bold mb-20 text-[150px]">quem somos</h1>
                    <div className="flex justify-end  items-center">
                        <img className="w-1/2 cover rounded-3xl" src={img1} />
                        <div className="text-justify px-10 py-5 rounded-3xl -ml-52 backdrop-blur-md font-default text-[15px] bg-white-80 ">
                            <p>
                                Nulla sodales orci sit amet pellentesque pretium.
                                Quisque elementum blandit faucibus. Aenean vitae
                                quam sollicitudin, vehicula velit at, imperdiet
                                turpis. Sed sed enim id velit posuere mollis.
                                Suspendisse eget pharetra nunc. Fusce eu tellus
                                et ante tempor rutrum. In vehicula nisl eu sapien
                                tincidunt facilisis. Donec vel metus et magna laoreet
                                pulvinar ac ac ipsum. Aenean molestie sem at volutpat
                                maximus. Nunc laoreet, nisl et euismod blandit, augue
                                neque dictum ante, quis hendrerit urna turpis ac purus.
                                Integer pharetra nibh nec erat faucibus, a pulvinar magna
                                placerat.
                                <br /> <br />
                                Proin vitae arcu enim. Donec eu tellus at augue tempus
                                ultrices. Aliquam malesuada vehicula accumsan. In hac
                                habitasse platea dictumst. Nam eget consequat nunc, non
                                varius est. Quisque velit mi, fermentum sit amet mauris
                                vel, faucibus finibus tellus. Donec et felis eleifend,
                                faucibus quam quis, porttitor augue. Sed sit amet mauris
                                turpis. Suspendisse nec imperdiet sapien. In mollis eros
                                eu sem egestas lacinia. Nullam vitae ligula at leo
                                malesuada posuere sit amet quis massa. Pellentesque
                                mattis interdum porttitor. Duis nec tincidunt diam,
                                sed finibus eros. Aenean auctor ipsum quis lacus porta
                                efficitur. Suspendisse euismod dictum libero et viverra.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-screen bg-black-900 h-64 text-white-100 font-default text-[40px] flex justify-center items-center mt-40 mb-40">
                <span>Nulla sodales orci sit amet pellentesque pretium</span>
            </div>

            <div className=" w-screen flex items-center justify-center">
                <div className="max-w-[1280px] text-justify ">
                    <p>
                        Nulla sodales orci sit amet pellentesque pretium.
                        Quisque elementum blandit faucibus. Aenean vitae
                        quam sollicitudin, vehicula velit at, imperdiet
                        turpis. Sed sed enim id velit posuere mollis.
                        Suspendisse eget pharetra nunc. Fusce eu tellus
                        et ante tempor rutrum. In vehicula nisl eu sapien
                        tincidunt facilisis. Donec vel metus et magna laoreet
                        pulvinar ac ac ipsum. Aenean molestie sem at volutpat
                        maximus. Nunc laoreet, nisl et euismod blandit, augue
                        neque dictum ante, quis hendrerit urna turpis ac purus.
                        Integer pharetra nibh nec erat faucibus, a pulvinar magna
                        placerat.
                        <br /> <br />
                        Proin vitae arcu enim. Donec eu tellus at augue tempus
                        ultrices. Aliquam malesuada vehicula accumsan. In hac
                        habitasse platea dictumst. Nam eget consequat nunc, non
                        varius est. Quisque velit mi, fermentum sit amet mauris
                        vel, faucibus finibus tellus. Donec et felis eleifend,
                        faucibus quam quis, porttitor augue. Sed sit amet mauris
                        turpis. Suspendisse nec imperdiet sapien. In mollis eros
                        eu sem egestas lacinia. Nullam vitae ligula at leo
                        malesuada posuere sit amet quis massa. Pellentesque
                        mattis interdum porttitor. Duis nec tincidunt diam,
                        sed finibus eros. Aenean auctor ipsum quis lacus porta
                        efficitur. Suspendisse euismod dictum libero et viverra.
                    </p>
                    <p>
                        Nulla sodales orci sit amet pellentesque pretium.
                        Quisque elementum blandit faucibus. Aenean vitae
                        quam sollicitudin, vehicula velit at, imperdiet
                        turpis. Sed sed enim id velit posuere mollis.
                        Suspendisse eget pharetra nunc. Fusce eu tellus
                        et ante tempor rutrum. In vehicula nisl eu sapien
                        tincidunt facilisis. Donec vel metus et magna laoreet
                        pulvinar ac ac ipsum. Aenean molestie sem at volutpat
                        maximus. Nunc laoreet, nisl et euismod blandit, augue
                        neque dictum ante, quis hendrerit urna turpis ac purus.
                        Integer pharetra nibh nec erat faucibus, a pulvinar magna
                        placerat.
                        <br /> <br />
                        Proin vitae arcu enim. Donec eu tellus at augue tempus
                        ultrices. Aliquam malesuada vehicula accumsan. In hac
                        habitasse platea dictumst. Nam eget consequat nunc, non
                        varius est. Quisque velit mi, fermentum sit amet mauris
                        vel, faucibus finibus tellus. Donec et felis eleifend,
                        faucibus quam quis, porttitor augue. Sed sit amet mauris
                        turpis. Suspendisse nec imperdiet sapien. In mollis eros
                        eu sem egestas lacinia. Nullam vitae ligula at leo
                        malesuada posuere sit amet quis massa. Pellentesque
                        mattis interdum porttitor. Duis nec tincidunt diam,
                        sed finibus eros. Aenean auctor ipsum quis lacus porta
                        efficitur. Suspendisse euismod dictum libero et viverra.
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center pt-64'>
                <Footer />
            </div>
        </div>
    )
}