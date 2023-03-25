export class Movie{
    
    constructor(public id: string,
                public title: string,
                public year: string,
                public  rated: string,
                public released: string,
                public runtime: string,
                public genre: string,
                public director: string,
                public writer: string,
                public  actors: string[],
                public  plot: string,
                public  language: string
                ){ };

}