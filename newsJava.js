// Define object for whole page
// define array for stories
// define properties for storage

const newsPage = {};

newsPage.stories = [];

const headline = {
      headline1: "News Feed", 
      headline2: "Well Folks, He's At It Again In A NYC Subway Causing Terror!",
      date: "", 
      story: "",
      rating: "",
      involvement:"",
      pic1: "https://www.tomcatbrand.com/sites/g/files/oydgjc146/files/styles/scotts_product_thumbnail/public/asset_images/EU/products/TOMCAT/2016_Packshots/TOMCAT_KillContain_Mousetrap_Lrg.png?itok=g8MaxN8t",
      pic2:  "https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009__340.png",
      link1: "https://www.tomcatbrand.com/en-us/products?gclid=EAIaIQobChMI2fKMqYm92gIVh6_ICh2KRwKtEAAYASAAEgIwIfD_BwE&cmp=kid/Tomcat/Google_SEM/Brand/G_Tomcat_Brand_Do_CoreTerms_DTC/G_Tomcat_Brand_Do_CoreTerms_DTC&s_kwcid=AL!4676!3!230615643978!b!!g!!%2Btomcat&ef_id=Wno98wAAAJbM6yKh:20180415200222:s",
      link2: "https://weather.com",
      video: "https://www.youtube.com/embed/-ASF5VyIZTA"
}

    
      
const nycSubway = {
    headline1: "Tiny Mouse Causes Panic On NYC Subway",
    headline2: "",
    date: "April 10 2018 NYC",
    story: "New York City Police were called to the scene of a NYC subway to investigate a possible terror attack. The unidentified subject caused havoc and terror amongst NYC subway riders. Eyewitness Augustus Balasubramaniam filmed the whole event and said, 'I expected a rat. But the small chap... it was a bit of a relief really,' according to Pix 11. Balasubramaniam added that most passengers got off at Roosevelt Avenue to get onto new carriages, such was their horror, and that the people shown in the video were in fact the 'brave' ones.",
    rating: "NSSIA involvement rating: 10 out of 10.",
    involvement: "MAUSER MCQUESOTON AKA 'EL CHEEZPO' is definitely involved in this terror attack.",
    pic1: "",
    pic2: "",
    link1: "https://nypost.com/video/tiny-mouse-causes-panic-on-nyc-subway/",
    link2: "",
    video: ""
}

const sweden = {
    headline1: "Stash House In Sweden Covered Up As 'Mouse Cafe'",
    headline2: "",
    date: "Sweden March 28 2018",
    story:  "Along with everything else, now we have a mysterious street art group – appropriately named Anonymouse MMX – making mouse cafes. The roughly 1-foot by 2-foot storefronts are tucked into basement windows in Malmö, Sweden. They offer the city's small scampering residents an irresistible array of mouse delicacies – nuts, cheese, and the likes. 'It’s just too darn charming to imagine a world where mice lives parallel to ours but just slightly out of sight,' a representative of Anonymouse MMX told NSSIA.'They are built of things that we had laying around and also things we collected, like caps, lids from tin cans, matches, buttons, a lamp shade, Italian stamps etc.,' the representative continued. 'The idea was to use things mice themselves could have collected and reused.' Swedish police warn passerbys to not get near or tamper with the 'mouse cafe'. Swedish police chief stated that the 'mouse cafes' are possible store fronts for money laundering and other illegal mafia activities. And who is the number one suspect for Swedish Police? You guessed it .....MAUSER MCQUESOTON AKA 'EL CHEEZPO'.",
    rating: "NSSIA involvement rating: 8 out of 10.",
    involvement: "We can't prove that MAUSER MCQUESOTON AKA 'EL CHEEZPO' is involved, but it's highly likely he's the head of the artsy fartsy street art group Anonymouse MMX",
    pic1: "https://media.treehugger.com/assets/images/2016/12/mouse-cafe.jpg",
    pic2: "",
    link1: "",
    link2: "",
    video: "",
}

const mafia = {
    headline1: "Possible Ties To The Camorra Mafia With 'Contaminated Cheese'",
    headline2: "",
    date: "Italy March 17 2018",
    story: "The head of Italy's biggest producer of mozzarella cheese, nicknamed 'the Mozzarella King', was arrested after being accused of producing contaminated cheese and receiving money from the Camorra mafia. Police said Mr Mandara, who was photographed chomping on a cigar as he was led away by officers, was arrested on suspicion of mafia association and endangering public health. They said two tons of the company’s mozzarella may have been contaminated with minute ceramic fragments from a broken machine. The company was also accused of passing off ordinary provolone cheese as being of a more superior quality with false labelling. Following news of his arrest, Mr Mandara was expelled from the Consortium for the Promotion of Buffalo Mozzarella after an emergency meeting of its council, which described the allegations as 'very serious'.",
    rating: "NSSIA involvement rating: 9 out of 10.",
    involvement: "MAUSER MCQUESOTON AKA 'EL CHEEZPO' is definitely involved with the Camorra Mafia Family!",
    pic1: "",
    pic2: "",
    link1: "https://www.telegraph.co.uk/news/worldnews/europe/italy/9406507/Italys-Mozzarella-King-arrested-over-contaminated-cheese.html",
    link2: "",
    video: "",
}

function makeNewsArray (whichStory) {
    newsPage.stories.push(whichStory);
}

makeNewsArray(headline);
makeNewsArray(nycSubway);
makeNewsArray(sweden);
makeNewsArray(mafia);
 
for (let i = 0; i < newsPage.stories.length; i++) {
   console.log(newsPage.stories[i]);
}


function saveDatabase (databaseObject, nameOfStorage) {
    const stringifiedDatabase = JSON.stringify(databaseObject);
    localStorage.setItem(nameOfStorage, stringifiedDatabase);
}
saveDatabase(newsPage, "News Objects");






