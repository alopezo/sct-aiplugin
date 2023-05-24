// cors.js
export default function cors(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    const allowedOrigins = ['http://localhost', 'http://localhost:3000', 'https://chat.openai.com']; // Add additional localhost ports if necessary
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    // res.setHeader(
    //   'Access-Control-Allow-Headers',
    //   'X-Requested-With, Access-Control-Allow-Headers, Content-Type, Authorization'
    // );
    
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    next();
  }
  