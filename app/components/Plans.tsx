import Paragraph from "./ui/Paragraph";
import db from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import ArrowLink from "./ui/ArrowLink";
import ScrollableImage from "./ui/ScrollableImage";
import PricesBox from "./PricesBox";

type Props = {
  services: ServicePlan[] | undefined;
};

const Plans = (props: Props) => {
  const { services } = props;
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
              <div className="">
                <PricesBox options={service.options} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Plans;
