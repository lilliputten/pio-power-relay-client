import { create } from 'zustand';

import type { RelayConfig } from '@/schemas';

interface RelayStore {
  config: RelayConfig;
  setConfig: (config: RelayConfig) => void;
  isPowerOn: boolean;
  togglePower: () => void;
}

export const useRelayStore = create<RelayStore>()((set) => ({
  config: { relayName: 'Main Relay', pinNumber: 13 },
  setConfig: (config) => set({ config }),
  isPowerOn: false,
  togglePower: () => set((state) => ({ isPowerOn: !state.isPowerOn })),
}));
