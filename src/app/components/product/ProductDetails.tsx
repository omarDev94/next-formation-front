import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";
import { Product } from "@/app/lib/types";
import Link from "next/link";

const ProductDetails = async ({ id }: { id: string }) => {
  const product = await fetchFakeStore<Product>(`products/${id}`);
  
  return (
    <div>
      <h2>{product.title}</h2>
      <Link href={product.image}>About Us</Link>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;