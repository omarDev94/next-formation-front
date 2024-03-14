import { PageProps } from "@/.next/types/app/page";
import { fetchFakeStore } from "@/app/lib/fakeStoreApiService";

import ProductDetails from "@/app/ui/product/ProductDetails";
import ProductRating from "@/app/ui/product/ProductRating";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";

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