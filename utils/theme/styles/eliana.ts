//@unocss-include
import type { ThemeStyle } from "./type"

export const themeStyle: ThemeStyle = {
    layer: 'bg-white/70',
    bg: 'bg-[#FDF7F3]',
    gallery: '',
    cover: 'h-66 w-45',
    layout: 'Two',
    gift: ' i-streamline-shopping-gift-reward-box-social-present-gift-media-rating-bow',
    separate: '/',
    sidebottom: {
        bg: 'bg-[#FDF7F3] border border-gray-700',
        text: 'text-gray-700',
        padding: 'p-3'
    },
    music: {
        text: 'text-black',
        border: 'rounded-none',
        bg: 'bg-[#FDF7F3] border border-gray-700',
        icon: 'i-streamline-entertainment-music-note-2-music-audio-note'
    },
    font: {
        title: 'font-ephesis',
        titleColor: 'text-gray-700',
        titleSize: 'md:text-6xl text-5xl',
        desc: 'font-ovo',
        descColor: 'text-gray-700',
        titleSize2: 'md:text-4xl text-3xl'
    },
    button: 'bg-[#FDF7F3] border border-black text-gray-700',
    quote: {
        bg: 'bg-gray-700',
        icon: 'i-streamline-interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love text-white',
        border: 'border-gray-700',
    },
    livestream: {
        border: 'shadow-md p-2 border border-black !bg-[#FDF7F3] rounded-md'
    },
    protocol: {
        bg: 'bg-[#FDF7F3] border border-black',
        text: 'text-black'
    },
    comment: {
        bg: 'bg-[#FDF7F3] p-2 shadow-md',
        text: 'text-gray-700',
        border: 'border border-black',
        input: 'bg-white'
    },
    icon: [
        { name: 'Home', icon: 'i-streamline-interface-home-2-door-entrance-home-house-map-roof-round' },
        { name: 'Mempelai', icon: 'i-streamline-interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love' },
        { name: 'Acara', icon: 'i-streamline-interface-calendar-blank-calendar-date-day-month' },
        { name: 'Ucapan', icon: 'i-streamline-mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat' }
    ],
    source: [
        {
            name: 'Steamline',
            url: 'https://github.com/webalys-hq/streamline-vectors'
        },
        {
            name: 'Font Ephesis',
            url: 'https://fonts.google.com/specimen/Ephesis'
        },
        {
            name: 'Font Ovo',
            url: 'https://fonts.google.com/specimen/Ovo'
        },

    ]
}