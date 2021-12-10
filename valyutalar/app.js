window.addEventListener("DOMContentLoaded", function(){
    let bankAPi = "https://nbu.uz/en/exchange-rates/json/";
    let date = new Date();
    let days = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let item_Body = document.querySelector(".item-body");
    let search = document.querySelector("#search");
    let btn = document.querySelector(".btn");
    time.textContent = `${days}.${month}.${year}`;
    function getResults(api) {
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                createElement(data);
            })
    }
    getResults(bankAPi);

    function createElement(data) {
        data.forEach(data => {
            let heading = document.createElement("h1");
            heading.classList.add('item');

            heading.innerHTML = `
            1 ${data.code} = <span id="usd">${data.cb_price}</span>
            `;
            item_Body.appendChild(heading);
        });
    }
})