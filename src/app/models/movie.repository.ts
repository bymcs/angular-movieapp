import { Movie } from "./movie";

export class MovieRepository {

    private movies: Movie[];

    constructor() {
        this.movies =[
            
            {id:1, title:"film1", description: "film1 açıklama", imageUrl: "1.jpeg"},
            {id:2, title:"film2", description: "film2 açıklama", imageUrl: "2.jpeg"},
            {id:3, title:"film3", description: "film3 açıklama", imageUrl: "3.jpeg"},
            {id:4, title:"film4", description: "film4 açıklama", imageUrl: "4.jpeg"},
            {id:4, title:"film4", description: "film4 açıklama", imageUrl: "4.jpeg"}
        ]
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getMovieByIId(id:number) : Movie {
        return this.movies.find(i=>i.id==id)
    }




}