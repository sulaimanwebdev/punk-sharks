// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sharks from './sharks-data.json';
import sharksdatacopy from './sharks-data copy.json';

export default function helloAPI(req, res) {
if(req.method === 'GET'){

let oo = Sharks.sort((a, b) => a.id - b.id);
 

  res.status(200).json(oo)

}




else{
  res.status(401).json('Only "GET" request are allowed')
}

 Sharks.sort((a, b) => a.totalReferredUser - b.totalReferredUser);
  console.log(Sharks);

}
