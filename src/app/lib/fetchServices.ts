import db from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";

const fetchServices = async () => {
  // const [services, setServices] = useState<ServicePlan[]>();
  const services: ServicePlan[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "services"));
    const array: ServicePlan[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();

      array.push({
        title: docData.title,
        imgSources: docData.imgSources,
        desc: docData.desc,
        options: docData.options,
      });
    });
    services.push(...array);
  } catch (err) {
    console.log(err);
  }
  return services;
};

export default fetchServices;
