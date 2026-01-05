import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Static blog content data with SEO-friendly slugs
const staticBlogContent: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  metaDescription: string;
  keywords: string[];
  content: string;
}> = {
  "mscit-course-phondaghat-computer-training": {
    title: "MSCIT कोर्स - फोंडाघाट मधील सर्वोत्तम संगणक प्रशिक्षण",
    category: "MSCIT",
    date: "2024-01-15",
    readTime: "5 मिनिटे",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    metaDescription: "MSCIT course in Phondaghat - Learn government certified computer course at Incite Computer. Best MSCIT training in Phonda, Sindhudurg.",
    keywords: ["mscit course phondaghat", "mscit phonda", "computer training sindhudurg", "mscit certification"],
    content: `
## MSCIT म्हणजे काय?

**MSCIT (Maharashtra State Certificate in Information Technology)** हा महाराष्ट्र शासनाने मान्यता दिलेला संगणक कोर्स आहे. हा कोर्स **MKCL (Maharashtra Knowledge Corporation Limited)** द्वारे राबवला जातो.

## MSCIT कोर्स का करावा?

### 1. सरकारी नोकरीसाठी आवश्यक
- बहुतांश सरकारी नोकऱ्यांमध्ये MSCIT certificate अनिवार्य आहे
- Police, Talathi, Gramsevak, Clerk भरतीसाठी आवश्यक
- **फोंडाघाट, फोंडा** परिसरातील विद्यार्थ्यांसाठी सोयीचे

### 2. संपूर्ण Computer Knowledge
- Windows Operating System
- MS Office (Word, Excel, PowerPoint)
- Internet आणि Email वापर
- Basic Computer Hardware माहिती

## Incite Computer फोंडाघाट येथे का शिकावे?

✅ **अनुभवी Faculty** - 10+ वर्षांचा अनुभव  
✅ **Latest Computers** - नवीनतम संगणक सुविधा  
✅ **Practical Training** - हाताळणी-आधारित शिक्षण  
✅ **Flexible Timings** - सकाळ, दुपार, संध्याकाळ बॅचेस  
✅ **Success Rate** - 98% विद्यार्थी उत्तीर्ण  

## आजच प्रवेश घ्या!

**Incite Computer Phondaghat** येथे MSCIT कोर्ससाठी आजच संपर्क करा. तुमच्या करिअरची योग्य सुरुवात करा!

📞 **संपर्क:** 7499697181  
📍 **पत्ता:** Incite Computer, फोंडाघाट, फोंडा, सिंधुदुर्ग
    `
  },
  "tally-prime-accounting-course-phonda": {
    title: "Tally Prime कोर्स - फोंडा येथे Accounting शिका",
    category: "Tally",
    date: "2024-01-10",
    readTime: "7 मिनिटे",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    metaDescription: "Learn Tally Prime accounting course in Phondaghat, Phonda. Best Tally training with GST, job placement assistance at Incite Computer.",
    keywords: ["tally course phondaghat", "tally prime phonda", "accounting course sindhudurg", "gst tally"],
    content: `
## Tally Prime म्हणजे काय?

**Tally Prime** हा भारतातील सर्वात लोकप्रिय **Accounting Software** आहे. छोट्या व्यवसायांपासून मोठ्या कंपन्यांपर्यंत सर्वत्र Tally वापरला जातो.

## Tally कोर्स का शिकावा?

### 1. नोकरीच्या संधी
- **Accountant** - सर्व प्रकारच्या कंपन्यांमध्ये
- **GST Return Filing** - CA/Tax Consultant ऑफिसमध्ये
- **Store Manager** - Inventory Management साठी
- **फोंडाघाट, फोंडा** परिसरात अनेक संधी

## आजच Enroll करा!

**Incite Computer Phondaghat** - फोंडा, सिंधुदुर्ग येथे Tally Prime कोर्ससाठी संपर्क करा.

📞 **संपर्क:** 7499697181
    `
  },
  "english-marathi-typing-course-phondaghat": {
    title: "English व Marathi Typing कोर्स - फोंडाघाट",
    category: "Typing",
    date: "2024-01-05",
    readTime: "4 मिनिटे",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200",
    metaDescription: "Learn English and Marathi typing in Phondaghat for government jobs. Professional typing course at Incite Computer, Phonda Sindhudurg.",
    keywords: ["typing course phondaghat", "marathi typing phonda", "english typing sindhudurg", "government job typing"],
    content: `
## Typing का शिकावी?

**सरकारी नोकरी** मिळवण्यासाठी **Typing Test** उत्तीर्ण होणे अनिवार्य आहे.

## आजच Join करा!

**Incite Computer Phondaghat** येथे Typing Course साठी संपर्क करा.

📞 **संपर्क:** 7499697181  
📍 **पत्ता:** फोंडाघाट, फोंडा, सिंधुदुर्ग
    `
  },
  "ms-office-excel-word-course-phonda-ghat": {
    title: "MS Office (Excel, Word, PowerPoint) कोर्स - फोंडाघाट",
    category: "MS Office",
    date: "2024-01-01",
    readTime: "6 मिनिटे",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    metaDescription: "Learn MS Office Excel, Word, PowerPoint in Phondaghat. Complete Microsoft Office training at Incite Computer, Phonda for office jobs.",
    keywords: ["ms office course phondaghat", "excel training phonda", "word powerpoint sindhudurg", "office job skills"],
    content: `
## MS Office का शिकावे?

**Microsoft Office** हा जगभरात सर्वात जास्त वापरला जाणारा Office Software आहे.

## फोंडाघाट, फोंडा येथे शिका

📞 **संपर्क:** 7499697181  
📍 **पत्ता:** Incite Computer, फोंडाघाट
    `
  },
  "computer-basic-course-beginners-phondaghat": {
    title: "Computer Basic कोर्स - नवीन शिकणाऱ्यांसाठी फोंडाघाट",
    category: "Basic Computer",
    date: "2023-12-28",
    readTime: "5 मिनिटे",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    metaDescription: "Learn computer basics in Phondaghat for beginners. Computer course for all ages at Incite Computer, Phonda Sindhudurg.",
    keywords: ["computer basics phondaghat", "beginner computer course phonda", "learn computer sindhudurg"],
    content: `
## संगणक शिकायचा आहे का?

तुम्हाला **Computer** शिकायचा आहे पण कुठून सुरू करायचे माहित नाही? Incite Computer फोंडाघाट येथे **Basic Computer Course** शिका!

## आजच Join करा!

📞 **संपर्क:** 7499697181  
📍 **पत्ता:** Incite Computer, फोंडाघाट
    `
  }
};

interface BlogData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  metaDescription: string;
  keywords: string[];
  content: string;
}

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
}

const getStaticRelatedPosts = (currentSlug: string): RelatedPost[] => {
  return Object.entries(staticBlogContent)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 3)
    .map(([slug, post]) => ({
      slug,
      title: post.title,
      category: post.category
    }));
};

const BlogPost = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      // First check if it's a dynamic blog from Supabase
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (data) {
        setBlogData({
          title: data.title,
          category: data.category,
          date: data.created_at,
          readTime: data.read_time,
          image: data.image_url || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
          metaDescription: data.meta_description || data.excerpt,
          keywords: data.keywords || [],
          content: data.content,
        });
        
        // Fetch related posts from Supabase
        const { data: related } = await supabase
          .from("blogs")
          .select("slug, title, category")
          .neq("slug", slug)
          .limit(3);
        
        if (related && related.length > 0) {
          setRelatedPosts(related);
        } else {
          setRelatedPosts(getStaticRelatedPosts(slug));
        }
      } else if (staticBlogContent[slug]) {
        // Fall back to static content
        const staticPost = staticBlogContent[slug];
        setBlogData({
          title: staticPost.title,
          category: staticPost.category,
          date: staticPost.date,
          readTime: staticPost.readTime,
          image: staticPost.image,
          metaDescription: staticPost.metaDescription,
          keywords: staticPost.keywords,
          content: staticPost.content,
        });
        setRelatedPosts(getStaticRelatedPosts(slug));
      } else {
        setNotFound(true);
      }
      
      setLoading(false);
    };

    fetchBlog();
  }, [slug]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogData?.title,
          text: blogData?.metaDescription,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy link");
      }
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (notFound || !blogData) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown to HTML converter
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 text-muted-foreground">{line.replace('- ', '')}</li>;
        }
        if (line.startsWith('✅ ')) {
          return <p key={index} className="text-muted-foreground mb-1">{line}</p>;
        }
        if (line.startsWith('📞') || line.startsWith('📍')) {
          return <p key={index} className="text-muted-foreground font-medium">{line}</p>;
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index} className="font-bold text-foreground mt-4">{line.replace(/\*\*/g, '')}</p>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        // Handle inline bold
        const boldProcessed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return <p key={index} className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: boldProcessed }} />;
      });
  };

  return (
    <Layout>
      <SEO 
        title={blogData.title}
        description={blogData.metaDescription}
        keywords={blogData.keywords.join(', ')}
        canonical={`/blog/${slug}`}
        ogImage={blogData.image}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogData.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>
        
        <div className="container-main px-4 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            सर्व ब्लॉग
          </Link>
          
          <Badge className="mb-4 bg-primary text-primary-foreground">
            {blogData.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-4xl">
            {blogData.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(blogData.date).toLocaleDateString('mr-IN')}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blogData.readTime}
            </span>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-main px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {renderContent(blogData.content)}
              </div>
              
              {/* Share Button at bottom */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center gap-4">
                  <span className="text-foreground font-medium">Share this article:</span>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Badge variant="secondary" className="mb-1 text-xs">
                          {post.category}
                        </Badge>
                        <p className="font-medium text-sm text-foreground line-clamp-2">
                          {post.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">संपर्क करा</h3>
                  <p className="text-sm opacity-90 mb-4">
                    या कोर्स बद्दल अधिक माहिती हवी असल्यास आजच संपर्क करा!
                  </p>
                  <a href="tel:7499697181">
                    <Button variant="secondary" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      7499697181
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
