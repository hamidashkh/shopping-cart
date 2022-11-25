function ShowAlert() {
    let basket = JSON.parse(localStorage.getItem('products'));

    if(basket.length === 0) {
        document.querySelector('.empty-cart').classList.remove('d-none')
        document.querySelector('.table').classList.add('d-none')
    }
    else{
        document.querySelector('.empty-cart').classList.add('d-none')
        document.querySelector('.table').classList.remove('d-none')
    }
}


ShowAlert();

function GetList() {
    let basket = JSON.parse(localStorage.getItem('products'));

    let row = '';
    basket.forEach(pr => {
       
        row += `
            <tr>
                <th scope="row">${pr.Id}</th>
                <td class="img-td">
                    <img src=${pr.Image} alt="">
                </td>
                <td>${pr.Name.length > 10 ? pr.Name.slice(0,20) + "..." : pr.Name}</td>
                <td>
                    <input type="number" id="inp" onchange="Price()" value=${pr.Count}>
                </td>
                <td>
                <span class="text-success fw-bold" id="dollar"> AZN</span>
                </td>
            </tr>
        `
    })

    document.getElementById('tbdy').innerHTML = row;
}

GetList();

let value=document.getElementById('inp').value;


function Price(){
    let basket = JSON.parse(localStorage.getItem('products'));

    basket.forEach(pr => {
        let int_price = pr.Price.slice(-(pr.Price.length),-4);
        let value=document.getElementById('inp').value;
        let price=value*int_price;
        document.getElementById('dollar').innerHTML = price + "AZN";
});
    
}