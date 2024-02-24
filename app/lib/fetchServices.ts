import db from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";

const fetchServices = async () => {
  // const [services, setServices] = useState<ServicePlan[]>();
  const services1: ServicePlan[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "services"));
    const array: ServicePlan[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      console.log(docData.title);
      array.push({
        title: docData.title,
        imgSources: docData.imgSources,
        desc: docData.desc,
        options: docData.options,
      });
    });
    services1.push(...array);
  } catch {}

  // useEffect(() => {
  //   const fetchService = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "services"));
  //       const servicesArray: ServicePlan[] = [];
  //       querySnapshot.forEach((doc) => {
  //         const docData = doc.data();
  //         console.log(docData.title);
  //         servicesArray.push({
  //           title: docData.title,
  //           imgSources: docData.imgSources,
  //           desc: docData.desc,
  //           options: docData.options,
  //         });
  //       });
  //       setServices(servicesArray);
  //     } catch (error) {
  //       console.error("Error fetching services:", error);
  //       // Handle errors gracefully
  //     }
  //   };

  //   fetchService();
  // }, []);

  console.log(services1);
  return services1;
};

export default fetchServices;
