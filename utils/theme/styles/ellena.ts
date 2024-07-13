//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-pattern-ellena',
    gallery: 'rounded-2xl',
    cover: 'h-60 w-60',
    layout: 'Two',
    gift: ' i-iconamoon-gift-thin', 
    separate: '/',
    sidebottom: {
        bg: 'bg-white border border-gray-700 rounded-full',
        text: 'text-gray-700',
        padding: 'p-3'
    },
    dynamicCover: {
        One: 'h-60 w-60',
        Two: 'h-60 w-60',
        Three: 'h-full w-full'
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    music: {
        text: 'text-black',
        border: 'rounded-md',
        bg: 'bg-white border border-gray-700',
        icon: 'i-iconamoon-music-2-thin'
    },
    font: {
        display: 'font-castoro-titling',
        title: 'font-oooh-baby',
        titleColor: 'text-gray-700',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-fira-sans',
        descColor: 'text-gray-700',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-white border border-black rounded-full text-gray-700',
    quote: {
        bg: 'bg-gray-700',
        icon: 'i-iconamoon-heart-thin text-white',
        border: 'border-gray-700',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border border-gray-700'
    },
    protocol: {
        bg: 'bg-gray-700',
        text: 'text-white'
    },
    comment: {
        bg: 'bg-white p-2 shadow-md',
        text: 'text-gray-700',
        border: 'rounded-md border border-black',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-iconamoon-home-thin' },
        { name: 'Mempelai', icon: 'i-iconamoon-heart-thin' },
        { name: 'Acara', icon: 'i-iconamoon-calendar-1-thin' },
        { name: 'Ucapan', icon: 'i-iconamoon-comment-thin' }
    ],
    source: [
        {
            name: 'IconaaMoon',
            url: 'https://github.com/dariushhpg1/IconaMoon'
        },
        {
            name: 'Font Oooh Baby',
            url: 'https://fonts.google.com/specimen/Oooh+Baby'
        },
        {
            name: 'Font Fira Sans',
            url: 'https://fonts.google.com/specimen/Fira+Sans'
        },

    ]
}