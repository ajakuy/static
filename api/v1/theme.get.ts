import { themeData } from '../../data/theme';

export default eventHandler(() => {
    return {
        code: 200,
        data: themeData,
        errors: null,
        message: 'Data Berhasil diambil',
        success: true
    }
})


