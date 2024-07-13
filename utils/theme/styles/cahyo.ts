//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-black/50',
    bg: 'bg-[#1C2120]',
    gallery: ' border border-[#EED089]/40 rounded ',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-lets-icons-gift',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#1C2120]/90',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: ' h-60 w-60',
        Three: 'h-full w-full'
    },
    sidebottom: {
        bg: 'bg-[#1C2120] shadow-md border border-[#EED089] rounded  ',
        text: 'text-[#EED089] font-thin',
        padding: 'p-3'
    },
    music: {
        text: 'text-[#EED089]',
        border: 'border border-[#EED089]/40  ',
        bg: 'bg-[#1C2120]',
        icon: 'i-lets-icons-music'
    },
    font: {
        display: 'font-cormorant-garamond',
        title: 'font-pinyon-script',
        titleColor: 'text-[#EED089] ',
        titleSize: 'md:text-7xl text-6xl',
        desc: 'font-varta',
        descColor: 'text-white',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#EED089]/40 border bg-[#1C2120] text-[#EED089] font-bold  ',
    quote: {
        bg: 'bg-[#1C2120] border-[#EED089]/40 border  ',
        icon: 'i-lets-icons-favorite text-[#EED089]',
        border: 'border-l border-[#EED089]/40',
    },
    livestream: {
        border: ' shadow-md border border-[#EED089]/40 rounded  '
    },
    protocol: {
        bg: ' bg-[#1C2120] border-[#EED089]/40 border  ',
        text: 'text-[#EED089]'
    },
    comment: {
        bg: 'bg-[#1C2120] p-2 shadow-lg rounded ',
        text: 'text-black',
        border: ' border border-[#EED089]/40',
        input: 'bg-[#FFFBF3]'
    },
    icon: [
        { name: 'Home', icon: 'i-lets-icons-home' },
        { name: 'Mempelai', icon: 'i-lets-icons-favorite' },
        { name: 'Acara', icon: 'i-lets-icons-calendar-duotone-line' },
        { name: 'Ucapan', icon: 'i-lets-icons-comment' }
    ],
    source: [
        {
            name: 'Lets Icons',
            url: 'https://www.figma.com/community/file/886554014393250663'
        },
        {
            name: 'Font Pinyon Script',
            url: 'https://fonts.google.com/specimen/Pinyon+Script'
        },
        {
            name: 'Font Josh',
            url: 'https://fonts.google.com/specimen/Josh'
        },

    ]
}