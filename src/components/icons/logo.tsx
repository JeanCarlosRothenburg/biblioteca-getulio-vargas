type LogoProps = {
    useDescription?: boolean
}

export default function Logo({useDescription = false}: LogoProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-15 h-17 bg-[url('/logos/brasao.png')] bg-center bg-cover bg-no-repeat"/>
            {useDescription && (
                <div className="top-0">
                    <p className="text-sm text-gray-900 tracking-widest">Prefeitura de Presidente Getúlio</p>
                    <p className="text-lg font-medium uppercase">Biblioteca Municipal Getúlio Vargas</p>
                </div>
            )}
        </div>
    )
}