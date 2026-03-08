import styles from "../../styles/template.module.css";

const Template6 = ({ data }) => {
  return (
    <div className={`${styles.template} ${styles.royalTheme}`}>
      <h2>{data.name}</h2>

      <div className={styles.grid}>
        <p>Age: {data.age}</p>
        <p>Height: {data.height}</p>
        <p>Profession: {data.profession}</p>
        <p>Religion: {data.religion}</p>

        <h4>Family</h4>
        <p>Father: {data.father}</p>
        <p>Mother: {data.mother}</p>

        <h4>Horoscope</h4>
        <p>Rashi: {data.rashi}</p>
        <p>Nakshatra: {data.nakshatra}</p>
      </div>
    </div>
  );
};

export default Template6;
