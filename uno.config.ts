import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

import { main, secondary, normal } from './utils/font'

export default defineConfig({
    shortcuts: [
        ['btn-size-base', 'py-2 px-6 text-base'],
        ['btn-size-lg', 'py-2.5 px-6 text-base'],
        ['btn-size-sm', 'text-sm px-6 py-1.5'],
        ['btn-size-xs', 'text-xs px-5 py-1.5'],
        ['page-size', 'md:max-w-2xl max-w-full'],
        ['my-gradient', 'bg-gradient-to-bl from-pink-600 to-orange-400 dark:(bg-gradient-to-tl from-slate-700 via-slate-800 to-slate-900)'],
        ['my-bg-gradient', 'bg-gradient-to-bl from-pink-600 to-orange-400'],
        ['my-text-gradient', 'dark:(text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400)'],
        [/^btn-color-(.*)$/, ([, c]) => ` border border-${c}-600 dark:border-${c}-500 ring-${c}-300 dark:ring-${c}-600 bg-${c}-500 dark:bg-${c}-500 text-white hover:bg-${c}-700/95 hover:border-${c}-700 hover:dark:bg-${c}-700 hover:dark:border-${c}-600 !font-medium`],
        [/^btn-border-(.*)$/, ([, c]) => ` focus:outline-none focus:ring border border-${c}-600 dark:border-${c}-500 ring-${c}-300 dark:ring-${c}-700 text-${c}-600 dark:text-${c}-500 hover:bg-${c}-100 hover:dark:bg-${c}-700/20 hover:dark:border-${c}-600 !font-medium`],
        [/^btn-light-(.*)$/, ([, c]) => ` focus:outline-none border-none text-${c}-600 dark:text-${c}-500 bg-${c}-100 hover:bg-${c}-200 dark:bg-${c}-700/20 hover:dark:bg-${c}-700/30 !font-medium`],
    ],
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
        }),
        presetTypography(),
        presetWebFonts({
            fonts: { ...main, ...secondary, ...normal }
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
