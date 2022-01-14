export interface Site {
    id: number;
    attributes: siteAttributes;
}

interface siteAttributes {
    title: string,
    pages: { data: Page[] }
}

export interface Page {
    id: number;
    attributes: pageAttributes;
}

interface pageAttributes {
    title: string,
    content: any[],
}
