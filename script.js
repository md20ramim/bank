// login-area
const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transectionArea = document.getElementById('transection-area');
    transectionArea.style.display = "block";
})


// common
    function updateSpanText(id, depositNumber){
        const current= document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = currentNumber + depositNumber;
        document.getElementById(id).innerText = total;
    }
    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }
// deposit-btn
    const depositBtn= document.getElementById('deposit-btn');
    depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("deposit-amount");

    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);

    document.getElementById('deposit-amount').value = "";
})

// withdraw button
    const withdrawBtn = document.getElementById("withdraw-btn");
    withdrawBtn.addEventListener("click", function(){
        const withdrawNumber = getInputNumber("withdraw-amount");

        updateSpanText("current-withdraw", withdrawNumber);
        updateSpanText("current-balance", -1 * withdrawNumber);

        document.getElementById('withdraw-amount').value = "";
    })
    