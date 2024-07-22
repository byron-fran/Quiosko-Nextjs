"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"
import { Product } from "@prisma/client"

export const createProduct = async(data : unknown) => {
    const result = ProductSchema.safeParse(data)
    if(!result.success){
        return
    }
    try {
        await prisma.product.create({
            data : result.data
        })
    } catch (error : unknown) {
        console.log(error)
    }
}