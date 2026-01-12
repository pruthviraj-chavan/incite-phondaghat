-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  duration TEXT NOT NULL,
  lectures INTEGER DEFAULT 0,
  certificate TEXT,
  category TEXT NOT NULL DEFAULT 'skills',
  popular BOOLEAN DEFAULT false,
  image_url TEXT,
  storage_path TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view courses" 
ON public.courses 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can insert courses" 
ON public.courses 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update courses" 
ON public.courses 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete courses" 
ON public.courses 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create ai_tools table
CREATE TABLE public.ai_tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  icon_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai_tools ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view ai_tools" 
ON public.ai_tools 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can insert ai_tools" 
ON public.ai_tools 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update ai_tools" 
ON public.ai_tools 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete ai_tools" 
ON public.ai_tools 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_ai_tools_updated_at
  BEFORE UPDATE ON public.ai_tools
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add is_shorts column to institute_videos for YouTube Shorts support
ALTER TABLE public.institute_videos ADD COLUMN is_shorts BOOLEAN DEFAULT false;

-- Add is_shorts column to student_testimonials for YouTube Shorts support  
ALTER TABLE public.student_testimonials ADD COLUMN is_shorts BOOLEAN DEFAULT false;

-- Create storage bucket for courses images
INSERT INTO storage.buckets (id, name, public) VALUES ('courses', 'courses', true);

-- Storage policies for courses bucket
CREATE POLICY "Courses images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'courses');

CREATE POLICY "Admins can upload course images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'courses' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update course images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'courses' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete course images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'courses' AND has_role(auth.uid(), 'admin'::app_role));