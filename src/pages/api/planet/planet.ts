import type { NextApiRequest, NextApiResponse } from "next/types";
import { prisma } from "~/server/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    const {planetName} = req.query
    const planet = await prisma.planet.findUnique({
        where:{
            name:planetName as string
        },
        include:{
            resources:true,
            distance:true
        }
    });

    res.json(planet)
  }