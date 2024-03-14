import ProductDetails from "@/app/components/product/ProductDetails";
import ProductRating from "@/app/components/product/ProductRating";
import { Suspense } from "react";
import { PageProps } from "../../../../.next/types/app/page";


const Product = ({ params: { id } }: PageProps) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductRating id={id} />
      </Suspense>
    </div>
  );
};

export default Product;