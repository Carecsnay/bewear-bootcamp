"use client";

import { productTable, productVariantTable } from "@/db/schema";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductsList = ({ title, products }: ProductListProps) => {
  return (
    <>
      <div className="space-y-6">
        <h3>{title}</h3>
        {products.map(product => <ProductItem product={product})}
      </div>
    </>
  );
};

export default ProductsList;
