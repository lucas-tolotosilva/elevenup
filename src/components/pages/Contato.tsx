import React, { useRef, useState } from "react";
import InputMask from "react-input-mask";
import { Footer, FooterMobile } from "../Footer";
import { Nav } from "../Nav";
import img from "../../assets/img-contato.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Contato() {
  const [focus, setFocus] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);

  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const telRef = useRef(null);

  const { t, i18n } = useTranslation();

  const navigate = useNavigate()

  const url = "https://app.fleeg.com/api/v1/integration/parse/Cdme1sdomyrXHm7FtXPzA3UP";
  const data = JSON.stringify({
    person: {
      name: nome,
      phone: tel,
      email: email,
      origin: "Formulário Contato - ElevenUp",
      custom_fields: {
        mensagem: msg
      }
    }    
  })


  
  const headers = {
    'Content-Type': 'application/json'
  }

  const enviarDados = async () => {
    try {
      const response = await axios.post(url, data, {headers});
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNomeChange = (e:any) => {
    setNome(e.target.value);
  };

  const handleTelChange = (e:any) => {
    setTel(e.target.value);
  };

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handleMsgChange = (e:any) => {
    setMsg(e.target.value);
  };

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    enviarDados();
    navigate('/obrigado')
  };

  return (
    <div className="bg-gray-200 dark:bg-black-900 overflow-x-hidden">
      <div className="absolute inicio top-0 bg-transparent"></div>

      <div className="relative  w-screen min-h-screen flex flex-col items-center justify-center text-center sm:mb-32">
        {/* --------- Header (logo e menu) --------- */}
        <Nav />
        {/* --------- Fim - Header (logo e menu) --------- */}
        <div className="max-w-[1280px] mt-40">
          <h1 className="dark:text-white-90 font-title tracking-wider mb-24 font-bold sm:text-[80px] lg:text-[150px]">
            {t("Contato")}
          </h1>
          <div className="w-full flex flex-wrap overflow-hidden">
            <form onSubmit={handleFormSubmit}>
              <div className="sm:w-full lg:w-[1000px] flex justify-center items-center rounded-3xl overflow-hidden dark:bg-gray-400 bg-white-100">
                <div className="sm:hidden lg:flex lg:w-1/2 rounded-tl-3xl relative">
                  <img className="w-full h-full object-contain" src={img} />
                </div>
                <div className="sm:w-full lg:w-1/2 px-14 py-14 font-default text-blue-800 text-[18px] dark:bg-gray-400 bg-white-80">
                  <div className="relative my-10">
                    <input
                      value={nome}
                      onChange={handleNomeChange}
                      onFocus={() => setFocus(true)}
                      onBlur={() => setFocus(false)}
                      className={`${
                        focus ? null : "text-transparent"
                      } relative text-black-900 pl-2 z-20 w-full border-none bg-transparent py-2 outline-none`}
                      required
                    />
                    <span
                      className={`${
                        focus ? "-translate-y-[32px] text-[16px]" : null
                      } transition-all duration-400 absolute py-2 left-0 pointer-events-none`}
                    >
                      {focus ? t("Nome") : nome === "" ? t("Nome") : null}
                    </span>
                    <i
                      className={`absolute bottom-0 left-0 w-full text-white-100 dark:bg-gray-300 bg-blue-50 z-10 ${
                        focus ? "h-full" : "h-[2px] "
                      } rounded-lg transition-all ease-in-out duration-400`}
                    ></i>
                  </div>
                  <div className="relative my-10">
                    <InputMask
                      mask="(99)99999-9999"
                      value={tel}
                      onChange={handleTelChange}
                      onFocus={() => setFocus2(true)}
                      onBlur={() => setFocus2(false)}
                      ref={telRef}
                      className={`${
                        focus2 ? null : "text-transparent"
                      } relative text-black-900 pl-2 z-20 w-full border-none bg-transparent py-2 outline-none`}
                      required
                    />

                    <span
                      className={`${
                        focus2 ? "-translate-y-[32px] text-[16px]" : null
                      } transition-all duration-400 absolute py-2 left-0 pointer-events-none`}
                    >
                      {focus2
                        ? t("Telefone")
                        : tel === ""
                        ? t("Telefone")
                        : null}
                    </span>
                    <i
                      className={`absolute bottom-0 left-0 w-full text-white-100 dark:bg-gray-300 bg-blue-50 z-10 ${
                        focus2 ? "h-full" : "h-[2px] "
                      } rounded-lg transition-all ease-in-out duration-400`}
                    ></i>
                  </div>
                  <div className="relative my-10">
                    <input
                      value={email}
                      onChange={handleEmailChange}
                      onFocus={() => setFocus3(true)}
                      onBlur={() => setFocus3(false)}
                      className={`${
                        focus3 ? null : "text-transparent"
                      } relative text-black-900 pl-2 z-20 w-full border-none bg-transparent py-2 outline-none`}
                      required
                    />
                    <span
                      className={`${
                        focus3 ? "-translate-y-[32px] text-[16px]" : null
                      } transition-all duration-400 absolute py-2 left-0 pointer-events-none`}
                    >
                      {focus3 ? t("Email") : email === "" ? t("Email") : null}
                    </span>
                    <i
                      className={`absolute bottom-0 left-0 w-full text-white-100 dark:bg-gray-300 bg-blue-50 z-10 ${
                        focus3 ? "h-full" : "h-[2px] "
                      } rounded-lg transition-all ease-in-out duration-400`}
                    ></i>
                  </div>
                  <div className="relative my-10">
                    <textarea
                      value={msg}
                      onChange={handleMsgChange}
                      onFocus={() => setFocus4(true)}
                      onBlur={() => setFocus4(false)}
                      className={`${
                        focus4 ? null : "text-transparent"
                      } relative text-black-900 pl-2 z-20 w-full border-none bg-transparent py-2 outline-none`}
                      required
                    />
                    <span
                      className={`${
                        focus4 ? "-translate-y-[32px] text-[16px]" : null
                      } transition-all duration-400 absolute py-2 left-0 pointer-events-none`}
                    >
                      {focus4
                        ? t("Mensagem")
                        : msg === ""
                        ? t("Mensagem")
                        : null}
                    </span>
                    <i
                      className={`absolute bottom-0 left-0 w-full text-white-100 dark:bg-gray-300 bg-blue-50 z-10 ${
                        focus4 ? "h-full" : "h-[2px] "
                      } rounded-lg transition-all ease-in-out duration-400`}
                    ></i>
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-2 rounded-md bg-blue-600 text-white-100 cursor-pointer"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="lg:flex sm:hidden lg:items-center lg:justify-center pt-96">
        <Footer />
      </div>
      {/* MOBILE */}
      <div className="sm:inline lg:hidden text-center">
        <FooterMobile />
      </div>
    </div>
  );
}
