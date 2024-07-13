//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-pattern-krone',
    gallery: '',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-bxs-gift',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#F8F6F4]',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: ' h-60 w-60',
        Three: 'h-full w-full'
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    sidebottom: {
        bg: 'backdrop-blur-md bg-[#393E46]/10 shadow-md',
        text: 'text-[#393E46] font-semibold',
        padding: ''
    },
    music: {
        text: 'text-[#393E46]',
        border: 'border border-[#393E46]/20',
        bg: 'backdrop-blur-md bg-[#393E46]/10',
        icon: 'i-bxs-music'
    },
    font: {
        display: "font-josefin-slab",
        title: 'font-edu-tas-beginner',
        titleColor: 'text-[#393E46]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-cutive-mono',
        descColor: 'text-gray-800',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#393E46]/20 border  backdrop-blur-md bg-[#393E46]/10 text-[#393E46] font-bold',
    quote: {
        bg: 'bg-[#393E46]',
        icon: 'i-bxs-heart text-[#F8F6F4]',
        border: 'border-dashed border-l-2 border-[#393E46]/20',
    },
    livestream: {
        border: 'p-2 shadow-md border border-[#393E46]/20'
    },
    protocol: {
        bg: 'backdrop-blur-md bg-[#393E46]/10 border border-[#393E46]/20 ',
        text: 'text-[#393E46]'
    },
    comment: {
        bg: 'bg-white p-2 shadow-xl',
        text: 'text-[#393E46]',
        border: ' border border-[#393E46]/20',
        input: 'bg-gray-50'
    },
    icon: [
        { name: 'Home', icon: 'i-bxs-home-heart' },
        { name: 'Mempelai', icon: 'i-bxs-heart' },
        { name: 'Acara', icon: 'i-bxs-calendar-heart' },
        { name: 'Ucapan', icon: 'i-bxs-comment-detail' }
    ],
    source: [
        {
            name: 'BoxIsons Solid',
            url: 'https://github.com/atisawd/boxicons'
        },
        {
            name: 'Font Edu TAS Beginner',
            url: 'https://fonts.google.com/specimen/Edu+TAS+Beginner'
        },
        {
            name: 'Font Montserrat',
            url: 'https://fonts.google.com/specimen/Montserrat'
        },

    ]
}