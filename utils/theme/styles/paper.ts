//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#E8E6D9]',
    gallery: 'rounded-md',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-pepicons-pop-gift-circle',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#E8E6D9]',

    sidebottom: {
        bg: 'bg-[#E8E6D9] border-2 rounded-2xl shadow-md border-b-4 border-[#c3b091] border-t-0 border-l-0 border-r-0',
        text: 'text-gray-600',
        padding: 'p-2'
    },
    music: {
        text: 'text-gray-600',
        border: 'rounded-full',
        bg: 'bg-[#E8E6D9]',
        icon: 'i-pepicons-pop-music-note-single-circle'
    },
    font: {
        title: 'font-nothing-you-could-do',
        titleColor: 'text-black',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-alata',
        descColor: 'text-gray-700',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#c3b091] border-2 rounded-md bg-[#E8E6D9] text-gray-600 font-bold',
    quote: {
        bg: 'bg-[#E8E6D9]',
        icon: 'i-pepicons-pop-heart-circle text-[#704937]',
        border: 'border-dashed border-l-2 border-[#c3b091]',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border-[#c3b091] border-2'
    },
    protocol: {
        bg: 'bg-[#E8E6D9] border-[#c3b091] border rounded-md',
        text: 'text-gray-600'
    },
    comment: {
        bg: 'bg-[#E8E6D9] p-2 shadow-xl',
        text: 'text-gray-700',
        border: 'rounded border border-[#c3b091]',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-pepicons-pop-house-circle' },
        { name: 'Mempelai', icon: 'i-pepicons-pop-heart-circle' },
        { name: 'Acara', icon: 'i-pepicons-pop-calendar-circle' },
        { name: 'Ucapan', icon: 'i-pepicons-pop-text-bubble-circle' }
    ],
    source: [
        {
            name: 'Pepicons Pop!',
            url: 'https://github.com/CyCraft/pepicons'
        },
        {
            name: 'Font Pinyon Script',
            url: 'https://fonts.google.com/specimen/Nothing+You+Could+Do'
        },
        {
            name: 'Font Alata',
            url: 'https://fonts.google.com/specimen/Alata'
        },

    ]
}