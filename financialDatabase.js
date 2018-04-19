// Array of Financial Arrays
const financialDatabase = {}


// Array of Section Headers
financialDatabase.sectionHeaders = ["I. Banks", "II. Businesses", "III. Money Laundering", "IV. Blackmailed Officials"]


// Array of I. Banks objects
financialDatabase.banks = [
    {
        name: "First Mousetional Bank of Swisscheezertland",
        account: "Account: 478396185738926",
        funds: "Estimated Funds: 3000 Gold Cheese Wheels"
    },
    {
        name: "Cheesetizens Wheel Bank of Morocco",
        account: "Account: 8675309747320",
        funds: "Estimated Funds: 6.2 Million Disney Dollars"
    }
]


// Array of II. Businesses objects
financialDatabase.business = [
    {
        name: "Cheez Whiz Industries",
        products: "Edible Canned Cheese Sludge",
        revenue: "100 Million USD"
    },
    {
        name: "Gouda Times Inc.",
        products: "Hipster Trash Bars for Yuppies",
        revenue: "225 Million USD"
    }
]


// Array of III. Money Laundering objects
financialDatabase.launder = [
    {
        name: "Zen Nail Spa",
        location: "Albuquerque, NM",
        type: "Nail Salon",
        source: "Crystal Meth",
        amount: "500 Million USD"
    },
    {
        name: "Black Market Colombian Peso Exchange",
        location: "Columbia and Remote Locations",
        type: "Importing U.S. Goods and 'Smurfing'",
        source: "Illegally Imported U.S. Goods",
        amount: "900 Million USD"
    },
    {
        name: "Chuck-E-Cheeses's",
        location: "Irving, TX (Headquarters)",
        type: "Children's Party and Pizza Establishment",
        source: "Middle Class Families",
        amount: "886 Million in 2017"
    }
]


// Array of IV. Blackmailed Officials objects
financialDatabase.blackmail = [
    {
        name: "Donald 'The Best LOL' Trump",
        country: "USA"
    },
    {
        name: "Kim 'The Jung Mung' Un",
        country: "North Korea"
    },
    {
        name: "Vlad 'The Count' Poutine",
        country: "Russia"
    }
]

// Push all information to local storage
localStorage.setItem("Financial Database", JSON.stringify(financialDatabase))

