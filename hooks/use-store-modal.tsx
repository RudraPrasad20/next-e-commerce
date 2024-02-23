import { create } from "zustand"

interface useStoreModalStore {
    isopen: boolean,
    onopen: () => void,
    onclose: () => void
}

export const useStoreModal = create<useStoreModalStore>((set)=>({
    isopen: false,
    onopen: () => set({isopen: true}),
    onclose: () => set({isopen: false})
}))
