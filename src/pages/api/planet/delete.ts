import type { NextApiRequest, NextApiResponse } from "next/types";
import { prisma } from "~/server/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    await prisma.planet.deleteMany({})
    await prisma.resources.deleteMany({})
    await prisma.distance.deleteMany({})
  }