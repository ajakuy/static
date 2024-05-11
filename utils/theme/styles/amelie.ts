//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-gray-50',
    cover: 'h-55 w-80',
    gallery: 'rounded-lg',
    layout: 'Three',
    gift: 'i-ph-gift-fill',
    separate: '/',
    gradient: 'bg-gradient-to-t from-white',
    sidebottom: {
        bg: 'bg-[#3A4668] shadow-md border-[#65647C] border',
        text: 'text-[#DFB39C]',
        padding: ''
    },
    music: {
        text: 'text-[#DFB39C]',
        border: 'rounded border border-[#65647C] rounded-lg',
        bg: 'bg-[#3A4668]',
        icon: 'i-ph-music-notes-fill'
    },
    font: {
        title: 'font-niconne',
        titleColor: 'text-[#3A4668]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-charis-sil',
        descColor: 'text-black',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#65647C] border rounded-lg bg-[#3A4668] text-[#DFB39C] font-bold',
    quote: {
        bg: 'bg-[#3A4668]',
        icon: 'i-ph-heart-straight-fill text-[#DFB39C]',
        border: 'border-dashed border-l-2 border-[#65647C] ',
    },
    livestream: {
        border: 'shadow-md border-[#3A4668] border bg-[#DFB39C]'
    },
    protocol: {
        bg: 'bg-[#3A4668] border-[#65647C] border rounded-lg',
        text: 'text-[#DFB39C]'
    },
    comment: {
        bg: 'bg-[#3A4668] p-2 shadow-xl',
        text: 'text-[#DFB39C]',
        border: ' border border-[#65647C] rounded-lg',
        input: 'bg-gray-50'
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