export class Movie{
    id: string;
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string[];
    plot: string;
    language: string;

    constructor(id: string, title: string,
                year: string, rated: string,
                released: string, runtime: string,
                genre: string, director: string,
                writer: string, actors: string[],
                plot: string, language: string  ){
                    this.id=id;
                    this.title=title;
                    this.year=year;
                    this.rated=rated;
                    this.released=released;
                    this.runtime=runtime;
                    this.genre=genre;
                    this.director=director;
                    this.writer=writer;
                    this.actors=actors;
                    this.plot=plot;
                    this.language=language;

                };

}