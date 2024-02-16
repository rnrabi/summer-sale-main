const cards = document.querySelectorAll(".card");
console.log(cards)
let count = 1;
let totalPrice = 0;
for (const card of cards) {
    // console.log(card);
    card.addEventListener('click', function () {
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('span').innerText;
        const priceNet = parseFloat(price.split(' ')[1]);
        // console.log(title , priceNet);
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = count + '.' + ' ' + title;
        titleContainer.appendChild(p);
        count++;

        totalPrice += priceNet;
        document.getElementById('totalPrice').innerText = totalPrice;
        console.log(totalPrice)
    })
}


document.getElementById('apply-btn').addEventListener('click', function () {
    const discountDisplay = document.getElementById('discountPrice');
    const netTotal = document.getElementById('total');
    const inputValueText = document.getElementById('input-field').value;
    const inputValueTextNew = inputValueText.split(' ').join('').toUpperCase();

    if (totalPrice >= 200) {
        if(inputValueTextNew === "SELL200"){
            const discount = totalPrice * 0.2 ;
            console.log(discount)
            discountDisplay.innerText = discount.toFixed(2);
            const restTotal = totalPrice - discount;
            netTotal.innerText = restTotal;
            document.getElementById('input-field').value = '';
        }
        else{
            alert('Invalid coupone')
            document.getElementById('input-field').value = '';
        }
    }
    else {
        alert('200 khoroch kor vai plz');
        document.getElementById('input-field').value = '';
    }
})

