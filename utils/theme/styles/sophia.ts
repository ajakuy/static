//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/30',
    bg: 'bg-[#FFFAF6]',
    gallery: '',
    cover: 'h-60 w-60',
    layout: 'Two',
    gift: ' i-circum-gift', 
    separate: '/',
    sidebottom: {
        bg: 'bg-white border border-[#C5C8D8] rounded-full',
        text: 'text-[#BF9A7E]',
        padding: 'p-3'
    },
    music: {
        text: 'text-[#BF9A7E]',
        border: 'rounded-md',
        bg: 'bg-white border border-[#C5C8D8]',
        icon: 'i-circum-music-note-1'
    },
    font: {
        title: 'font-festive',
        titleColor: 'text-[#BF9A7E]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-snippet',
        descColor: 'text-[#7D7DA7]',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-white border border-[#E3A6A2] rounded-full text-[#BF9A7E]',
    quote: {
        bg: 'bg-[#BF9A7E]',
        icon: 'i-circum-heart text-white',
        border: 'border-[#C5C8D8]',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border-2 border-[#E3A6A2]'
    },
    protocol: {
        bg: 'bg-white border-[#C5C8D8]',
        text: 'text-[#BF9A7E]'
    },
    comment: {
        bg: 'bg-white p-2 shadow-md',
        text: 'text-[#BF9A7E]',
        border: 'rounded-md border border-[#E3A6A2]',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-circum-home' },
        { name: 'Mempelai', icon: 'i-circum-heart' },
        { name: 'Acara', icon: 'i-circum-calendar' },
        { name: 'Ucapan', icon: 'i-circum-chat-2' }
    ],
    source: [
        {
            name: 'Circum Icons',
            url: 'https://github.com/Klarr-Agency/Circum-Icons'
        },
        {
            name: 'Font Festive',
            url: 'https://fonts.google.com/specimen/Festive'
        },
        {
            name: 'Font Snippet',
            url: 'https://fonts.google.com/specimen/Snippet'
        },

    ]
}