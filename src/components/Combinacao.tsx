import { motion } from "framer-motion"
import life from '../assets/life.jpg'
import health from '../assets/health.jpg'
import { useTranslation } from 'react-i18next'

export function Combinacao() {
    const {t, i18n} = useTranslation()
    return (
        <div className='w-full relative flex flex-col items-center sm:mb-20 lg:mb-96'>
            <motion.h2
                className="dark:text-white-90 font-title w-full sm:text-[45px] sm:text-center lg:text-[150px] mb-4"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}>{t('CombinacaoPerfeita')}</motion.h2>

            <motion.p
                className='dark:text-gray-400 text-center sm:w-full lg:w-[800px] font-default sm:text-[14px] lg:text-[18px] sm:mx-10'
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}>
                    {t('CombinacaoPerfeitaText')}
            </motion.p>

            <motion.h3
                className='dark:text-white-90 text-center font-title lg:text-7xl sm:text-[30px] lg:mb-36 sm:my-16 lg:my-20'
                initial={{ opacity: 0, y: 100, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}> {t('QualOSegmento')}
            </motion.h3>

            <div className='w-full  flex justify-center'>
                <div className='lg:max-w-[1280px] sm:text-[14px] lg:min-w-[1270px] sm:w-full sm:flex-wrap flex justify-center items-center'>
                    <motion.div
                        className='lg:w-6/12 sm:w-full sm:mx-5 z-10 lg:mr-14 sm:my-5 p-12 text-left rounded-3xl dark:bg-gray-800 bg-white-150 shadow-3xl'
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.3, bounce: 0.5 }}>
                        <div>
                            <h4 className='dark:text-white-90 font-title text-left mb-6 text-4xl'>Life Science</h4>
                            <p className='dark:text-gray-400 font-default w-11/12'>
                                – {t('RepresentantesDeMateriais')} <br />
                                – {t('PrestadoresDeServicos')} <br />
                                – {t('SoftwareRelacionados')} <br />
                                – {t('IndustriaDeMateriais')} <br />
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className='lg:w-6/12 sm:w-full sm:mx-5 z-10 lg:mr-14 sm:my-5 p-12 text-left rounded-3xl dark:bg-gray-800 bg-white-150 shadow-3xl'
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", delay: 0.3, bounce: 0.5 }}
                        viewport={{ once: true }}>
                        <div>
                            <h4 className='dark:text-white-90 font-title text-left mb-6 text-4xl'>Healthcare</h4>
                            <p className='dark:text-gray-400 font-default w-11/12'>
                                – {t('LaboratoriosDeAnalise')} <br />
                                – {t('ServicosEspecializados')}<br />
                                – {t('EmpresasDeEquipamentos')}<br />
                                – {t('EmpresasDePlano')}<br />
                                – {t('ClínicasDeSaúde')}<br /><br />
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className='w-full sm:hidden lg:flex justify-center lg:absolute lg:bottom-0 z-0 '>
                <div className='max-w-[1280px] min-w-[1270px] flex items-center justify-center'>
                    <motion.div
                        className='w-6/12 blur-sm -mt-40 ml-16 mr-32'
                        initial={{ opacity: 0, y: 100, scale: 0 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}>
                        <img className='w-full rounded-3xl' src={life} />
                    </motion.div>
                    <motion.div
                        className='w-6/12 blur-sm -mt-40 ml-32 mr-16'
                        initial={{ opacity: 0, y: 100, scale: 0 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}>
                        <img className='w-full rounded-3xl' src={health} />
                    </motion.div>
                </div>
            </div >

        </div>
    )
}