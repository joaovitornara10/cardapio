import ProductImage from "@/app/component/ProductImage";
import { ProducType } from "@/types/ProductTypes";

type productProps = {
    product: ProducType
}

export default function Lanche({ product }: productProps) {
    return (
        <div className=" flex flex-col text-gray-300  sm:items-center cursor-pointer ">

            <div className=" flex sm:flex-col sm:h-60 sm:w-60  sm:items-center sm:justify-center">
                <div className="relative flex-1 basis-1/6 min-h-10 min-w-10 m-1
                                sm:h-56 sm:w-56 sm:basis-5/6 ">

                    <ProductImage product={product} fill />
                </div>

                <div className=" basis-5/6 font-bold items-center justify-center my-auto sm:basis-1/6">
                    <div className="flex text-xs items-center justify-between sm:gap-5 sm:p-3">
                        <div>
                            <p className="  truncate ">
                                {product.name}
                            </p>
                            <p className=" text-xs text-orange-400">1+refri lata +1batata combo</p>
                        </div>
                        <div>
                            <samp className=" text-gray-300 bg-orange-500 text-sm font-bold  p-1">
                                R${product.price}
                            </samp>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" text-xs sm:w-60">
                <p >
                    {product.description}
                </p>
            </div>
        </div>

    )
}/**
 <div className=" flex flex-col gap-0.5 text-gray-300 w-full justify-between cursor-pointer
        shadow-lg h-96 p-5 
        ">
            <div className="flex gap-1">
                <div className=" relative basis-1/6 min-h-10 min-w-10 max-h-20 max-w-20 
                                sm:max-h-28 sm:max-w-28:  ">
                    <ProductImage product={product} fill />
                </div>

                <div className="  basis-5/6 font-bold my-auto ml-2 w-full items-center ">
                    <div className="flex items-center justify-between text-xs">
                        <p className="  truncate  ">
                            {product.name}
                        </p>

                        <div>
                            <samp className=" text-gray-300 bg-orange-500 text-sm font-bold text-center p-1">
                                R${product.price}
                            </samp>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-xs">
                <p >
                    {product.description}
                </p>
            </div>

        </div>

*/