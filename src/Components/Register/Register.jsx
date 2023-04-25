import React from "react";
import { useFormik } from "formik";
export default function Register() {
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Register Now</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control my-2"
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control my-2"
          />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control my-2"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control my-2"
          />
          <label htmlFor="repassword">Repassword</label>
          <input
            name="repassword"
            id="repassword"
            type="password"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control my-2"
          />
          <button className="btn btn-outline-info my-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
