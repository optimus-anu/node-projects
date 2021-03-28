//object shorthand property

const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Hathras'
}
console.log(user);

//object destructuring
const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// const {label:productLabel, stock, rating=5} = product;
// console.log(productLabel, stock, rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}
transaction('order', product);