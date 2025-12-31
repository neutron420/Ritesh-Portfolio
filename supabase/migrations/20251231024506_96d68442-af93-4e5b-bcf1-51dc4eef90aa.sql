-- Create a table for visitor count
CREATE TABLE public.visitor_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visit_count BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read visitor stats (public data)
CREATE POLICY "Anyone can view visitor stats" 
ON public.visitor_stats 
FOR SELECT 
USING (true);

-- Allow anyone to update visitor stats (for incrementing count)
CREATE POLICY "Anyone can update visitor stats" 
ON public.visitor_stats 
FOR UPDATE 
USING (true);

-- Insert initial row
INSERT INTO public.visitor_stats (id, visit_count) VALUES ('00000000-0000-0000-0000-000000000001', 0);

-- Create function to increment visitor count
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.visitor_stats 
  SET visit_count = visit_count + 1, updated_at = now()
  WHERE id = '00000000-0000-0000-0000-000000000001'
  RETURNING visit_count INTO new_count;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;