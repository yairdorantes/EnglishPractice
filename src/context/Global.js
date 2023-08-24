import { create } from "zustand";

export const useBearStore = create((set) => ({
  swiper: null,
  setSwiper: (swiper) => set({ swiper: swiper }),
}));
