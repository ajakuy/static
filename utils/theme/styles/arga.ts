//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/50',
    bg: 'bg-[#001D3D]',
    gallery: ' border border-[#C1AA70] rounded',
    cover: 'h-55 w-80',
    layout: 'Three',
    gift: 'i-iconoir-gift',
    separate: '/',
    gradient: 'bg-gradient-to-t from-[#001D30]/70',
    sidebottom: {
        bg: 'bg-[#001D3D] shadow-md border-t-4 border-[#C1AA70] rounded-t-xl ',
        text: 'text-[#D1AE5D] font-semibold underline underline-offset-2',
        padding: ''
    },
    music: {
        text: 'text-[#D1AE5D]',
        border: 'border border-[#C1AA70] rounded ',
        bg: 'bg-[#001D3D]',
        icon: 'i-iconoir-music-double-note'
    },
    font: {
        display: 'font-pt-serif',
        title: 'font-italianno',
        titleColor: 'text-[#DBA806] ',
        titleSize: 'md:text-7xl text-6xl',
        desc: 'font-poppins',
        descColor: 'text-[#C1AA70]',
        titleSize2: 'md:text-3xl text-2xl'
    },
    button: 'border-[#C1AA70] border bg-[#001D3D] text-[#FAECDE] font-bold rounded ',
    quote: {
        bg: 'bg-[#001D3D] border-[#C1AA70] border  ',
        icon: 'i-iconoir-heart text-[#D1AE5D]',
        border: 'border-l border-[#f6f6e9]/20',
    },
    livestream: {
        border: ' shadow-md border border-[#C1AA70]  '
    },
    protocol: {
        bg: ' bg-[#001D3D] border-[#C1AA70] border rounded  ',
        text: 'text-[#D1AE5D]'
    },
    comment: {
        bg: 'bg-[#D1AE5D] p-2 shadow-lg ',
        text: 'text-black',
        border: ' border border-[#C1AA70]',
        input: 'bg-[#FFFBF3]'
    },
    icon: [
        { name: 'Home', icon: 'i-iconoir-home-alt' },
        { name: 'Mempelai', icon: 'i-iconoir-heart' },
        { name: 'Acara', icon: 'i-iconoir-calendar' },
        { name: 'Ucapan', icon: 'i-iconoir-message-text' }
    ],
    source: [
        {
            name: 'IconPark TwoTone',
            url: 'https://github.com/bytedance/IconPark'
        },
        {
            name: 'Font Italianno',
            url: 'https://fonts.google.com/specimen/Italianno'
        },
        {
            name: 'Font Poppins',
            url: 'https://fonts.google.com/specimen/Poppins'
        },

    ]
}