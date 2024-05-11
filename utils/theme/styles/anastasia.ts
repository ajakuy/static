//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-pattern-anastasia',
    cover: 'h-55 w-80',
    gallery: 'rounded-xl',
    layout: 'Three',
    gift: 'i-mdi-light-gift',
    separate: '/',
    gradient: '',
    sidebottom: {
        bg: ' bg-[#FBF9F1] shadow-md border-b-6 border-indigo-300 rounded-xl',
        text: 'text-slate-800 font-semibold',
        padding: 'p-3'
    },
    music: {
        text: 'text-slate-800',
        border: 'border border-indigo-400/2',
        bg: ' bg-[#FBF9F1]',
        icon: 'i-mdi-light-music'
    },
    font: {
        display: 'font-prata',
        title: 'font-kaushan-script',
        titleColor: 'text-indigo-400',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-merriweather-sans',
        descColor: 'text-gray-700',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-2   bg-[#FBF9F1] text-[#596FB7] font-bold rounded-xl',
    quote: {
        bg: 'bg-[#FBF9F1]',
        icon: 'i-mdi-light-heart text-[#596FB7]',
        border: 'border-dashed border-l-2 border-indigo-900',
    },
    livestream: {
        border: ' shadow-md border-3 border-indigo-700/30'
    },
    protocol: {
        bg: ' bg-[#FBF9F1] border border-indigo-400/20 rounded-xl ',
        text: 'text-[#596FB7]'
    },
    comment: {
        bg: 'bg-[#FBF9F1] p-2 shadow-xl',
        text: 'text-gray-800',
        border: ' border-3 border-indigo-700/30 rounded-md',
        input: 'bg-[#FBF9F1]'
    },
    icon: [
        { name: 'Home', icon: 'i-mdi-light-home' },
        { name: 'Mempelai', icon: 'i-mdi-light-heart' },
        { name: 'Acara', icon: 'i-mdi-light-calendar' },
        { name: 'Ucapan', icon: 'i-mdi-light-comment-text' }
    ],
    source: [
        {
            name: 'CoreUI',
            url: 'https://github.com/coreui/coreui-icons'
        },
        {
            name: 'Font Edu TAS Beginner',
            url: 'https://fonts.google.com/specimen/Edu+TAS+Beginner'
        },
        {
            name: 'Font Cutive Mono',
            url: 'https://fonts.google.com/specimen/Cutive+Mono'
        },

    ]
}