import React from "react"
import { Footer, FooterMobile } from "../Footer"
import { Nav } from "../Nav"
import img from "../../assets/logo.png"

export function Cases() {
    return (
        <div className="bg-gray-200 overflow-x-hidden">
            <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center">
                {/* --------- Header (logo e menu) --------- */}
                <Nav />
                {/* --------- Fim - Header (logo e menu) --------- */}
                <div className="max-w-[1280px] mb-10  bg-gray-200 mt-40">
                    <h1 className="font-title tracking-wider font-bold sm:text-[80px] sm:mb-10 lg:text-[150px]">CASES</h1>
                    <div className="w-full z-50 overflow-hidden ">
                        <Case link={casesList[0].link} img={casesList[0].img} content={casesList[0].content} />
                        <Case link={casesList[1].link} img={casesList[1].img} content={casesList[1].content} />
                        <Case link={casesList[2].link} img={casesList[2].img} content={casesList[2].content} />
                    </div>
                </div>
            </div>
            {/* DESKTOP */}
            <div className='lg:flex sm:hidden lg:items-center lg:justify-center pt-10'>
                <Footer />
            </div>
            {/* MOBILE */}
            <div className='sm:inline lg:hidden text-center '>
                <FooterMobile />
            </div>
        </div>
    )
}

type casesProps = {
    img: string,
    content: string,
    link: string
}
export function Case({ img, content, link }: casesProps) {
    function truncate(string: string, n: number) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return (
        <div className="sm:flex sm:flex-col lg:flex-row sm:items-center sm:justify-center lg:flex sm:w-full lg:min-w-[1000px]  sm:mb-56 my-10 h-72">
            <div className="sm:w-1/2 lg:w-1/4 rounded-tl-3xl flex justify-center rounded-bl-3xl lg:bg-white-90 ">
                <img className='object-contain lg:w-[280px] sm:w-[auto] sm:h-auto lg:h-[280px] p-5' src={img} />
            </div>
            <div className="font-default  lg:text-[20px] sm:text-[14px] text-justify flex flex-col justify-center items-center sm:pt-10 mx-4 px-10 w-3/4 lg:rounded-tr-3xl lg:rounded-br-3xl bg-white-80 ">
                {truncate(content, 255)}
                <a href={link}><button className=" rounded-full bg-blue-900 text-white-100 lg:text-[20px] sm:text-[14px] px-10 py-1 my-10 hover:cursor-pointer">Saiba Mais!</button></a>
            </div>
        </div>
    )
}

export const casesList = [
    {
        img: img,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed diam consectetur, laoreet erat eu, pretium tortor. Cras scelerisque ut nibh malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam non dolor ligula. Aliquam dapibus, erat vitae dictum tristique, mi dolor egestas nulla, eu imperdiet felis libero vitae leo. Quisque egestas magna quis neque mattis auctor.',
        link: "aaa"
    },
    {
        img: img,
        content: 'Phasellus tincidunt rhoncus nisl, vitae tempus dui tincidunt a. In hac habitasse platea dictumst. Donec lacinia congue lectus non aliquet. Phasellus lobortis vel odio sed consectetur. Curabitur lorem tortor, dignissim ac nunc eu, sagittis vulputate augue. Aenean suscipit, felis iaculis interdum aliquam, libero quam imperdiet nisl, ac venenatis massa felis vel ligula. Vivamus eu auctor enim. Cras sapien orci, dignissim vitae lorem vitae, consequat tempor dolor. Sed viverra lacinia tincidunt. Morbi in orci consectetur, consequat ante quis, fermentum mi. Integer risus velit, fringilla vitae dapibus laoreet, bibendum vel diam. Nunc porta maximus tellus, aliquam dignissim ipsum lacinia ac. Integer ac consequat neque. Phasellus in lacinia felis, sit amet dignissim arcu. Nulla facilisi',
        link: 'bbb'
    },
    {
        img: img,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed diam consectetur, laoreet erat eu, pretium tortor. Cras scelerisque ut nibh malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam non dolor ligula. Aliquam dapibus, erat vitae dictum tristique, mi dolor egestas nulla, eu imperdiet felis libero vitae leo. Quisque egestas magna quis neque mattis auctor.',
        link: 'ccc'
    }

]