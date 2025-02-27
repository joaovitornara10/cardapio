import { ProducType } from "@/types/ProductTypes";

type productProps = {
    product: ProducType
}

export default function Bebida({ product }: productProps) {
    return (
            <div className=" text-gray-300 w-full justify-between cursor-pointer">
                    
                    <div className=" font-bold w-full items-center ">
                        <div className="flex items-center justify-between text-xs">
                            <p className="  truncate  ">
                                {product.name}
                            </p>                            
                                <samp className=" text-gray-300 w-16 bg-orange-500 text-sm font-bold text-center p-1">
                                    R${product.price}
                                </samp>
                        
                        </div>
                    </div>
            </div>
    )
}
