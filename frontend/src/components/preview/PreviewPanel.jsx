import Template1 from "../templates/Template1"
import Template2 from "../templates/Template2"
import Template3 from "../templates/Template3"
import Template4 from "../templates/Template4"
import Template5 from "../templates/Template5"
import Template6 from "../templates/Template6"

import styles from "../../styles/preview.module.css"

const PreviewPanel = ({data,template}) => {

const templates = {
1: <Template1 data={data}/>,
2: <Template2 data={data}/>,
3: <Template3 data={data}/>,
4: <Template4 data={data}/>,
5: <Template5 data={data}/>,
6: <Template6 data={data}/>
}

return (

<div className={styles.preview} id="biodataPreview">

{templates[template]}

</div>

)

}

export default PreviewPanel