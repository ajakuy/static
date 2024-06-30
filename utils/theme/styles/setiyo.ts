//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#3E3232]',
    gallery: 'rounded-lg',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-codicon-gift',
    separate: '/',
    gradient: '',
    sidebottom: {
        bg: 'bg-[#3E3232] shadow-md border-b-5 border-[#E0A270]',
        text: 'text-[#E0A270] underline  decoration-dotted',
        padding: ''
    },
    music: {
        text: 'text-[#D6AD84]',
        border: 'border border-[#f6f6e9]/20 rounded-full',
        bg: 'bg-[#3E3232]',
        icon: 'i-codicon-music'
    },
    font: {
        display: 'font-old-standard-tt',
        title: 'font-waterfall',
        titleColor: 'text-[#FAECDE]',
        titleSize: 'md:text-7xl text-6xl',
        desc: 'font-questrial',
        descColor: 'text-[#D6AD84]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#D6AD84] border  backdrop-blur-md bg-[#3E3232] text-[#FAECDE] font-bold rounded-full',
    quote: {
        bg: 'bg-[#3E3232]',
        icon: 'i-charm-heart text-[#FAECDE]',
        border: 'border-l border-[#f6f6e9]/20',
    },
    livestream: {
        border: 'p-2 shadow-md border border-[#D6AD84] rounded-lg '
    },
    protocol: {
        bg: ' bg-[#3E3232] border-[#D6AD84] border ',
        text: 'text-[#FAECDE]'
    },
    comment: {
        bg: 'bg-[#3E3232] p-2 shadow-xl rounded-lg',
        text: 'text-black',
        border: ' border border-[#D6AD84]',
        input: 'bg-[#FAECDE]'
    },
    icon: [
        { name: 'Home', icon: 'i-charm-home' },
        { name: 'Mempelai', icon: 'i-charm-heart' },
        { name: 'Acara', icon: 'i-charm-calendar' },
        { name: 'Ucapan', icon: 'i-charm-message' }
    ],
    source: [
        {
            name: 'Charm Icons',
            url: 'https://github.com/jaynewey/charm-icons'
        },
        {
            name: 'Font Waterfall',
            url: 'https://fonts.google.com/specimen/Waterfall'
        },
        {
            name: 'Font Questrial',
            url: 'https://fonts.google.com/specimen/Questrial'
        },

    ]
}