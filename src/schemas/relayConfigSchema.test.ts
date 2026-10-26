import { describe, it, expect } from 'vitest';

import { relayConfigSchema } from './relayConfigSchema';

describe('relayConfigSchema', () => {
  it('should validate a valid relay configuration', () => {
    const validConfig = {
      relayName: 'Main Pump',
      pinNumber: 4,
    };

    const result = relayConfigSchema.safeParse(validConfig);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual(validConfig);
    }
  });

  describe('relayName validation', () => {
    it('should fail if relayName is empty', () => {
      const invalidConfig = {
        relayName: '',
        pinNumber: 12,
      };

      const result = relayConfigSchema.safeParse(invalidConfig);

      expect(result.success).toBe(false);
      if (!result.success) {
        const issues = result.error.flatten().fieldErrors;
        expect(issues.relayName).toContain('Name is required');
      }
    });

    it('should fail if relayName is not a string', () => {
      const invalidConfig = {
        relayName: 123,
        pinNumber: 12,
      };

      const result = relayConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
    });
  });

  describe('pinNumber validation', () => {
    it('should fail if pinNumber is negative or zero', () => {
      const invalidConfigs = [
        { relayName: 'Relay 1', pinNumber: 0 },
        { relayName: 'Relay 2', pinNumber: -5 },
      ];

      for (const config of invalidConfigs) {
        const result = relayConfigSchema.safeParse(config);
        expect(result.success).toBe(false);
      }
    });

    it('should fail if pinNumber is a float', () => {
      const invalidConfig = {
        relayName: 'Relay 1',
        pinNumber: 3.14,
      };

      const result = relayConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
    });
  });
});
