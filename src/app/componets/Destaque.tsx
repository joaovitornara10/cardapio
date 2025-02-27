import ProductImage from "@/app/component/ProductImage";
import { ProducType } from "@/types/ProductTypes";

type productProps = {
    product: ProducType
}

export default function Bebida({ product }: productProps) {
    return (
            <div className=" p-1.5 text-gray-300 w-full justify-between cursor-pointer">
                <div className="flex">
                    <div className=" relative basis-1/6 min-h-10 min-w-10 max-h-20 max-w-20  bg-cyan-600
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
            </div>
    )
}
