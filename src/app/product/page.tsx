"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
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
import { RootState } from "../GlobalRedux/store";

export default function Product() {
  const router = useRouter();
  const product = useSelector((state: RootState) => state.products.products)[0];
  const videoId = product.video.split("=")[1];

  const technologies = product.categories.map(
    (tech: { id: number; name: string }) => (
      <Label label={tech.name} key={tech.id} />
    )
  );
  const businessModels = product.businessModels.map(
    (model: { id: number; name: string }) => (
      <Label label={model.name} key={model.id} />
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
          <div className="top-bar flex justify-end md:justify-between items-center mb-[22px]">
            <Breadcrumb />
            <Button title="edit" onClick={() => router.push("/product/edit")} />
          </div>
          <PatentCard product={product} />
          <div className="video border rounded-md mt-[22px] p-[20px] bg-white">
            <span>Video</span>
            <div className="w-full flex justify-around mt-[20px]">
              <iframe
                src={"https://www.youtube.com/embed/" + videoId}
                title={"video_title"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full md:w-[715px] aspect-video"
              ></iframe>
            </div>
          </div>
          <div className="offer-details border rounded-md mt-[22px] p-[20px] bg-white mb-[20px]">
            <span className="mb-[20px]">Offer details</span>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="first-col flex flex-col mb-[20px]">
                <div className="flex gap-1 text-[#6B7280]">
                  <BsGearWideConnected className="mt-[4px]" />
                  <div className="flex gap-2 flex-col">
                    <span>Technology</span>
                    <div className="flex gap-1">{technologies}</div>
                  </div>
                </div>
                <div className="flex gap-1 text-[#6B7280] mt-[20px]">
                  <BsClockHistory className="mt-[4px]" />
                  <div className="flex gap-2 flex-col">
                    <span>TRL</span>
                    <div className="flex gap-1">
                      <Label label={product.trl.name} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-col flex flex-col">
                <div className="flex gap-1 text-[#6B7280]">
                  <BsFileLock className="mt-[4px]" />
                  <div className="flex gap-2 flex-col">
                    <span>Business model</span>
                    <div className="flex gap-1">{businessModels}</div>
                  </div>
                </div>
                <div className="flex gap-1 text-[#6B7280] mt-[20px]">
                  <BsCashCoin className="mt-[4px]" />
                  <div className="flex gap-2 flex-col">
                    <span>Costs</span>
                    <div className="flex gap-1">
                      <Label label={product.investmentEffort} />
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
