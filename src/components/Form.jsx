import { Formik, useFormik } from "formik";
import { useState } from "react";
import { SignUpSchema } from "../schemas/validation";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};
const Form = () => {
    // const Formik = useFormik({ fist way Formik.value.name
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            //here we are doing destructuring
            initialValues: initialValues,
            validationSchema: SignUpSchema,
            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();
            },
        });
    console.log(errors);

    return (
        <div className="mt-7">
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="border border-solid"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.name && touched.name ? (
                        <p className="text-red-600">{errors.name}</p>
                    ) : null}
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="border"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && touched.email ? (
                        <p className="text-red-600">{errors.email}</p>
                    ) : null}
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="border"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.password && touched.password ? (
                        <p className="text-red-600">{errors.password}</p>
                    ) : null}
                    <div className="flex flex-col">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="border"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.confirm_password && touched.confirm_password ? (
                        <p className="text-red-600">
                            {errors.confirm_password}
                        </p>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default Form;
