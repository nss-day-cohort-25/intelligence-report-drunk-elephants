const loadDatabase = function (arrayKey) {
    const databaseString = localStorage.getItem(arrayKey)
    return JSON.parse(databaseString)

}
const pageVariable = loadDatabase('myKey')
const topPageElement = document.querySelector("#topPage")
//top list
const centerList = document.createElement('ul')
centerList.className = "topTarget"
const listItem1 = document.createElement('li')
listItem1.className = 'targetMe1'
listItem1.textContent = "Danger Mouse"
const listItem2 = document.createElement('li')
listItem2.className = 'targetMe2'
listItem2.textContent = "Wanted:Danger Mouse!"
const listItem3 = document.createElement('li')
listItem3.className = 'targetMe3'
listItem3.textContent = "Country of Origin: Albania"
const listItem4 = document.createElement('li')
listItem4.className = 'targetMe4'
listItem4.textContent = "Also Known As:"
const listItem5 = document.createElement('li')
listItem5.className = 'targetMe5'
listItem5.textContent = "Peromyscus maniculatus"
const listItem6 = document.createElement('li')
listItem6.className = 'targetMe6'
listItem6.textContent = "Stuart 'The Mad Albanian'Little"
const listItem7 = document.createElement('li')
listItem7.className = 'targetMe7'
listItem7.textContent = "Vinny the Rat"
const listItem8 = document.createElement('li')
listItem8.className = 'targetMe8'
listItem8.textContent = "Teddy 'the Vermin' Marscapone"
const listItem9 = document.createElement('li')
listItem9.className = 'targetMe9'
listItem9.textContent = "Chevy Chase"


const paraGraph1=document.createElement('p')
paraGraph1.textContent=objStore.imgArrest.text

const picOne = document.createElement('img');
picOne.setAttribute('src', 'mouse_jail.jpg');
picOne.setAttribute('class', 'mousePic1')
const divX = document.getElementById('x')
paraGraph1.setAttribute('class', 'paraOne')

const paraTwo = document.createElement('p')
paraTwo.setAttribute('class', 'paraTwo');
paraTwo.textContent=objStore.knownAss.text1
const picTwo = document.createElement('img')
picTwo.setAttribute('src','meerkat.jpg');
picTwo.setAttribute('class', 'picTwo');
const youTube = document.createElement('iframe')
youTube.setAttribute('src','https://www.youtube.com/embed/OThWc47dGsM?ecver=1');
youTube.setAttribute('width', '1300px');
youTube.setAttribute('height','500');
const paraThree = document.createElement('p')
paraThree.setAttribute('class','paraThree')
paraThree.textContent = "Whiskers the Pirate"





//append
topPageElement.appendChild(centerList);
centerList.appendChild(listItem1);
centerList.appendChild(listItem2);
centerList.appendChild(listItem3);
centerList.appendChild(listItem4);
centerList.appendChild(listItem5);
centerList.appendChild(listItem6);
centerList.appendChild(listItem7);
centerList.appendChild(listItem8);
centerList.appendChild(listItem9);


divX.appendChild(paraGraph1);
divX.appendChild(paraTwo);
divX.appendChild(paraThree);
divX.appendChild(picTwo);

divX.appendChild(picOne);




divX.appendChild(youTube);











