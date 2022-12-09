let country = {
    nameCountry: 'Uzbekistan',
    capitalCountry: 'Tashkent',
    nationalityCountry: 'uzbek',
    religionCountry: 'Islam',
    officialLanguageCountry: 'Uzbek',
    becameIndependentInCountry: 1991,
    telephoneCodeCountry: +998,
    currencyCountry: 'sum (UZS, code 860)',
    populationCountry: '34.92 million',
    areaCountry: '447,400 km²',
    largestCitiesCountry: [ 'Samarkand', 'Tashkent','Namangan'],
    internetDomainCountry: '.uz',
    formOfGovernmentCountry: 'presidential republic',
    codeIOCCountry: 'UZB',
    timezoneCountry: 'UTC+5',
    regionsCountry: ['Tashkent', 'Nukus', 'Andijan', 'Bukhara', 'Fergana', 'Jizzakh', 'Karshi', 'Navoi', 'Namangan', 'Samarkand', 'Termez', 'Gulistan', 'Urgench'],
    borderWithCountry: ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Afghanistan'],
}

let president = {
    fullNameA: 'Shavkat Miromonovich Mirziyoyev',
    nameA: 'Shavkat',
    surnameA: 'Mirziyoyev',
    ageA: 65,
    dayOfBirthA: 24,
    monthOfBirthA: 'July',
    yearOfBirthA: 1957,
    placeOfBirthA: 'Zaamin, Jizzakh region',
    vife: {
        fullNameB: 'Ziroathon Mahmudovna Khoshimova',
        nameB: 'Ziroathon',
        surnameB: 'Khoshimova',
        ageB: 65,
        dayOfBirthB: 04,
        monthOfBirthB: 'December',
        yearOfBirthB: 1957,
        placeOfBirthB: 'Kokand, Fergana region',
    },
    childrenA: ['Shahnoza', 'Saida', 'Miralisher']
}

let assigned = Object.assign({}, country, president)
let key = Object.keys(assigned)
let value = Object.values(assigned)
let arrAssigned = [].concat(key, value)

let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}
arrAssigned.filter(item => {
    if (typeof(item) === 'string') {
        types.string.push(item)
    } else if (typeof(item) === 'number') {
        types.number.push(item)
    } else if (typeof(item) === 'object') {
        types.object.push(item)
    } else {
        types.boolean.push(item)
    }
})
console.log(types);
