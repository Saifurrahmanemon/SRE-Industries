import create from "zustand";

export const useStore = create((set) => ({
   quantity: 0,
   increaseQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
   decreaseQuantity: () => set((state) => ({ quantity: state.quantity - 1 })),
   removeAllQuantity: () => set({ quantity: 0 }),
   setQuantity: (quantity) => set({ quantity }),

   shipping: 10,
   setShipping: (shipping) => set({ shipping }),

   promotion: 0,
   setPromotion: (promotion) => set({ promotion }),
}));
