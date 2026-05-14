import Header from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <body>
      <Header/>
      <main>
        <section>
          <Hero/>
        </section>
      </main>
    </body>
  );
}
