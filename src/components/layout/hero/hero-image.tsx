import HeroCard from "./hero-card";

export default function HeroImage() {
    return (
        <div className="flex items-end">
            <HeroCard imageUrl="/images/heroCardImage2.jpg" className="w-30 h-50 mr-[-1rem] mb-5 rounded-xl"/>
            <HeroCard imageUrl="/images/heroCardImage1.jpg" className="w-50 h-70 z-10 rounded-xl"/>
            <HeroCard imageUrl="/images/heroCardImage3.jpg" className="w-30 h-50 ml-[-1rem] mb-5 rounded-xl"/>
        </div>
    )
}