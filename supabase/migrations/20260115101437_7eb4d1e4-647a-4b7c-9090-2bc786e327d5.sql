-- Update course images with reliable URLs
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600' WHERE name = 'MS-CIT';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600' WHERE name LIKE '%Excel%';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600' WHERE name LIKE '%AI%';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=600' WHERE name LIKE '%AutoCAD%';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600' WHERE name LIKE '%BFSI%';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600' WHERE name LIKE '%Programming%';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600' WHERE name LIKE '%Tally%';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600' WHERE name LIKE '%DTP%';
UPDATE public.courses SET image_url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600' WHERE name LIKE '%Web%';

-- Insert AI Tools
INSERT INTO public.ai_tools (name, description, url, category, is_featured, display_order) VALUES
('HeyGen', 'AI video creation with realistic avatars and voice cloning. Create professional videos in minutes.', 'https://www.heygen.com', 'video', true, 1),
('Kling AI', 'Advanced AI video generation with cinematic quality. Create stunning visuals from text prompts.', 'https://klingai.com', 'video', true, 2),
('Suno AI', 'AI music generation tool. Create original songs, melodies, and instrumentals with AI.', 'https://suno.ai', 'general', true, 3),
('OmniDim', 'AI-powered dimension analysis and 3D modeling tools for designers.', 'https://omnidim.io', 'image', false, 4),
('Gamma', 'AI presentation creator. Generate beautiful slides and documents instantly.', 'https://gamma.app', 'productivity', true, 5),
('Hugging Face', 'Open-source AI platform with thousands of models, datasets, and ML tools.', 'https://huggingface.co', 'coding', true, 6),
('Clip.cafe', 'AI-powered video clip finder. Search and extract clips from movies and shows.', 'https://clip.cafe', 'video', false, 7),
('Banana Prompts', 'AI prompt marketplace and generator. Find and create prompts for any AI tool.', 'https://www.bananaprompts.xyz', 'general', false, 8),
('Magic Hour', 'AI video creation and editing platform. Transform ideas into stunning videos.', 'https://magichour.ai', 'video', false, 9),
('Luma Labs', 'AI 3D capture and video generation. Create immersive 3D content from photos.', 'https://lumalabs.ai', 'video', true, 10),
('Pika Art', 'AI video generation with creative controls. Turn text and images into videos.', 'https://pika.art', 'video', true, 11),
('Napkin AI', 'AI visual explainer. Turn text into professional diagrams and infographics.', 'https://napkin.ai', 'productivity', false, 12),
('A0.dev', 'AI-powered app builder. Create full-stack applications with natural language.', 'https://a0.dev', 'coding', true, 13),
('V0.dev', 'AI UI generator by Vercel. Create React components from descriptions.', 'https://v0.dev', 'coding', true, 14),
('Xano', 'No-code backend builder with AI assistance. Create APIs and databases visually.', 'https://xano.com', 'coding', false, 15),
('Orchid', 'AI-powered workflow automation and business process management.', 'https://orchid.so', 'productivity', false, 16),
('Replit', 'AI-powered coding environment. Build and deploy apps with AI assistance.', 'https://replit.com', 'coding', true, 17),
('Base44', 'AI application development platform for building business apps.', 'https://base44.com', 'coding', false, 18),
('Bolt', 'AI-powered full-stack development. Build apps with natural language prompts.', 'https://bolt.new', 'coding', true, 19),
('Lovable', 'AI software engineer. Build production-ready web apps through conversation.', 'https://lovable.dev', 'coding', true, 20),
('Emergent', 'AI development tools for building intelligent applications.', 'https://emergent.sh', 'coding', false, 21),
('AutoCoder', 'Automated code generation and refactoring with AI assistance.', 'https://autocoder.ai', 'coding', false, 22),
('Hera Motion Designer', 'AI motion graphics and animation creator for designers.', 'https://hera.so', 'video', false, 23),
('Dorik', 'AI website builder. Create professional websites without coding.', 'https://dorik.com', 'coding', false, 24),
('Julius AI', 'AI data analyst. Analyze and visualize data with natural language.', 'https://julius.ai', 'productivity', true, 25),
('Rocket New', 'AI-powered project management and team collaboration platform.', 'https://rocket.new', 'productivity', false, 26),
('MGX Dev', 'AI development tools for modern web applications.', 'https://mgx.dev', 'coding', false, 27),
('BioDigital Human', '3D human body visualization platform for education and healthcare.', 'https://human.biodigital.com', 'education', true, 28),
('FineShare AI Video', 'AI video creation and editing with advanced features.', 'https://www.fineshare.com/ai-video', 'video', false, 29),
('Kahoot', 'Interactive learning games and quizzes platform for education.', 'https://kahoot.com', 'education', true, 30),
('Coursebox AI', 'AI course creation platform. Build online courses automatically.', 'https://my.coursebox.ai', 'education', false, 31),
('Auto AE', 'AI-powered After Effects automation for video editors.', 'https://autoae.ai', 'video', false, 32),
('Jittr', 'AI video content creation for social media marketing.', 'https://jittr.com', 'video', false, 33),
('AASP AI', 'AI-powered software platform for business automation.', 'https://aasp.ai', 'productivity', false, 34)
ON CONFLICT DO NOTHING;