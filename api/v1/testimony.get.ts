import { testimonyData } from '../../data/testimony';

export default eventHandler(() => {

    return {
        code: 200,
        data: testimonyData,
        errors: null,
        message: 'Data Berhasil diambil',
        success: true
    }
})
