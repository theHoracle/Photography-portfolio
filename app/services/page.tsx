"use client";
import db from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import Navbar from "../components/Navbar";
import PageIntro from "../components/PageIntro";
import { useEffect, useState } from "react";

type Plans = {
  img: string;
  title: string;
  intro: string;
  plans: object;
};

export default function Services() {
  const [servicePlan, setServicePlan] = useState<Plans[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      onSnapshot(collection(db, "servicesPricing"), (snapshot) => {
        // Access the array of DocumentSnapshot objects
        const docs = snapshot.docs;
        // Extract document data from each DocumentSnapshot
        const newServicePlans = docs.map((doc) => doc.data() as any);

        console.log(docs);
        // Update state with the extracted data
        setServicePlan((current) => [...current, ...newServicePlans]);
      });
    };

    fetchInfo();
  }, []);
  console.log(servicePlan);
  return (
    <div>
      <Navbar />
      <div className="mx-6">
        <PageIntro
          page="services"
          head="Diverse Photography Offerings"
          note="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe nesciunt facilis vitae et porro facere mollitia quia culpa fuga id repellendus, quam numquam, aliquid impedit fugiat officia totam in."
        />
        <div></div>
      </div>
    </div>
  );
}
