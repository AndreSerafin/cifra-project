import { Search } from "lucide-react";
import { ElementType, InputHTMLAttributes } from "react";
import * as colors from "tailwindcss/colors" 

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    iconEnd?: ElementType
}

export function Input({ iconEnd: IconEnd, ...rest } : Props) {
    return (
        <div className="flex bg-white pr-4 items-center rounded-md"> 
            <input className="group bg-transparent pl-2 outline-none flex-1 h-14" {...rest}/>
           {IconEnd && <IconEnd class="text-emerald-600" color={colors.emerald[600]} />}
        </div>
    )
}