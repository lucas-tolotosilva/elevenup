import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
export function Healthcare (){
    const {t, i18n} = useTranslation()
    return (
           <div className="w-full sm:pb-10 h-full flex flex-col justify-center relative ">
              
              <div className={`text-justify z-20 rounded-3xl font-default text-[18px] sm:px-8 lg:px-14 lg:py-14 lg:dark:bg-black-gradient lg:bg-white-gradient`}>
                    <div className="mb-7">
                        <h3 className="lg:dark:text-white-90 sm:dark:text-black-200 font-title sm:text-[30px] sm:text-center sm:mt-10 lg:text-6xl">Healthcare</h3>
                    </div>
                    <div className="mb-7">
                        <p className="lg:dark:text-gray-400 sm:dark:text-black-200 sm:text-[14px] lg:text-[18px]">
                            {t('HealthcareText')}
                        </p>   
                    </div>

                    <div className="mb-7">
                        <h6 className="lg:dark:text-white-90 sm:dark:text-black-200 font-bold sm:text-center sm:text-[17px]">{t('UtilizamosCiencia')}</h6>
                    </div>
                    
                    <div>
                        <h6 className="lg:dark:text-white-90 sm:dark:text-black-200 sm:text-[17px] font-bold">{t('NossosSegmentos')}</h6>
                        <ul className="lg:dark:text-gray-400 sm:dark:text-black-200 sm:text-[14px] list-disc ml-10 sm:mt-4">
                            <li>{t('LaboratoriosDeAnalise')}</li>
                            <li>{t('ServicosEspecializados')}</li>
                            <li>{t('EmpresasDeEquipamentos')}</li>
                            <li>{t('EmpresasDePlano')}</li>
                            <li>{t('ClínicasDeSaúde')}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        
        
    )
}

export function Lifescience (){
    const {t, i18n} = useTranslation()
    return (
        <div className="w-full h-full sm:pb-10 flex flex-col justify-center relative">
            
            <div className={`text-justify z-20 rounded-3xl font-default text-[18px] sm:px-8 lg:px-14 lg:py-14 lg:dark:bg-black-gradient lg:bg-white-gradient`}>
                <div className="mb-7">
                    <h3 className="lg:dark:text-white-90 sm:dark:text-black-200 font-title sm:text-[30px] sm:mt-10 text-center lg:text-6xl">Life Science</h3>
                </div>
                <div className="mb-7">
                    <p className="lg:dark:text-gray-400 sm:dark:text-black-200 sm:text-[14px] lg:text-[18px]">
                        {t('LifescienceText')}  
                    </p>   
                </div>

                <div className="mb-7">
                    <h6 className="lg:dark:text-white-90 sm:dark:text-black-200 font-bold sm:text-[17px] text-center">{t('UtilizamosCiencia')}</h6>
                </div>

                <div>
                    <h6 className="lg:dark:text-white-90 sm:dark:text-black-200 font-bold sm:text-[17px] sm:mb-4">{t('NossosSegmentos')}</h6>
                    <ul className="lg:dark:text-gray-400 sm:dark:text-black-200 list-disc ml-10 sm:text-[14px]">
                        <li>{t('RepresentantesDeMateriais')}</li>
                        <li>{t('PrestadoresDeServicos')}</li>
                        <li>{t('SoftwareRelacionados')}</li>
                        <li>{t('IndustriaDeMateriais')}</li>
                        <br />
                    </ul>
                </div>
                  
            </div>
        </div>
    )
}

