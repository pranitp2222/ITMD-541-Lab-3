
const billAmount = document.getElementById('billinput');


const range = document.getElementById('gettip');

const rangeOutput = document.getElementById('inputtext');
rangeOutput.value = `${range.value}%`;

const tipPercentage = document.getElementById('tippercentage');
const tipAmount = document.getElementById('tipamount');
const totalBill = document.getElementById('totalbill');


billAmount.onkeyup = function() {
    
    let checkInt = Number(this.value);
    if(!Number.isInteger(checkInt)){
            alert("Please Enter Correct Amount");
            range.value = 0;
            rangeOutput.value = `${range.value}%`;
            tipPercentage.value = '';
            tipAmount.value = '';
            totalBill.value = '';
            billAmount.value = '';
    }

    if(this.value == ''){
        range.value = 0;
        rangeOutput.value = `${range.value}%`;
        tipPercentage.value = '';
        tipAmount.value = '';
        totalBill.value = '';
    }
}

let ans = 0;

range.oninput = function (){
    ans = this.value;
    rangeOutput.value = ans + "%";
    tipPercentage.value = ans + "%";
    tipAmount.value = `$${(Number(billAmount.value) * ( Number(ans) / 100)).toFixed(2)}`;
    let bill = billAmount.value;
    let tip = tipAmount.value;
    totalBill.value = `$${(Number(billAmount.value) + Number((Number(billAmount.value) * ( Number(ans) / 100)))).toFixed(2) }`;
}

billAmount.oninput = function (){
        let changeValue = this.value;
        rangeOutput.value = ans + "%";
        tipPercentage.value = ans + "%";
        tipAmount.value = `$${(Number(billAmount.value) * ( Number(ans) / 100)).toFixed(2)}`;
        let bill = billAmount.value;
        let tip = tipAmount.value;
        totalBill.value = `$${(Number(billAmount.value) + Number((Number(billAmount.value) * ( Number(ans) / 100)))).toFixed(2) }`;
    
}


 const clear = document.getElementById('clear');
 clear.addEventListener("click", function () {
    billAmount.value = ''; 
    range.value = 0;
    ans = 0;
    rangeOutput.value = `${ans}%`;
    tipPercentage.value = '';
    tipAmount.value = '';
    totalBill.value = '';
    

 })


