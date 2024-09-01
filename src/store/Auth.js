import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const AuthStore = (set, get) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
})

const useAuthStore = create()(
    devtools(
        persist(
            AuthStore,
            {
                name: "auth-store",
                getStorage: () => localStorage
            })
    )
);

export default useAuthStore;