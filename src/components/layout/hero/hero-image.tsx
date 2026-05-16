import HeroCard from "./hero-card";

type HeroImageProps = {
    className?: string
}

export default function HeroImage({className}: HeroImageProps) {
    return (
        <div className={`flex items-end ${className}`}>
            <HeroCard imageUrl="/images/heroCardImage2.jpg" className="w-30 h-50 mr-[-1rem] mb-5 rounded-xl"/>
            <HeroCard imageUrl="/images/heroCardImage1.jpg" className="w-50 h-70 z-10 rounded-xl"/>
            <HeroCard imageUrl="/images/heroCardImage3.jpg" className="w-30 h-50 ml-[-1rem] mb-5 rounded-xl"/>
        </div>
    )
}