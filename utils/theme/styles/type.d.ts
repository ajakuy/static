export interface ThemeStyle {
    bg: string,
    layer: string,
    cover: string,
    layout: 'One' | 'Two' | 'Three',
    scrollbar?: string,
    overlay?: string,
    gradient?: string, 
    gift: string,
    separate: string,
    gallery: string,
    sidebottom: {
        bg: string,
        text: string,
        padding: string
    }
    music: {
        text: string,
        border: string,
        bg: string,
        icon: string
    },
    font: {
        display: string,
        title: string,
        titleColor: string,
        titleSize: string,
        desc: string,
        descColor: string,
        titleSize2: string,
    },
    button: string,
    quote: {
        bg: string,
        icon: string,
        border: string,
    },
    livestream: {
        border: string
    },
    protocol: {
        bg: string,
        text: string
    },
    comment: {
        bg: string,
        text: string,
        border: string,
        input: string
    }, icon: { 
        name: string, 
        icon: string 
    }[],
    source: {
        name: string,
        url: string
    }[],
}
