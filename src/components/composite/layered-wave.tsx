import Wave from "../ui/wave"

type LayeredWaveProps = {
    className?: string
}
export default function LayeredWave({className}: LayeredWaveProps) {
    return (
        <div className={`relative h-100 ${className}`}>
            <Wave color="var(--color-primary-500)" className="absolute z-30 top-0 scale-x-130"/>
            <Wave color="var(--color-primary-200)" className="absolute z-20 top-18 left-50 scale-x-125"/>
            <Wave color="var(--color-primary-100)" className="absolute z-10 top-20 right-15 scale-x-120"/>
        </div>
    )
}