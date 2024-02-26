import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CardItemProps } from '@/components/atoms/CardItem';
import type { ItemTypeDelivery } from '@/components/atoms/StepsCart/StepOneCart/TypeDelivery';

interface CheckoutInfoStore {
  cartStore: CardItemProps[];
  totalCartStore: number;
  shippingStore: ItemTypeDelivery;
  updateCartStore: (cartItem: CardItemProps) => void;
  removeProduct: (id: string | number) => void;
  changeAddQuantityProduct: (id: string | number) => void;
  changeSubQuantityProduct: (id: string | number) => void;
  changeValueQuantityInput: (id: string | number, quantity: number) => void;
  shippingPriceProduct: (shippingItem: ItemTypeDelivery) => void;
  totalCartProduct: (total: number) => void;
}

export const useCheckoutStore = create<CheckoutInfoStore>()(
  persist(
    (set) => ({
      cartStore: [],
      shippingStore: {
        type: 'Free shipping',
        price: '$0.00',
      },
      totalCartStore: 0,
      updateCartStore: (cartItem: CardItemProps) =>
        set((state) => {
          const findCart = state.cartStore?.find((item) => item.id === cartItem.id);
          if (findCart) {
            const newListCart = state.cartStore?.map((item) => {
              const quantity = item.quantity ? Number(item.quantity) + 1 : 2;
              const totalPrice = Number(
                (
                  Number(item.price?.replace('$', '') || item.price_discount?.replace('$', '')) *
                  quantity
                ).toFixed(2),
              );
              return item.id === cartItem.id
                ? {
                    ...item,
                    price: item.price || item.price_discount,
                    quantity: quantity,
                    totalPrice: totalPrice,
                  }
                : {
                    ...item,
                    price: item.price || item.price_discount,
                  };
            });
            return {
              cartStore: newListCart,
            };
          }
          return {
            cartStore: [
              ...state.cartStore,
              {
                ...cartItem,
                price: cartItem.price || cartItem.price_discount,
                totalPrice: Number(
                  cartItem.price?.replace('$', '') || cartItem.price_discount?.replace('$', ''),
                ).toFixed(2),
              },
            ],
          };
        }),
      changeAddQuantityProduct: (id: string | number) =>
        set((state) => {
          const newListCart = state.cartStore?.map((item) => {
            if (item?.quantity || item.quantity !== 1) {
              const quantity = Number(item?.quantity) - 1;
              const totalPrice = Number(
                (Number(item.price?.replace('$', '')) * quantity).toFixed(2),
              );
              return item.id === id
                ? { ...item, quantity: quantity, totalPrice: totalPrice }
                : item;
            }
            return item;
          });
          return {
            cartStore: newListCart,
          };
        }),
      changeSubQuantityProduct: (id: string | number) =>
        set((state) => {
          const newListCart = state.cartStore?.map((item) => {
            const quantity = item?.quantity ? item.quantity + 1 : 2;
            const totalPrice = Number((Number(item.price?.replace('$', '')) * quantity).toFixed(2));
            return item.id === id ? { ...item, quantity: quantity, totalPrice: totalPrice } : item;
          });
          return {
            cartStore: newListCart,
          };
        }),
      removeProduct: (id: string | number) =>
        set((state) => {
          const newListCart = state.cartStore?.filter((item) => {
            return item.id !== id;
          });
          return {
            cartStore: newListCart,
          };
        }),
      changeValueQuantityInput: (id: string | number, quantity: number) =>
        set((state) => {
          const newListCart = state.cartStore?.map((item) => {
            const totalPrice = Number((Number(item.price?.replace('$', '')) * quantity).toFixed(2));
            return item.id === id ? { ...item, quantity: quantity, totalPrice: totalPrice } : item;
          });
          return {
            cartStore: newListCart,
          };
        }),
      shippingPriceProduct: (shippingItem: ItemTypeDelivery) =>
        set((_) => {
          return {
            shippingStore: {
              type: shippingItem.type,
              price: shippingItem.price,
            },
          };
        }),
      totalCartProduct: (total: number) =>
        set((_) => {
          return {
            totalCartStore: total,
          };
        }),
    }),
    {
      name: 'checkout-store',
    },
  ),
);
