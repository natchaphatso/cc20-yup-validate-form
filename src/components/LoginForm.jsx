import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";
import { yupToFormError } from "../utils/yupToFormErrors";

export default function LoginForm() {
  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg px-2 py-1",
    textError: "text-red-500 font-medium",
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    date: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const hdlChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await loginSchema.validate(form, { abortEarly: false });
      alert("Success");
      setErrors({});
    } catch (err) {
      const errorObj = yupToFormError(err);
      setErrors(errorObj);
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold pb-10">Member Subscription</p>
      <form className="space-y-2" onSubmit={hdlSubmit}>
        <div className={styles.divInput}>
          <label>Email : </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={hdlChange}
            placeholder="Enter your email"
          />
          <p className={styles.textError}>{errors.email}</p>
        </div>
        <div className={styles.divInput}>
          <label>Password : </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={hdlChange}
            placeholder="Enter your password"
          />
          <p className={styles.textError}>{errors.password}</p>
        </div>
        <div className={styles.divInput}>
          <label>Days : </label>
          <input
            className={styles.input}
            type="text"
            name="date"
            value={form.date}
            onChange={hdlChange}
            placeholder="Day to Subscribe"
          />
          <p className={styles.textError}>{errors.date}</p>
        </div>
        <div className={styles.divInput}>
          <label>Age : </label>
          <input
            className={styles.input}
            type="text"
            name="age"
            value={form.age}
            onChange={hdlChange}
            placeholder="Enter your age"
          />
          <p className={styles.textError}>{errors.age}</p>
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
