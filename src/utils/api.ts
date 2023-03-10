export interface Page<T> {
    content: T[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    number_of_elements: 20,
    pageable: {
        offset: number,
        page_number: number,
        page_size: number,
        paged: boolean
        sort: { sorted: boolean, unsorted: boolean, empty: boolean },
        unpaged: boolean
    },
    size: number,
    sort: { sorted: boolean, unsorted: boolean, empty: boolean },
    total_elements: number
    total_pages: number
}

export const emptyPage = {
    content: [],
    empty: false,
    first: true,
    last: false,
    number: 0,
    number_of_elements: 20,
    pageable: {
        offset: 0,
        page_number: 0,
        page_size: 20,
        paged: true,
        sort: {sorted: false, unsorted: true, empty: true},
        unpaged: false,
    },
    size: 20,
    sort: {sorted: false, unsorted: true, empty: true},
    total_elements: 35,
    total_pages: 2,
}

