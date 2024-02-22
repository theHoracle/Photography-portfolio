"use client";
import Link from "next/link";
import Image from "next/image";

import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import { ArrowUpRight } from "lucide-react";
import LeftRightButton from "../components/ui/LeftRightButton";
import db from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import ArrowLink from "./ui/ArrowLink";

type ServicePlan = {
  title: string;
  imgSources: string[];
  desc: string;
  options: {};
};
const Pricing = () => {
  const [services, setServices] = useState<ServicePlan[]>();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesArray: ServicePlan[] = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          servicesArray.push({
            title: docData.title,
            imgSources: docData.imgSources,
            desc: docData.desc,
            options: docData.options,
          });
        });
        setServices(servicesArray);
      } catch (error) {
        console.error("Error fetching services:", error);
        // Handle errors gracefully
      }
    };

    fetchServices();
  }, []);

  console.log(services);

  return (
    <div>
      <div className="border-t-2 border-border-primary py-8">
        <div className="flex items-start flex-col gap-4">
          <Paragraph variants="topic" className="text-3xl">
            {services?.[0].title}
          </Paragraph>
          <Paragraph className="text-accent-color">
            {services?.[0].desc}
          </Paragraph>
          <ArrowLink />
        </div>
        <div>
          <Image
            width={2000}
            height={2000}
            alt="e"
            src={services?.[0].imgSources[0] || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
