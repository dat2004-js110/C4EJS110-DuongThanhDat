// Ex 1.1: What does x receives from product, property or value? x= property
// Ex 1.2:Use the for loop to print/log out the following output

const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};
for (let x in product) {
    console.log(product[x]);
} 

