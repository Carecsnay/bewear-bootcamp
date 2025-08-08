"use client";

import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { addProductToCart } from "@/actions/add-cart-product";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  productVariantId: string;
  quantity: number;
}

const AddToCartButton = ({
  productVariantId,
  quantity,
}: AddToCartButtonProps) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["addProductToCart", productVariantId, quantity],
    mutationFn: () => addProductToCart({ productVariantId, quantity }),
  });
  return (
    <Button
      className="rounded-full"
      size={"lg"}
      variant={"outline"}
      disabled={isPending}
      onClick={() => mutate()}
    >
      {!isPending && <Loader2 className="mr-1 animate-spin" />}
      Adicionar a sacola
    </Button>
  );
};

export default AddToCartButton;
