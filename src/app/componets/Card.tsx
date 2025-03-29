//import ProductImage from "@/app/componets/ProductImage";
import { ProducType } from "@/types/ProductTypes";

type productProps = {
    product: ProducType
}
export default function Card({ product }: productProps) {
    return (
        <div className=" flex font-bold flex-col text-gray-300 sm:items-center cursor-pointer min-h-8 min-w-72  ">

            <div className=" w-full text-sm " >
                {(product.category === 'bebidas') ? (
                            <div className="flex items-center justify-between">
                                <p >
                                    {product.name}
                                </p>
                                <samp className=" w-16 bg-orange-500   p-1">
                                    R${product.price}
                                </samp>
                            </div>
                ) : (
                    <>
                        {(product.category === 'porcao') ? (
                            <div className="flex items-center justify-between ">
                                <p >
                                    {product.name}
                                </p>
                                <div className=" flex gap-0.5">
                                    <samp className=" bg-orange-500  text-center py-0.5">
                                        R${product.price}
                                    </samp>
                                    <samp className=" bg-orange-500  text-center py-0.5">
                                        R${product.price1}
                                    </samp>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between ">
                                    {(product.category === 'lancheCombo') ? (
                                        <div className=" flex flex-col items-start">
                                            <p className="   ">
                                                {product.name}
                                            </p>
                                            <p className=" text-xs  text-orange-400">
                                                1+coca ks +1batata combo
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p >
                                                {product.name}
                                            </p>
                                        </div>
                                    )}
                                <div >
                                    <samp className=" bg-orange-500  text-center p-1">
                                        R${product.price}
                                    </samp>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
            {(product.category === 'lanche' || 'lancheCombo') && (
                <div className=" text-xs  w-full p-1 sm:p-1">
                    <p >
                        {product.description}
                    </p>
                </div>
            )}

        </div>

    )
}

