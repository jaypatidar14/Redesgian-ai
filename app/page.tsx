import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <Navbar />
     
      <About />
    </main>
  );
}
