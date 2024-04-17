import StarRating from "./StarRating";

export default function Prod({ title, description, price, rating, thumbnail }) {
    return (
        <>
            <div className="border my-2 rounded-md px-4 py-12 flex text-left">
                <img src={thumbnail} alt="" className='rounded-full w-20 h-20 mr-4' />
                <div>
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between items-center'>
                        <p className="font-bold text-2xl">{price}$</p>
                        <StarRating stars={rating} />
                    </div>
                </div>
            </div>
        </>
    )
}
