import {data} from "@/db" 
import Cart from "./component/cart";
import { ProducType } from "@/types/ProductTypes";
import CardLanches from "./component/CardLanches";
import CardPorcao from "./component/CardPorcao";
import { useEffect, useState } from "react";



/* 
{products.map((product) => (
          <>{
              product.category === "lanche" && 
              <CardLanches key={product.id} product={product}/>
            }
          </>
        ))}
product.category === "lanche"
 if (product) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.id ===item.id) {
                                return { ...p,quantity:p.quantity ? p.quantity + 1 :1};
                            }
                            return p;
                        });
                        return {cart:updatedCart};
                    }else {
                        return {cart: [...state.cart, {...item,quantity:1}]}
                    }

async function getProducts():Promise<ProducType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
    apiVersion:'2025-01-27.acacia',
  }); 

  const products = await stripe.products.list();
  const formateProducts = await Promise.all(
    products.data.map(async (product) => {
      const price =await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        price:price.data[0].unit_amount,
        name:product.name,
        image :product.images[0],
        description: product.description,
        currency: price.data[0].currency,
      }
    })
  );*/


export default function Home() {
  const products = data
  /*
  const [lanches,setLanches] = useState<ProducType[]>([])

  useEffect(() => {
    products.map((product:ProducType)=> {
      if (product.category === "lanche") {
        setLanches(...lanches, product)
      }
    })
  
  }, []);
*/

  return (
    <div>
      <div className="  w-full justify-center text-center text-lg  ">
        <h2 className="text-gray-100  ">PEÇA O SEU</h2>
        <h2 className=" text-red-500">LANCHE</h2>
      </div>
      {products.map((product,index) => (                //lanches
          <>{
              product.category === "lanche" && 
              <CardLanches key={index} product={product}/>
            }

          </>
        ))}
        
      { products.map((product) => (
          <div>          
            {
              product.category === "porcao" && 
              <CardPorcao key={product.id} product={product}/>
            }
          </div>
        ))}

    </div>
    
  );
}
