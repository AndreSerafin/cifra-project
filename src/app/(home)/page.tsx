import { ChevronDown, Search } from "lucide-react";
import { Input } from "../components/input";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { Product } from "./product/types/products";

async function fetchProduts(){
    const request = await api.get<Product[]>('/products')

    return request.data
}

export default async function Home() {

    const products = await fetchProduts()    
    
    return( 
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
            <div>
                <p className="text-slate-500">Endereço</p>
                <p className="text-xl flex items-center gap-2">Av.Universitária, 200 
                    <span className="text-green-600">
                        <ChevronDown/>
                    </span>
                </p>
            </div>

            <Input placeholder="Buscar produto..." iconEnd={Search}/>

            <div className="flex gap-4 ">
                <div className="flex flex-col gap-2 text-center">
                    <div className="bg-white col-span-1 p-2 flex-1 flex flex-col items-center rounded-md">
                        <Image src={'/highlights_day/banana.png'} alt="" width={60} height={60}/>
                    </div>
                    <p>Bebidas</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="bg-white col-span-1 p-2 flex-1 flex flex-col items-center rounded-md">
                        <Image src={'/highlights_day/banana.png'} alt="" width={60} height={60}/>
                    </div>
                    <p>Bebidas</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="bg-white col-span-1 p-2 flex-1 flex flex-col items-center rounded-md">
                        <Image src={'/highlights_day/banana.png'} alt="" width={60} height={60}/>
                    </div>
                    <p>Bebidas</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="bg-white col-span-1 p-2 flex-1 flex flex-col items-center rounded-md">
                        <Image src={'/highlights_day/banana.png'} alt="" width={60} height={60}/>
                    </div>
                    <p>Bebidas</p>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="bg-white col-span-1 p-2 flex-1 flex flex-col items-center rounded-md">
                        <Image src={'/highlights_day/banana.png'} alt="" width={60} height={60}/>
                    </div>
                    <p>Bebidas</p>
                </div>
            </div>
        </div>

            <h2 className="font-medium text-lg">Destaques do dia</h2>
            <div className="grid grid-cols-2 gap-4">
                {products.map((item) => <Link key={item.id} href={`/product/${item.slug}`} className="bg-white col-span-1 px-6 py-8 flex-1 flex flex-col gap-2 rounded-md">
                    <Image className="self-center" src={item.image} alt="" width={90} height={60}/>
                    <span>
                        <p className="font-medium text-slate-700">{item.title}</p>
                        <p className="text-slate-600">1kg</p>
                    </span>
                    <div className="flex justify-between items-center">
                        <span className="text-emerald-600 text-lg font-bold">R$ 3,70</span>
                        <span className="bg-emerald-200 px-1 py-0.5 rounded-md font-bold text-emerald-700">ver mais</span>
                    </div>
                </Link>)}       
            </div>
            <div>
        </div></div>
    )
}