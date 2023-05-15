import React, { useEffect, useState } from "react";
import '../styles/main.css'
import { BiInfinite } from 'react-icons/bi'
import logo from '../assets/logo.png'
import logoB from '../assets/logo-branco.png'
import img from '../assets/img-footer/fundo-footer.png'
import face from '../assets/icons/redes-sociais/face.png'
import insta from '../assets/icons/redes-sociais/insta.png'
import link from '../assets/icons/redes-sociais/linkedin.png'
import faceB from '../assets/icons/redes-sociais/iface-branco.svg'
import instaB from '../assets/icons/redes-sociais/iinsta-branco.svg'
import linkB from '../assets/icons/redes-sociais/ilinkedin-branco.svg'


export function Footer () {
    
    return (
        <div className={`w-full min-h-[900px] relative `}>
            <div className='absolute w-full h-full z-10'>
                    <div className='w-full h-full flex flex-col items-center justify-center text-left space-y-24 relative'>
                    <div className='absolute bottom-0 z-10 '>
                        <img src={img} />
                    </div>
                    <div className="dark:hidden block">
                        <img width={'300px'} src={logo} />
                    </div>
                    <div className="hidden dark:block">
                        <img width={'300px'} src={logoB} />
                    </div>
                        
                        <div className='flex space-x-24 z-30 font-default text-lg '>
                            <div >
                                <h2 className='font-default mb-3 text-3xl font-bold dark:text-white-90'>Nossa Unidade</h2>
                                <a className="dark:text-gray-400" href="https://goo.gl/maps/e1Xxc5AXoCHpo9Bg6" target="_blank">
                                    Rua Reverendo Francisco <br />
                                    Lotufo, 663 - Sala 6 <br />
                                    Vila Nogueira, Botucatu - SP <br />
                                    18606-810 <br />
                                </a>
                            </div>
                            <div>
                                <h2 className='font-default mb-3 text-3xl font-bold dark:text-white-90'>Institucional</h2>
                                    <a className="dark:text-gray-400" href='/quem-somos'>Quem Somos</a><br />
                                    <a className="dark:text-gray-400" href='/equipe'>Equipe</a><br />
                                    <a className="dark:text-gray-400" href='/contato'>Contato</a> <br />
                                    <a className="dark:text-gray-400" href='/cases'>Cases</a> <br />
                            </div>
                            <div>
                                <h2 className='font-default mb-3 text-3xl font-bold dark:text-white-90'>Contato</h2>
                                <a className="dark:text-gray-400" href="tel:+551433548256">(14) 3354-8256</a> <br />
                                <a className="dark:text-gray-400" href="mailto:contato@elevenup.com.br">contato@elevenup.com.br</a>
                            </div>
                            <div>
                                <h2 className='font-default mb-3 text-3xl font-bold dark:text-white-90'>Redes Sociais</h2>
                                <div className='flex items-center justify-center space-x-5'>
                                    <a href="https://www.facebook.com/ElevenUpMarketing/" target="_blank">
                                        <img className='w-12 dark:hidden' src={face} />
                                        <img className='w-12' src={faceB} />
                                    </a>
                                    <a href="https://www.instagram.com/elevenupmktg/" target="_blank">
                                        <img className='w-12 dark:hidden' src={insta} />
                                        <img className='w-12' src={instaB} />
                                    </a>
                                    <a href="https://www.linkedin.com/company/elevenup/" target="_blank">
                                        <img className='w-12 dark:hidden' src={link} />
                                        <img className='w-12' src={linkB} />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>

                        <div className='w-full absolute z-20 bottom-28'> 
                            <div className='w-full flex items-center justify-center'>
                                <hr className='w-2/3 h-[2px] border-none bg-[#FF0ED1]'/>
                            </div>
                        </div>
                        <div className='w-full absolute z-20 bottom-8'> 
                            <div className='w-full flex flex-col items-center justify-center dark:text-white-90'>
                                <span>Desenvolvido com muito <span className='text-red-600'>♥</span> por <span className='text-blue-900 font-bold'>ElevenUp</span>
                                </span> 
                                <a className='cursor-pointer' href="/termos-de-uso-e-politica-de-privacidade"><span className='text-sm mb-10'>© 2023 Todos direitos reservados | Termos de Uso</span></a> 
                            </div>
                        </div>
                    </div>
                </div>
            

            <div className="w-full min-h-[900px] bg-[url('../assets/img-footer/fundo.png')] dark:bg-[url('../assets/img-footer/fundo-cinza-op.png')] relative cover blur-sm ">
                <div className='animate-slow-anim4 w-full h-full flex justify-center relative'>
                    {/* ---- RETÂNGULO CENTRO - AZUL ---- */}
                    <div className='absolute -top-12 -rotate-[24deg] blur-sm w-96 h-56 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900'></div>
                </div>
                
                {/* ---- RETÂNGULO ESQUERDA - ROSA ---- */}
                <div className='animate-slow-anim1'>
                    <div className='absolute animate-slow-anim -top-12 -left-20 blur-sm w-48 h-48 -rotate-[60deg] rounded-3xl bg-gradient-to-t from-pink-500 to-pink-800'></div>
                </div>

                {/* ---- RETÂNGULO ESQUERDA 2 - ROSA ---- */}
                <div className='animate-slow-anim2'>
                    <div className='absolute left-96 top-24 blur-lg w-24 h-24 -rotate-[60deg] rounded-3xl bg-gradient-to-t from-pink-500 to-pink-800'></div>
                </div>

                {/* ---- *** FUNDO COM OPACIDADE *** ---- */}
                <div className={`w-full h-full bg-[url('../assets/img-footer/fundo-opacidade.png')] dark:bg-[url('../assets/img-footer/fundo-cinza-op.png')]  blur-sm absolute`} ></div>
                
                {/* ---- RETÂNGULO ESQUERDA - AZUL ---- */}
                <div className='animate-slow-anim5'>
                    <div className='absolute top-16 -left-28 blur-sm w-80 h-64 -rotate-[60deg] rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900'></div>
                </div>

                {/* ---- RETÂNGULO ESQUERDA 2 - ROSA ---- */}
                <div className='animate-slow-anim6'>
                    <div className='absolute right-96 -top-10 blur-md w-32 h-24 rotate-[25deg] rounded-3xl bg-gradient-to-b from-pink-500 to-pink-800'></div>
                </div>

                {/* ---- RETÂNGULO DIREITO - AZUL ---- */}
                <div className='animate-slow-anim3'>
                    <div className='absolute -right-24 blur-sm w-64 h-60 -rotate-[60deg] rounded-3xl bg-gradient-to-r from-blue-600 to-blue-900'></div>
                </div>
            </div>
            
            

        </div>
    )
}

export function FooterMobile(){
    return (
        <div className='w-full '>
            <div>
                <div className="block dark:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,256C840,267,960,245,1080,218.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="dark:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#696969" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,181.3C480,203,600,245,720,256C840,267,960,245,1080,218.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
            </div>
            <div className='bg-white-100 dark:bg-gray-800'>
                <div className='w-full flex justify-center py-5'>
                    <img className='w-2/5 block dark:hidden' src={logo} />
                    <img className='w-2/5 dark:block hiden' src={logoB} />
                </div>
            
                <div className='mt-10 flex flex-col items-center justify-center gap-10 z-30 font-default text-lg '>
                    <div >
                        <h2 className='dark:text-white-90 font-default mb-3 font-bold text-2xl '>Nossa Unidade</h2>
                        <a href="https://goo.gl/maps/e1Xxc5AXoCHpo9Bg6" className="text-[14px] dark:text-gray-400" target="_blank">
                            Rua Reverendo Francisco <br />
                            Lotufo, 663 - Sala 6 <br />
                            Vila Nogueira, Botucatu - SP <br />
                            18606-810 <br />
                        </a>
                    </div>
                    <div>
                        <h2 className='font-default mb-3 font-bold text-2xl dark:text-white-90'>Institucional</h2>
                            <a href='/quem-somos' className="text-[14px] dark:text-gray-400">Quem Somos</a><br />
                            <a href='/equipe' className="text-[14px] dark:text-gray-400 ">Equipe</a><br />
                            <a href='/contato' className="text-[14px] dark:text-gray-400">Contato</a> <br />
                            <a href='/cases' className="text-[14px] dark:text-gray-400">Cases</a> <br />
                    </div>
                    <div>
                        <h2 className='font-default mb-3 font-bold text-2xl dark:text-white-90'>Contato</h2>
                        <a href="tel:+551433548256" className="text-[14px] dark:text-gray-400">(14) 3354-8256</a> <br />
                        <a href="mailto:contato@elevenup.com.br" className="text-[14px] dark:text-gray-400">contato@elevenup.com.br</a>
                    </div>
                    <div>
                        <h2 className='font-default mb-3 font-bold text-2xl dark:text-white-90'>Redes Sociais</h2>
                        <div className='flex items-center justify-center space-x-5'>
                            <a href="https://www.facebook.com/ElevenUpMarketing/" target="_blank">
                                <img className='w-10 dark:hidden' src={face} />
                                <img className='w-10' src={faceB} />
                            </a>
                            <a href="https://www.instagram.com/elevenupmktg/" target="_blank">
                                <img className='w-10 dark:hidden' src={insta} />
                                <img className='w-10' src={instaB} />
                            </a>
                            <a href="https://www.linkedin.com/company/elevenup/" target="_blank">
                                <img className='w-10 dark:hidden' src={link} />
                                <img className='w-10' src={linkB} />
                            </a>
                            
                        </div>
                    </div>
                    <hr className='w-2/3 h-[2px] border-none dark:text-white-90 bg-[#FF0ED1]'/>
                    <span className='text-sm dark:text-white-90'>Desenvolvido com muito <span className='text-red-600'>♥</span> por <span className='text-blue-900 font-bold'>ElevenUp</span>
                    </span>
                    <a className='-mt-8' href="/termos-de-uso-e-politica-de-privacidade"><span className='text-sm mb-10 dark:text-white-90'>© 2023 Todos direitos reservados | Termos de Uso</span></a> 
                </div>
            </div>
        </div>
    )
}