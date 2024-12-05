import EditPopup from "./EditPopup";

const EditTransaction = ({ setDisplayEdit }) => {

    return (
        <>
            <EditPopup />
            <button onClick={() => setDisplayEdit(false)}>Cancel editing</button>
        </>
    )
}

export default EditTransaction;