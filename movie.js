/*In a separate JS file, movie.js, define a constructor function, Movie, which is used to define an object to hold the movie information.  The resulting objects should:
•	Have a property to hold the movie title (this is set when the constructor is called)
•	Have a property to hold the rating (this is set when the constructor is called)
•	Have a method to validate if the two fields are valid. (the title field is not empty, and the rating is an integer between 1 and 5). It returns true or false, it does not use an Alert.
•	Have a .toString() method that returns this objects title and rating as a single string*/


var Movie = function (pName, pRating) {
	this.name = pName;
	this.rating = pRating;
}

// adding methods to Movie defintion
Movie.prototype.isValid = function () {
	if (this.name == '') {
		return false;
	} else if (this.rating < 1 || this.rating > 5) {
		return false;
	} else {
		return true;
    }	
};

Movie.prototype.toString = function () {
	return this.name + " " + "with rating" +" "+ this.rating;
};