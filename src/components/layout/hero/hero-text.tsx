import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function HeroText() {
    return (
        <>
            <span className="text-5xl font-bold">Explore o acervo da nossa biblioteca</span>
            <span className="text-xl">Encontre livros, acompanhe empréstimos e descubra novas leituras</span>
            <InputGroup className="bg-white w-100">
                <InputGroupInput className="placeholder:text-md" placeholder="Buscar por título, autor ou gênero..."/>
                <InputGroupAddon align="inline-end">
                    <SearchIcon size={40}/>
                </InputGroupAddon>
            </InputGroup>
        </>
    )
}