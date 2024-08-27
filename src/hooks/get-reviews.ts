import prisma from "@/utils/prisma"
import { useQuery } from "@tanstack/react-query"

export const getReviews = async() => {
    try {
        const reviews = await prisma.review.findMany()
        return reviews
    } catch (error) {
        console.log("Fetch review failed: ", error)
        return []
    }
}
