import Header from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { NewBooks } from "@/components/layout/new-books";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <body>
      <Header/>
      <main>
        <section>
          <Hero/>
        </section>
        <section>
          <NewBooks/>
        </section>
      </main>
    </body>
  );
}
