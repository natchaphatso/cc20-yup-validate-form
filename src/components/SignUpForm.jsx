import { useState, useRef } from "react";
import { signupSchema } from "../schemas/signupSchema";
import { yupToFormError } from "../utils/yupToFormErrors";

export default function SignupForm() {
  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg px-2 py-1",
    textError: "text-red-500 font-medium",
  };

  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    age: "",
    tel: "",
    terms: false,
  });

  const refs = {
    username: useRef(null),
    nickname: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    age: useRef(null),
    tel: useRef(null),
    terms: useRef(null),
  };

  const [errors, setErrors] = useState({});

  const hdlChange = (evt) => {
    // setForm({ ...form, [evt.target.name]: evt.target.value });
    const { name, type, value, checked } = evt.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const hdlChange =

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await signupSchema.validate(form, { abortEarly: false });
      alert("Success");
      setErrors({});
    } catch (err) {
      const errorObj = yupToFormError(err, refs);
      setErrors(errorObj);
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold pb-10">Member Subscription</p>
      <form className="space-y-2" onSubmit={hdlSubmit}>
        <div className={styles.divInput}>
          <label>Username : </label>
          <input
            className={styles.input}
            type="text"
            name="username"
            value={form.username}
            onChange={hdlChange}
            ref={refs.username}
            placeholder="Set your username"
          />
          <p className={styles.textError}>{errors.username}</p>
        </div>
        <div className={styles.divInput}>
          <label>Nickname : </label>
          <input
            className={styles.input}
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={hdlChange}
            ref={refs.nickname}
            placeholder="Set your nickname"
          />
          <p className={styles.textError}>{errors.nickname}</p>
        </div>
        <div className={styles.divInput}>
          <label>Password : </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={hdlChange}
            ref={refs.password}
            placeholder="Set your password"
          />
          <p className={styles.textError}>{errors.password}</p>
        </div>
        <div className={styles.divInput}>
          <label>Confirm Password : </label>
          <input
            className={styles.input}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={hdlChange}
            ref={refs.confirmPassword}
            placeholder="Confirm your password"
          />
          <p className={styles.textError}>{errors.confirmPassword}</p>
        </div>
        <div className={styles.divInput}>
          <label>Age : </label>
          <input
            className={styles.input}
            type="number"
            name="age"
            value={form.age}
            onChange={hdlChange}
            ref={refs.age}
            placeholder="Enter your age"
          />
          <p className={styles.textError}>{errors.age}</p>
        </div>
        <div className={styles.divInput}>
          <label>Tel : </label>
          <input
            className={styles.input}
            type="number"
            name="tel"
            value={form.tel}
            onChange={hdlChange}
            ref={refs.tel}
            placeholder="Enter your telephone number"
          />
          <p className={styles.textError}>{errors.tel}</p>
        </div>
        <div className={styles.divInput}>
          <input
            className={styles.input}
            type="checkbox"
            name="terms"
            value={form.terms}
            onChange={hdlChange}
            ref={refs.terms}
          />
          <label>Accept Terms and Condition</label>
          <p className={styles.textError}>{errors.terms}</p>
        </div>
        <button
          type="submit"
          className="bg-gray-200 border-none rounded-xl px-3 py-2 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
