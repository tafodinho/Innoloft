"use client";

import { RootState } from "@/app/GlobalRedux/store";
import { Button } from "@/components/Button";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import PatentCard from "@/components/PatentCard";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import {
  BsCashCoin,
  BsClockHistory,
  BsFileLock,
  BsGearWideConnected,
} from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Edit() {
  const router = useRouter();
  const product = useSelector((state: RootState) => state.products.products)[0];

  const technologies = product.categories.map(
    (tech: { id: number; name: string }) => (
      <input
        value={tech.name}
        className="mb-[20px] w-full border rounded-lg px-2 py-1 mt-[10px]"
        key={tech.id}
      />
    )
  );
  const businessModels = product.businessModels.map(
    (model: { id: number; name: string }) => (
      <input
        value={model.name}
        className="mb-[20px] w-full border rounded-lg px-2 py-1 mt-[10px]"
        key={model.id}
      />
    )
  );

  return (
    <main>
      <NavBar />
      <div className="grid grid-cols-5 gap-[30px] px-[20px] md:px-[240px] mt-[22px]">
        <div className="hidden md:flex col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 md:col-span-4">
          <div className="top-bar flex justify-between items-center mb-[22px]">
            <span>{product.name}</span>
            <Button
              title="View Offer"
              onClick={() => router.push("/product")}
            />
          </div>
          <PatentCard mode="edit" product={product} />
          <div className="video border rounded-md mt-[22px] p-[20px] bg-white">
            <span>Video</span>
            <input
              value={product.video}
              className="mb-[20px] w-full border rounded-lg px-2 py-1 mt-[10px]"
            />
          </div>
          <div className="offer-details border rounded-md mt-[22px] p-[20px] bg-white">
            <span>Offer details</span>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="first-col flex flex-col mb-[20px]">
                <div className="flex gap-1 text-[#6B7280]">
                  <BsGearWideConnected className="mt-[4px]" />
                  <div className="flex gap-2 flex-col">
                    <span>Technology</span>
                    <div className="flex flex-col md:flex-row md:gap-1">
                      {technologies}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 text-[#6B7280] mt-[20px]">
                  <BsClockHistory className="mt-[4px]" />
                  <div className="flex gap-2 flex-col w-full">
                    <span>TRL</span>
                    <div className="flex gap-1">
                      <input
                        value={product.trl.name}
                        className="mb-[20px] w-full border rounded-lg px-2 py-1 mt-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-col flex flex-col">
                <div className="flex gap-1 text-[#6B7280]">
                  <BsFileLock className="mt-[4px]" />
                  <div className="flex gap-2 flex-col">
                    <span>Business model</span>
                    <div className="flex flex-col md:flex-row md:gap-1">
                      {businessModels}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 text-[#6B7280] mt-[20px]">
                  <BsCashCoin className="mt-[4px]" />
                  <div className="flex gap-2 flex-col">
                    <span>Costs</span>
                    <div className="flex gap-1">
                      <input
                        value={product.investmentEffort}
                        className="mb-[20px] w-full border rounded-lg px-2 py-1 mt-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
