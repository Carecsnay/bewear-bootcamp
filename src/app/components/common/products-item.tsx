import Link from "next/link";

import { productVariantTable } from "@/db/schema";

interface ProductListProps {
  title: string;
  products: (typeof productVariantTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}
const ProductItem = ({ title, products }: ProductListProps) => {
  return (
    <Link href="/" className="flex flex-col gap-4">
      {title}
    </Link>
  );
};

export default ProductItem;
