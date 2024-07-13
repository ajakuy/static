//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#0C232E]',
    gallery: ' border border-[#DCA747]/70',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-vaadin-gift',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#0C232E]/95',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: ' h-60 w-60',
        Three: 'h-full w-full'
    },
    sidebottom: {
        bg: 'bg-[#0C232E] shadow-md border border-[#DCA747]/70 ',
        text: 'text-[#F8FAF0] underline underline-offset-4 decoration-dashed',
        padding: 'p-2'
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    music: {
        text: 'text-[#F8FAF0]',
        border: 'border border-[#DCA747]/70 ',
        bg: 'bg-[#0C232E]',
        icon: 'i-memory-music-note'
    },
    font: {
        display: 'font-cinzel',
        title: 'font-playwrite-usa-traditional',
        titleColor: 'text-[#DCA747]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-karla',
        descColor: 'text-[#F8FAF0]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#DCA747]/70 border  backdrop-blur-md bg-[#0C232E] text-[#FAECDE] font-bold ',
    quote: {
        bg: 'bg-[#0C232E] border-[#DCA747]/70 border  ',
        icon: 'i-memory-heart text-[#FAECDE]',
        border: 'border-l border-[#f6f6e9]/20',
    },
    livestream: {
        border: ' shadow-md border border-[#DCA747]/70  '
    },
    protocol: {
        bg: ' bg-[#0C232E] border-[#DCA747]/70 border  ',
        text: 'text-[#FAECDE]'
    },
    comment: {
        bg: 'bg-[#0C232E] p-2 shadow-xl ',
        text: 'text-black',
        border: ' border border-[#DCA747]/70',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-memory-home-thatched' },
        { name: 'Mempelai', icon: 'i-memory-heart' },
        { name: 'Acara', icon: 'i-memory-calendar' },
        { name: 'Ucapan', icon: 'i-memory-comment-text' }
    ],
    source: [
        {
            name: 'Vaadi Icon',
            url: 'https://github.com/vaadin/web-components'
        },
        {
            name: 'Font Playwrite US Traditional',
            url: 'https://fonts.google.com/specimen/Playwrite+US+Trad'
        },
        {
            name: 'Font Karla',
            url: 'https://fonts.google.com/specimen/Karla'
        },

    ]
}