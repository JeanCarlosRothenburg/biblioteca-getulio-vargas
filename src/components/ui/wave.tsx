type WaveProps = {
    color: string
    opacity?: number
    className: string
}

export default function Wave({color, className, opacity = 1}: WaveProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={`scale-y-[-1] ${className}`}
        >
            <path
                fill={color}
                fillOpacity={opacity}
                d="M0,128L30,106.7C60,85,120,43,180,58.7C240,75,300,149,360,160C420,171,480,117,540,117.3C600,117,660,171,720,176C780,181,840,139,900,128C960,117,1020,139,1080,160C1140,181,1200,203,1260,197.3C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>
    )
}