import Header from "@/components/layout/header";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <body>
      <Header/>
    </body>
  );
}
