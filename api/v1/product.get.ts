import { productData } from '../../data/product';

export default eventHandler(() => {

    return {
        code: 200,
        data: productData,
        errors: null,
        message: 'Data Berhasil diambil',
        success: true
    }
})
