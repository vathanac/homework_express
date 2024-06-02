export class Category {
    constructor(
        public id: number,
        public name: string
    ) { }

    // mockdata for testing
    static getCategories: Category[] = [
        new Category(1, 'Computer'),
        new Category(2, 'Camera Security'),
        new Category(3, 'Networking Devices'),
        new Category(4, 'Data Storage'),
    ];
}