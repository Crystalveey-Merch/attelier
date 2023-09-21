import { datas } from "../assets/data.js";
import { useParams } from 'react-router-dom';

const Productdes = () => {
    const item = datas.newItems[0] ;
  return (
    <div className="mt-40 px-20 flex justify-center" key={item.id}>
        <div className="border m-20 ">
            <img src={item.image}
            alt={item.title}
            style={{ height: "500px", width: "400px" }}

            >

            </img>
        </div>
        <div className="m-20" >
            <div className="text-black Aceh text-4xl ">{item.title}</div>
            <div className="text-3xl my-4">{item.price}</div>
            <div>
                <h1>Size:</h1>
            </div>
        </div>
    </div>
  )
}

export default Productdes