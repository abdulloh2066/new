"use client"

import { useState } from "react"

type Taom = {
    name: string,
    narx: number,
    id: number,
}
function Homee() {
    const [ curentid,setCorentid ] = useState<number>(1)
    const taomlar = [
        {
            name: "osh",
            narx: 40000,
            id: 1,
            img:"https://xabar.uz/static/crop/1/5/920__95_1547113144.jpg"
        },
        {
            name: "lagmon",
            narx: 30000,
            id: 2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq03aJUyCKSbs6fZJVdeNWqJXYw5RgkQMHdpaSIAYOJ4fV27BhflYTuYQ&s=10"
        },
        {
            name: "shorva",
            narx: 35000,
            id: 3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo398KCpiWIGOCQL3PgS21oXYkpL2rcI-YIG-l3DqmI8kKQPCJtn8WTNg&s=10"
        },
    ]
    const buttonClick = (id: number) => {
        setCorentid(id)
    }
    return (
      <div className="min-h-screen bg-gray-100 p-6 md:p-10">
  <div className="mx-auto max-w-6xl">
    <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
      🍽️ Taomlar menyusi
    </h1>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Taomlar ro'yxati */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:col-span-2">
        {taomlar.map((item: Taom) => (
          <button
            onClick={() => buttonClick(item.id)}
            key={item.id}
            className={`rounded-xl border-2 p-4 text-center font-semibold shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
              curentid === item.id
                ? "border-red-600 bg-red-500 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-red-400 hover:bg-red-50"
            }`}
          >
            <span className="mb-2 block text-2xl">🍲</span>
            {item.name}
          </button>
        ))}
      </div>
      
{/* fayr beyz ornatish */}
      {/* Tanlangan taom */}
      <div className="h-fit rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-5 border-b pb-3 text-xl font-bold text-gray-800">
          Tanlangan taom
        </h2>

        {taomlar[curentid - 1] && (
          <div className="space-y-4">
            <div className="flex h-24 items-center justify-center rounded-xl bg-blue-50 text-5xl">
              🍛
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              {taomlar[curentid - 1].name}
            </h3>

            <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
              <span className="text-gray-600">Narxi:</span>
              <span className="text-lg font-bold text-green-600">
                {taomlar[curentid - 1].narx} so'm
              </span>
              <span>
                <img src={taomlar[curentid-1].img} alt="" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
    )
}

export default Homee