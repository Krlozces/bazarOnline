import Truck from '../images/truck.png';
export default function Box() {
    return (
        <>
            <div className="container mx-auto flex justify-center">
                <img src={Truck} alt="Truck" className='w-1/2' />
            </div>
            <h1 className='font-extrabold text-center my-6 text-4xl'>Bazar Online</h1>
            <form action="" method="get">
                <label htmlFor="search"></label>
                <div className="relative">
                    <input type="text" name="search" id="search" placeholder="laptops, smartphones, ..." className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                </div>
                <button type="submit" className='border shadow-xl my-6 px-12 py-2 rounded hover:bg-slate-200'>Buscar</button>
            </form>
        </>
    )
}
