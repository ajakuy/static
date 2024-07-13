//@unocss-include

import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    gallery: '',
    cover: 'h-75 w-50',
    layout: 'One',
    gift: ' i-typcn-gift', separate: '-',
    sidebottom: {
        bg: 'bg-[#F7DEAE]',
        text: 'text-[#2E4C54]',
        padding: 'p-3'
    },
    dynamicCover: {
        One: 'h-75 w-50',
        Two: 'h-75 w-50',
        Three: 'h-full w-full'
    },
    music: {
        text: 'text-[#2E4C54]',
        border: 'rounded-full',
        bg: 'bg-[#F7DEAE]',
        icon: 'i-typcn-notes-outline'
    },
    font: {
        display: 'font-linden-hill',
        title: 'font-tangerine',
        titleColor: 'text-[#2E4C54]',
        titleSize: 'md:text-7xl text-6xl',
        desc: 'font-quicksand',
        descColor: 'text-[#AB6201]',
        titleSize2: 'md:text-5xl text-4xl'
    },
    button: 'bg-white border-2 border-[#F7DEAE] text-[#AB6201]',
    quote: {
        bg: 'bg-[#F7DEAE]',
        icon: 'i-typcn-heart-outline text-slate-600',
        border: 'border-[#F7DEAE]',
    },
    livestream: {
        border: 'border-3 border-[#F7DEAE]'
    },
    protocol: {
        bg: 'bg-[#F7DEAE]',
        text: 'text-[#2E4C54]'
    },
    comment: {
        bg: 'bg-[#F7DEAE]',
        text: 'text-black',
        border: '',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-typcn-home-outline' },
        { name: 'Mempelai', icon: 'i-typcn-heart-outline' },
        { name: 'Acara', icon: 'i-typcn-calendar' },
        { name: 'Ucapan', icon: 'i-typcn-messages' }
    ],
    source: [
        // {
        //     name: 'Grafis',
        //     url: 'https://www.canva.com/p/templates/EAE4nrIEhjM-wedding-invitation/'
        // },
        {
            name: 'Typicons',
            url: 'https://github.com/stephenhutchings/typicons.font'
        },
        {
            name: 'Font Tangerine',
            url: 'https://fonts.google.com/specimen/Tangerine'
        },
        {
            name: 'Font Quicksand',
            url: 'https://fonts.google.com/specimen/Quicksand'
        },

    ]
}