import { z } from 'zod';

export const relayConfigSchema = z.object({
  relayName: z.string().min(1, 'Name is required'),
  pinNumber: z.number().int().positive(),
});

export type RelayConfig = z.infer<typeof relayConfigSchema>;
