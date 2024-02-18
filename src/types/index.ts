
export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    category: string;
    image: string;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    images: [];
}

export type CartProduct = Product & {
    quantity: number;
};