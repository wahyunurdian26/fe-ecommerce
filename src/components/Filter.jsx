import React from "react";
import { Form } from "react-router-dom";
import FormInput from "./Form/FormInput";
import FormSelect from "./Form/FormSelect";

const Filter = () => {
  const categories = ["sepatu", "baju", "kemeja", "celana"];
  return (
    <Form
      method="get"
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-3 grid-cols-2 item-center"
    >
      <FormInput label="Search Product" type="search" name="name" />
      <FormSelect label="select category" name="category" list={categories} />
      <FormSelect />
      <button type="submit" className="btn btn-primary">
        SEARCH
      </button>
      <LInk to="/products" className="btn btn-accent">
        {" "}
        RESET
      </LInk>
    </Form>
  );
};

export default Filter;
