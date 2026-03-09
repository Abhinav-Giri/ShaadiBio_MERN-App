import styles from "../../styles/template.module.css";

const Template1 = ({ data, isPremium }) => {
  return (
    <div className={`${styles.template} ${styles.royalCard}`}>
      {!isPremium && <div className={styles.watermark}>ShaadiBio</div>}

      <div className={styles.royalHeader}>
        <img
          src={
            data.photo ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="profile"
        />

        <h2>{data.name}</h2>
      </div>

      <div className={styles.royalDetails}>
        <p>Age: {data.age}</p>
        <p>Height: {data.height}</p>
        <p>Profession: {data.profession}</p>
        <p>Religion: {data.religion}</p>
        <h4>Education & Profession</h4>

        <p>Education: {data.education}</p>
        <p>College: {data.college}</p>
        <p>Profession: {data.profession}</p>
        <p>Company: {data.company}</p>
        <p>Income: {data.income}</p>
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

export default Template1;
