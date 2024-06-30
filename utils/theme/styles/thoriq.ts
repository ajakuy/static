//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#040301]',
    gallery: ' border border-black rounded',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-solar-gift-bold',
    separate: '/',
    gradient: '',
    sidebottom: {
        bg: 'bg-[#040301] shadow-md border border-black rounded ',
        text: 'text-[#D1AE5D] underline underline-offset-2 underline-dotted',
        padding: 'p-2'
    },
    music: {
        text: 'text-[#D1AE5D]',
        border: 'border border-black rounded ',
        bg: 'bg-[#040301]',
        icon: 'i-solar-music-note-2-bold'
    },
    font: {
        display: 'font-lora',
        title: 'font-playwrite-usa-traditional  ',
        titleColor: 'text-[#D1AE5D] text-stroke-1 text-stroke-black',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-gfs-neohellenic',
        descColor: 'text-[#FFFBF3]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-black border bg-[#040301] text-[#FAECDE] font-bold rounded ',
    quote: {
        bg: 'bg-[#040301] border-black border  ',
        icon: 'i-solar-heart-bold text-white',
        border: 'border-l border-[#f6f6e9]/20',
    },
    livestream: {
        border: ' shadow-md border border-black  '
    },
    protocol: {
        bg: ' bg-[#040301] border-black border rounded  ',
        text: 'text-[#D1AE5D]'
    },
    comment: {
        bg: 'bg-[#040301] p-2 shadow-lg ',
        text: 'text-black',
        border: ' border border-black',
        input: 'bg-[#FFFBF3]'
    },
    icon: [
        { name: 'Home', icon: 'i-solar-home-bold' },
        { name: 'Mempelai', icon: 'i-solar-heart-bold' },
        { name: 'Acara', icon: 'i-solar-calendar-minimalistic-bold' },
        { name: 'Ucapan', icon: 'i-solar-menu-dots-square-bold' }
    ],
    source: [
        {
            name: 'Font Solar',
            url: 'https://www.npmjs.com/package/@iconify-json/solar'
        },
        {
            name: 'Font Playwrite USA Traditional',
            url: 'https://fonts.google.com/specimen/Playwrite+US+Trad'
        },
        {
            name: 'Font GFS Neohellenic',
            url: 'https://fonts.google.com/specimen/GFS+Neohellenic'
        },

    ]
}