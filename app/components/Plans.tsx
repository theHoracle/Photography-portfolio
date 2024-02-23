"use client";
import Link from "next/link";
import Image from "next/image";

import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import { ArrowUpRight } from "lucide-react";
import LeftRightButton from "./ui/LeftRightButton";
import db from "@/firebase/config";
import { getDocs, collection, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import ArrowLink from "./ui/ArrowLink";
import ScrollableImage from "./ui/ScrollableImage";
import PricesBox from "./PricesBox";

type ServicePlan = {
  title: string;
  imgSources: string[];
  desc: string;
  options: Options[];
};
const Plans = () => {
  const [services, setServices] = useState<ServicePlan[]>();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesArray: ServicePlan[] = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          console.log(docData.title);
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
      {services &&
        services.map((service, index) => {
          return (
            <div key={index}>
              <div className="border-t-2 flex flex-col md:flex-row  md:justify-between  border-border-primary py-3 gap-4">
                <div className="flex items-start md:w-2/5 flex-col gap-8 my-4">
                  <Paragraph variants="topic" className="text-3xl">
                    {service?.title}
                  </Paragraph>
                  <Paragraph className="text-accent-color">
                    {service.desc}
                  </Paragraph>
                  <ArrowLink />
                </div>
                <div className="md:w-3/5">
                  <ScrollableImage imgArray={service.imgSources} />
                </div>
              </div>
              <div className="border-t-2 border-border-primary py-6 px-4">
                <PricesBox options={service.options} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Plans;
