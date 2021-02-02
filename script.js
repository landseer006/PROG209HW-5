/*In a separate JS file, main.js, write the code to handle the 2 button click events.  
•	One event creates a new object, calls that object’s validate function, and if that returns true, it adds that movie object to the array.  (Using push to add the movie to the array is an easy way, you don’t have to keep track of array pointers.) If validate returns false, the object is not added to the array, and the code shows a pop-up telling the user the data was not good. (JS has automatic garbage collection, no need to try and delete this bad object.)
•	The other button event cycles through each object in the array, and using each object’s .ToString() method, it lists all the movies out to the HTML page.  (You can use simple string concatenation, or a <ul> that you add <li> to, or a table, .. whatever you like.*/

let movieArray = [];

document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("movieList").disabled = true;
    document.getElementById("addMovie").addEventListener("click", function () {
        var movie = new Movie(
            document.getElementById("name").value,
            document.getElementById("quantity").value
        );
        if (!movie.isValid()) {
            alert("The title field is not empty, and the rating is an integer between 1 and 5." );
        } else {
            document.getElementById("movieList").disabled = false;
            movieArray.push(movie);
            document.getElementById("name").value = "";
            document.getElementById("quantity").value = "";
        }
    });

    document.getElementById("showMovie").addEventListener("click", function () {
        makeList();
    });

})


function makeList() {
    let myUl = document.getElementById('list');
    myUl.innerHTML = "";
    let ul = document.createElement('ul');
    document.getElementById('list').appendChild(ul);
    for (let i = 0; i < movieArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = movieArray[i];
    };
}
