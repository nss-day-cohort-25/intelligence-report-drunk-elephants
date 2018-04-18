// Retreive Storage

const newsData = JSON.parse(localStorage.getItem("News Objects")); 

// Create fragment to attach div to, 

const frag = document.createDocumentFragment();

const article = document.querySelector("#mainArticle");



// Create div for Headline 

const divHeadline = document.createElement("div");
frag.appendChild(divHeadline);

// Main headline append to div
const headlineStory = document.createElement("h1");
headlineStory.textContent = newsData.stories[0].headline1;
divHeadline.appendChild(headlineStory);

// Main Headline 2
const headlineStory2 = document.createElement("h1");
headlineStory2.textContent = newsData.stories[0].headline2;
divHeadline.appendChild(headlineStory2);

// Link to Tomcat
const headLink1 = document.createElement("a");
headLink1.setAttribute("href", newsData.stories[0].link1);
headLink1.setAttribute("target", "_blank");
divHeadline.appendChild(headLink1);

// Link to Weather

const headLink2 = document.createElement("a");
headLink2.setAttribute("href", newsData.stories[0].link2);
headLink2.setAttribute("target", "_blank")
divHeadline.appendChild(headLink2);

// Pic Tomcat
const headPic1 = document.createElement("img");
headPic1.setAttribute("src", newsData.stories[0].pic1);
headPic1.setAttribute("width", "150px");
headPic1.setAttribute("height", "400px");
headLink1.appendChild(headPic1);

// Pic Weather
const headPic2 = document.createElement("img");
headPic2.setAttribute("src", newsData.stories[0].pic2);
headPic2.setAttribute("width", "130px");
headPic2.setAttribute("height", "130px");
headLink2.appendChild(headPic2);

// Youtube video
const headVid = document.createElement("iframe");
headVid.setAttribute("src", newsData.stories[0].video);
headVid.setAttribute("width", "930px");
headVid.setAttribute("height", "435px");
headVid.setAttribute("frameborder", "0");
divHeadline.appendChild(headVid);

// NYC story

const divnyc = document.createElement("div");
divHeadline.appendChild(divnyc);


const headNYC = document.createElement("h2");
headNYC.textContent = newsData.stories[1].headline1;
divnyc.appendChild(headNYC);


const dateNYC = document.createElement("h3");
dateNYC.textContent = newsData.stories[1].date;
divnyc.appendChild(dateNYC);

const blocknyc = document.createElement("blockquote");
divnyc.appendChild(blocknyc);

const parnyc = document.createElement("p");
parnyc.textContent = newsData.stories[1].story;
blocknyc.appendChild(parnyc);

const parRating = document.createElement("p");
parRating.textContent = newsData.stories[1].rating;
blocknyc.appendChild(parRating);

const parInvolve = document.createElement("p");
parInvolve.textContent = newsData.stories[1].involvement;
blocknyc.appendChild(parInvolve);

// Sweden story

const divSweden = document.createElement("div");
divHeadline.appendChild(divSweden);

const headSweden = document.createElement("h2");
headSweden.textContent = newsData.stories[2].headline1;
divSweden.appendChild(headSweden);


const dateSweden = document.createElement("h3");
dateSweden.textContent = newsData.stories[2].date;
divSweden.appendChild(dateSweden);

const swedenPic = document.createElement("img");
swedenPic.setAttribute("src", newsData.stories[2].pic1);
swedenPic.setAttribute("width", "700px");
swedenPic.setAttribute("height", "450px");
divSweden.appendChild(swedenPic);


const blockSweden = document.createElement("blockquote");
divSweden.appendChild(blockSweden);

const parSweden = document.createElement("p");
parSweden.textContent = newsData.stories[2].story;
blockSweden.appendChild(parSweden);

const ratingSweden = document.createElement("p");
ratingSweden.textContent = newsData.stories[2].rating;
blockSweden.appendChild(ratingSweden);

const involveSweden = document.createElement("p");
involveSweden.textContent = newsData.stories[2].involvement;
blockSweden.appendChild(involveSweden);


// Contaminated Cheese Story

const divCheese = document.createElement("div");
divHeadline.appendChild(divCheese);

const headCheese = document.createElement("h2");
headCheese.textContent = newsData.stories[3].headline1;
divCheese.appendChild(headCheese);


const dateCheese = document.createElement("h3");
dateCheese.textContent = newsData.stories[3].date;
divCheese.appendChild(dateCheese);

const blockCheese = document.createElement("blockquote");
divCheese.appendChild(blockCheese);

const parCheese = document.createElement("p");
parCheese.textContent = newsData.stories[3].story;
blockCheese.appendChild(parCheese);

const linkCheese = document.createElement("a");
linkCheese.setAttribute("href", newsData.stories[3].link1);
linkCheese.setAttribute("target", "_blank");
linkCheese.textContent = "Italy's 'Mozzarella King' arrested over 'contaminated cheese'";
divCheese.appendChild(linkCheese);




const ratingCheese = document.createElement("p");
ratingCheese.textContent = newsData.stories[3].rating;
blockCheese.appendChild(ratingCheese);

const involveCheese = document.createElement("p");
involveCheese.textContent = newsData.stories[3].involvement;
blockCheese.appendChild(involveCheese);



console.log(divHeadline);

article.appendChild(frag);
console.log(article);




// const mainBody = document.querySelector("body");

// mainBody.appendChild(frag);








