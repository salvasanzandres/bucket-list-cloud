export interface User {
    id?: string;
    name: string;
    email: string;
}

export class Movie {
    constructor(public name: string, public description: string, public stars: number,
                public actors: string, public director: string, public image: string,
                public year: string, public runtime: string, public genre: string, public country: string,
                public comment: string, public like: boolean, public id: string) {}
}


export enum SEARCH_STATUS {
    init,
    pending,
    loaded
}
