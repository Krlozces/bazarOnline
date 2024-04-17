import StarRating from "./StarRating";

export default function Product({ title, description, price, stock, brand, thumbnail, images, rating  }) {
    return (
        <>
            <div>
                <div className="flex">
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                        <img src={thumbnail} alt="" className="object-cover object-center rounded-full h-40 w-40" />
                    </div>
                    <div className="flex flex-col">
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">{title} - {brand}</h2>
                    <div className="flex justify-center my-4">
                        <div className="flex flex-col mr-4">
                            <h3 className="font-bold">
                                {price}$
                            </h3>
                            <p className="font-bold">
                                {stock} disponibles
                            </p>
                        </div>
                        <div className="ml-4">
                            <StarRating stars={rating} />
                        </div>
                    </div>
                </div>
                <p>
                    {description}
                </p>
            </div>
        </>
    )
}
