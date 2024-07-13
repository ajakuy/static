//@unocss-include

import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#FDF8F8]',
    gallery: 'rounded-lg',
    cover: 'h-75 w-50',
    layout: 'One',
    gift: 'i-fluent-gift-20-regular', 
    separate: '~',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: 'h-75 w-50',
        Three: 'h-full w-full'
    },
    sidebottom: {
        bg: 'bg-[#F1A2A8] rounded-t-2xl',
        text: 'text-white',
        padding: ''
    },
    music: {
        text: 'text-white',
        border: 'rounded-full',
        bg: 'bg-[#F1A2A8]',
        icon: 'i-fluent-music-note-2-20-regular'
    },
    font: {
        display: "font-unna",
        title: 'font-great-vibes',
        titleColor: 'text-black',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-josefinsans',
        descColor: 'text-gray-800',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-[#F1A2A8] rounded-lg text-gray-800',

    quote: {
        bg: 'bg-[#F1A2A8]',
        icon: 'i-fluent-heart-circle-20-regular text-white',
        border: 'border-[#F1A2A8]',
    },
    livestream: {
        border: 'border-3 border-[#F1A2A8]'
    },
    protocol: {
        bg: 'bg-[#F1A2A8]',
        text: 'text-white'
    },
    comment: {
        bg: 'bg-[#F1A2A8]',
        text: 'text-black',
        border: '',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-fluent-home-20-regular' },
        { name: 'Mempelai', icon: 'i-fluent-heart-circle-20-regular' },
        { name: 'Acara', icon: 'i-fluent-calendar-empty-16-regular' },
        { name: 'Ucapan', icon: 'i-fluent-chat-24-regular' }
    ],
    source: [
        {
            name: 'Lucade Icons',
            url: 'https://github.com/lucide-icons/lucide'
        },
        {
            name: 'Font Great Vibes',
            url: 'https://fonts.google.com/specimen/Great+Vibes'
        },
        {
            name: 'Font Josefin Sans',
            url: 'https://fonts.google.com/specimen/Josefin+Sans'
        },
        
    ]
}