import { desc } from "drizzle-orm";
import Image from "next/image";

import { db } from "@/db";
import { productTable } from "@/db/schema";

import CategorySelector from "./components/common/category-selector";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import ProductsList from "./components/common/products-list";

export default async function Home() {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
      category: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});

  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full rounded-md"
          />
        </div>

        <ProductsList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Seja autêntico"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full rounded-md"
          />
        </div>

        <ProductsList products={newlyCreatedProducts} title="Novos produtos" />
        <Footer />
      </div>
    </>
  );
}
