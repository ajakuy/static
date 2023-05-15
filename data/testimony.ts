interface TestimonyInter {
    review?: string,
    inviter?: {
        title?: string,
        img?: string
    }[]
}

export const testimonyData: TestimonyInter[] = [
    {
        review: 'Pelayanannya memuaskan!',
        inviter: [
            {
                title: 'Andi',
                img: '/profiles/default.png',
            },
            {
                title: 'Fatima',
                img: '/profiles/default.png',
            },
        ]
    },
    {
        review: 'Kami sangat terbantu dengan layanan ini.',
        inviter: [
            {
                title: 'Prasetyo',
                img: '/profiles/default.png',
            },
            {
                title: 'Sari',
                img: '/profiles/default.png',
            },


        ]
    },
]
