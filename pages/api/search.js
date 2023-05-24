// pages/api/search.js
import cors from '../../middleware/cors';
import fetch from 'node-fetch'

export default async function handler(req, res) {
    // cors(req, res, async () => {
        console.log(req.query)
        const { term } = req.query;
        const response = await fetch(`https://snowstorm.ihtsdotools.org/fhir/ValueSet/$expand?filter=${term}&offset=0&count=1&language=en&url=http%3A%2F%2Fsnomed.info%2Fsct%2F900000000000207008%3Ffhir_vs&_format=json`)
        const data = await response.json()
        console.log(data?.expansion?.contains[0])
        res.status(200).json(data);
    // });
}
