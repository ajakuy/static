//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-pattern-mono',
    gallery: 'rounded',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-teenyicons-gift-outline',
    separate: '/',
    gradient: 'bg-gradient-to-t from-pink-50',
    sidebottom: {
        bg: 'bg-[#FED9ED] border-2 rounded shadow-md border-b-4 border-[#BB9CC0] border-t-0 border-l-0 border-r-0',
        text: 'text-[#67729D]',
        padding: 'p-3'
    },
    music: {
        text: 'text-[#67729D]',
        border: 'rounded',
        bg: 'bg-[#FED9ED]',
        icon: 'i-teenyicons-headphones-outline'
    },
    font: {
        title: 'font-satisfy',
        titleColor: 'text-pink-400',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-alata',
        descColor: 'text-[#67729D]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#BB9CC0] border-2 rounded bg-[#FED9ED] text-[#67729D] font-bold',
    quote: {
        bg: 'bg-[#FED9ED]',
        icon: 'i-teenyicons-heart-circle-outline text-[#67729D]',
        border: 'border-dashed border-l-2 border-slate-900',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border-[#FED9ED] border-2'
    },
    protocol: {
        bg: 'bg-[#FED9ED] border-[#BB9CC0] border',
        text: 'text-[#67729D]'
    },
    comment: {
        bg: 'bg-pattern-mono p-2 shadow-xl',
        text: 'text-gray-700',
        border: 'rounded border border-[#BB9CC0]',
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