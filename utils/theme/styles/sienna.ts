//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-pattern-sienna',
    gallery: 'rounded',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-ph-gift-fill',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#FDF7E4]',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: ' h-60 w-60',
        Three: 'h-full w-full'
    },
    sidebottom: {
        bg: 'bg-[#FAEED1] shadow-md border-[#65647C] border',
        text: 'text-[#65647C]',
        padding: 'p-3'
    },
    music: {
        text: 'text-[#65647C]',
        border: 'rounded border border-[#65647C]',
        bg: 'bg-[#FAEED1]',
        icon: 'i-ph-music-notes-fill'
    },
    font: {
        display: 'font-trirong',
        title: 'font-niconne',
        titleColor: 'text-[#65647C]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-charis-sil',
        descColor: 'text-gray-800',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#65647C] border rounded bg-[#FAEED1] text-[#65647C] font-bold',
    quote: {
        bg: 'bg-[#FDF7E4] border border-[#65647C]',
        icon: 'i-ph-heart-straight-fill text-[#65647C]',
        border: 'border-dashed border-l-2 border-[#65647C]',
    },
    livestream: {
        border: ' p-2 shadow-md border-[#65647C] border'
    },
    protocol: {
        bg: 'bg-[#FAEED1] border-[#65647C] border',
        text: 'text-[#65647C]'
    },
    comment: {
        bg: 'bg-[#FDF7E4] p-2 shadow-xl',
        text: 'text-[#65647C]',
        border: ' border border-[#65647C]',
        input: 'bg-[#FDF7E4]'
    },
    icon: [
        { name: 'Home', icon: 'i-ph-house-line-fill' },
        { name: 'Mempelai', icon: 'i-ph-heart-straight-fill' },
        { name: 'Acara', icon: 'i-ph-calendar-blank-fill' },
        { name: 'Ucapan', icon: 'i-ph-chat-centered-fill' }
    ],
    source: [
        {
            name: 'Phosphor',
            url: 'https://github.com/phosphor-icons/core'
        },
        {
            name: 'Font Niconne',
            url: 'https://fonts.google.com/specimen/Niconne'
        },
        {
            name: 'Font Charis SIL',
            url: 'https://fonts.google.com/specimen/Charis+SIL'
        },

    ]
}