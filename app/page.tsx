import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <div className="mx-6 ">
        <Homepage />
      </div>
    </main>
  );
}
