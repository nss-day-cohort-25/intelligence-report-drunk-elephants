const rapsheetdata ={}

rapsheetdata.crimes = []




const allegedCrimes = {
   headline: 'Alleged Crimes',
    crime1:'Conspiracy to commit corporate espionage.',
    crime2:"Conspiracy to poison rival manugacturers cheese supplies.",
    crime3:"Trasporting illegal cheese across international borders.",
    crime4:""
}
const convictions = {
    headline:"Convictions",
    crime1: "Destruction to private property.",
    crime2:"Tax evasion.",
    crime3:"Smuggling controlled substances across international borders.",
    crime4:"Escape from Prison."
    }
const prisonsIncarceratedIn = {
    headline:"Prisons Incarcerated In",
    crime1:"Ait Melloul Prison in Morocco from 2002 to 2004.",
    crime2:"Stiftung Satis in Switzerland from 2009 to 2014.(Escaped in 2010)",
    crime3:"",
    crime4:""

}
const witnesses = {
    headline:"Witnesses",
    crime1:"Various fellow inmates at Stiflung Satis.",
    crime2:"",
    crime3:"",
    crime4:""
}
const victims = {
    headline:"Victims",
    crime1:"International Cheese Inc.",
    crime2:"36 people in Prague due to cheese poisoning.",
    crime3:"",
    crime4:""
}

rapsheetdata.crimes.push(allegedCrimes,convictions,prisonsIncarceratedIn,witnesses,victims)

const saveDatabase = function (database, rapsheetkey){
    const stringifiedDatabase = JSON.stringify(rapsheetdata)

    localStorage.setItem(rapsheetkey, stringifiedDatabase)

}



saveDatabase(rapsheetdata,"rapsheetdata")