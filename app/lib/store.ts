import { create } from "zustand"

export type ApiKeyType = {
  id: string
  name: string
  key: string
  active: boolean
  createdAt: string
}

type Store = {
  apiKeys: ApiKeyType[]
  addKey: (name: string) => void
  deleteKey: (id: string) => void
  toggleKey: (id: string) => void
}

export const useApiStore = create<Store>((set) => ({
  apiKeys: [
    {
      id: "1",
      name: "Production Key",
      key: "sk_live_xxxxxxxxx1234",
      active: true,
      createdAt: new Date().toISOString()
    },
    {
      id: "2",
      name: "Testing Key",
      key: "sk_test_xxxxxxxxx5678",
      active: false,
      createdAt: new Date().toISOString()
    }
  ],

  addKey: (name) =>
    set((state) => ({
      apiKeys: [
        ...state.apiKeys,
        {
          id: crypto.randomUUID(),
          name,
          key: "sk_" + Math.random().toString(36).substring(2, 18),
          active: true,
          createdAt: new Date().toISOString()
        }
      ]
    })),

  deleteKey: (id) =>
    set((state) => ({
      apiKeys: state.apiKeys.filter((k) => k.id !== id)
    })),

  toggleKey: (id) =>
    set((state) => ({
      apiKeys: state.apiKeys.map((k) =>
        k.id === id ? { ...k, active: !k.active } : k
      )
    }))
}))