import LayeredWave from "@/components/composite/layered-wave";
import HeroText from "./hero-text";
import HeroImage from "./hero-image";

export function Hero() {
    return (
        <>
            <div className="bg-primary p-20 flex items-center justify-between">
                <div className="flex flex-col gap-7 w-[40%]">
                    <HeroText/>
                </div>
                <HeroImage className="mr-20"/>
            </div>
            <LayeredWave className="top-[-70] overflow-x-hidden"/>
        </>
    )
}