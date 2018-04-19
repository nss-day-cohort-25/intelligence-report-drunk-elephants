
const financialElement = document.querySelector("#financialDOM")


// const financial = {} is an OBJECT of ARRAYS for Database

const financialDOMBuilder = () => {

    for (let key in financialDatabase) {
        const element = financialDatabase[key];

        for (let x = 0; x < element.length; x++) {
            const el = element[x];
    
            //create section and headings
            const bankSection = document.createElement('section')
            const bankHeading = document.createElement('h2')
            bankHeading.textContent = el   
            
            //  Append Headings and Sections to DOM
            bankSection.appendChild(bankHeading)
            financialElement.appendChild(bankSection)

        }
        financialDatabase.banks.forEach((itemInArray) => { 
            const bankUL = document.createElement('ul')
            const bankLI = document.createElement('li')     
            bankLI.textContent = itemInArray    
    })
}
}


financialDOMBuilder()