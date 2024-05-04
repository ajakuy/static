//@unocss-include

import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    gallery: 'rounded-xl',
    cover: 'h-75 w-50',
    layout: 'One',
    gift: 'i-system-uicons-gift', 
    separate: '~', 
    sidebottom: {
        bg: 'bg-[#F5EADE] rounded-t-2',
        text: 'text-yellow-900',
        padding: ''
    },
    music: {
        text: 'text-yellow-900',
        border: 'rounded-full',
        bg: 'bg-[#E1DED5]',
        icon: 'i-bytesize-music'
    },
    font: {
        title: 'font-solitreo',
        titleColor: 'text-yellow-900',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-cardo',
        descColor: 'text-amber-800',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-white border-2 border-[#DFB39C] rounded-xl text-amber-800',
    quote: {
        bg: 'bg-[#F5EADE]',
        icon: 'i-system-uicons-heart text-yellow-900',
        border: 'border-[#E1DED5]',
    },
    livestream: {
        border: 'border-4 border-[#F5EADE]'
    },
    protocol: {
        bg: 'bg-[#E1DED5] border-1 border-[#F5EADE]',
        text: 'text-gray-500'
    },
    comment: {
        bg: 'bg-[#F5EADE]',
        text: 'text-black',
        border: 'rounded-lg border border-[#E1DED5]',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-system-uicons-home' },
        { name: 'Mempelai', icon: 'i-system-uicons-heart' },
        { name: 'Acara', icon: 'i-system-uicons-calendar-month' },
        { name: 'Ucapan', icon: 'i-system-uicons-message' }
    ],
    source: [
        {
            name: 'System Uicons',
            url: 'https://github.com/CoreyGinnivan/system-uicons'
        },
        {
            name: 'Font Solitero',
            url: 'https://fonts.google.com/specimen/Solitreo'
        },
        {
            name: 'Font Cardo',
            url: 'https://fonts.google.com/specimen/Cardo'
        },
        
    ]
}