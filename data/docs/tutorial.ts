import type { DocsInter } from '../../../data/docs/type'

export const dataDoc: DocsInter[] = [
    {
        name: 'Edit Langsung',
        list: [
            {
                title: 'Tentang',
                list: [
                    {
                        value: `Edit langsung merupakan fitur utama yang ketika mengedit tema, 
                                sekaligus melihat tema secara langsung.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_1',
                        type: 'img'
                    },
                    {
                        value: 'Fitur edit tema langsung lebih disarankan kepada pengguna komputer, jika kamu pengguna mobile disarankan mengedit tema melalui formulir.',
                        type: 'alert-info'
                    }
                ]
            },
            {
                title: 'Batas',
                list: [
                    {
                        value: `Batas atau garis titik-titik yang muncul ketika kamu mengedit tema adalah tanda bahwa
                                tempat tersebut dapat diedit, diluar batas tersebut kamu tidak bisa mengedit tema.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_2',
                        type: 'img'
                    },
                ]
            },
            {
                title: 'Tambah Data',
                list: [
                    {
                        value: `Tambah data di tandai dengan ikon ( + ) yang muncul ketika mengedit tema, fitur ini digunakan untuk menambahkan kolom data,
                                misalnya seperti menambah mempelai, alamat, kado, lokasi, dan sebagainya. Data yang ditambahkan memiliki jumlah maximal, ketika sudah 
                                mencapai batas maka ikon ( + ) tidak akan muncul.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_3',
                        type: 'img'
                    },

                ]
            },
            {
                title: 'Tanggal',
                list: [
                    {
                        value: `Tanggal hanya muncul pada bagian jadwal, berupa icon jam kecil, di sini memungkinkan kamu memilih tanggal untuk acaramu.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_4',
                        type: 'img'
                    },
                ]
            },
            {
                title: 'Switch',
                list: [
                    {
                        value: `Switch adalah tombol geser kecil, kamu dapat menyembunyikan beberapa tampilan dalam tema, yang mungkin
                            tidak ingin kamu tampilkan karena alasan pribadi, seperti kado, komentar, protokol, dan sebagainya.`,
                        type: 'text'
                    },
                    {
                        value: `Setelah disembunyikan, komponen akan terlihat transparan, yang menandakan kamu sudah menyembunyikannya.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_5',
                        type: 'img'
                    },
                ]
            },
            {
                title: 'Musik',
                list: [
                    {
                        value: `Untuk menambahkan musik, kamu dapat menekan tombol nada yang berada di pojok bawah.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_6',
                        type: 'img'
                    },
                    {
                        value: `Setelah ditekan, akan muncul form mengisi link youtube dari lagu yang kamu suka. 
                                Meskipun formatnya video tapi hanya akan memutar lagu. Kamu juga dapat mendengar pratinjau lagu dengan menekan tombol segitiga tersebut`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_7',
                        type: 'img'
                    },
                ]
            },
            {
                title: 'Animasi',
                list: [
                    {
                        value: `Kamu dapat menekan ikon seperti kotak, untuk memunculkan daftar animasi yang tersedia. 
                        Setelah ditekan akan muncul pratinjau tentang animasi tersebut.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_8',
                        type: 'img'
                    },
                    {
                        value: 'Tidak semua komponen memiliki animasi, hanya yang terdapat ikon kotak saja.',
                        type: 'alert-info'
                    }
                ]
            },
        ]
    },
    {
        name: 'Formulir',
        list: [
            {
                title: 'Tentang',
                list: [
                    {
                        value: `Formulir adalah fitur alternatif yang dapat kamu gunakan untuk mengedit tema, jika kamu merasa tidak nyaman mengedit tema secara langsung.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_10',
                        type: 'img'
                    },
                    {
                        value: `Fungsinya masih sama, yaitu untuk mengedit undangan. Hanya saja secara visual lebih rapi dan nyaman digunakan jika kamu terbiasa melihat kolom kata.`,
                        type: 'text'
                    },
                ]
            },
            {
                title: 'Letak',
                list: [
                    {
                        value: `Untuk membuka formulir, kamu dapat menekan ikon menu di pojok atas.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_11',
                        type: 'img'
                    },
                    {
                        value: `Lalu tekan tombol formulir.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_12',
                        type: 'img'
                    },
                ]
            },



        ]
    },
    {
        name: 'Pratinjau',
        list: [
            {
                title: 'Tentang',
                list: [
                    {
                        value: `Tombol pratinjau yang berada di sebelah formulir memungkinkan kamu melihat pratinjau dari undangan yang kamu edit beserta animasinya, tidak peduli status undanganmu publish atau unpublish.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_12',
                        type: 'img'
                    },
                ]
            },
        ]
    },
    {
        name: 'Publikasi',
        list: [
            {
                title: 'Tentang',
                list: [
                    {
                        value: `Publikasi berarti mengaktifkan undanganmu, agar dapat dilihat orang lain melalui website Ajakuy. Terdapat 3 tombol yang berhubungan dengan publikasi.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_12',
                        type: 'img'
                    },
                ]
            },
            {
                title: 'Tombol Publish',
                list: [
                    {
                        value: `Tombol hijau yang akan langsung mengubah status undanganmu dapat dilihat orang lain.`,
                        type: 'text'
                    },
                ]
            },
            {
                title: 'Tombol Unpublish',
                list: [
                    {
                        value: `Tombol merah yang dapat menyembunyikan undanganmu agar tidak dapat dilihat orang lain.`,
                        type: 'text'
                    },
                    {
                        value: 'tutorial_13',
                        type: 'img'
                    },
                ]
            },
            {
                title: 'Tombol Simpan',
                list: [
                    {
                        value: `Jika kamu tidak ingin mengubah status publish/unpublish kamu dapat menggunakan tombol ini yang berfungsi hanya untuk menyimpan data undangan.`,
                        type: 'text'
                    },
                ]
            },
        ]
    }

]
