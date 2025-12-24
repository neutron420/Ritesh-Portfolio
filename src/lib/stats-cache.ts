// Simple localStorage cache utility for API responses with TTL

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

export function getCachedData<T>(key: string): { data: T | null; isStale: boolean; lastUpdated: Date | null } {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) {
      return { data: null, isStale: true, lastUpdated: null };
    }
    
    const entry: CacheEntry<T> = JSON.parse(cached);
    const isStale = Date.now() - entry.timestamp > CACHE_TTL;
    
    return {
      data: entry.data,
      isStale,
      lastUpdated: new Date(entry.timestamp)
    };
  } catch {
    return { data: null, isStale: true, lastUpdated: null };
  }
}

export function setCachedData<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // Silently fail if localStorage is full or unavailable
  }
}

export function formatLastUpdated(date: Date | null): string {
  if (!date) return '';
  
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}
