import { datas } from "../assets/data.js";
import { useParams } from 'react-router-dom';


const Productdes = () => {
    const products = datas.products ;
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found.</div>;
      }
  return (
    <div className="mt-40 px-20 flex justify-center" key={product.id}>
        <div className="border m-20 ">
            <img src={product.src}
            style={{ height: "500px", width: "400px" }}

            >

            </img>
        </div>
        <div className="m-20" >
            <div className="text-black Aceh text-4xl ">{product.name}</div>
            <div className="text-3xl my-4"><i className="fas fa-naira-sign"/>{product.price}</div>
            <div>
                <h1>Size:</h1>
            </div>
        </div>
    </div>
  )
}

export default Productdes