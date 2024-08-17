import { create } from "zustand"

export interface ContactForm {
    id: string
    name: string
    email: string
    message: string
}

export interface ContactFormStore {
    items: any[]
    setItems: (contactForm: any[]) => void
    addItem: (contactForm: any) => void
}

export const useContactFormStore = create<ContactFormStore>((set) => ({
    items: [],
    setItems: (contactForm) => set((state) => ({ ...state, items: contactForm })),
    addItem: (contactForm) => set((state) => ({ ...state, items: [...state.items, contactForm] })),
}))