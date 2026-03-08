import styles from "../../styles/form.module.css"

const FamilySection = ({ data, setData }) => {

  const update = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <div className={styles.section}>

      <h4>Family Details</h4>

      <input
        name="father"
        placeholder="Father's Name"
        value={data.father || ""}
        onChange={update}
      />

      <input
        name="mother"
        placeholder="Mother's Name"
        value={data.mother || ""}
        onChange={update}
      />

      <input
        name="siblings"
        placeholder="Siblings"
        value={data.siblings || ""}
        onChange={update}
      />

      <input
        name="nativePlace"
        placeholder="Native Place"
        value={data.nativePlace || ""}
        onChange={update}
      />

    </div>
  )
}

export default FamilySection