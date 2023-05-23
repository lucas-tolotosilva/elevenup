import React from 'react'
import { Nav } from '../Nav';
import { Footer, FooterMobile } from '../Footer'

import { useTranslation } from "react-i18next";

export function Obrigado (){
    
  const { t, i18n } = useTranslation();
    return (
    <div className="bg-gray-200 dark:bg-black-900 overflow-x-hidden">
      <div className="relative  w-screen min-h-screen flex flex-col items-center justify-center text-center sm:mb-32">
        <Nav />

        <div>
            <h1 className='font-title lg:text-[80px] sm:text-[50px] sm:my-5 dark:text-white-90 '>{t('Obrigado')}</h1>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="lg:flex sm:hidden lg:items-center lg:justify-center ">
        <Footer />
      </div>
      {/* MOBILE */}
      <div className="sm:inline lg:hidden text-center">
        <FooterMobile />
      </div>
    </div>
    )
}