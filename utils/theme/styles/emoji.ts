//@unocss-include

import type { ThemeStyle } from "./type"


export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-white',
    gallery: '',
    cover: 'h-75 w-50',
    layout: 'One',
    gift: 'i-twemoji-wrapped-gift', 
    separate: '/',
    dynamicCover: {
        One: 'h-75 w-50',
        Two: 'h-60 w-60',
        Three: 'h-full w-full'
    },
    dynamicInviter: {
        One: 'h-40 w-40',
        Two: 'h-40 w-40',
        Three: 'sm:w-80 sm:h-80 w-full h-full'
    },
    sidebottom: {
        bg: 'bg-yellow-400 border-b-4 border-black',
        text: 'text-black',
        padding: 'p-3'
    },
    music: {
        text: 'text-black',
        border: 'rounded-full',
        bg: 'bg-yellow-400',
        icon: 'i-twemoji-musical-note'
    },
    font: {
        display: "font-dhurjati",
        title: 'font-poiret-one',
        titleColor: 'text-black',
        titleSize: 'md:text-6xl text-4xl',
        desc: 'font-ubuntu',
        descColor: 'text-gray-800',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-yellow-400 border-2 border-black text-black',
    quote: {
        bg: 'bg-yellow-400',
        icon: 'i-typcn-heart-outline text-gray-800',
        border: 'border-yellow-400',
    },
    livestream: {
        border: 'border-4 border-yellow-400'
    },
    protocol: {
        bg: 'bg-yellow-400',
        text: 'text-black'
    },
    comment: {
        bg: 'bg-yellow-400',
        text: 'text-black',
        border: 'border border-black',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-twemoji-house-with-garden' },
        { name: 'Mempelai', icon: 'i-twemoji-beating-heart' },
        { name: 'Acara', icon: 'i-twemoji-spiral-calendar' },
        { name: 'Ucapan', icon: 'i-twemoji-speech-balloon' }
    ],
    source: [
        {
            name: 'Twitter Emoji',
            url: 'https://github.com/twitter/twemoji'
        },
        {
            name: 'Typicons',
            url: 'https://github.com/stephenhutchings/typicons.font'
        },
        {
            name: 'Font Poiret One',
            url: 'https://fonts.google.com/specimen/Poiret+One'
        },
        {
            name: 'Font Ubuntu',
            url: 'https://fonts.google.com/specimen/Ubuntu'
        },
        
    ]
}