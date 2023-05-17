import { create } from "zustand";

import { StoreState } from "./types";

export const useStore = create<StoreState>((set) => ({
    isUploading: false,
    imageLink: null,
    setIsUploading: (value) => set({ isUploading: value }),
    setImageLink: (link) => set({ imageLink: link }),
}));
