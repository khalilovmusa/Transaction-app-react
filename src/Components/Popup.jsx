
const Popup = ({handleSubmit}) => {
    return(
        <div className="popup">
        <div className="overlay"></div>
        <div className="popup-content">
            <h4 className="popup-header">Create a new transaction</h4>
            <form onSubmit={(e) => { handleSubmit(e); }}>
                <div className="div">
                    <label htmlFor="from-input">From:</label>
                    <input required name="from-input" type="text" className="input-from" />
                </div>
                <div className="div">
                    <label htmlFor="to-input">To:</label>
                    <input required name="to-input" className="input-to" type="text" />
                </div>
                <div className="div">
                    <label htmlFor="amount">Amount:</label>
                    <input required name="amount" className="input-amount" type="number" />
                </div>
                <div className="control-buttons">
                    <button type="submit" className="create-transaction">Create</button>
                </div>
            </form>
        </div>
        <div className="success" style={{ display: "none" }}>
            Success
        </div>
    </div>
    )
}

export default Popup;