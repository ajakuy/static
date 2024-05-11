//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    cover: 'h-70 w-50',
    gallery: '',
    layout: 'One',
    gift: ' i-bytesize-gift', 
    separate: '|',
    sidebottom: {
        bg: 'bg-[#3A4668]',
        text: 'text-[#DFB39C]',
        padding: ''
    },
    music: {
        text: 'text-[#DFB39C]',
        border: 'rounded-full',
        bg: 'bg-[#3A4668]',
        icon: 'i-ph-music-notes-simple-light'
    },
    font: {
        title: 'font-corinthia',
        titleColor: 'text-[#3A4668]',
        titleSize: 'md:text-7xl text-6xl',
        desc: 'font-quicksand',
        descColor: 'text-yellow-800',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-[#DFB39C] text-yellow-800',
    quote: {
        bg: 'bg-[#3A4668]',
        icon: 'i-uiw-heart-off text-white',
        border: 'border-[#3A4668]',
    },
    livestream: {
        border: 'border-4 border-[#3A4668]'
    },
    protocol: {
        bg: 'bg-[#3A4668]',
        text: 'text-[#DFB39C]'
    },
    comment: {
        bg: 'bg-[#3A4668]',
        text: 'text-black',
        border: 'rounded-md border-2 border-[#DFB39C]',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-uiw-home' },
        { name: 'Mempelai', icon: 'i-uiw-heart-off' },
        { name: 'Acara', icon: 'i-uiw-date' },
        { name: 'Ucapan', icon: 'i-uiw-message' }
    ],
    source: [
        // {
        //     name: 'Grafis',
        //     url: 'https://www.canva.com/p/templates/EAFCyg9KpU8-blue-brown-simple-floral-frame-and-watercolor-background-wedding-invitation/'
        // },
        {
            name: 'Uwi Icons',
            url: 'https://github.com/uiwjs/icons'
        },
        {
            name: 'Font Corinthia',
            url: 'https://fonts.google.com/specimen/Corinthia'
        },
        {
            name: 'Font Quicksand',
            url: 'https://fonts.google.com/specimen/Quicksand'
        },

    ]
}