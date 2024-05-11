//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#F4EFEF]',
    gallery: 'rounded',
    cover: 'h-60 w-60',
    layout: 'Two',
    gift: ' i-humbleicons-gift', 
    separate: '/',
    sidebottom: {
        bg: 'bg-[#AC9D93] border-2 border-[#F4EFEF] rounded',
        text: 'text-white',
        padding: 'p-0'
    },
    music: {
        text: 'text-white',
        border: 'rounded',
        bg: 'bg-[#AC9D93] border-2 border-[#F4EFEF]',
        icon: ' i-humbleicons-music-note'
    },
    font: {
        title: 'font-dawning-of-a-new-day',
        titleColor: 'text-black',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-noto-serif-display',
        descColor: 'text-gray-500',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-[#AC9D93] border border-[#AC9D93] rounded text-white',
    quote: {
        bg: 'bg-[#AC9D93]',
        icon: 'i-humbleicons-heart text-white',
        border: 'border-[#AC9D93]',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md boorder-2 border-[#AC9D93]'
    },
    protocol: {
        bg: 'bg-[#AC9D93]',
        text: 'text-white'
    },
    comment: {
        bg: 'bg-white p-2 shadow-md',
        text: 'text-gray-700',
        border: 'rounded border border-[#AC9D93]',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-humbleicons-home' },
        { name: 'Mempelai', icon: 'i-humbleicons-heart' },
        { name: 'Acara', icon: 'i-humbleicons-calendar' },
        { name: 'Ucapan', icon: 'i-humbleicons-chats' }
    ],
    source: [
        {
            name: 'Humbleicons',
            url: 'https://github.com/zraly/humbleicons'
        },
        {
            name: 'Font Dawning of a New Day',
            url: 'https://fonts.google.com/specimen/Dawning+of+a+New+Day'
        },
        {
            name: 'Font Noto Serif Display',
            url: 'https://fonts.google.com/noto/specimen/Noto+Serif+Display'
        },

    ]
}