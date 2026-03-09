import { useState } from "react";
import styles from "../../styles/form.module.css";

const PersonalSection = ({ data, setData }) => {
  const [error, setError] = useState("");

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      return null;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (today.getDate() < birthDate.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    return `${years} Years ${months} Months`;
  };

  const update = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      if (!value) {
        setError("");
        setData({ ...data, dob: "", age: "" });
        return;
      }

      const age = calculateAge(value);

      if (age === null) {
        setError("DOB cannot be in the future");
        setData({ ...data, dob: value, age: "" });
        return;
      }

      setError("");

      setData({
        ...data,
        dob: value,
        age: age,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  return (
    <div className={styles.section}>
      <h4>Personal Details</h4>

      <input
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={update}
      />

      <input type="date" name="dob" value={data.dob || ""} max={new Date().toISOString().split("T")[0]} onChange={update} />

      {error && <p className={styles.error}>{error}</p>}

      <input name="age" placeholder="Age" value={data.age || ""} readOnly />

      <input
        name="height"
        placeholder="Height"
        value={data.height}
        onChange={update}
      />

      <input
        name="profession"
        placeholder="Profession"
        value={data.profession}
        onChange={update}
      />

      <input
        name="religion"
        placeholder="Religion"
        value={data.religion}
        onChange={update}
      />
    </div>
  );
};

export default PersonalSection;
