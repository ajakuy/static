//@unocss-include

import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    gallery: 'rounded-md',
    cover: 'w-55 h-55',
    layout: 'One',
    gift: ' i-bytesize-gift', 
    separate: '·',
    sidebottom: {
        bg: 'bg-purple-200 border-3 border-purple-200',
        text: 'text-slate-600',
        padding: ''
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    dynamicCover: {
        One: 'w-55 h-55',
        Two: 'w-55 h-55',
        Three: 'h-full w-full'
    },
    music: {
        text: 'text-slate-600',
        border: 'rounded-full',
        bg: 'bg-purple-200',
        icon: 'i-clarity-music-note-solid'
    },
    font: {
        display: "font-lancelot",
        title: 'font-beau-rivange',
        titleColor: 'text-[#142547]',
        titleSize: 'md:text-7xl text-5xl',
        desc: 'font-ovo',
        descColor: 'text-gray-800',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-purple-200 rounded-md text-gray-800',
    quote: {
        bg: 'bg-white border border-2 border-purple-200',
        icon: 'text-purple-200 i-clarity-heart-solid',
        border: 'border-purple-200',
    },
    livestream: {
        border: 'border-4 border-purple-200'
    },
    protocol: {
        bg: 'bg-purple-200',
        text: 'text-slate-600'
    },
    comment: {
        bg: 'bg-purple-200',
        text: 'text-black',
        border: 'border-2 border-purple-300',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-clarity-home-solid' },
        { name: 'Mempelai', icon: 'i-clarity-heart-solid' },
        { name: 'Acara', icon: 'i-clarity-calendar-solid' },
        { name: 'Ucapan', icon: 'i-clarity-chat-bubble-solid' }
    ],
    source: [
        // {
        //     name: 'Grafis',
        //     url: 'https://www.canva.com/p/templates/EAFNbXipNFU-white-purple-modern-wedding-invitation/'
        // },
        {
            name: 'Clarity Icons',
            url: 'https://github.com/vmware/clarity'
        },
        {
            name: 'Font Beau Rivage',
            url: 'https://fonts.google.com/specimen/Beau+Rivage'
        },
        {
            name: 'Font Ovo',
            url: 'https://fonts.google.com/specimen/Ovo'
        },

    ]
}