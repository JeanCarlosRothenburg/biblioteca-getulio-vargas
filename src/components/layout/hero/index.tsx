import LayeredWave from "@/components/ui/wave/layered-wave";
import HeroText from "./hero-text";
import HeroImage from "./hero-image";

export function Hero() {
    return (
        <>
            <div className="bg-primary px-20 py-20 flex items-center justify-between">
                <div className="flex flex-col gap-7 w-[40%]">
                    <HeroText/>
                </div>
                <HeroImage/>
            </div>
            <LayeredWave className="top-[-70]"/>
        </>
    )
}