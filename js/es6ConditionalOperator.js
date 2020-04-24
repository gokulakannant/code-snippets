// ES6
const user = {
    address: {
        house: {
            nummber: 123
        }
    }
}

// Old way

user &&
    user.address &&
        user.address.house &&
            console.log(user.address.house.nummber)

// ES6
console.log(user?.address?.house?.nummber); // Output:: 123

const user2 = {
    address: {}
}

console.log(user?.address?.house?.nummber); // Output:: undefined
