//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#F8F4ED]',
    cover: 'h-60 w-60',
    gallery: '',
    layout: 'Two',
    gift: ' i-guidance-gift-shop', 
    separate: '/',
    sidebottom: {
        bg: 'bg-[#F8F4ED] border border-gray-700',
        text: 'text-gray-700',
        padding: 'p-3'
    },
    dynamicCover: {
        One: 'h-60 w-60',
        Two: 'h-60 w-60',
        Three: 'h-full w-full'
    },
    music: {
        text: 'text-black',
        border: 'rounded-none',
        bg: 'bg-[#F8F4ED] border border-gray-700',
        icon: 'i-guidance-music-room'
    },
    font: {
        display: 'font-jomolhari',
        title: 'font-oooh-baby',
        titleColor: 'text-gray-700',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-cardo',
        descColor: 'text-gray-700',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-[#F8F4ED] border border-black text-gray-700',
    quote: {
        bg: 'bg-gray-700',
        icon: 'i-guidance-heart text-white',
        border: 'border-gray-700',
    },
    livestream: {
        border: 'shadow-md p-2 border border-black !bg-[#F8F4ED]'
    },
    protocol: {
        bg: 'bg-[#F8F4ED] border border-black',
        text: 'text-black'
    },
    comment: {
        bg: 'bg-[#F8F4ED] p-2 shadow-md',
        text: 'text-gray-700',
        border: 'border border-black',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-guidance-home-2' },
        { name: 'Mempelai', icon: 'i-guidance-heart' },
        { name: 'Acara', icon: 'i-guidance-calendar' },
        { name: 'Ucapan', icon: 'i-guidance-chat' }
    ],
    source: [
        {
            name: 'Guidance',
            url: 'https://github.com/webalys-hq/streamline-vectors'
        },
        {
            name: 'Font Oooh Baby',
            url: 'https://fonts.google.com/specimen/Oooh+Baby'
        },
        {
            name: 'Font Cardo',
            url: 'https://fonts.google.com/specimen/Cardo'
        },

    ]
}