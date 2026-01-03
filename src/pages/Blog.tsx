import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    slug: "mscit-course-phondaghat-computer-training",
    title: "MSCIT कोर्स - फोंडाघाट मधील सर्वोत्तम संगणक प्रशिक्षण",
    excerpt: "MSCIT (Maharashtra State Certificate in Information Technology) हा महाराष्ट्र सरकारने मान्यता दिलेला संगणक कोर्स आहे. फोंडा, फोंडाघाट येथील Incite Computer मध्ये हा कोर्स शिका.",
    date: "2024-01-15",
    readTime: "5 मिनिटे",
    category: "MSCIT",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    keywords: ["mscit", "phondaghat", "computer course", "government certificate"]
  },
  {
    id: 2,
    slug: "tally-prime-accounting-course-phonda",
    title: "Tally Prime कोर्स - फोंडा येथे Accounting शिका",
    excerpt: "Tally Prime हा भारतातील सर्वात लोकप्रिय accounting software आहे. फोंडाघाट, फोंडा येथील Incite Computer मध्ये Tally कोर्स शिकून नोकरी मिळवा.",
    date: "2024-01-10",
    readTime: "7 मिनिटे",
    category: "Tally",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    keywords: ["tally", "accounting", "phondaghat", "job opportunity"]
  },
  {
    id: 3,
    slug: "english-marathi-typing-course-phondaghat",
    title: "English व Marathi Typing कोर्स - फोंडाघाट",
    excerpt: "Government job साठी typing test अनिवार्य आहे. Incite Computer फोंडाघाट येथे English आणि Marathi typing शिका आणि सरकारी नोकरी मिळवा.",
    date: "2024-01-05",
    readTime: "4 मिनिटे",
    category: "Typing",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    keywords: ["typing", "government job", "phondaghat", "marathi typing"]
  },
  {
    id: 4,
    slug: "ms-office-excel-word-course-phonda-ghat",
    title: "MS Office (Excel, Word, PowerPoint) कोर्स - फोंडाघाट",
    excerpt: "MS Office हा कोणत्याही ऑफिस जॉब साठी आवश्यक skill आहे. Incite Computer Phondaghat येथे Excel, Word, PowerPoint शिका.",
    date: "2024-01-01",
    readTime: "6 मिनिटे",
    category: "MS Office",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    keywords: ["ms office", "excel", "word", "phondaghat", "office job"]
  },
  {
    id: 5,
    slug: "computer-basic-course-beginners-phondaghat",
    title: "Computer Basic कोर्स - नवीन शिकणाऱ्यांसाठी फोंडाघाट",
    excerpt: "संगणक शिकायचे आहे पण कुठून सुरू करायचे माहित नाही? Incite Computer फोंडा, फोंडाघाट येथे Computer Basics शिका - सर्व वयोगटासाठी.",
    date: "2023-12-28",
    readTime: "5 मिनिटे",
    category: "Basic Computer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    keywords: ["computer basics", "beginners", "phondaghat", "phonda", "all ages"]
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* SEO Meta - would be handled by react-helmet in production */}
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container-main px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-4 bg-background/20 text-primary-foreground border-none">
              ब्लॉग
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              संगणक शिक्षण ब्लॉग
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8">
              MSCIT, Tally, Typing आणि इतर computer courses बद्दल माहिती - फोंडाघाट, फोंडा
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ब्लॉग शोधा..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background border-border text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-main px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">कोणताही ब्लॉग सापडला नाही</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="card-elevated overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('mr-IN')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  
                  <CardFooter>
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        पूर्ण वाचा
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-main px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            आजच प्रवेश घ्या!
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Incite Computer फोंडाघाट येथे MSCIT, Tally, Typing आणि इतर computer courses शिका
          </p>
          <a href="https://wa.me/917499697181?text=नमस्कार! मला कोर्स बद्दल माहिती हवी आहे">
            <Button variant="hero" size="lg">
              WhatsApp वर संपर्क करा
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
