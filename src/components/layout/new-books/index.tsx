import { BookCarousel } from "./book-carousel";

export function NewBooks() {
    return (
        <div className="flex flex-col gap-8 px-10 py-10">
            <span className="text-4xl font-bold">Novidades fresquinhas</span>
            <span className="text-xl">Explore novas leituras com nossos livros mais recentes</span>
            <BookCarousel/>
        </div>
    )
}