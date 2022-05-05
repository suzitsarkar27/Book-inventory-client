import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="d-flex justify-content-center">
      <h2>Thsi si add items component</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />
          <input {...register("exampleRequired", { required: true })} />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItems;
