import type { NextApiRequest, NextApiResponse } from "next";
import { desctription } from "~/data/planetsDescription";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  Object.entries(desctription).forEach(async([key, value]) => {
    const {distance,resource} = value
    await prisma.planet.create({
      data: {
        desctription: value.desctription,
        habitability: value.habitability,
        size: value.size,
        industry: value.industry,
        science: value.science,
        name: key,
        resources: {
          create: {
            food: resource.food,
            luxury: resource.luxury,
            machinery: resource.machinery,
            meds: resource.meds,
            ore: resource.ore,
            tech: resource.tech,
            weapons: resource.weapons,
          },
        },
        distance:{
          create:{
            belebasV:distance.belebasV,
            biamV:distance.biamV,
            doamV:distance.doamV,
            ealiaV:distance.ealiaV,
            grotesI:distance.grotesI,
            holoquaIV:distance.holoquaIV,
            ipelupII:distance.ipelupII,
            laracorII:distance.laracorII,
            luwV:distance.luwV,
            metatolIV:distance.metatolIV,
            mivimII:distance.mivimII,
            notoqumII:distance.notoqumII,
            quimalmVI:distance.quimalmVI,
            quimaollIII:distance.quimaollIII,
            quimaquaVI:distance.quimaquaVI,
            suveIII:distance.suveIII,
            waxapipV:distance.waxapipV,
            yoraquaI:distance.yoraquaI,
            zumoroII:distance.zumoroII,
          }
        }
      },
    });
})
  
}
