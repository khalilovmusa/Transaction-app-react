import AddTransaction from './AddTransaction';
import ListButtons from './ListButtons'
import { useState, useEffect } from "react";
import EditTransaction from './EditTransaction';

const Transactions = () => {

    const [dataArr, setDataArr] = useState([])
    const [displayAdd, setDisplayAdd] = useState(false);
    const [displayEdit, setDisplayEdit] = useState(false);

    const getData = () => {
        fetch('https://acb-api.algoritmika.org/api/transaction').then((res) => {
            return res.json();
        }).then((dataArr) => {
            setDataArr(dataArr)
        })
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <>
            {displayAdd && <AddTransaction setDisplayAdd={setDisplayAdd} getData={getData} />}
            {displayEdit && <EditTransaction setDisplayEdit={setDisplayEdit} />}
            <div className="wrapper">
                <div className="button-container">
                    <button className="transaction-add-button" onClick={() => {setDisplayAdd(!displayAdd), setDisplayEdit(false) }}>{displayAdd || displayEdit ? "Cancel" : "Add transaction"}</button>
                </div>
                <div className="transactions-container">
                    <ul className="list">
                        {dataArr && dataArr.map((item) => {
                            return <li className="list-item" key={item.id}>{`From: ${item.from} | To: ${item.to} | amount: ${item.amount}$  `}<ListButtons displayEdit={displayEdit} setDisplayEdit={setDisplayEdit} setStateData={setDataArr} getData={getData} id={item.id} /></li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Transactions;