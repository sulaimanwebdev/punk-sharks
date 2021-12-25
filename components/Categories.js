import React from 'react'
import {useEffect, useState} from "react";

const Categories = () => {

    const [getdata, setgetdata] = useState([]);



  const fetchData = async () => {
           const response = await fetch("http://localhost:3000/api/categories");
           setgetdata(await response.json());

  }


          useEffect(() => {
            fetchData();

            }, []);
            
    return (
        <>

		<div className="topCategoryGrid grid w-full">
         <div className="font-bold opacity-80 text-xl">Type</div>
         <div className="font-bold opacity-80 text-xl">#</div>
         <div className="font-bold opacity-80 text-xl">More Examples</div>
		</div>



		<div className="mainContCategory">
			{
				getdata.map((currElement) =>{
					return(
						<div className="grid mainCategoryGrid">

			               <div className="font-bold opacity-80 text-xl">{currElement.category}</div>
                           <div className="font-bold opacity-80 text-xl">{currElement.numbers}</div>
                           <div className="font-bold opacity-80 text-xl">
						   <div className="flex">{ currElement.image.map((getImage) =>{
								   return(
									 <a href={getImage.openseaLink}><img src={getImage.imageLink} className="w-10" alt="Shark Image" /></a>
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
