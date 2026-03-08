import styles from "../../styles/form.module.css"

const HoroscopeSection = ({ data, setData }) => {

  const update = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <div className={styles.section}>

      <h4>Horoscope Details</h4>

      <input
        name="rashi"
        placeholder="Rashi"
        value={data.rashi || ""}
        onChange={update}
      />

      <input
        name="nakshatra"
        placeholder="Nakshatra"
        value={data.nakshatra || ""}
        onChange={update}
      />

      <input
        name="gotra"
        placeholder="Gotra"
        value={data.gotra || ""}
        onChange={update}
      />

      <input
        name="manglik"
        placeholder="Manglik (Yes / No)"
        value={data.manglik || ""}
        onChange={update}
      />

    </div>
  )
}

export default HoroscopeSection