"use client"

import BookCard from "@/components/composite/book-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function BookCarousel() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const newBooks = [
        {
            id: 1,
            imageUrl: "/images/heroCardImage1.jpg",
            title: "O Homem de Giz",
            author: "C. J. Tudor",
            year: 2011
        },
        {
            id: 2,
            imageUrl: "/images/heroCardImage2.jpg",
            title: "Biblioteca da Meia Noite",
            author: "Matt",
            year: 2012
        },
        {
            id: 3,
            imageUrl: "/images/heroCardImage3.jpg",
            title: "Psicologia Financeira",
            author: "João",
            year: 2014
        }
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="mx-10"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {newBooks.map((book, index) => {
                    return (
                        <CarouselItem key={index} className="basis-auto pl-4">
                            <BookCard book={book}/>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}