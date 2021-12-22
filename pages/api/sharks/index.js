// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sharks from '../sharks-data.json';
export default function helloAPI(req, res) {
// if(req.method === 'GET'){
  res.status(200).json(Sharks)

// }


// if(req.method === 'POST'){
  // res.status(401).json('Only "GET" request are allowed')
// }

// if(req.method === 'DELETE'){
//   res.status(401).json('Only "GET" request are allowed')
// }


// if(req.method === 'PUT'){
//   res.status(401).json('Only "GET" request are allowed')
// }

// if(req.method === 'HEAD'){
//   res.status(401).json('Only "GET" request are allowed')
// }


// if(req.method === 'PATCH'){
//   res.status(401).json('Only "GET" request are allowed')
// }



// if(req.method === 'OPTIONS'){
//   res.status(401).json('Only "GET" request are allowed')
// }


}
