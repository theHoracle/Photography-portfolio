import Image from "next/image";

const HomeGallery = () => {
  return (
    <div className="relative w-full h-[20vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] ">
      <div className="flex  h-full w-full">
        <div className="flex-[4] relative flex flex-col justify-between">
          <div className="flex-[2.5] w-full relative border-4 border-background rounded-xl overflow-hidden">
            <Image
              src="/gallery/image1.jpeg"
              alt="Im"
              fill
              className="object-center object-cover "
            />
          </div>
          <div className="flex-1 flex ">
            <div className="flex-1 relative border-4 border-background rounded-xl overflow-hidden">
              <Image
                src="/gallery/image1b.jpeg"
                alt="Im"
                fill
                className="object-center object-cover"
              />
            </div>
            <div className="flex-1 relative border-4 border-background rounded-xl overflow-hidden">
              <Image
                src="/gallery/image1b.jpeg"
                alt="Im"
                fill
                className="object-center object-cover"
              />
            </div>
            <div className="hidden md:flex-1 relative border-4 border-background rounded-xl overflow-hidden">
              <Image
                src="/gallery/image1b.jpeg"
                alt="Im"
                fill
                className="object-center object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-[5] relative flex  border-4 border-background rounded-xl items-end justify-end overflow-hidden">
          <Image
            src="/gallery/image2.jpeg"
            alt="aother one"
            fill
            className="object-cover object-center h-1/2"
          />
        </div>
        <div className="flex-[2]  md:flex-[3] flex flex-col justify-between">
          <div className="flex-[3] w-full relative border-4 border-background rounded-xl overflow-hidden">
            <Image
              src="/gallery/image3.jpeg"
              alt="Im"
              fill
              className="object-cover object-center size-full translate-y-4"
            />
          </div>
          <div className="flex-[2] relative border-4  border-background rounded-xl overflow-hidden  ">
            <Image
              src="/gallery/image3b.jpeg"
              alt="Im"
              fill
              className="object-cover object-center size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;

// import Image from "next/image";

// const HomeGallery = () => {
//   return (
//     <div className="relative w-full h-48 md:h-96 ">
//       <div className="flex  h-full w-full">
//         <div className="flex-[4] relative flex flex-col justify-between">
//           <div className="flex-[2.5] w-full relative border-4 border-background rounded-xl overflow-hidden">
//             <Image
//               src="/gallery/image1.jpeg"
//               alt="Im"
//               fill
//               className="object-center object-cover "
//             />
//           </div>
//           <div className="flex-1 w-[30%] relative border-4 border-background rounded-xl overflow-hidden">
//             <Image
//               src="/gallery/image1b.jpeg"
//               alt="Im"
//               fill
//               className="object-center object-cover"
//             />
//           </div>
//           <div className="absolute left-[30%] bottom-0 top-[30%] -right-[40%] z-10 rounded-xl overflow-hidden border-4 border-background">
//           <div className="relative  overflow-hidden size-full ">
//           <Image
//             src="/gallery/imageZ.jpeg"
//             alt="x"
//             fill
//             className="object-cover object-center size-full"
//           />
//         <div className="absolute -bottom-1 -right-1 top-[40%] left-[40%] border-8 rounded-xl border-background" />

//         </div>
//           </div>
//         </div>
//         <div className="flex-[5] relative flex  border-4 border-background rounded-xl items-end justify-end overflow-hidden">
//           <Image
//             src="/gallery/image2.jpeg"
//             alt="aother one"
//             fill
//             className="object-cover object-center h-1/2"
//           />

//         </div>
//         <div className="flex-[3] flex flex-col justify-between">
//           <div className="flex-[3] w-full relative border-4 border-background rounded-xl overflow-hidden">
//             <Image
//               src="/gallery/image3.jpeg"
//               alt="Im"
//               fill
//               className="object-cover object-center size-full translate-y-4 scale-125"
//             />
//           </div>
//           <div className="flex-[2] relative border-4  border-background rounded-xl overflow-hidden  ">
//             <Image
//               src="/gallery/image3b.jpeg"
//               alt="Im"
//               fill
//               className="object-cover object-center size-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeGallery;
