//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#30241F]',
    gallery: '',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-codicon-gift',
    separate: '/',
    gradient: '',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: ' h-60 w-60',
        Three: 'h-full w-full'
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    sidebottom: {
        bg: 'bg-[#FAECDE] shadow-md border border-[#f6f6e9]/20 rounded-full',
        text: 'text-[#30241F]',
        padding: 'p-3'
    },
    music: {
        text: 'text-[#D6AD84]',
        border: 'border border-[#f6f6e9]/20 rounded-full',
        bg: 'bg-[#30241F]',
        icon: 'i-codicon-music'
    },
    font: {
        display: 'font-old-standard-tt',
        title: 'font-pinyon-script',
        titleColor: 'text-[#FAECDE]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-old-standard-tt',
        descColor: 'text-[#D6AD84]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#D6AD84] border  backdrop-blur-md bg-[#30241F] text-[#FAECDE] font-bold rounded-full',
    quote: {
        bg: 'bg-[#30241F]',
        icon: 'i-codicon-heart text-[#FAECDE]',
        border: 'border-l border-[#f6f6e9]/20',
    },
    livestream: {
        border: 'p-2 shadow-md border border-[#D6AD84] '
    },
    protocol: {
        bg: ' bg-[#30241F] border-[#D6AD84] border ',
        text: 'text-[#FAECDE]'
    },
    comment: {
        bg: 'bg-[#30241F] p-2 shadow-xl rounded-lg',
        text: 'text-black',
        border: ' border border-[#D6AD84]',
        input: 'bg-[#FAECDE]'
    },
    icon: [
        { name: 'Home', icon: 'i-codicon-home' },
        { name: 'Mempelai', icon: 'i-codicon-heart' },
        { name: 'Acara', icon: 'i-codicon-calendar' },
        { name: 'Ucapan', icon: 'i-codicon-comment' }
    ],
    source: [
        {
            name: 'Codicons',
            url: 'https://github.com/microsoft/vscode-codicons'
        },
        {
            name: 'Font Pinyon Script',
            url: 'https://fonts.google.com/specimen/Pinyon+Script'
        },
        {
            name: 'Font Montserrat',
            url: 'https://fonts.google.com/specimen/Montserrat'
        },

    ]
}