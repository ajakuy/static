//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-black/50',
    bg: 'bg-pattern-daisy',
    gallery: 'rounded',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-icon-park-solid-gift',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#282727]',
    sidebottom: {
        bg: 'bg-[#F2E7D5] shadow-md border-gray-200/50 border-t-2',
        text: 'text-[#282727]',
        padding: 'p-3'
    },
    music: {
        text: 'text-[#282727]',
        border: 'rounded',
        bg: 'bg-[#F2E7D5]',
        icon: 'i-icon-park-solid-music-one'
    },
    font: {
        display: 'font-jacques-francois',
        title: 'font-square-peg',
        titleColor: 'text-[#F7F7F7]',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-dosis',
        descColor: 'text-[#F2E7D5]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-gray-200/50 border rounded bg-[#F2E7D5] text-[#282727] font-bold',
    quote: {
        bg: 'bg-[#F2E7D5]',
        icon: 'i-teenyicons-heart-circle-outline text-[#282727]',
        border: 'border-dashed border-l-2 border-gray-200/50',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border-gray-200/50 border-2'
    },
    protocol: {
        bg: 'bg-[#F2E7D5] border-gray-200/50 border rounded',
        text: 'text-[#282727]'
    },
    comment: {
        bg: 'bg-[#282727] p-2 shadow-xl',
        text: 'text-gray-200',
        border: 'rounded border border-gray-200/50',
        input: 'bg-[#282727]'
    },
    icon: [
        { name: 'Home', icon: 'i-icon-park-solid-home' },
        { name: 'Mempelai', icon: 'i-icon-park-solid-healthy-recognition' },
        { name: 'Acara', icon: 'i-icon-park-solid-calendar' },
        { name: 'Ucapan', icon: 'i-icon-park-solid-comment' }
    ],
    source: [
        {
            name: 'IconPark Solid',
            url: 'https://github.com/bytedance/IconPark'
        },
        {
            name: 'Font Square Peg',
            url: 'https://fonts.google.com/specimen/Square+Peg'
        },
        {
            name: 'Font Dosis',
            url: 'https://fonts.google.com/specimen/Dosis'
        },

    ]
}