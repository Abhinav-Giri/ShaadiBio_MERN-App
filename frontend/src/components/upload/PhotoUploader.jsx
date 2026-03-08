import styles from "../../styles/form.module.css"

const PhotoUploader = ({data,setData}) => {

const handleUpload = (e) => {

const file = e.target.files[0]

const url = URL.createObjectURL(file)

setData({...data,photo:url})

}

return (

<div className={styles.photoBox}>

<img
src={data.photo || "/avatar.png"}
className={styles.photo}
/>

<input type="file" onChange={handleUpload}/>

</div>

)

}

export default PhotoUploader