
const Popup = ({}) => {
    const handleEdit = () => {
       const editTransaction = (id, from, to, amount) => {
            const updatedTransaction = {
                from: from, 
                to: to,
                amount: amount, 
            };
        
            fetch(`https://acb-api.algoritmika.org/api/transaction/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedTransaction),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to update the transaction.");
                    }
                    return response.json();
                })
                .then((updatedData) => {
                    console.log("Transaction updated:", updatedData);
        
                    document.querySelector(".list").innerHTML = '';
                    transactionMethods.updateTransactionUi(transactions.transactionsArr.map(transaction => 
                        transaction.id ===  Number(id) ? updatedData : transaction
                    ));
                })
                .catch((error) => console.error("Error updating transaction:", error));
        }
    }

    return(
        <div className="popup">
        <div className="overlay"></div>
        <div className="popup-content">
            <h4 className="popup-header">Create a new transaction</h4>
            <form onSubmit={(e) => { console.log(e) }}>
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
                    <button type="submit" onClick={() => console.log("e")} className="create-transaction">Create</button>
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