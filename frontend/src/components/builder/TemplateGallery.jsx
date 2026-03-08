import styles from "../../styles/gallery.module.css"

const TemplateGallery = ({template,setTemplate}) => {

const templates = ["1","2","3","4","5","6"]

return (

<div className={styles.gallery}>

{templates.map((t)=> (

<div
key={t}
onClick={()=>setTemplate(t)}
className={template===t ? styles.selected : styles.card}
>

<img src={`/templates/t${t}.jpg`} height="10px" width="10px" />

<p>Template {t}</p>

</div>

))}

</div>

)

}

export default TemplateGallery