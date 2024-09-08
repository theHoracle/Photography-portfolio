"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectGalleryProps {
  images: string[]
  titleSlug: string
  title: string
  desc: string
}

export function ProjectGallery({ images, titleSlug, desc, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNextImage = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setIsAnimating(false)
    }, 500) // Match this to the animation duration
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  const handleKeyDown = (e: any) => {
    if (!selectedImage) return
    const currentIndex = images.findIndex((img) => img === selectedImage)
    if (e.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + images.length) % images.length
      setSelectedImage(images[prevIndex])
    } else if (e.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % images.length
      setSelectedImage(images[nextIndex])
    }
  }

  return (
    <div className="py-8 grid grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{desc}</p>
      </div>
      <div className="relative overflow-hidden row-span-3 rounded-lg h-full"
      style={{ aspectRatio: "800/700"}}
      >
        <Image
          src={images[currentIndex]}
          alt={images[currentIndex]}
          fill
          className={`size-full object-center object-cover transition-transform duration-500 ${
            isAnimating ? "animate-slide-out" : "animate-slide-in"
          }`}
          
        />
      </div>
      <div className="grid grid-cols-2 md:row-start-2 md:row-span-3 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt={titleSlug + "-" + index}
              width={300}
              height={200}
              className="w-full h-40 object-cover transition-all duration-300 group-hover:scale-105"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomInIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <Dialog open onOpenChange={handleClose}>
          <DialogContent className="p-0 max-w-[90vw] max-h-[90vh] overflow-auto">
            <div className="relative">
              <Image
                src={selectedImage}
                alt={titleSlug}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                style={{ aspectRatio: "800/600", objectFit: "cover" }}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-black/20"
                onClick={handleClose}
              >
                <XIcon className="w-6 h-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      <style>{`
        @keyframes slide-out {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        @keyframes slide-in {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-out {
          animation: slide-out 0.5s forwards;
        }
        .animate-slide-in {
          animation: slide-in 0.5s forwards;
        }
      `}</style>
    </div>
  )
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function ZoomInIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  )
}
