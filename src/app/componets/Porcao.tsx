import { PorcaoType } from "@/types/PorcaoTypes";

type productProps = {
    product: PorcaoType
}

export default function Porcao({ product }: productProps) {
    return (
            <div className="flex p-1 text-gray-300 w-full justify-between cursor-pointer">
                    <div className=" relative basis-1/6 min-h-10 min-w-10 max-h-20 max-w-20  bg-cyan-600
                                    sm:max-h-28 sm:max-w-28:  "> batata
                    </div>

                    <div className="  basis-5/6 font-bold my-auto ml-2 w-full items-center ">
                    
                        <div className="flex items-center justify-between text-xs">
                            <p className=" ">
                                {product.name}
                            </p> 

                            <div className=" flex gap-0.5">
                                <samp className=" text-gray-300 bg-orange-500 text-sm font-bold text-center p-0.5">
                                    R${product.price1}
                                </samp>
                                <samp className=" text-gray-300 bg-orange-500 text-sm font-bold text-center p-0.5">
                                    R${product.price2}
                                </samp>
                            </div>
                        </div>

                    </div>
                </div>
    )
}
