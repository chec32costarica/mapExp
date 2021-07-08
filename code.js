

const url = "https://script.google.com/macros/s/AKfycbxtUwKz593_-ZGIxGico3nJw5q4ni2yWUWaQ-ted8jiKTpSEQSKtBvUY7CsJpnhKiQt/exec";

fetch(url)
    .then(d => d.json())
    .then(d => {
        d.forEach(e => {

            document.getElementById('app').innerHTML += `

            <div class="card mb-3">
                <div class="card-header bg-info fw-bolder text-white">
                    <span class="bullet-number">${e[0]}</span> ${e[8]} - ${e[9]} <span class="bullet-side">${e[5]}</span><span class="bullet-status">${e[10]}</span>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${e[1]}</h5>
                        <a href="#">
                            <p class="card-text">${e[6]}</p>
                        </a>
                    <p class="card-text">${e[11]}</p>
                    <p class="card-text badge bg-primary text-wrap">${e[12]}</p>
                </div>
            </div>
            
            ` 
        }
    })
