



// document.getElementById("phone-increase").addEventListener('click', function () {

// })
function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    // const caseNewCount = caseCount - 1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    // const caseTotal = productNewCount * 59;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputValue('phone');

    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById("total-price").innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

}
// parseInt(phoneInput.value);

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}


//remove all item
document.getElementById('remove1').addEventListener('click', function () {
    const phoneArea = document.getElementById("phone-area");
    phoneArea.style.display = "none";
})

document.getElementById('remove2').addEventListener('click', function () {
    const casingArea = document.getElementById("casing-area");
    casingArea.style.display = "none";
})

const checkout = document.getElementById("checkout");
const welcomePage = document.getElementById('welcomepage');
welcomePage.style.display = "none";
checkout.addEventListener('click',function(){
    const cart =  document.getElementById('shoppingCart');
    cart.style.display = "none";
    welcomePage.style.display = "block";
});


// phone er  jonno
// function handlePhoneChange(isIncrease) {
//     const PhoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(PhoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     PhoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
// }



// anoter system
// // case er jonno
// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// }


// // phone er  jonno
// function handlePhoneChange(isIncrease) {
//     const PhoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(PhoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     PhoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
// }



// document.getElementById('phone-decrease').addEventListener('click', function () {

// })



// another system (phone).... 
// document.getElementById("phone-increase").addEventListener('click', function(){
//     const PhoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(PhoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     PhoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
//  })

//  document.getElementById('phone-decrease').addEventListener('click', function(){
//      const PhoneInput = document.getElementById('phone-count');
//      const phoneCount = parseInt(PhoneInput.value);
//      const phoneNewCount = phoneCount - 1;
//      PhoneInput.value = phoneNewCount;
//      const phoneTotal = phoneNewCount * 1219;
//      document.getElementById('phone-total').innerText = '$' + phoneTotal;
//  })



// different system increment event handler (case )

// document.getElementById('case-increase').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// })

// document.getElementById('case-decrease').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// })
