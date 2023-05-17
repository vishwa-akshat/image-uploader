export interface StoreState {
    isUploading: boolean;
    imageLink: string | null;
    setIsUploading: (alvue: boolean) => void;
    setImageLink: (link: string) => void;
}
