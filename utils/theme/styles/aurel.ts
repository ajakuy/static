//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#FFFAF6]',
    gallery: 'rounded',
    cover: 'h-60 w-60',
    layout: 'Two',
    gift: 'i-teenyicons-gift-outline', 
    separate: '/',
    sidebottom: {
        bg: 'bg-[#FAC0B6] border-2 border-[#F4EFEF] rounded',
        text: 'text-[#704937]',
        padding: 'p-0'
    },
    music: {
        text: 'text-[#704937]',
        border: 'rounded',
        bg: 'bg-[#FAC0B6] border-2 border-[#F4EFEF]',
        icon: 'i-teenyicons-headphones-outline'
    },
    font: {
        display: 'font-rozha-one',
        title: 'font-pinyon-script',
        titleColor: 'text-[#704937]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-alata',
        descColor: 'text-[#CFB896]',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'border-[#FAC0B6] border-2 bg-white rounded text-[#704937]',
    quote: {
        bg: 'bg-[#FAC0B6]',
        icon: 'i-teenyicons-heart-circle-outline text-[#704937]',
        border: 'border-[#704937]',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border-[#FAC0B6] border-2'
    },
    protocol: {
        bg: 'bg-[#FAC0B6]',
        text: 'text-[#704937]'
    },
    comment: {
        bg: 'bg-[#FAC0B6] p-2 shadow-md',
        text: 'text-gray-700',
        border: 'rounded border border-[#CFB896]',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-teenyicons-house-outline' },
        { name: 'Mempelai', icon: 'i-teenyicons-heart-circle-outline' },
        { name: 'Acara', icon: 'i-teenyicons-calendar-outline' },
        { name: 'Ucapan', icon: 'i-teenyicons-message-text-alt-outline' }
    ],
    source: [
        {
            name: 'Tennyicons',
            url: 'https://github.com/teenyicons/teenyicons'
        },
        {
            name: 'Font Pinyon Script',
            url: 'https://fonts.google.com/specimen/Pinyon+Script'
        },
        {
            name: 'Font Alata',
            url: 'https://fonts.google.com/specimen/Alata'
        },

    ]
}