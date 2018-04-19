// Function to Load Database saved in browser
const loadDatabase = function(financialDatabase) {

// Get the string version of the database
const databaseString = localStorage.getItem("Financial Database")

// Use JSON.parse() to convert the string back into an object
return JSON.parse(databaseString)
}

