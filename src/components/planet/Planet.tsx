import axios from "axios";
import { useEffect, useState } from "react";

interface Planet {
  desctription: string;
  habitability: number;
  name: string;
  size: number;
  industry: number;
  science: number;
  resource: {
    food: number;
    luxury: number;
    machinery: number;
    meds: number;
    ore: number;
    tech: number;
    weapons: number;
  };
  distance: {
    belebasV: number;
    biamV: number;
    doamV: number;
    ealiaV: number;
    grotesI: number;
    holoquaIV: number;
    ipelupII: number;
    laracorII: number;
    luwV: number;
    metatolIV: number;
    mivimII: number;
    notoqumII: number;
    quimalmVI: number;
    quimaollIII: number;
    quimaquaVI: number;
    suveIII: number;
    waxapipV: number;
    yoraquaI: number;
    zumoroII: number;
  };
}

interface PlanetProps {
  planetName: string;
}

export default function Planet({ planetName }: PlanetProps) {
  const [planet, setPlanet] = useState({} as Planet);

  useEffect(() => {
    const planetGet = async () => {
      const planetSearch = await axios.get("api/planet/planet", {
        params: { planetName: planetName },
      });
      console.log(planetSearch.data);
      setPlanet(planetSearch.data as Planet);
    };
    planetGet();
  }, [planetName]);

  return (
    <>
      {planet?.name !== "" ? (
        <div className="flex h-auto w-96 flex-col rounded-md border border-red-300 bg-slate-900 p-2">
          <div className="rounded-md border border-slate-300 bg-slate-700 relative overflow-y-hidden p-2">
            <div className="bg-[url('/pattern.svg')] absolute w-full h-full animate-primary z-50 opacity-5"></div>
            <div className="bg-[url('/pattern.svg')] absolute w-full h-full animate-secondary z-50 opacity-5"></div>
            <img
              className="animate-distortion"
              src={`/planets/${planet?.name}.png`}
              alt={planetName}
            />

          </div>
          <div className="mt-2 text-center text-green-500 relative overflow-y-hidden w-full h-full ">
              <p>{planet?.desctription}</p>
              <ul>
                <li>Size: {planet?.size}</li>
                <li className="border-t">Habitability: {planet?.habitability}</li>
                <li className="border-t">Science: {planet?.science}</li>
                <li className="border-t">Industry: {planet?.industry}</li>
              </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
