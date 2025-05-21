import * as Yup from "yup";

export const signupSchema = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z]{5,12}/, "username must be between 5-12 letters")
    .required("please set your username"),
  nickname: Yup.string()
    .min(
      6,
      ({ path, value }) =>
        `${path} nickname length must be at least 6 letters now you have only ${value.length} letters`
    )
    .max(
      10,
      ({ path, value }) =>
        `${path} nickname length must not be more than 10 letters now you have only ${value.length} letters`
    )
    .required("please set your nickname"),
  password: Yup.string()
    .min(
      6,
      ({ path, value }) =>
        `${path} password length must be more than 6 letters now you have only ${value.length} letters`
    )
    .required("please input your password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "password is not match"
  ),
  age: Yup.number()
    .min(14, "age must be more than 13 yrs old ")
    .typeError("please set only number"),
  tel: Yup.string().matches(
    /^0\d{9}$/,
    "telephone number must have at least 10 numbers"
  ),
  terms: Yup.boolean().oneOf([true], "please accept terms"),
});
