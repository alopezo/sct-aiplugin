// pages/api/search.js
import fetch from 'node-fetch'

export default async function handler(req, res) {
    const term = req.query.term;
    const modulesMap = {
        en: '900000000000207008',
        es: '449081005',
        da: '554471000005108',
        sv: '45991000052106', 
        fr: '11000241103',
        nl: '11000146104'
    }
    let language = 'en';
    let moduleId = '900000000000207008';
    if (req.query.language && modulesMap[language]) {
        language = req.query.language;
        moduleId = modulesMap[language];
    }
    const url = `https://snowstorm.ihtsdotools.org/fhir/ValueSet/$expand?filter=${term}&offset=0&count=10&language=${language}&displayLanguage=${language}&url=http%3A%2F%2Fsnomed.info%2Fsct%2F${moduleId}%3Ffhir_vs&_format=json`;
    const response = await fetch(url)
    const data = await response.json();
    res.status(200).json(data);
}
