import { carouselData } from '../../data/carousel';

export default eventHandler(() => {
    return {
        code: 200,
        data:carouselData,
        errors: null,
        message: 'Data Berhasil diambil',
        success: true
    }
})
