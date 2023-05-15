import { dataDoc } from '../../../data/docs/provision';

export default eventHandler(() => {
    return {
        code: 200,
        data: dataDoc,
        errors: null,
        message: 'Data Berhasil diambil',
        success: true
    }
})
