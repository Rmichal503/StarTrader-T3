import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    

    if (req.method === 'GET') {
        const timer = await prisma.travel.findFirst()
        const serverTime = timer?.finish
        const countdown = Number(moment(serverTime).unix() -moment().unix())
        console.log('czas GET',moment(serverTime).unix());
        // const countdown = timer?.finish ?? '';
        res.status(200).json({ countdown });
      } else if (req.method === 'POST') {
        console.log(req.body);
        const { value } = req.body;
        const timeToGo = moment().add(value,'minute').format()
        await prisma.travel.upsert({
          where: { id: 1 },
          update: { finish:timeToGo },
          create: { finish:timeToGo },
        });
    
        res.status(200).json({ countdown: moment(timeToGo, 'x') });
      }
}