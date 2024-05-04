//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-gray-500/10',
    bg: 'bg-pattern-zephyra',
    gallery: 'rounded',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-bxs-gift',
    separate: '/',
    gradient: '',
    sidebottom: {
        bg: 'backdrop-blur-md rounded bg-[#262728]/10 shadow-md border border-gray-200/20',
        text: 'text-gray-200',
        padding: 'p-3'
    },
    music: {
        text: 'text-gray-200',
        border: 'border border-gray-200/20 rounded',
        bg: 'backdrop-blur-md bg-[#262728]/10',
        icon: 'i-ooui-musical-score'
    },
    font: {
        title: 'font-satisfy',
        titleColor: 'text-white',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-playfair-display',
        descColor: 'text-gray-300',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-gray-200/20 rounded border  backdrop-blur-md bg-[#262728]/10 text-gray-200 font-bold',
    quote: {
        bg: 'bg-[#262728]',
        icon: 'i-ooui-heart text-gray-200',
        border: 'border-dashed border-l-2 border-gray-200/20',
    },
    livestream: {
        border: 'p-2 shadow-md border border-gray-200/20  grayscale'
    },
    protocol: {
        bg: 'backdrop-blur-md bg-[#262728]/10 border border-gray-200/20 rounded ',
        text: 'text-gray-200'
    },
    comment: {
        bg: 'bg-[#262728] p-2 shadow-xl',
        text: 'text-gray-200',
        border: ' border border-gray-200/20 rounded',
        input: 'bg-[#262728]'
    },
    icon: [
        { name: 'Home', icon: 'i-ooui-home' },
        { name: 'Mempelai', icon: 'i-ooui-heart' },
        { name: 'Acara', icon: 'i-ooui-calendar' },
        { name: 'Ucapan', icon: 'i-ooui-speech-bubble-ltr' }
    ],
    source: [
        {
            name: 'OOUI',
            url: 'https://github.com/wikimedia/oojs-ui'
        },
        {
            name: 'BoxIsons Solid',
            url: 'https://github.com/atisawd/boxicons'
        },
        {
            name: 'Font Satisfy',
            url: 'https://fonts.google.com/specimen/Satisfy'
        },
        {
            name: 'Font Playfair Display',
            url: 'https://fonts.google.com/specimen/Playfair+Display'
        },

    ]
}