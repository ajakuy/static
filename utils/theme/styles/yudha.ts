//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#44312B]',
    gallery: ' border border-[#FFE48F]/40 ',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-system-uicons-gift',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#44312B]/80',
    sidebottom: {
        bg: 'bg-[#44312B] shadow-md border-t-4 border-[#FFE48F]  ',
        text: 'text-[#FFE48F] font-thin',
        padding: ''
    },
    music: {
        text: 'text-[#FFE48F]',
        border: 'border border-[#FFE48F]/40  ',
        bg: 'bg-[#44312B]',
        icon: 'i-mingcute-music-line'
    },
    font: {
        display: 'font-libre-baskerville',
        title: 'font-parisienne',
        titleColor: 'text-[#FFE48F] ',
        titleSize: 'md:text-7xl text-6xl',
        desc: 'font-josh',
        descColor: 'text-white',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#FFE48F]/40 border bg-[#44312B] text-[#FFE48F] font-bold  ',
    quote: {
        bg: 'bg-[#44312B] border-[#FFE48F]/40 border  ',
        icon: 'i-system-uicons-heart text-[#FFE48F]',
        border: 'border-l border-[#FFE48F]/40',
    },
    livestream: {
        border: ' shadow-md border border-[#FFE48F]/40  '
    },
    protocol: {
        bg: ' bg-[#44312B] border-[#FFE48F]/40 border   ',
        text: 'text-[#FFE48F]'
    },
    comment: {
        bg: 'bg-[#44312B] p-2 shadow-lg ',
        text: 'text-black',
        border: ' border border-[#FFE48F]/40',
        input: 'bg-[#FFFBF3]'
    },
    icon: [
        { name: 'Home', icon: 'i-system-uicons-home' },
        { name: 'Mempelai', icon: 'i-system-uicons-heart' },
        { name: 'Acara', icon: 'i-system-uicons-calendar-month' },
        { name: 'Ucapan', icon: 'i-system-uicons-message-writing' }
    ],
    source: [
        {
            name: 'System UIcons',
            url: 'https://github.com/CoreyGinnivan/system-uicons'
        },
        {
            name: 'Font Parisienn',
            url: 'https://fonts.google.com/specimen/Parisienn'
        },
        {
            name: 'Font Josh',
            url: 'https://fonts.google.com/specimen/Josh'
        },

    ]
}