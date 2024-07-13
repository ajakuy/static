//@unocss-include

import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#fcf2ee]',
    gallery: 'rounded-md',
    cover: 'md:h-75 h-60 md:w-50 w-40',
    layout: 'One',
    gift: ' i-ant-design-gift-filled', 
    separate: '◦',
    sidebottom: {
        bg: 'bg-[#fcf2ee] rounded-md border-2 border-[#f59b87]',
        text: 'text-slate-700',
        padding: 'p-3'
    },
    dynamicCover: {
        One: 'md:h-75 h-60 md:w-50 w-40',
        Two: 'md:h-75 h-60 md:w-50 w-40',
        Three: 'h-full w-full'
    },
    music: {
        text: 'text-slate-600',
        border: 'rounded-full',
        bg: 'bg-[#fcf2ee]',
        icon: 'i-ri-music-fill'
    },
    font: {
        display: "font-caudex",
        title: 'font-great-vibes',
        titleColor: 'text-[#592f10]',
        titleSize: 'md:text-7xl text-5xl',
        desc: 'font-cormorant-infant',
        descColor: 'text-slate-600',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-rose-200 rounded-md text-slate-600',
    quote: {
        bg: 'bg-rose-200',
        icon: 'text-white i-ant-design-heart-filled',
        border: 'border-rose-200',
    },
    livestream: {
        border: 'border-4 border-rose-200'
    },
    protocol: {
        bg: 'bg-rose-200',
        text: 'text-slate-600'
    },
    comment: {
        bg: 'bg-rose-200',
        text: 'text-black',
        border: 'border border-rose-300',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-ant-design-home-filled' },
        { name: 'Mempelai', icon: 'i-ant-design-heart-filled' },
        { name: 'Acara', icon: 'i-ant-design-calendar-filled' },
        { name: 'Ucapan', icon: 'i-ant-design-message-filled' }
    ],
    source: [
        // {
        //     name: 'Grafis',
        //     url: 'https://www.canva.com/p/templates/EAFQ3iJRtbc-putih-merah-bunga-mewah-undangan-pernikahan/'
        // },
        {
            name: 'Ant Design Icons',
            url: 'https://github.com/ant-design/ant-design-icons'
        },
        {
            name: 'Font Great Vibes',
            url: 'https://fonts.google.com/specimen/Great+Vibes'
        },
        {
            name: 'Font Cormorant Infant',
            url: 'https://fonts.google.com/specimen/Cormorant+Infant'
        },
        
    ]
}