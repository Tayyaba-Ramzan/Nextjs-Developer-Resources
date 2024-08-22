"use client"
import {useRouter} from "next/navigation" 
export default function LearnUseRouter(){
    const router=useRouter();
    console.log(router);
    
    return(
        <>
        <div>
            <h1>Use Router</h1>
            <button onClick={()=>router.push("/about")}>Go to About Page!</button>

        </div>
        </>
    )
}