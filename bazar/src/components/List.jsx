import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import Box from "./Box";
import Prod from "./Prod";

export default function List() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    // const { search } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/items?q=${search}`)
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
    }, [search]);

    return (
        <>
            <Box />
            <h2 className="font-bold">
                Resultado de búsqueda de {search}:
            </h2>
            <div className="container">
                {/* Se tiene que mapear los elementos y mostrarlos */}
                {data.map(item => (
                    <Prod 
                        key={item.id} 
                        title={item.title} 
                        description={item.description} 
                        price={item.price} 
                        rating={item.rating} 
                    />
                ))}
            </div>
        </>
    )
}
