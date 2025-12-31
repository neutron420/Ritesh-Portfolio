import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementAndFetch = async () => {
      try {
        // Check if this session already incremented
        const sessionKey = 'visitor_counted';
        const alreadyCounted = sessionStorage.getItem(sessionKey);

        if (!alreadyCounted) {
          // Increment visitor count using RPC
          const { data, error } = await supabase.rpc('increment_visitor_count');
          
          if (error) {
            console.error('Error incrementing visitor count:', error);
            // Fallback to just fetching
            const { data: stats } = await supabase
              .from('visitor_stats')
              .select('visit_count')
              .eq('id', '00000000-0000-0000-0000-000000000001')
              .single();
            
            if (stats) {
              setCount(stats.visit_count);
            }
          } else {
            setCount(data);
            sessionStorage.setItem(sessionKey, 'true');
          }
        } else {
          // Just fetch current count
          const { data: stats } = await supabase
            .from('visitor_stats')
            .select('visit_count')
            .eq('id', '00000000-0000-0000-0000-000000000001')
            .single();
          
          if (stats) {
            setCount(stats.visit_count);
          }
        }
      } catch (error) {
        console.error('Error with visitor count:', error);
      } finally {
        setLoading(false);
      }
    };

    incrementAndFetch();
  }, []);

  return { count, loading };
}
