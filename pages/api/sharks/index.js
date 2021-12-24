// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sharks from './sharks-data.json';
export default function helloAPI(req, res) {
if(req.method === 'GET'){
  res.status(200).json(Sharks)

}


else{
  res.status(401).json('Only "GET" request are allowed')
}


}
