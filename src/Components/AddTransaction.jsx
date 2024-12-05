
import React from "react";
import "../Styles/AddTransaction.css";
import Popup from "./Popup";

const AddTransaction = ({getData, setDisplayAdd}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const fromInput = document.querySelector(".input-from");
        const toInput = document.querySelector(".input-to");
        const amountInput = document.querySelector(".input-amount");

        const transaction = {
            from: fromInput.value,
            to: toInput.value,
            amount: parseFloat(amountInput.value),
        };

        fetch("https://acb-api.algoritmika.org/api/transaction", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transaction),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add the transaction.");
                }
                getData()
                setDisplayAdd(false)
                return response.json();
            })
            .then(() => {
                const successMessage = document.querySelector(".success");
                successMessage.style.display = "block";

                fromInput.value = "";
                toInput.value = "";
                amountInput.value = "";

                setTimeout(() => {
                    successMessage.style.display = "block";
                }, 3000);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });
    };

    return (
        <Popup handleSubmit={handleSubmit} />
    );
};

export default AddTransaction;
