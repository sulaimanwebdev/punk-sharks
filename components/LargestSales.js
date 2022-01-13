import React from 'react'

const LargestSales = () => {

    let Sharks = [
        {
            id: 1,
            image: "https://lh3.googleusercontent.com/XRko002ajAptxqg9uNEhxaKRAQdtvBK7ouaBz1HwmWNDcl4UNedy18fg201qsCCSa5T8wYDJu-VGU9NiwlFa71EnY46by3TlK1QE0Q=w600",
            index: "#45",
            price: "4.2K = ($4.2M)",
            date: "a month ago",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/45"

        },

        {
            id: 2,
            image: "https://lh3.googleusercontent.com/txU9CX3DRRomquprg0oimTCYLzwWT1-4RxuxcF0-FRxfSbrRl3I-LUPUW_3MW09LETl5IBriO0slCALP3YZ18Drtmy0ddE607FkWwg=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/7651"

        },

        {
            id: 3,
            image: "https://lh3.googleusercontent.com/EVA2pnnzDRdrL7M9DFJrEkij_Kz8_HDGuxXM-VoliTSbwVqce9up1aFQA3VX3YH-voJz57XpiHxsbyzR-DRggyfT9yM3a2uRx2JdeA=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/9986"
        },

        {
            id: 4,
            image: "https://lh3.googleusercontent.com/F4X9lXvwiaoQx2e17QoFyRMFNxY-s_lUBMvCsYdvVEG0abR1TzxbodcmAr56G0GcDnY_6fbdpytc44MWx0AVOc_vaAI0Bm_-0nr_=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8941"
        },

        {
            id: 5,
            image: "https://lh3.googleusercontent.com/_vgstNRkUWHpqY-IndxBN1wnVFHcaUt9jEsBkymKc-4n2k3XjZio1S-FMomtV1WwwlWTRgfeJD3UjvG6Ao8PLdRyZj9iTaMvazhh=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8942"
        },

        {
            id: 6,
            image: "https://lh3.googleusercontent.com/OXo7mM7XxvAw2fP9bko1iTE59SsjxzquV0KLmRr4DSRfyKev3V--7-OPApFwSoHyXX2FVZ-qESqk2APnCYqtK_Y9cpOmWSLWmDOaUA=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/8973"
        },

        {
            id: 7,
            image: "https://lh3.googleusercontent.com/dbbdd0flL1FYoTZ_FQ-K-XbLKGkql30jtdGBWaz8Lwcqimhq9mIqvkr3H4a1e-S9SURmKGA0mklqEUf7usklutD-5uGRrJ2LnBSgzg=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/9225"
        },


        {
            id: 8,
            image: "https://lh3.googleusercontent.com/dFkNXlVRBB5HErxH69orWuVZ2_bn1tl8OoG-BDadFLGDjtICDcBoFHGTQUikFFbAaytneu0cWLxeoCFMMmJmTkrB0t1y7w8g_gZy=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/88"
        },



        {
            id: 9,
            image: "https://lh3.googleusercontent.com/d88kTYV008MmG2mJz6QUcdN6lcdSkjPJQd5K2lXWNkgE8E9djaV5hrdQcWaw7ZXeeL51wgMD_eb28koQ-mKUPDzmCmus7oVIthcP6g=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/49"
        },



        {
            id: 10,
            image: "https://lh3.googleusercontent.com/bdVw9mUCTI0y5wkkoB8RJ_oPGm1JKxm7yDyUW4dI58dAsm2LIUgI-ZWF54kR5h-cb5K6-zLx2m4NwNaIqNfqK06-XPquRsZlkvaYQg=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/9969"
        },




        {
            id: 11,
            image: "https://lh3.googleusercontent.com/tD0PU8TLqKUDjeCxaLkQi0m7WBntBH9KMfmO0FPTh5298nuvbn9rb9Cfb9Z0yjg8e36lRGH8uWNqv9VZIFKn5UwGSfSv5kQzpVZKs-U=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/3030"
        },



        {
            id: 12,
            image: "https://lh3.googleusercontent.com/wRUIfeoRlF286dFV_H4Qn5kbN_jZruZygPdG2f3S5uDhQu-Epmq_PxJK2A6t7JZI_cUNGusDscLb0jMwz3fpNYJ2WeR2_rTwT9pDjQ=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/6"
        },




        {
            id: 13,
            image: "https://lh3.googleusercontent.com/1dz4VcAOV1y1rvVjIWnDoCM5cOaPmRCoM0TX4E0wiBnYWlqlhUczZuP1hGvzy8jUEN6yB9vFZZRrIIrvTJJKKbbj4plasiBdx8Wi=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/89"
        },



        {
            id: 14,
            image: "https://lh3.googleusercontent.com/iqh8Cja7ozPotdhvUme-4VpMD6HJU0m_a1BPyEPCViNuzi76osp1aoMxW4qEu3TnH8Q3QuctT0KZPTFzKVoUUz6atqExJ1naF470=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/258"
        },


        {
            id: 15,
            image: "https://lh3.googleusercontent.com/EPp3Hv9dytFJ-F-JKM9Hg3TvEjOizRKFeSD77Szim7wdReNpyI2aFF4QjYVQaevHo2uh__0BycymoM2lVRakKOP3SvehXS6fGWN895w=w305",
            index: "#7651",
            price: "4.2K = ($4.2M)",
            date: "20 March 2021",
            url: "https://opensea.io/assets/matic/0xb536efc10864408a2f491d1a6dfb0e76567c6659/1520"
        }




        

    ]
    return (
        <>
        <div className="grid largestSalesGrid grid-cols-5 gap-10">
{
    Sharks.map((currentShark) =>{
        return(
            <a href={currentShark.url}>
             <img src={currentShark.image} alt="shark image" className="rounded-md rounded-b-none" />
             <div className="border-gray-300 border-2 border-t-0 rounded-md rounded-t-none px-3 pt-4 pb-4">
             <div className="font-bold">{currentShark.index}</div>
             <div>{currentShark.price}</div>
             <div>{currentShark.date}</div>

             </div>

            </a>
        )
    })
}
        </div>           
        </>
    )
}

export default LargestSales
