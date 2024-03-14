type Rating = {
    rate: number, 
    count: number
}

interface Product {
    id: number, 
    title: string, 
    price: number,
    description: string, 
    category: string,
    image: string,
    rating: Rating
}

type Products = Product[]

/* interface PageProps {
    id: string
} */