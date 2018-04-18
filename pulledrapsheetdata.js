const loadDatabase = function(rapsheetdata){
    const databaseString = localStorage.getItem(rapsheetdata)
    return JSON.parse(databaseString)
}
const rapsheetdatabase = loadDatabase('rapsheetdata')

const rapElement = document.querySelector("#rapsheetlist")


const headline1 = document.createElement('h2')
headline1.className = "crimes1"
headline1.textContent = rapsheetdata.crimes[0].headline

rapElement.appendChild(headline1)

const list1 = document.createElement("ul")
list1.className = "unorderedList"

const list1Item = document.createElement('li')
list1Item.className = "listElements"
list1Item.textContent = rapsheetdata.crimes[0].crime1

const list2Item = document.createElement('li')
list2Item.className = "listElements"
list2Item.textContent = rapsheetdata.crimes[0].crime2

const list3Item = document.createElement('li')
list3Item.className = "listElements"
list3Item.textContent = rapsheetdata.crimes[0].crime3


rapElement.appendChild(list1)
list1.appendChild(list1Item)
list1.appendChild(list2Item)
list1.appendChild(list3Item)

console.log(list2Item)


const headline2 = document.createElement('h2')
headline2.className = "crimes2"
headline2.textContent = rapsheetdata.crimes[1].headline

rapElement.appendChild(headline2)

const list2 = document.createElement('ul')
list2.className = "unorderedList"


const list1Item1 = document.createElement('li')
list1Item1.className = "listElements"
list1Item1.textContent = rapsheetdata.crimes[1].crime1

const list1Item2 = document.createElement('li')
list1Item2.className = "listElements"
list1Item2.textContent = rapsheetdata.crimes[1].crime2

const list1Item3 = document.createElement('li')
list1Item3.className = "listElements"
list1Item3.textContent = rapsheetdata.crimes[1].crime3

const list1Item4 = document.createElement('li')
list1Item4.className = "listElements"
list1Item4.textContent = rapsheetdata.crimes[1].crime4

rapElement.appendChild(list2)
list2.appendChild(list1Item1)
list2.appendChild(list1Item2)
list2.appendChild(list1Item3)
list2.appendChild(list1Item4)

const headline3 = document.createElement('h2')
headline3.className = 'crimes3'
headline3.textContent = rapsheetdata.crimes[2].headline

rapElement.appendChild(headline3)

const list3 = document.createElement('ul')
list3.className = "unorderedList"


const list2Item1 = document.createElement('li')
list2Item1.className = "listElements"
list2Item1.textContent = rapsheetdata.crimes[2].crime1

const list2Item2 = document.createElement('li')
list2Item2.className = "listElements"
list2Item2.textContent = rapsheetdata.crimes[2].crime2

rapElement.appendChild(list3)
list3.appendChild(list2Item1)
list3.appendChild(list2Item2)

const headline4 = document.createElement('h2')
headline4.className = 'crimes4'
headline4.textContent = rapsheetdata.crimes[3].headline

rapElement.appendChild(headline4)

const list4 = document.createElement('ul')
list4.className = "unorderedList"


const list3Item1 = document.createElement('li')
list3Item1.className = 'listElements'
list3Item1.textContent = rapsheetdata.crimes[3].crime1

rapElement.appendChild(list4)
list4.appendChild(list3Item1)

const headline5 = document.createElement('h2')
headline5.className = 'crime5'
headline5.textContent = rapsheetdata.crimes[4].headline

rapElement.appendChild(headline5)

const list5 = document.createElement('ul')
list5.className = "unorderedList"


const list4Item1 = document.createElement('li')
list4Item1.className = 'listElements'
list4Item1.textContent = rapsheetdata.crimes[4].crime1

const list4Item2 = document.createElement('li')
list4Item2.className = 'listElements'
list4Item2.textContent = rapsheetdata.crimes[4].crime2

rapElement.appendChild(list5)
list5.appendChild(list4Item1)
list5.appendChild(list4Item2)