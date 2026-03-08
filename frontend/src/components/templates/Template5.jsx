import styles from "../../styles/template.module.css";

const Template5 = ({ data, isPremium }) => {
  return (
    <div className={`${styles.template} ${styles.minimalPremium}`}>
      {!isPremium && <div className={styles.watermark}>ShaadiBio</div>}

      <h2>{data.name}</h2>

      <ul className={styles.list}>
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
      </ul>
    </div>
  );
};

export default Template5;
