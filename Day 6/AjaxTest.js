$(document).ready(function(){
    $('#srch-btn').click(function (event){
        event.preventDefault();
        let searchText = $('#search-Input').val();
        getMovies(searchText);
    });
});

function getMovies(searchText){
    let containerMovie = $("#container-movie")
    let cat = " ";
    $.get("https://api.tvmaze.com/search/shows?q=" + searchText, function(data,status){
        data.map(element => {
            console.log(data);
            cat += `
                <div class="col">
                    <div class="card">
                        <img src="${element.show.image === null? null : element.show.image.medium}" class="img-fluid" alt="...">
                        <h5 class="card-title text-center">${element.show.name}</h5>
                        <p class="card-text text-center">${element.show.genres.length === 0? "no genre" : element.show.genres}</p>
                        <div class="card-body overflow-auto" style="height: 200px;">
                            <p class="card-text overflow-auto">${element.show.summary}</p>
                        </div>
                        <a href="#" class="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            `
            containerMovie.html(cat);
        });
    });
}