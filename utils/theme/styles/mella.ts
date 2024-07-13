//@unocss-include

import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-orange-50',
    gallery: 'rounded-md',
    cover: 'h-60 w-60',
    layout: 'One',
    gift: 'i-ri-gift-fill', 
    separate: '·',
    sidebottom: {
        bg: 'bg-orange-300 rounded-t-2',
        text: 'text-slate-600',
        padding: ''
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
        text: 'text-slate-600',
        border: 'rounded-full',
        bg: 'bg-orange-300',
        icon: 'i-ri-music-fill'
    },
    font: {
        display: 'font-yeseva-one',
        title: 'font-sacramento',
        titleColor: 'text-[#8E4A32]',
        titleSize: 'md:text-7xl text-5xl',
        desc: 'font-cormorant-garamond',
        descColor: 'text-slate-600',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-orange-100 rounded-md text-slate-600',
    quote: {
        bg: 'bg-orange-300',
        icon: 'text-white i-ri-heart-pulse-fill',
        border: 'border-orange-200',
    },
    livestream: {
        border: 'border-4 border-orange-200'
    },
    protocol: {
        bg: 'bg-orange-200',
        text: 'text-slate-600'
    },
    comment: {
        bg: 'bg-white',
        text: 'text-black',
        border: 'border-2 border-orange-200',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-ri-home-heart-fill' },
        { name: 'Mempelai', icon: 'i-ri-heart-pulse-fill' },
        { name: 'Acara', icon: 'i-ri-calendar-fill' },
        { name: 'Ucapan', icon: 'i-ri-chat-3-fill' }
    ],
    source: [
        // {
        //     name: 'Grafis',
        //     url: 'https://www.canva.com/p/templates/EAE_GI5SFIs-soft-pink-floral-minimalist-wedding-invitation-portrait/'
        // },
        {
            name: 'Remix Icons',
            url: 'https://github.com/Remix-Design/RemixIcon'
        },
        {
            name: 'Font Sacramento',
            url: 'https://fonts.google.com/specimen/Sacramento'
        },
        {
            name: 'Font Cormorant Garamond',
            url: 'https://fonts.google.com/specimen/Cormorant+Garamond'
        },
        
    ]
}