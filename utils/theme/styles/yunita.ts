//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#1D3039]',
    gallery: 'rounded-lg',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-vaadin-gift',
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
        bg: 'bg-[#1D3039] shadow-md border border-[#DBCA75]/50 rounded',
        text: 'text-[#DBCA75]',
        padding: 'p-3'
    },
    music: {
        text: 'text-[#DBCA75]',
        border: 'border border-[#DBCA75]/50 rounded',
        bg: 'bg-[#1D3039]',
        icon: 'i-vaadin-music'
    },
    font: {
        display: 'font-rozha-one',
        title: 'font-playwrite-india',
        titleColor: 'text-white',
        titleSize: 'md:text-4xl text-3xl',
        desc: 'font-hind-siliguri',
        descColor: 'text-[#DBCA75]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#DBCA75]/50 border  backdrop-blur-md bg-[#1D3039] text-[#FAECDE] font-bold rounded',
    quote: {
        bg: 'bg-[#1D3039] border-[#DBCA75]/50 border  ',
        icon: 'i-vaadin-heart text-[#FAECDE]',
        border: 'border-l border-[#f6f6e9]/20',
    },
    livestream: {
        border: 'p-2 shadow-md border border-[#DBCA75]/50 rounded '
    },
    protocol: {
        bg: ' bg-[#1D3039] border-[#DBCA75]/50 border rounded ',
        text: 'text-[#FAECDE]'
    },
    comment: {
        bg: 'bg-[#1D3039] p-2 shadow-xl rounded',
        text: 'text-black',
        border: ' border border-[#DBCA75]/50',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-vaadin-home' },
        { name: 'Mempelai', icon: 'i-vaadin-heart' },
        { name: 'Acara', icon: 'i-vaadin-calendar' },
        { name: 'Ucapan', icon: 'i-vaadin-comment' }
    ],
    source: [
        {
            name: 'Vaadi Icon',
            url: 'https://github.com/vaadin/web-components'
        },
        {
            name: 'Font Playwrite India',
            url: 'https://fonts.google.com/specimen/Playwrite+IN'
        },
        {
            name: 'Font Hind Siliguri',
            url: 'https://fonts.google.com/specimen/Hind+Siliguri'
        },

    ]
}