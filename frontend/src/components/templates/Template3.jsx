import styles from "../../styles/template.module.css"

const Template3 = ({ data, isPremium }) => {

  return (

    <div className={`${styles.template} ${styles.weddingElegant}`}>

      {!isPremium && (
        <div className={styles.watermark}>
          ShaadiBio
        </div>
      )}

      <h1 className={styles.title}>{data.name}</h1>

      <div className={styles.divider}></div>

      <div className={styles.infoGrid}>

        <div>
          <h4>Age</h4>
          <p>{data.age}</p>
        </div>

        <div>
          <h4>Height</h4>
          <p>{data.height}</p>
        </div>

        <div>
          <h4>Religion</h4>
          <p>{data.religion}</p>
        </div>

        <div>
          <h4>Profession</h4>
          <p>{data.profession}</p>
        </div>

      </div>

    </div>

  )

}

export default Template3