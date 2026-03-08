import styles from "../../styles/form.module.css"

const PersonalSection = ({data,setData}) => {

const update = (e) => {

const {name,value} = e.target

setData({...data,[name]:value})

}

return (

<div className={styles.section}>

<h4>Personal Details</h4>

<input name="name" placeholder="Name" value={data.name} onChange={update}/>
<input name="age" placeholder="Age" value={data.age} onChange={update}/>
<input name="height" placeholder="Height" value={data.height} onChange={update}/>
<input name="profession" placeholder="Profession" value={data.profession} onChange={update}/>
<input name="religion" placeholder="Religion" value={data.religion} onChange={update}/>

</div>

)

}

export default PersonalSection