type HeroCardProps = {
    imageUrl: string
    className?: string
}

export default function HeroCard({imageUrl, className}: HeroCardProps) {
    return <div style={{backgroundImage: `url(${imageUrl})`}} className={`rounded-xl bg-cover bg-center bg-no-repeat hover:scale-110 ${className} shadow-lg`}/>
}