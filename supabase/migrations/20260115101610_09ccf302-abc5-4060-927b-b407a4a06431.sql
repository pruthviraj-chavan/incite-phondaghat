-- Fix the duplicate/incorrect entry
DELETE FROM public.ai_tools WHERE name = 'https://www.napkin.ai/';
DELETE FROM public.ai_tools WHERE name = 'Suno AI ' AND category = 'video';