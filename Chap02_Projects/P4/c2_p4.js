const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

document.getElementById('chicken').onclick = calcTotal;
document.getElementById('halibut').onclick = calcTotal;
document.getElementById('burger').onclick = calcTotal;
document.getElementById('salmon').onclick = calcTotal;
document.getElementById('salad').onclick = calcTotal;

function calcTotal()
{
    let cost = 0;

    let buyChicken = document.getElementById('chicken').checked;
    let buyHalibut = document.getElementById('halibut').checked;
    let buyBurger = document.getElementById('burger').checked;
    let buySalmon = document.getElementById('salmon').checked;
    let buySalad = document.getElementById('salad').checked;

    cost += buyChicken ? CHICKEN_PRICE : 0;
    cost += buyHalibut ? HALIBUT_PRICE : 0;
    cost += buyBurger ? BURGER_PRICE : 0;
    cost += buySalmon ? SALMON_PRICE : 0;
    cost += buySalad ? SALAD_PRICE : 0;   

    getCost(cost);
    getTax(cost);

    getTotalBill(cost);   

}

function getCost(cost)
{
    document.getElementById('foodTotal').innerHTML = '$' + cost.toFixed(2);
}

function getTax(cost)
{
    document.getElementById('foodTax').innerHTML = (cost * SALES_TAX).toFixed(2);
}

function getTotalBill(cost)
{
    document.getElementById('totalBill').innerHTML = (cost * (1 + SALES_TAX)).toFixed(2);
}