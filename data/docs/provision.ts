import type { DocsInter } from '../../../data/docs/type'

export const dataDoc: DocsInter[] = [
    {
        name: 'Tema',
        list: [
            {
                title: 'Tentang',
                list: [
                    {
                        value: `Semua tema yang berasal dari ajakuy, harus mengatas namakan nama Ajakuy tanpa terkecuali. 
                                Pembelian tema yang sah hanya dapat melalui website dan layanan Ajakuy.`,
                        type: 'text'
                    },
                ]
            },

            {
                title: 'Standar',
                list: [
                    {
                        value: `Tema standar mencakup kebutuhan umum, untuk undangan pernikahan, umumnya didesain dengan gaya simple dan sederhana namun tetap terlihat menarik.`,
                        type: 'text'
                    },
                ]
            },

            {
                title: 'Premium',
                list: [
                    {
                        value: `Jenis tema ini memiliki semua fitur yang ada di paket standar, 
                                dan menambahkan beberapa fitur unggulan tambahan, tampilan tema
                                juga terlihat lebih elegan dan menarik, jugs memiliki harga yang tidak jauh hemat dari tema standar`,
                        type: 'text'
                    },
                ]
            },


            {
                title: 'Eksklusif',
                list: [
                    {
                        value: `Kami menyediakan layanan tema eksklusif, yang berbentuk paket langganan. Paket ini lebih dikususkan untuk para pelanggan yang ingin membeli tema untuk dijual lagi, tidak terkecuali secara perorangan. Dengan membeli paket, pelanggan dapat memilih tema apa saja tanpa terbatas ketetuan pada setiap paket.`,
                        type: 'text'
                    },

                    {
                        value: `Ketentuan tersebut diantara lain:`,
                        type: 'text'
                    },

                    {
                        value: [
                            'Limit pemakaian',
                            'Batas waktu',
                            'Perulangan harga',
                        ],
                        type: 'list'
                    },
                    {
                        value: `Limit pemakian berarti dalam jangka waktu 1 hari/24 jam, pelanggan akan dibatasi untuk memakai tema dalam paket yang sudah dibeli, jumlah batasan tema tergantung dari ketentuan tiap-tiap paket.`,
                        type: 'text'
                    },
                    {
                        value: '',
                        type: 'text'
                    },
                    {
                        value: `Perulangan harga berarti jika pelanggan ingin menambah batas wkatu paket, harga yang ditawarkan akan berbeda, bisa sedikit naik atau turun tergantung ketentuan di tiap-tiap paket`,
                        type: 'text'
                    },

                    {
                        value: `Meskipun mendapat hak untuk menjual undangan kepada orang lain, tetapi prosesnya harus dan wajib dilakukan dalam website Ajakuy, tidak bisa dengan mengambil tema, untuk ditaruh di website lain. 
                                Mengedit link undangan tidak mengastas namakan Ajakuy sangat dilarang.`,
                        type: 'alert-info'
                    },

                ]
            },
        ]
    },
    {
        name: 'Testimoni',
        list: [
            {
                title: 'Tentang',
                list: [
                    {
                        value: `Testimoni adalah bentuk review yang diberikan kepada pelanggan untuk ajakuy, setiap pembelian tema. Sifatnya tidak wajib, namun jika pelanggan bersedia mengisi testimoni pelanggan akan mendapat Poin Ajakuy.`,
                        type: 'text'
                    },
                ]
            },

            {
                title: 'Poin',
                list: [
                    {
                        value: `Poin Ajakuy bersifat pribadi, dan dapat bertambah setelah pelanggan memberikan testimoni ke undangan yang sudah dibeli. Poin ini dapat ditukarkan dengan promo khusus yang hanya bisa didapat dengan cara menukarkan poin. Poin hanya terkait pada diskon pembelian tema dalam website Ajakuy.`,
                        type: 'text'
                    },
                ]
            },
        ]
    }

]
