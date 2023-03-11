export type contentTypes = {
    id: string,
    title: string,
    description: string,
    imagePath: string,
    bannerDetails: string[],
    jobs: string[],
    locations: string[],
    isActive: boolean,
    link: string,
    seq: number
}

export type paginationTypes = {
    page: number,
    perPage: number,
    next: number,
    previous: number,
    totalItem: number,
    totalPage: number,
}

export interface payloadBanner {
    success: boolean;
    message: string;
    data: {
        content: contentTypes[],
        pagination: paginationTypes,
    };
}

export interface itemBannerProps {
    url: string;
    imageUrl: string;
}

export interface bannerProps {
    data: contentTypes[]
}