"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import Image from "next/image"
import { ChevronLeft, Loader2, Upload } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn, slugify } from "@/lib/utils"
import React, { useState } from "react"
import { Services } from "@prisma/client"
import { useAddProject } from "@/hooks/add-project"
import { uploadImagesToFirebase } from "@/lib/upload-image"


interface CreateProjectProps {
    services: Services[]
}
const CreateProject = ({services}: CreateProjectProps) => {
    const [projectDetails, setProjetDetails] = useState({
        title: "",
        description: "",
        serviceSlug: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([
      "/image-placeholder.svg",
      "/image-placeholder.svg",
      "/image-placeholder.svg",
    ]);


    const {mutate: addProject} = useAddProject()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProjetDetails((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
    const discardProjectDetails = () => {
        setProjetDetails({
            title: "",
            
            description: "",
            serviceSlug: "",
        }),
        setImages([]),
        setImagePreviews([
          "/image-placeholder.svg",
          "/image-placeholder.svg",
          "/image-placeholder.svg",
        ])
      }

      const addNewProject = async () => {
        setIsLoading(true)
        try {
          if(Object.values(projectDetails).every((value) => value && value.length !== 0) ) {
          // upload images
            const uploadUrls = await uploadImagesToFirebase(images, projectDetails.title)
          // add project
          addProject({
            ...projectDetails,
            slug: slugify(projectDetails.title),
            imgs: uploadUrls
          })
          console.log("New PRoject", uploadUrls, projectDetails)
          discardProjectDetails()
       } else {
        throw new Error("MISSING REQUIRED FIELDS")
       }
      } catch (error){
        console.log("Error: ", error)
      } finally {
        setIsLoading(false)
      }
    }

      const handleImageChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const updatedImages = [...images];
            const updatedPreviews = [...imagePreviews];
            updatedImages[index] = file;
            updatedPreviews[index] = URL.createObjectURL(file);
            setImages(updatedImages);
            setImagePreviews(updatedPreviews);
        }
    }
    console.log(images)
    
  return <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
    <div className="flex items-center gap-4">
      <Link href="/admin"  className={cn(buttonVariants({variant: "outline", size: "icon"}), "h-7 w-7")}>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Link>
      <h1 className="flex-1 shrink-0 capitalize whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        Add project
      </h1>
      <Badge variant="outline" className="ml-auto sm:ml-0">
        New
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <Button variant="outline" onClick={discardProjectDetails} 
        size="sm">
          Discard
        </Button>
        <Button 
        onClick={addNewProject}
        disabled={isLoading}
        size="sm">Save Project
          {isLoading && <Loader2 className="size-4 ml-1 animate-spin" />}
        </Button>
      </div>
    </div>
    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
      <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
        <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Add details about this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  className="w-full"
                  name="title"
                  placeholder="Elegance in monochrome..."
                  value={projectDetails.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Add short description"
                  className="min-h-24"
                  value={projectDetails.description}
                  onChange={(e) => setProjetDetails({
                    ...projectDetails,
                    description: e.target.value
                  })}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid sm:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Category (Service)</CardTitle>
            <CardDescription>Select a service that best fit this project</CardDescription>
          </CardHeader>
          <CardContent>
              <div className="grid gap-3">
                <Label htmlFor="category">Service</Label>
                <Select onValueChange={(value) => setProjetDetails({...projectDetails, serviceSlug: value})}>
                  <SelectTrigger
                    id="service"
                    aria-label="Select service"
                  >
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services?.map((service) => {
                    return  <SelectItem value={service.slug} key={service.id}>
                        {service.title}
                      </SelectItem>
                    })}
                  </SelectContent>
                </Select>
              </div>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Add Keywords (optional)</CardTitle>
                <CardDescription>Optionally add keywords to projects. Seperate keywords with commas.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-3">
                <Label>
                    Keywords
                </Label>
                <Input
                id="keywords"
                placeholder="Potraits, BTS, ..."
                />
                </div>
                </CardContent>
        </Card>
        </div>
      </div>
      <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger id="status" aria-label="Select status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    {/*
                    <SelectItem value="archived">Archived</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card
          className="overflow-hidden">
          <CardHeader>
            <CardTitle>Project Images</CardTitle>
            <CardDescription>
              Upload images for this project. {images.length} image(s) added.
            </CardDescription>
          </CardHeader>
          <CardContent>
                <div className="grid gap-2">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageChange(0)}
                      accept="image/*"
                    />
                    <Image
                      alt="Project image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="300"
                      src={imagePreviews[0]}
                      width="300"
                    />
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleImageChange(1)}
                        accept="image/*"
                      />
                      <Image
                        alt="Project image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src={imagePreviews[1]}
                        width="84"
                      />
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleImageChange(2)}
                        accept="image/*"
                      />
                      <Image
                        alt="Project image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src={imagePreviews[2]}
                        width="84"
                      />
                    </label>
                    <label className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(event) => setImages((prevImages) => [...prevImages, event.target.files?.[0]!])}
                        accept="image/*"
                      />
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Upload</span>
                    </label>
                  </div>
                </div>
              </CardContent>
        </Card>
      </div>
    </div>
    <div className="flex items-center justify-center gap-2 md:hidden">
      <Button variant="outline" 
      onClick={discardProjectDetails}
      size="sm">
        Discard
      </Button>
      <Button 
        onClick={addNewProject}
        disabled={isLoading}
        size="sm">Save Project
          {isLoading && <Loader2 className="size-4 ml-1 animate-spin" />}
        </Button>
    </div>
  </div>
}

export default CreateProject