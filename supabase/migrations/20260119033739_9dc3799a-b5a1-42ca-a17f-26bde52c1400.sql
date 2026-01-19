-- Add unique constraint on phone_number to prevent duplicate registrations
ALTER TABLE public.registrations ADD CONSTRAINT registrations_phone_number_unique UNIQUE (phone_number);

-- Also add unique constraint on email
ALTER TABLE public.registrations ADD CONSTRAINT registrations_email_unique UNIQUE (email);