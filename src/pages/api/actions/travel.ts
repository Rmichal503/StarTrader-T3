import type{ NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {travel} = req.body
    if(req.method === 'POST'){
        await prisma.player.create({
         data:{
            name:'Bonzo',
            currentPlanet:'belebasV',
            hold:{
                create:{
                    food:200,
                    luxury:300,
                    machinery:100,
                    meds:20,
                    ore:2,
                    tech:90,
                    weapons:43
                }
            }
         },
         include:{
            hold:true
         }
        })
    }
    if(req.method === 'GET'){
        const player = await prisma.player.findUnique({
            where:{
                name:'Bonzo'
            }
        })
        console.log(player);
        res.status(200).json({player})
    }
    if(req.method === 'PUT'){
        await prisma.player.update({
            where:{
                name: 'Bonzo'
            },
            data:{
                currentPlanet:'traveling'
            }
        })
    }
}