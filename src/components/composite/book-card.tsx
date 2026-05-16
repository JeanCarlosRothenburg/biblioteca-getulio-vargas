import Image from "next/image"

type BookCardProps = {
    book: BookCard
}

export default function BookCard({book}: BookCardProps) {
    return (
        <div className="w-50 h-70 relative rounded-xl overflow-hidden group">
            <Image src={book.imageUrl} alt={"Capa do livro " + book.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent transition-all duration-300 group-hover:from-black group-hover:via-black/30"/>
            <div className="absolute bottom-0 left-0 pl-4 pb-3 flex flex-col gap-1.5">
                <span className="text-white text-lg font-semibold">{book.title}</span>
                <span className="text-white">{book.author}</span>
            </div>
        </div>
    )
}