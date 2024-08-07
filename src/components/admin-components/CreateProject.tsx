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
import { ChevronLeft, Upload } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Services, Work } from "@prisma/client"


interface CreateProjectProps {
    services: Services[] | undefined
}
const CreateProject = ({services}: CreateProjectProps) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [serviceSlug, setServiceSlug] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [images, setImages] = useState([])
    

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
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Save Project</Button>
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
                  placeholder="Elegance in monochrome..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Add short description"
                  className="min-h-24"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
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
                <Select>
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
                    {/* <SelectItem value="draft">Draft</SelectItem>
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
              Upload images for this project. Max of 4 images
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Image
                alt="Project image"
                className="aspect-square w-full rounded-md object-cover"
                height="300"
                src="/image-placeholder.svg"
                width="300"
              />
              <div className="grid grid-cols-3 gap-2">
                <button>
                  <Image
                    alt="Project image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src="/image-placeholder.svg"
                    width="84"
                  />
                </button>
                <button>
                  <Image
                    alt="Project image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src="/image-placeholder.svg"
                    width="84"
                  />
                </button>
                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                  <Upload className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Upload</span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <div className="flex items-center justify-center gap-2 md:hidden">
      <Button variant="outline" size="sm">
        Discard
      </Button>
      <Button size="sm">Save Project</Button>
    </div>
  </div>
}

export default CreateProject