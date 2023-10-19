class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const movieList = [
    casinoRoyale,
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R")
];

const pgMovies = Movie.getPG(movieList);

pgMovies.forEach(movie => {
    console.log(`Title: ${movie.title}, Rating: ${movie.rating}`);
});
