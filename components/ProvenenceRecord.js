import React, {useState, useEffect} from 'react'

const ProvenenceRecord = () => {


  const [getdata, setgetdata] = useState([]);



  const fetchData = async () => {
           const response = await fetch("/api/sharks");
           setgetdata(await response.json());

  }


          useEffect(() => {
            fetchData();

            }, []);
            


    return (
        <>
        <div className="provenenceRecord">
         <div className="provenceGrid provenceGrid-1 pb-2">
         <div className="sharkID font-bold text-xl opacity-80">Shark ID</div>
          <div className="font-bold text-xl opacity-80">DNA</div>
          <div className="font-bold text-xl opacity-80">Opensea Link</div>
          <div className="font-bold text-xl opacity-80">Image</div>
         </div>






{
  getdata.map((currElement) =>{
    return(
<div className="provenceGrid provenceGrid-2 py-2">
         <div className="sharkID font-normal text-base opacity-80">{currElement.id}</div>
          <div className="font-normal text-base opacity-80">{currElement.dna}</div>
          <a href={currElement.openseaLink} target="_blank" className="font-normal text-blue-700 hover:text-blue-900 transition text-base opacity-80">View on Opensea</a>
          <a href={currElement.imageLink} target="_blank" className="font-normal text-blue-700 hover:text-blue-900 transition text-base opacity-80">View image</a>
         </div>


    )
  })
}
        

         </div>
        
            
        </>
    )
}

export default ProvenenceRecord
