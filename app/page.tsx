import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col ">
      <Navbar />
      <div className="mx-6 md:mx-8 lg:mx-10">
        <Homepage />
      </div>
    </main>
  );
}
