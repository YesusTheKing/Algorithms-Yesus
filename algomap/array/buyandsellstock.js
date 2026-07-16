const arrOfPrices = [11,2,13,4,15,6,88,99,101,121,2034,1,1342,2045]
let maxProfit = 0;
let minPrice = Infinity;
let maxPrice = -Infinity;
for(let price of arrOfPrices){
    maxProfit = Math.max(price-minPrice, maxProfit)
    minPrice = Math.min(price, minPrice)
    maxPrice = Math.max(price, maxPrice)
}

console.log(`Max Profit is ${maxProfit} and Min Price is ${minPrice} and Max Price is ${maxPrice}`)