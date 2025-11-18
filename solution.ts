type Format = string | number | boolean;
const formatValue = (value: Format) => {
    if (typeof value === "string"){
        return value.toUpperCase();
    } else if (typeof value === "number"){
        return value * 10;
    } else if (typeof value === "boolean"){
        if (value === true){
            return false;
        } else {
            return true;
        }
    }
}



const getLength = (value: string | any[]) => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}




class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



type BookItem = {
    title: string;
    rating: number;
};
function filterByRating(items: BookItem[]): BookItem[] {
    return items.filter(item => item.rating >= 4);
}



interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(book: Book): void {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}



function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];
    const arr = [...arr1, ...arr2];
    for (let i = 0; i < arr.length; i++) {
        let value = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === arr[i]) {
                value = true;
                break;
            }
        }
        if (!value) {
            result.push(arr[i]);
        }
    }
    return result;
}



interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => {
        const basePrice = product.price * product.quantity;
        
        if (product.discount) {
            const discountAmount = (basePrice * product.discount) / 100;
            return total + (basePrice - discountAmount);
        } else {
            return total + basePrice;
        }
    }, 0);
}