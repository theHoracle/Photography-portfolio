import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";
import { slugify } from "./utils";

export async function uploadImagesToFirebase(
  files: File[],
  folderName: string
): Promise<string[]> {
  // Slugify the folder name
  const slugifiedFolder = slugify(folderName);

  // Array to hold the download URLs
  const downloadURLs: string[] = [];

  try {
    // Loop through each file and upload
    for (const file of files) {
      // Create a reference to the file location
      const fileName = `${Date.now()}_${file.name}`;
      const storageRef = ref(storage, `${slugifiedFolder}/${fileName}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get the download URL and add it to the array
      const downloadURL = await getDownloadURL(snapshot.ref);
      downloadURLs.push(downloadURL);
    }

    return downloadURLs;
  } catch (error) {
    console.error("Error uploading files: ", error);
    throw error;
  }
}
