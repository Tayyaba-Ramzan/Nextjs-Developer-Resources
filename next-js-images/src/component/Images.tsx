import Image from "next/image";
import nextjs from "../../public/nextjs.png";

export default function Images() {
    return (
        <>
            <div>
                <Image 
                    src={nextjs} 
                    alt="Next.js Logo" 
                    width={300} 
                    height={300}
                />
            </div>
        </>
    );
}
