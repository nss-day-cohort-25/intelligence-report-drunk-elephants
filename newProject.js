
const intReport ={}
//total object//

const objStore= {} 
//array object//
//objects//
objStore.alsoKnown = {
    alias:['Danger Mouse!',
     'WANTED:Danger Mouse!',
     'Country of Origin: Albania',
     'Also Known As',
     'Peromyscus maniculatus',
     'Stuart "The Mad Albanian" Little',
     'Vinny the Rat',
     "Teddy 'the Vermin' Marscapone",
     'Chevy Chase'],
     backGrdImg_src: 'jail.jpg'

}

objStore.imgArrest ={
    text: 'Last Arrest Photo:',
    image_src: 'mouse_jail.jpg'

}

objStore.knownAss ={
    text1: 'Known Associates',
    text2: 'Whiskers the Pirate',
    image_src: 'meerkat.jpg',
    backGrdImg_src: 'jail.jpg'
}

objStore.mouseEsc={
    text1: 'Surveillance Video of Escape',
    video_src:'https://www.youtube.com/embed/OThWc47dGsM?ecver=1',
    backGrdImg_src: 'jail.jpg'
}
//objects//

//push objects into array//
//push objects into array//


intReport.arrayKey = objStore
//name of total obj with a made up key equaling the array//


//function stringify to local storage
const saveDatabase = function (databaseObject, localStorageKey) {
    localStorage.setItem(localStorageKey,JSON.stringify(databaseObject));
}
//naming var for returning value from storage
saveDatabase(intReport, "mykey")






