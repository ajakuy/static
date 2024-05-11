//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-black/50',
    bg: 'bg-pattern-emy',
    gallery: 'rounded',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-teenyicons-gift-outline',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#0C0C0D]',
    sidebottom: {
        bg: 'bg-[#18181B] shadow-md border-gray-200/50 border-t-2',
        text: 'text-gray-200',
        padding: 'p-0'
    },
    music: {
        text: 'text-gray-200',
        border: 'rounded',
        bg: 'bg-[#18181B]',
        icon: 'i-teenyicons-headphones-outline'
    },
    font: {
        title: 'font-square-peg',
        titleColor: 'text-white',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-dosis',
        descColor: 'text-gray-300',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-gray-200/50 border rounded bg-[#18181B] text-gray-200 font-bold',
    quote: {
        bg: 'bg-[#18181B]',
        icon: 'i-teenyicons-heart-circle-outline text-gray-200',
        border: 'border-dashed border-l-2 border-gray-200/50',
    },
    livestream: {
        border: 'rounded-md p-2 shadow-md border-gray-200/50 border-2'
    },
    protocol: {
        bg: 'bg-[#18181B] rounded border-gray-200/50 border',
        text: 'text-gray-200'
    },
    comment: {
        bg: 'bg-[#18181B] p-2 shadow-xl',
        text: 'text-gray-200',
        border: 'rounded border border-gray-200/50',
        input: '!bg-[#18181B]'
    },
    icon: [
        { name: 'Home', icon: 'i-cil-house' },
        { name: 'Mempelai', icon: 'i-cil-heart' },
        { name: 'Acara', icon: 'i-cil-calendar' },
        { name: 'Ucapan', icon: 'i-cil-comment-square' }
    ],
    source: [
        {
            name: 'CoreUI',
            url: 'https://github.com/coreui/coreui-icons'
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