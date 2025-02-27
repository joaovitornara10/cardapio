import ProductImage from "@/app/component/ProductImage";
import { ProducType } from "@/types/ProductTypes";

type productProps = { 
    product: ProducType
}

export default function ComboLanche({ product }: productProps) {
    return (
        <div className=" flex flex-col gap-0.5 text-gray-300 w-full justify-between cursor-pointer">
        <div className="flex">
            <div className=" relative basis-1/6 min-h-10 min-w-10 max-h-20 max-w-20 
            sm:max-h-28 sm:max-w-28:  ">
                <ProductImage product={product} fill />
            </div>

            <div className="  basis-5/6 my-auto ml-2 w-full items-center ">
                <div className="flex items-center justify-between text-xs">
                    <div>
                        <p className="  truncate font-bold  ">
                            {product.name}
                        </p>
                        <p className=" text-xs text-orange-400">1+refri lata +1batata combo</p>
                    </div>
                    
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

    )
}
