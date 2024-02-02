import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" h-screen flex-col ">
      <Navbar />
      <Homepage />
    </main>
  );
}
