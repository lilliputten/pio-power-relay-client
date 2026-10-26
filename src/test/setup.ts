import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// 1. Automatically clean up the DOM after each test to prevent memory leaks
afterEach(() => {
  cleanup();
});

// 2. Mock common browser APIs not fully supported by JSDOM
// Example: Mocking window.matchMedia (frequently used by UI component libraries)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Example: Mocking ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

// Example: Mocking window.scrollTo
vi.stubGlobal('scrollTo', vi.fn());
