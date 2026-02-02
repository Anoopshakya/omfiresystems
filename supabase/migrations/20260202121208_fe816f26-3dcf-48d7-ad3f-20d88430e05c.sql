-- Create enquiries table for contact form submissions
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert enquiries (public contact form)
CREATE POLICY "Anyone can submit enquiries" 
ON public.enquiries 
FOR INSERT 
WITH CHECK (true);

-- Optionally allow reading own enquiry (for confirmation purposes - using session context if needed)
-- For now, keeping it simple with insert-only public access