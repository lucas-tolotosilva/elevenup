import React from "react";
import { motion } from "framer-motion";
//importa icones
import consult from "../assets/icons/icons-solucoes/consultoria.svg";
import criacao from "../assets/icons/icons-solucoes/criacao.svg";
import dev from "../assets/icons/icons-solucoes/desenvolvimento.svg";
import geracao from "../assets/icons/icons-solucoes/geracao.svg";
import gestao from "../assets/icons/icons-solucoes/gestao.svg";
import inbound from "../assets/icons/icons-solucoes/inbound.svg";
import consultB from "../assets/icons/icons-solucoes/consultoria-branco.svg";
import criacaoB from "../assets/icons/icons-solucoes/criacao-branco.svg";
import devB from "../assets/icons/icons-solucoes/desenvolvimento-branco.svg";
import geracaoB from "../assets/icons/icons-solucoes/geracao-branco.svg";
import gestaoB from "../assets/icons/icons-solucoes/gestao-branco.svg";
import inboundB from "../assets/icons/icons-solucoes/inbound-branco.svg";
import rosa1 from "../assets/icons/icons-solucoes/rosas/rosa1.svg";
import rosa2 from "../assets/icons/icons-solucoes/rosas/rosa2.svg";
import rosa3 from "../assets/icons/icons-solucoes/rosas/rosa3.svg";
import rosa4 from "../assets/icons/icons-solucoes/rosas/rosa4.svg";
import rosa5 from "../assets/icons/icons-solucoes/rosas/rosa5.svg";
import rosa6 from "../assets/icons/icons-solucoes/rosas/rosa6.svg";
import { Card, CardMobile } from "./Card";
import { useTranslation } from "react-i18next";

export function Solucoes() {
  const { t, i18n } = useTranslation();
  return (
    <div className="lg:max-w-[1280px] sm:w-full sm:mx-5 sm:mb-16 lg:mb-36">
      <motion.h2
        className="dark:text-white-90 text-center font-title w-full lg:text-[150px] sm:text-[50px] mb-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {t("Solucoes")}
      </motion.h2>

      <div className="flex justify-center w-full">
        <p className="dark:text-gray-400 text-center font-default lg:text-[18px] sm:text-[14px] lg:w-6/12 sm:w-full mb-20 mt-10 ">
            {t("SolutionText")}
        </p>
      </div>
      <div className=" sm:w-full flex items-center justify-center">
        <div style={{ perspective: 2000 }}>
          {/* DESKTOP */}
          <div className="sm:hidden lg:flex relative items-center justify-center ">
            <div className="dark:hidden block">
              <Card
                delay={0.2}
                shadow="shadow-3xl"
                title={t('InboundMarketing')}
                rosa={rosa1}
                icon={inbound}
              />
            </div>
            <div className="dark:block hidden">
              <Card
                delay={0.2}
                shadow="shadow-3xl"
                title={t('InboundMarketing')}
                rosa={rosa1}
                icon={inboundB}
              />
            </div>

            <div className="dark:hidden block">
              <Card
                delay={0.4}
                shadow="shadow-3xl"
                title={t('DesenvolvimentoWeb')}
                rosa={rosa4}
                icon={dev}
              />{" "}
            </div>
            <div className="dark:block hidden">
              <Card
                delay={0.4}
                shadow="shadow-3xl"
                title={t('DesenvolvimentoWeb')}
                rosa={rosa4}
                icon={devB}
              />{" "}
            </div>

            <div className="dark:hidden block">
              <Card
                delay={0.6}
                shadow="shadow-3xl"
                title={t('GestaoDeRedes')}
                rosa={rosa3}
                icon={gestao}
              />{" "}
            </div>
            <div className="dark:block hidden">
              <Card
                delay={0.6}
                shadow="shadow-3xl"
                title={t('GestaoDeRedes')}
                rosa={rosa3}
                icon={gestaoB}
              />{" "}
            </div>

            <div className="dark:hidden block">
              <Card
                delay={0.8}
                shadow="shadow-3xl"
                title={t('ConsultoriaEmInteligencia')}
                rosa={rosa2}
                icon={consult}
              />{" "}
            </div>
            <div className="dark:block hidden">
              <Card
                delay={0.8}
                shadow="shadow-3xl"
                title={t('ConsultoriaEmInteligencia')}
                rosa={rosa2}
                icon={consultB}
              />{" "}
            </div>

            <div className="dark:hidden block">
              <Card
                delay={1}
                shadow="shadow-3xl"
                title={t('GeracaoDeLeads')}
                rosa={rosa5}
                icon={geracao}
              />{" "}
            </div>
            <div className="dark:block hidden">
              <Card
                delay={1}
                shadow="shadow-3xl"
                title={t('GeracaoDeLeads')}
                rosa={rosa5}
                icon={geracaoB}
              />{" "}
            </div>

            <div className="dark:hidden block">
              <Card
                delay={1.2}
                shadow="shadow-3xl"
                title={t('CriacaoDeConteudo')}
                rosa={rosa6}
                icon={criacao}
              />{" "}
            </div>
            <div className="dark:block hidden">
              <Card
                delay={1.2}
                shadow="shadow-3xl"
                title={t('CriacaoDeConteudo')}
                rosa={rosa6}
                icon={criacaoB}
              />{" "}
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div className="sm:flex-wrap lg:hidden sm:flex sm:items-center sm:justify-center sm:gap-10  ">
          <div className="dark:hidden block">
            <CardMobile
              shadow="shadow-3xl"
              title={t('InboundMarketing')}
              rosa={rosa1}
              icon={inbound}
            />
          </div>
          <div className="dark:block hidden">
            <CardMobile
              shadow="shadow-3xl"
              title={t('InboundMarketing')}
              rosa={rosa1}
              icon={inboundB}
            />
          </div>

          <div className="dark:hidden block">
            <CardMobile
              shadow="shadow-3xl"
              title={t('DesenvolvimentoWeb')}
              rosa={rosa4}
              icon={dev}
            />{" "}
          </div>
          <div className="dark:block hidden">
            <CardMobile
              shadow="shadow-3xl"
              title={t('DesenvolvimentoWeb')}
              rosa={rosa4}
              icon={devB}
            />{" "}
          </div>

          <div className="dark:hidden block">
            <CardMobile
              shadow="shadow-3xl"
              title={t('GestaoDeRedes')}
              rosa={rosa3}
              icon={gestao}
            />{" "}
          </div>
          <div className="dark:block hidden">
            <CardMobile
              shadow="shadow-3xl"
              title={t('GestaoDeRedes')}
              rosa={rosa3}
              icon={gestaoB}
            />{" "}
          </div>

          <div className="dark:hidden block">
            <CardMobile
              shadow="shadow-3xl"
              title={t('ConsultoriaEmInteligencia')}
              rosa={rosa2}
              icon={consult}
            />{" "}
          </div>
          <div className="dark:block hidden">
            <CardMobile
              shadow="shadow-3xl"
              title={t('ConsultoriaEmInteligencia')}
              rosa={rosa2}
              icon={consultB}
            />{" "}
          </div>

          <div className="dark:hidden block">
            <CardMobile
              shadow="shadow-3xl"
              title={t('GeracaoDeLeads')}
              rosa={rosa5}
              icon={geracao}
            />{" "}
          </div>
          <div className="dark:block hidden">
            <CardMobile
              shadow="shadow-3xl"
              title={t('GeracaoDeLeads')}
              rosa={rosa5}
              icon={geracaoB}
            />{" "}
          </div>

          <div className="dark:hidden block">
            <CardMobile
              shadow="shadow-3xl"
              title={t('CriacaoDeConteudo')}
              rosa={rosa6}
              icon={criacao}
            />{" "}
          </div>
          <div className="dark:block hidden">
            <CardMobile
              shadow="shadow-3xl"
              title={t('CriacaoDeConteudo')}
              rosa={rosa6}
              icon={criacaoB}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
