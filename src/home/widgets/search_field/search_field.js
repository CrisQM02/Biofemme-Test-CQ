import Icon from "@mdi/react";
import { mdiMagnify} from "@mdi/js";
import "./search_field.css"

const MySearchField = () => {
    return (
        <div className="search-field">
            <input type="text" className="my-textfield" placeholder="¿Qué producto buscas?" />
            <button className="search-button" type="button"><Icon className="material-icons btn-icon" path={mdiMagnify} size={1}/></button>
        </div>
    )
}

export default MySearchField;