"use client"
import { CardSection, Tabs } from "@mantine/core"
import Image from "next/image"
import Button from "../component/atoms/Button"
import CheckboxComp from "../component/atoms/CheckBox"
import DateInputComp from "../component/atoms/DateInput"
import DropDown from "../component/atoms/DropDown"
import Rating from "../component/atoms/Rating"
import SelectForm from "../component/atoms/SelectForm"
import imgCustomer from "../../public/assets/discount.jpg"
import hotel1 from "../../public/assets/hotel1.jpg"

import { IconPhone } from "@tabler/icons-react"
import { CardSearch } from "../component/template/CardSearch"
export default function page() {
  return (
    <div className="container p-2 m-auto">
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-3">
          <SelectForm />
        </div>
        <div className="col-span-1 p-3">
          <DateInputComp placeholder="12/2/2022" />
        </div>
        <div className="col-span-1 p-3">
          <DropDown />
        </div>
        <div className="col-span-1 p-3">
          <Button
            children="Update Search"
            variant="primary"
            className="p-1 px-4 w-[100%] "
          />
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
              width="380"
              height="150"
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="mt-5">
            <p>Sort By</p>
            <SelectForm />
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Deals</h3>
            <CheckboxComp
              className="mt-3"
              label="Retail - you pick the hotel"
            />
            <CheckboxComp
              className="mt-3"
              label="Express Deals & Pricebreakers"
            />
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Your Budget</h3>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label="$$$$$" />
              <p className="text-gray-500">($0 to $80 per night)</p>
            </div>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label="$$$$$" />
              <p className="text-gray-500">($0 to $80 per night)</p>
            </div>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label="$$$$$" />
              <p className="text-gray-500">($0 to $80 per night)</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Rate Options</h3>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label=" Free Cancellation" />
              <p className="text-gray-500">(22)</p>
            </div>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label="Pay Later " />
              <p className="text-gray-500">(31)</p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Hotel Star Level </h3>
            <div>
              <Rating>
                <Tabs.List>
                  <Tabs.Tab
                    value="five"
                    // icon={<IconSettings size="1rem" />}
                  >
                    5+
                  </Tabs.Tab>

                  <Tabs.Tab
                    value="six"
                    // icon={<IconMessageCircle size="1rem" />}
                  >
                    6+
                  </Tabs.Tab>

                  <Tabs.Tab
                    value="seven"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    7+
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="eight"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    8+
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="night"
                    // icon={<IconPhoto size="1rem" />}
                  >
                    9+
                  </Tabs.Tab>
                </Tabs.List>
              </Rating>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="my-2 border-b-[#ccc] border-b">Property Type </h3>
            <div className="flex justify-between">
              <CheckboxComp className="mt-3" label="Hotels " />
              <p className="text-gray-500">(9)</p>
            </div>
          </div>
          <div className="mt-5 border border-[#5d22d5] rounded-xl p-3">
            <h4>Best Price Guaranteed</h4>
            <h4>Exclusively for Priceline members</h4>

            <p>
              Book now and well refund the difference if you find a lower price
            </p>
          </div>
          <div className="mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
              width="380"
              height="150"
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="mt-5">
            <div className="border rounded-xl  p-4 text-center m-auto">
              <Image className="m-auto" src={imgCustomer} alt="customer" />
              <h3 className="mt-3">Special discounts when you call</h3>
              <p className="mt-3">
                1 in 4 people saved 20% or more over the phone.
              </p>
              <p className="">
                <span className="font-bold">StayExpo®</span> PHONE DEALS
              </p>
              <p className=" flex justify-center ">
                <span className="mt-3">
                  <IconPhone />
                </span>
                <a href="">+20 122 108 3507</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-8 px-5">
          <CardSearch
            image={hotel1.src}
            author={"aaaaa"}
            title="New York Marriott Marquis"
            date="12/8/2005"
            category=""
          />
        </div>
      </div>
    </div>
  )
}
