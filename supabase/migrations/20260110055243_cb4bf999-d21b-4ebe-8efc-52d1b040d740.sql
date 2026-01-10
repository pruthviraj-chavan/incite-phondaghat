-- Create team_members table for team/leadership section
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  storage_path TEXT,
  display_order INTEGER DEFAULT 0,
  is_leadership BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view team members" 
ON public.team_members 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can insert team members" 
ON public.team_members 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update team members" 
ON public.team_members 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete team members" 
ON public.team_members 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_team_members_updated_at
BEFORE UPDATE ON public.team_members
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add "title" and "description" fields to gallery_images for carousel captions
ALTER TABLE public.gallery_images 
ADD COLUMN title TEXT,
ADD COLUMN description TEXT;

-- Create storage bucket for team member photos
INSERT INTO storage.buckets (id, name, public) VALUES ('team', 'team', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for team bucket
CREATE POLICY "Team images are publicly accessible" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'team');

CREATE POLICY "Admins can upload team images" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'team' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update team images" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'team' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete team images" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'team' AND has_role(auth.uid(), 'admin'::app_role));