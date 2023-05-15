export interface DocsInter {
    name?: string,
    list?: {
        title?: string,
        list?: {
            value?: string | string[],
            type?: string,
        }[]
    }[]
}