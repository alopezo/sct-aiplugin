// pages/api/search.js
import cors from '../../middleware/cors';
import fetch from 'node-fetch'

export default async function handler(req, res) {
    const ecl = req.query.ecl;
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
    let offset = 0;
    if (req.query.offset) {
        offset = req.query.offset;
    }
    let count = 10;
    if (req.query.count) {
        count = req.query.count;
    }
    const server1 = 'https://snowstorm.ihtsdotools.org';
    const server2 = 'https://snowstorm-lite.nw.r.appspot.com';
    const url = `${server2}/fhir/ValueSet/$expand?offset=${offset}&count=${count}&language=${language}&displayLanguage=${language}&url=http%3A%2F%2Fsnomed.info%2Fsct%2F${moduleId}%3Ffhir_vs=ecl/${ecl}&_format=json`;
    const response = await fetch(url)
    const data = await response.json();
    res.status(200).json(data);
}
