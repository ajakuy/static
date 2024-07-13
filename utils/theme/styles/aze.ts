//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    gallery: 'rounded-xl',
    cover: 'h-60 w-60',
    layout: 'Two',
    gift: ' i-uil-gift',
    separate: '/',
    sidebottom: {
        bg: 'bg-[#2C3447] border border-gray-700 rounded-xl',
        text: 'text-white',
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
        text: 'text-[#2C344]',
        border: 'rounded-cl',
        bg: 'border-[#2C3447] border bg-white rounded-xl',
        icon: 'i-uil-music-note'
    },
    font: {
        display: 'font-piazzolla',
        title: 'font-cookie',
        titleColor: 'text-[#2C3447]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-quicksand',
        descColor: 'text-gray-700',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'border-[#2C3447] border bg-white rounded-xl text-[#2C3447]',
    quote: {
        bg: 'bg-gray-700',
        icon: 'i-uil-heart text-white',
        border: 'border-gray-700',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border-[#2C3447] border-2'
    },
    protocol: {
        bg: 'bg-[#2C3447] rounded-xl',
        text: 'text-white'
    },
    comment: {
        bg: 'bg-white p-2 shadow-md',
        text: 'text-gray-700',
        border: 'rounded-md border border-black',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-uil-home' },
        { name: 'Mempelai', icon: 'i-uil-heart' },
        { name: 'Acara', icon: 'i-uil-calendar-alt' },
        { name: 'Ucapan', icon: 'i-uil-comment' }
    ],
    source: [
        {
            name: 'Unicons',
            url: 'https://github.com/Iconscout/unicons'
        },
        {
            name: 'Font Cookie',
            url: 'https://fonts.google.com/specimen/Cookie'
        },
        {
            name: 'Font Quicksand',
            url: 'https://fonts.google.com/specimen/Quicksand'
        },

    ]
}