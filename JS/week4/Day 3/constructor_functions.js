function Movie(Title,ReleaseDate){

this.Title = Title;
this.ReleaseDate = ReleaseDate;

this.getFullMovie = () =>{
return`The movie ${this.Title} was released in ${this.ReleaseDate}.`;
}
};

let movie = new Movie ('The Boys', '2024');

console.log(movie.getFullMovie());


