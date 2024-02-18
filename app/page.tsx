import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="container flex flex-col overflow-hidden">
      <Navbar />
      <div className="mx-6 ">
        <Homepage />
      </div>
    </main>
  );
}
