-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  college TEXT NOT NULL,
  year TEXT NOT NULL,
  domain_interest TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can register)
CREATE POLICY "Anyone can register" ON public.registrations FOR INSERT WITH CHECK (true);

-- Only admins can view registrations (for now, no public reads)
CREATE POLICY "Registrations are not publicly readable" ON public.registrations FOR SELECT USING (false);