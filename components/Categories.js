import React from 'react'
import {useEffect, useState} from "react";

const Categories = () => {

    const [getdata, setgetdata] = useState([]);



  const fetchData = async () => {
           const response = await fetch("/api/categories");
           setgetdata(await response.json());

  }


          useEffect(() => {
            fetchData();

            }, []);
            
    return (
        <>

		<div className="topCategoryGrid grid w-full border-b pb-7  border-gray-300">
         <div className="font-bold opacity-70 text-xl ">Type</div>
         <div className="font-bold opacity-70 text-xl ">#</div>
         <div className="font-bold opacity-70 text-xl ">More Examples</div>
		</div>



		<div className="mainContCategory w-full">
			{
				getdata.map((currElement) =>{
					return(
						<div className="border-b  border-gray-300" key={currElement.id}>
							<div className="grid mainCategoryGrid">
             <div className="font-bold text-xl py-2 flex items-center text-orange-400">{currElement.category}</div>
             <div className="font-bold opacity-70 text-xl py-2 flex items-center">{currElement.numbers}</div>
             <div className="flex py-1">{ currElement.image.map((getImage) =>{
		return(
		  <a href={getImage.openseaLink} key={getImage.openseaLink} target="_blank" className="sharkCategoryImage relative block"><img src={getImage.imageLink} alt="Shark Image" /></a>
		)
	})
 }
 </div>


</div>
						</div>
					)
				})
			}
		</div>

        </>
    )
}

export default Categories
