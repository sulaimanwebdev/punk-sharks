import React, {useState, useEffect} from 'react'
const ProvenenceRecord = () => {


  const [getdata, setgetdata] = useState([]);


  
  const fetchData =  async () => {
           const response = await fetch("/api/sharks");
       
setgetdata(await response.json());


  }


          useEffect(() => {
            fetchData();

            }, []);
            


    return (
        <div className="provenenceRecord">
         <div className="provenceGrid provenceGrid-1 pb-2">
         <div className="sharkID font-bold provenenceRTitles text-base opacity-80">Shark ID</div>
          <div className="font-bold provenenceRTitles text-base opacity-80">DNA</div>
          <div className="font-bold provenenceRTitles text-base opacity-80">Opensea Link</div>
          <div className="font-bold provenenceRTitles text-base opacity-80">Image</div>
         </div>






{
  getdata.map((currElement) =>{
    return(
<div className="provenceGrid provenceGrid-2 py-2">
         <div className="sharkID font-normal text-base opacity-80">{currElement.edition}</div>
          <div className="font-normal text-base opacity-80">{currElement.dna}</div>
          <a href={`https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/${currElement.edition}`} target="_blank" className="font-normal text-blue-700 hover:text-blue-900 transition text-base opacity-80">View on Opensea</a>
          <a href={`https://gateway.pinata.cloud/ipfs/Qme4gVeMjq7QBHTikE3bUYHYb3gBCuzgdTyXsARCiTCx69/${currElement.edition}.png`} target="_blank" className="font-normal text-blue-700 hover:text-blue-900 transition text-base opacity-80">View image</a>
         </div>


    )
  })
}
        

         </div>
        
            
    )
}

export default ProvenenceRecord
