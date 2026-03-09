import styles from "../../styles/form.module.css";

const EducationProfessionSection = ({ data, setData }) => {
  const update = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className={styles.section}>
      <h4>Education & Profession</h4>

      <input
        name="education"
        type="text"
        placeholder="Highest Education"
        value={data.education || ""}
        onChange={update}
      />

      <input
        name="college"
        type="text"
        placeholder="College / University"
        value={data.college || ""}
        onChange={update}
      />

      <input
        name="profession"
        type="text"
        placeholder="Profession"
        value={data.profession || ""}
        onChange={update}
      />

      <input
        name="company"
        type="text"
        placeholder="Company / Workplace"
        value={data.company || ""}
        onChange={update}
      />

      <input
        name="income"
        type="number"
        placeholder="Annual Income"
        value={data.income || ""}
        onChange={update}
      />
    </div>
  );
};

export default EducationProfessionSection;
