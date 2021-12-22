// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Sharks from '../sharks-data.json';
export default function helloAPI(req, res) {
  let {singleShark} = req.query;
  let shark = Sharks.find((shark) => shark.id === parseInt(singleShark));
  res.status(200).json(shark)


}
