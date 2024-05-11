//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    gallery: 'rounded-lg',
    cover: 'h-60 w-60',
    layout: 'Two',
    gift: ' i-jam-gift-f', 
    separate: '/',
    sidebottom: {
        bg: 'bg-blue-50 border border-blue-500 rounded-lg',
        text: 'text-gray-700',
        padding: 'p-3'
    },
    music: {
        text: 'text-black',
        border: 'rounded-lg',
        bg: 'bg-blue-50 border border-blue-500',
        icon: 'i-jam-music-f'
    },
    font: {
        display: 'font-',
        title: 'font-parisienne',
        titleColor: 'text-gray-700',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-anek-bangla',
        descColor: 'text-gray-700',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-blue-50 border border-blue-500 rounded-lg text-gray-700',
    quote: {
        bg: 'bg-blue-50 border border-blue-500',
        icon: 'i-jam-heart-f text-black',
        border: 'border-blue-500',
    },
    livestream: {
        border: 'rounded-lg p-2 shadow-md border-2 border-blue-500'
    },
    protocol: {
        bg: 'bg-white border-blue-500 border',
        text: 'text-black'
    },
    comment: {
        bg: 'bg-blue-50 p-2 shadow-md',
        text: 'text-gray-700',
        border: 'rounded-lg border border-blue-500',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-jam-home-f' },
        { name: 'Mempelai', icon: 'i-jam-heart-f' },
        { name: 'Acara', icon: 'i-jam-calendar-alt-f' },
        { name: 'Ucapan', icon: 'i-jam-message-writing-f' }
    ],
    source: [
        {
            name: 'IconaaMoon',
            url: 'https://github.com/dariushhpg1/IconaMoon'
        },
        {
            name: 'Font Parisienne',
            url: 'https://fonts.google.com/specimen/Parisienne'
        },
        {
            name: 'Font Anek Bangla',
            url: 'https://fonts.google.com/specimen/Anek+Bangla'
        },

    ]
}