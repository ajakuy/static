import type { DocsInter } from '../../../data/docs/type'

export const dataDoc: DocsInter[] = [
    {
        name: 'Cara Beli',
        list: [
            {
                title: 'Buat akun terlebih dulu',
                list: [
                    {
                        value: `Untuk dapat melakukan proses pembelian, kamu harus terdaftar. Pendaftaran cukup menggunakan email dan mengatur kata sandi.`,
                        type: 'text'
                    },
                ]
            },
            {
                title: 'Pilih tema undangan',
                list: [
                    {
                        value: `Setelah berhasil mendaftarkan akun kamu dapat melihat daftar tema yang tersedia, kamu juga dapat melakukan pencarian tema.
                        Klik tombol beli untuk memasukan tema ke dalam keranjang, maka akan muncul notif angka pada menu keranjang.`,
                        type: 'text'
                    },
                ]
            },
            {
                title: 'Checkout',
                list: [
                    {
                        value: `Pada halaman keranjang, kamu akan melihat tema yang sudah kamu pilih. Di sini kamu daapat menghapus tema, 
                        jika ingin melanjutkan klik centeng chckout, lalu klik tombol lanjut.`,
                        type: 'text'
                    },
                    {
                        value: `Di halaman berikutnya terdapat jenis pembayaran, untuk saat ini hanya tersedia via Manual. Klik tombol manual,
                        lalu klik lanjut.`,
                        type: 'text'
                    },
                    {
                        value: `Tahap selanjutnya adalah kamu harus mentransfer pembayaran melalui daftar transaksi yang tersedia, kemudian upload buktinya transfernya 
                        di tempat yang sudah disediakan. Pengecekan akan dilakukan oleh admin.`,
                        type: 'text'
                    },
                    {
                        value: `Tahap terakhir kamu hanya perlu menekan tombol submit, transaksi akan diproses, kamu juga akan mendapatkan kuitansi pembayaran melalui e-mail.`,
                        type: 'text'
                    },
                    {
                        value: `Untuk memeriksa status transaski kamu dapat pergi ke menu transaksi`,
                        type: 'text'
                    },
                ]
            },
            {
                title: 'Bantuan',
                list: [
                    {
                        value: `Jika kamu merasa proses menunggu konfirmasi admin terlalu lama, atau terdaapat masalah saat mengupload bukti transfer,
                        kamu dapat menghubungi admin lewat whatsapp yang sudah disediakan di halaman transaksi.`,
                        type: 'text'
                    },
                ]
            },
        ]
    },
]
