//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#203229]',
    gallery: ' border border-white/40 ',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-mingcute-gift-2-line',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#203229]/95',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: ' h-60 w-60',
        Three: 'h-full w-full'
    },
    sidebottom: {
        bg: 'bg-[#203229] shadow-md border-r-4 border-l-4 border-[#FFC764]  ',
        text: 'text-[#FFC764] font-semibold underline underline-offset-2 underline-wavy',
        padding: 'p-3'
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    music: {
        text: 'text-[#FFC764]',
        border: 'border border-white/40  ',
        bg: 'bg-[#203229]',
        icon: 'i-mingcute-music-line'
    },
    font: {
        display: 'font-eb-garamond',
        title: 'font-yellowtail',
        titleColor: 'text-[#FFC764] ',
        titleSize: 'md:text-7xl text-6xl',
        desc: 'font-urbanist',
        descColor: 'text-white',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-white/40 border bg-[#203229] text-[#FAECDE] font-bold  ',
    quote: {
        bg: 'bg-[#203229] border-white/40 border  ',
        icon: 'i-mingcute-heart-line text-[#FFC764]',
        border: 'border-l border-white/40 ',
    },
    livestream: {
        border: ' shadow-md border border-white/40  '
    },
    protocol: {
        bg: ' bg-[#203229] border-white/40 border   ',
        text: 'text-[#FFC764]'
    },
    comment: {
        bg: 'bg-[#203229] p-2 shadow-lg ',
        text: 'text-black',
        border: ' border border-white/40',
        input: 'bg-[#FFFBF3]'
    },
    icon: [
        { name: 'Home', icon: 'i-mingcute-home-3-line' },
        { name: 'Mempelai', icon: 'i-mingcute-heart-line' },
        { name: 'Acara', icon: 'i-mingcute-calendar-2-line' },
        { name: 'Ucapan', icon: 'i-mingcute-comment-2-line' }
    ],
    source: [
        {
            name: 'MingCute Icon',
            url: 'https://github.com/Richard9394/MingCute'
        },
        {
            name: 'Font Yellowtail',
            url: 'https://fonts.google.com/specimen/Yellowtail'
        },
        {
            name: 'Font Urbanist',
            url: 'https://fonts.google.com/specimen/Urbanist'
        },

    ]
}