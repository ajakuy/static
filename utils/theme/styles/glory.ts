//@unocss-include

import type { ThemeStyle } from "./type"


export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    gallery: 'rounded-md',
    cover: 'h-67 w-42',
    layout: 'One',
    gift: ' i-lucide-gift', 
    separate: '·',
    dynamicCover: {
        One: 'w-42 h-67',
        Two: 'w-42 h-67',
        Three: 'h-full w-full'
    },
    sidebottom: {
        bg: 'bg-[#DFB39C]',
        text: 'text-slate-700',
        padding: ''
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    music: {
        text: 'text-slate-700',
        border: 'rounded-full',
        bg: 'bg-[#DFB39C]',
        icon: 'i-lucide-music-2'
    },
    font: {
        display: "font-old-standard-tt",
        title: 'font-pinyon-script',
        titleColor: 'text-black',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-cardo',
        descColor: 'text-black',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-[#E7C063] rounded-md text-black',
    quote: {
        bg: 'border border-[#DFB39C] bg-[#DFB39C]',
        icon: 'i-lucide-heart-pulse text-white',
        border: 'border-[#DFB39C]'
    },
    livestream: {
        border: 'border-2 border-[#E7C063]'
    },
    protocol: {
        bg: 'bg-white border border-[#E7C063]',
        text: 'text-slate-600'
    },
    comment: {
        bg: 'bg-white',
        text: 'text-slate-600',
        border: 'border border-[#E7C063]',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-lucide-home' },
        { name: 'Mempelai', icon: 'i-lucide-heart-pulse' },
        { name: 'Acara', icon: 'i-lucide-calendar-heart' },
        { name: 'Ucapan', icon: 'i-lucide-message-circle' }
    ],
    source: [
        // {
        //     name: 'Grafis',
        //     url: 'https://www.canva.com/p/templates/EAE5LkdibSI-aesthetic-wedding-invitation-with-floral-watercolor/'
        // },
        {
            name: 'Lucade Icons',
            url: 'https://github.com/lucide-icons/lucide'
        },
        {
            name: 'Font Pinyon Script',
            url: 'https://fonts.google.com/specimen/Pinyon+Script'
        },
        {
            name: 'Font Cardo',
            url: 'https://fonts.google.com/specimen/Cardo'
        },
        
    ]
}