-- Create app_role enum for admin access
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Policy: Users can view their own roles
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Update registrations table: rename college to branch, add section and reg_number
ALTER TABLE public.registrations 
  RENAME COLUMN college TO branch;

ALTER TABLE public.registrations 
  ADD COLUMN section TEXT,
  ADD COLUMN reg_number TEXT;

-- Make domain_interest nullable
ALTER TABLE public.registrations 
  ALTER COLUMN domain_interest DROP NOT NULL;

-- Allow admins to read registrations
CREATE POLICY "Admins can view all registrations"
ON public.registrations
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to update registrations
CREATE POLICY "Admins can update registrations"
ON public.registrations
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to delete registrations
CREATE POLICY "Admins can delete registrations"
ON public.registrations
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));