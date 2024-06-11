// ==UserScript==
// @name         Transaction Number Linker
// @namespace    http://tampermonkey.net/
// @version      0.13
// @description  Generate clickable links for transaction numbers
// @author       Michael Chapman
// @match        https://www.wholecell.io/*
// @match        https://wholecell.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to generate clickable link for transaction number
    function generateLink(transactionNumber) {
        // Edit the base URL here as per your requirement
        let baseURL = "https://ship13.shipstation.com/orders/all-orders-search-result?quickSearch=";
        return `<a href="${baseURL}${transactionNumber}" target="_blank">${transactionNumber}</a>`;
    }

    // Find all elements with class "text-center"
    let elements = document.getElementsByClassName("text-center");

    // Loop through each element
    for (let element of elements) {
        // Check if the text contains "Transaction Number:"
        if (element.textContent.includes("Transaction Number:")) {
            // Extract the transaction number
            let transactionNumber = element.textContent.replace("Transaction Number: ", "").trim();

            // Generate the clickable link
            let link = generateLink(transactionNumber);

            // Replace the original text with the clickable link
            element.innerHTML = link;
        }
    }
})();