"use client";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Image from "next/image";
import {
  BsCheck2,
  BsFlower1,
  BsGeoAlt,
  BsPencil,
  BsTrash3,
} from "react-icons/bs";
import { Button } from "./Button";
import { MyMap } from "./MyMap";
import { ProductType } from "@/app/GlobalRedux/Features/product/productSlice";

export type cordsTypes = {
  lat: number;
  lng: number;
};
type propTypes = {
  mode?: string;
  product: ProductType;
};

export default function PatentCard({ mode, product }: propTypes) {
  console.log(product);
  if (mode === "edit") {
    return (
      <div className="patent bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-solid rounded-md">
          <div className="md:col-span-2 flex flex-col border-r">
            <div className="relative w-full">
              <div
                className="h-[300px] bg-center bg-cover bg-no-repeat rounded-tl-md"
                style={{ backgroundImage: "url(/patentImage.png)" }}
              ></div>
              <div className="absolute top-0 left-0 flex items-center rounded-br-md rounded-tl-md bg-white pr-2 hover:cursor-pointer">
                <div className="bg-blue-900 p-2 rounded-br-md rounded-tl-md text-white">
                  <BsFlower1 size={16} />
                </div>
                <span className="px-2 text-[#374151]">patent</span>
                <BsPencil size={16} />
              </div>
              <div className="absolute top-0 right-0 flex items-center rounded-bl-md bg-white p-2 text-[#374151] hover:cursor-pointer">
                <BsTrash3 size={16} />
              </div>
            </div>
            <div className="px-3 py-4">
              <input
                value={product.name}
                className="mb-[20px] w-full border rounded-lg px-2 py-1"
              />
              <div className="rounded-lg">
                <CKEditor
                  editor={ClassicEditor}
                  data={product.description}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
                <div className="flex justify-end mt-[20px]">
                  <Button
                    title="Cancel"
                    className="text-[#6B7280] mr-2 bg-transparent "
                  />
                  <Button
                    title={
                      <span className="flex items-center">
                        <BsCheck2 size={16} />
                        <span className="ml-1 bg-white">Save</span>
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 p-[20px] flex flex-col">
            <span className="text-[#374151]">Offered by</span>
            <Image
              src={product.company.logo}
              alt="logo"
              width={140}
              height={27}
              className="text-white mt-[10px] mb-[10px]"
            />
            <div className="flex items-center text-[#6B7280]">
              <div className="rounded-full mr-[3px]">
                <Image
                  src={product.user.profilePicture}
                  alt="logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col ml-2">
                <span className="text-[14px]">{product.user.firstName}</span>
                <span className="text-[14px]">{product.user.lastName}</span>
              </div>
            </div>
            <div className="flex mt-5 text-[#6B7280] items-top gap-1">
              <BsGeoAlt size={16} />
              <span className="w-[170px] text-sm">
                {`${product.company.address.street}, ${product.company.address.zipcode} ${product.company.address.city.name}, ${product.company.address.country.name}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="patent bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-solid rounded-md">
        <div className="md:col-span-2 flex flex-col border-r">
          <div className="relative w-full">
            <div
              className="h-[300px] bg-center bg-cover bg-no-repeat rounded-tl-md rounded-tr-md md:rounded-tr-none"
              style={{ backgroundImage: "url(/patentImage.png)" }}
            ></div>
            <div className="absolute top-0 left-0 flex items-center rounded-br-md rounded-tl-md bg-white">
              <div className="bg-blue-900 p-2 rounded-br-md rounded-tl-md text-white">
                <BsFlower1 size={16} />
              </div>
              <span className="px-2 text-[#374151]">patent</span>
            </div>
          </div>
          <div className="px-3 py-4">
            <h3 className="mb-3 font-semibold text-[#374151]">
              {product.name}
            </h3>
            <p className="text-[14px] leading-6 text-[#6B7280]">
              {product.description}
            </p>
          </div>
        </div>
        <div className="md:col-span-1 p-[20px] flex flex-col">
          <span className="text-[#374151]">Offered by</span>
          <Image
            src={product.company.logo}
            alt="logo"
            width={140}
            height={27}
            className="text-white mt-[10px] mb-[10px]"
          />
          <div className="flex items-center text-[#6B7280]">
            <div className="rounded-full mr-[3px]">
              <Image
                src={product.user.profilePicture}
                alt="logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-2">
              <span className="text-[14px]">{product.user.firstName}</span>
              <span className="text-[14px]">{product.user.lastName}</span>
            </div>
          </div>
          <div className="flex mt-5 text-[#6B7280] items-top gap-1">
            <BsGeoAlt size={16} />
            <span className="w-[170px] text-sm">
              {`${product.company.address.street}, ${product.company.address.zipcode} ${product.company.address.city.name}, ${product.company.address.country.name}`}
            </span>
          </div>
          <div className="relative w-full h-[200px] mt-5">
            <MyMap
              cords={{
                lat: product.company.address.latitude,
                lng: product.company.address.longitude,
              }}
            />
            {/* <Image src="/map.png" alt="map" layout="fill" objectFit="cover" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
