import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("not a email format")
    .required("please input your email"),
  password: Yup.string()
    .min(
      6,
      ({ path, value }) =>
        `${path} password length must be more than 6 letters now you have only ${value.length} letters`
    )
    .required("please input your password"),
  date: Yup.number()
    .min(180, "minimum to subscribe is 180 days")
    .typeError("please input your day"),
  age: Yup.number()
    // .min(18, "Must be major to subscribe")
    .min(
      18,
      ({ path, value }) =>
        `${path} must be a major to sub you only ${value} yrs old please grow up`
    )
    .typeError("please input your age"),
});
