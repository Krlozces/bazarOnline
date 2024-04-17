import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Box from "./Box";
import Product from "./Product";

function Details() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/api/items/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error al obtener los datos');
                }
                console.log(res);
                return res.json();
            })
            .then((data) => setData(data))
            .catch(error => {
                console.log("Hubo un error", error.message);
            });
    }, [id]);
    return (
        <>
            <Box />
            <div className="container">
                {/* Detalles del producto */}
                <Product 
                    key={data.id} 
                    title={data.title} 
                    brand={data.brand} 
                    description={data.description} 
                    stock={data.stock} 
                    price={data.price} 
                    images={data.images} 
                    thumbnail={data.thumbnail} 
                    rating={data.rating} 
                />
            </div>
            <button type="button" className="border shadow-xl my-6 px-12 py-2 rounded hover:bg-slate-200 border-b-2 border-slate-600">
                Comprar
            </button>
        </>
    )
}

export default Details