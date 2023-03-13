export interface Page<T> {
    content: T[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    number_of_elements: number,
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

const page = -1, size = 15

export class DefaultPage<T> implements Page<T> {
    content: T[] = [];
    empty: boolean = true;
    first: boolean = true;
    last: boolean = false;
    number: number = 1;
    number_of_elements: number = 0;
    pageable: {
        offset: number; page_number: number; page_size: number; paged: boolean; sort:
            { sorted: boolean; unsorted: boolean; empty: boolean }; unpaged: boolean
    } = {
        offset: 1, page_number: page, page_size: size, paged: false, sort:
            {sorted: false, unsorted: false, empty: false}, unpaged: false
    };
    size: number = 10;
    sort: { sorted: boolean; unsorted: boolean; empty: boolean } = {
        sorted: false, unsorted: false, empty: false
    };
    total_elements: number = 1;
    total_pages: number = 0;

}

export const pageSize = 10
export const pageNumber = 1

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

