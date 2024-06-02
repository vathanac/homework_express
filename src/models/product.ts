export class Product {
    constructor(
            public id: number,
            public name: string,
            public price: number,
    ) {}

    static getProducts(): Product[] {
        return [
            new Product(1, 'Memory Card', 20),
            new Product(2, 'Pen Drive', 30),
            new Product(3, 'Power Bank', 50),
            new Product(4, 'Wireless Mouse', 40)
        ];
    }
}