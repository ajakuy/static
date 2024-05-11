//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#F1EEE7]',
    gallery: 'rounded-md',
    cover: 'h-75 w-50',
    layout: 'One',
    gift: ' i-ion-gift-outline',
    separate: '|',
    sidebottom: {
        bg: 'bg-[#F1EEE7] border-2 border-[#2E4138]/30',
        text: 'text-slate-700',
        padding: 'p-3'
    },
    music: {
        text: 'text-slate-700',
        border: 'rounded-full',
        bg: 'bg-[#F1EEE7]',
        icon: 'i-ion-musical-notes-outline'
    },
    font: {
        title: 'font-allura',
        titleColor: 'text-[#2E4138]',
        titleSize: 'md:text-7xl text-5xl',
        desc: 'font-cormorant-infant',
        descColor: 'text-slate-700',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-[#2E4138] rounded-md text-slate-700',
    quote: {
        bg: 'bg-[#2E4138]',
        icon: 'text-white i-ion-heart-circle-outline',
        border: 'border-[#2E4138]',
    },
    livestream: {
        border: 'border-4 border-[#2E4138]'
    },
    protocol: {
        bg: 'bg-[#F1EEE7]',
        text: 'text-slate-600'
    },
    comment: {
        bg: 'bg-[#F1EEE7]',
        text: 'text-black',
        border: 'border border-green-800',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-ion-home-outline' },
        { name: 'Mempelai', icon: 'i-ion-heart-circle-outline' },
        { name: 'Acara', icon: 'i-ion-today-outline' },
        { name: 'Ucapan', icon: 'i-ion-chatbox-ellipses-outline' }
    ],
    source: [
        // {
        //     name: 'Grafis',
        //     url: 'https://www.canva.com/p/templates/EAFRgyQuNf4-white-minimalist-wedding-invitation/'
        // },
        {
            name: 'Ion Icons',
            url: 'https://github.com/ionic-team/ionicons'
        },
        {
            name: 'Font Allura',
            url: 'https://fonts.google.com/specimen/Allura'
        },
        {
            name: 'Font Cormorant Infant',
            url: 'https://fonts.google.com/specimen/Cormorant+Infant'
        },

    ]
}