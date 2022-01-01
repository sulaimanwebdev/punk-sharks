// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sharks from './sharks-data.json';

export default function helloAPI(req, res) {
if(req.method === 'GET'){

let SortData = Sharks.sort((a, b) => a.edition - b.edition);
 

  res.status(200).json(SortData)

}




else{
  res.status(401).json('Only "GET" request are allowed')
}



}
