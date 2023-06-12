"use client";
import React from "react";
import SelectForm from "../component/atoms/SelectForm";
import DateInputComp from "../component/atoms/DateInput";
import DropDown from "../component/atoms/DropDown";
import Button from "../component/atoms/Button";
import CheckboxComp from "../component/atoms/CheckBox";

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
              width="300"
              height="150"
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
          <div className="mt-3">
            <p>Sort By</p>
            <SelectForm />
          </div>
          <div className="mt-3">
            <h3 className="my-2 border-b-[#ccc] border-b">Deals</h3>
            <CheckboxComp label="Deals" />
          </div>
        </div>
      </div>
    </div>
  );
}
