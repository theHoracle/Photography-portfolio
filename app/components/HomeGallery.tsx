import Image from "next/image";

const HomeGallery = () => {
  return (
    <div className="relative w-full h-48 ">
      <div className="flex h-full w-full">
        <div className="w-1/3 flex flex-col justify-between">
          <div className="h-2/3 border-4 border-background-color rounded-xl overflow-hidden">
            <Image
              src="/gallery/image1.jpeg"
              alt="Im"
              layout="intrinsic"
              width={1080}
              height={1350}
              className="translate-y-4 scale-125"
            />
          </div>
          <div className="h-1/3 border-4  border-background-color rounded-2xl overflow-hidden w-1/2 ">
            <Image
              src="/gallery/image1b.jpeg"
              alt="Im"
              layout="responsive"
              width={1080}
              height={1350}
              className="scale-125 translate-y-1.5"
            />
          </div>
        </div>
        <div className="w-2/5 h-auto flex flex-col border-2 transform scale-x-[-1] border-background-color rounded-xl overflow-hidden">
          <Image
            src="/gallery/image2.jpeg"
            alt="aother one"
            layout="responsive"
            width={1344}
            height={1080}
            className="scale-150 translate-y-10 "
          />
        </div>
        <div className="w-1/3 flex flex-col justify-between">
          <div className="h-2/3 border-4 border-background-color rounded-xl overflow-hidden">
            <Image
              src="/gallery/image3.jpeg"
              alt="Im"
              layout="intrinsic"
              width={1080}
              height={1350}
              className="translate-y-4 scale-125"
            />
          </div>
          <div className="h-1/3 border-4  border-background-color rounded-2xl overflow-hidden  ">
            <Image
              src="/gallery/image3b.jpeg"
              alt="Im"
              layout="responsive"
              width={1080}
              height={1350}
              className="-translate-y-1.5"
            />
          </div>
        </div>
      </div>
      <div
        className="h-32 w-1/3 absolute bottom-0 ml-12
      border-4  border-background-color rounded-2xl overflow-hidden flex items-center justify-center"
      >
        <div className="relative h-full">
          <Image
            src="/gallery/imageZ.jpeg"
            alt="x"
            width={1344}
            height={1080}
            layout="responsive"
            className="scale-105"
          />
          <div className="absolute top-0 right-0 h-full w-2/3 -mr-2 ">
            <div className="h-1/3 border-r-8  rounded-br-3xl p-6 border-background-color"></div>

            <div className="h-2/3 border-4 rounded-2xl p-6 -mt-1 border-background-color mr-1"></div>
          </div>
          <div className=" h-2.5 w-1.5 bg-background-color absolute right-0 top-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
