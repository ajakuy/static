//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#930000]',
    gallery: ' border border-white/20 rounded-2xl',
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
        bg: 'bg-[#5F0806] shadow-md border border-white/20 rounded-2xl ',
        text: 'text-[#E1B770] font-thin underline underline-offset-2 underline-dotted',
        padding: 'p-2'
    },
    music: {
        text: 'text-[#E1B770]',
        border: 'border border-white/20 rounded-2xl ',
        bg: 'bg-[#930000]',
        icon: 'i-icon-park-twotone-music-one'
    },
    font: {
        display: 'font-cinzel',
        title: 'font-great-vibes',
        titleColor: 'text-[#E1B770]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-rubik',
        descColor: 'text-white',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-white/20 border  backdrop-blur-md bg-[#5F0806] text-[#FAECDE] font-bold rounded-2xl ',
    quote: {
        bg: 'bg-[#930000] border-white/20 border  ',
        icon: 'i-mingcute-lantern-fill text-[#FAECDE]',
        border: 'border-l border-[#f6f6e9]/20',
    },
    livestream: {
        border: ' shadow-md border border-white/20  '
    },
    protocol: {
        bg: ' bg-[#930000] border-white/20 border rounded-2xl  ',
        text: 'text-[#E1B770]'
    },
    comment: {
        bg: 'bg-[#930000] p-2 shadow-xl ',
        text: 'text-black',
        border: ' border border-white/20',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-icon-park-twotone-circle-house' },
        { name: 'Mempelai', icon: 'i-mingcute-lantern-fill' },
        { name: 'Acara', icon: 'i-icon-park-twotone-calendar' },
        { name: 'Ucapan', icon: 'i-icon-park-twotone-comment' }
    ],
    source: [
        {
            name: 'IconPark TwoTone',
            url: 'https://github.com/bytedance/IconPark'
        },
        {
            name: 'Font Great Vibes',
            url: 'https://fonts.google.com/specimen/Great+Vibes'
        },
        {
            name: 'Font Rubik',
            url: 'https://fonts.google.com/specimen/Rubik'
        },

    ]
}