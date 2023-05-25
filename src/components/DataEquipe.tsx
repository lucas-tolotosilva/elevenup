import react from 'react'
//import gustavo from "../assets/equipe/gustavo.jpg"
import wivian from "../assets/equipe/wivian.jpg"
import gustavo from "../assets/equipe/gustavo-boss.jpg"
import lucas from "../assets/equipe/lucas.jpg"
import bruno from "../assets/equipe/bruno.jpg"
import bia from "../assets/equipe/bia.jpg"
import lennon from "../assets/equipe/lennon.jpg"
import maria from "../assets/equipe/maria.jpg"
import luis from "../assets/equipe/luis.jpg"
import penelope from "../assets/equipe/penelope.jpg"
import simoes from "../assets/equipe/simoes.jpg"
import joey from "../assets/equipe/joey.jpg"
import toloto from "../assets/equipe/toloto.jpg"

import iFace from "../assets/icons/redes-sociais/iface.svg"
import iFaceB from "../assets/icons/redes-sociais/iface-branco.svg"

import iInsta from "../assets/icons/redes-sociais/iinsta.svg"
import iInstaB from "../assets/icons/redes-sociais/iinsta-branco.svg"

import iGitBranco from "../assets/icons/redes-sociais/igithub-branco.svg"
import iGit from "../assets/icons/redes-sociais/igithub.svg"

import iLink from "../assets/icons/redes-sociais/ilinkedin.svg"
import iLinkB from "../assets/icons/redes-sociais/ilinkedin-branco.svg"

import iBe from "../assets/icons/redes-sociais/ibehance.svg"
import iBeB from "../assets/icons/redes-sociais/ibehance-branco.svg"

/*
Gustavo boss
Simões
bruno
penelope
bia
*/

export const listaEquipe = [
    {
        nome: 'Gustavo Vieira',
        funcao: 'CEO',
        rede1: 'https://www.instagram.com/gustavovieirabr/',
        rede2: null,
        imgRede1: iInsta,
        imgRede2: null,
        imgRede1Branco: iInstaB,
        imgRede2Branco: null,
        img: gustavo
    },
    {
        nome: 'Wivian Ramos',
        funcao: 'Gerente de Projetos',
        rede1: 'https://www.linkedin.com/in/wivian-ramos-35561b137/',
        rede2: null,
        imgRede1: iLink,
        imgRede2: null,
        imgRede1Branco: iLinkB,
        imgRede2Branco: null,
        img: wivian,

    },
    {
        nome: 'Lucas Defavari',
        funcao: 'Analista de Marketing',
        rede1: 'https://www.linkedin.com/in/lucas-menezes-defavari-perfil/',
        rede2: null,
        imgRede1: iLink,
        imgRede2: null,
        imgRede1Branco: iLinkB,
        imgRede2Branco: null,
        img: lucas
    },
    {
        nome: 'Bruno Prado',
        funcao: 'Gestor de Tráfego',
        rede1: 'https://www.linkedin.com/in/bruno-prado-b65422163/',
        rede2: 'https://www.instagram.com/bprado013/',
        imgRede1: iLink,
        imgRede2: iInsta,
        imgRede1Branco: iLinkB,
        imgRede2Branco: iInstaB,
        img: bruno
    },
    {
        nome: 'Beatriz',
        funcao: 'Copywriter',
        rede1: 'https://www.instagram.com/enfbeatrizsilva/',
        rede2: null,
        imgRede1: iInsta,
        imgRede2: null,
        imgRede1Branco: iInstaB,
        imgRede2Branco: null,
        img: bia
    },
    {
        nome: 'Lennon Policastro',
        funcao: 'Gestor Operacional | Designer',
        rede1: 'https://www.instagram.com/olennondesign/',
        rede2: 'https://www.behance.net/olennondesign',
        imgRede1: iInsta,
        imgRede2: iBe,
        imgRede1Branco: iInstaB,
        imgRede2Branco: iBeB,
        img: lennon
    },
    {
        nome: 'Maria Fernanda',
        funcao: 'Designer',
        rede1: 'https://github.com/nandahn',
        rede2: 'https://www.instagram.com/mariafboliveira/',
        imgRede1: iGit,
        imgRede2: iInsta,
        imgRede1Branco: iGitBranco,
        imgRede2Branco: iInstaB,
        img: maria
    },
    {
        nome: 'Luis Tozi',
        funcao: 'Designer',
        rede1: 'https://www.instagram.com/luistozi/',
        rede2: 'https://www.linkedin.com/in/lu%C3%ADs-tozi-a3b7b2194/',
        imgRede1: iInsta,
        imgRede2: iLink,
        imgRede1Branco: iInstaB,
        imgRede2Branco: iLinkB,
        img: luis
    },
    {
        nome: 'Penelope Lourenço',
        funcao: 'Designer',
        rede1: 'https://www.linkedin.com/in/penelopelourenco/',
        rede2: 'https://www.instagram.com/pepsverso/',
        imgRede1: iLink,
        imgRede2: iInsta,
        imgRede1Branco: iLinkB,
        imgRede2Branco: iInstaB,
        img: penelope
    },
    {
        nome: 'Gustavo Simões',
        funcao: 'Videomaker',
        rede1: 'https://www.linkedin.com/in/lgsimoes/',
        rede2: 'https://www.instagram.com/lg.simoes/',
        imgRede1: iLink,
        imgRede2: iInsta,
        imgRede1Branco: iLinkB,
        imgRede2Branco: iInstaB,
        img: simoes
    },
    {
        nome: 'Joedison Dias',
        funcao: 'Desenvolvedor Web',
        rede1: 'https://github.com/joeyAnovich',
        rede2: 'https://www.instagram.com/joeyanovich/',
        imgRede1: iGit,
        imgRede2: iInsta,
        imgRede1Branco: iGitBranco,
        imgRede2Branco: iInstaB,
        img: joey
    },
    {
        nome: 'Lucas Toloto',
        funcao: 'Estagiário',
        rede1: 'https://github.com/lucas-tolotosilva',
        rede2: 'https://www.instagram.com/lu_tolotosilva/',
        imgRede1: iGit,
        imgRede2: iInsta,
        imgRede1Branco: iGitBranco,
        imgRede2Branco: iInstaB,
        img: toloto
    },
]