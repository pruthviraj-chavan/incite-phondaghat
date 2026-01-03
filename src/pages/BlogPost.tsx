import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Blog content data with SEO-friendly slugs
const blogContent: Record<string, {
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

### 3. कोर्स तपशील

| विषय | कालावधी |
|------|---------|
| Operating System | 2 आठवडे |
| MS Word | 2 आठवडे |
| MS Excel | 2 आठवडे |
| MS PowerPoint | 1 आठवडा |
| Internet & Email | 1 आठवडा |

## Incite Computer फोंडाघाट येथे का शिकावे?

✅ **अनुभवी Faculty** - 10+ वर्षांचा अनुभव  
✅ **Latest Computers** - नवीनतम संगणक सुविधा  
✅ **Practical Training** - हाताळणी-आधारित शिक्षण  
✅ **Flexible Timings** - सकाळ, दुपार, संध्याकाळ बॅचेस  
✅ **Success Rate** - 98% विद्यार्थी उत्तीर्ण  

## कोर्स फी आणि कालावधी

- **कालावधी:** 3 महिने
- **फी:** संपर्क करा - किफायतशीर दर
- **ठिकाण:** Incite Computer, फोंडाघाट, सिंधुदुर्ग

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

### 2. स्वतःचा व्यवसाय
- दुकान किंवा व्यवसायाचे हिशोब ठेवा
- GST Returns स्वतः भरा
- Professional Invoices तयार करा

## Tally Prime मध्ये काय शिकाल?

### Basic Level
- Company Creation
- Ledger & Groups
- Voucher Entry (Sales, Purchase, Payment, Receipt)
- Day Book & Ledger Reports

### Advanced Level
- **GST Module** - GST Registration, Invoice, Returns
- **Inventory Management** - Stock Tracking
- **Bank Reconciliation**
- **TDS Compliance**

### Practical Projects
- Real Company Data Entry
- GST Return Preparation
- Balance Sheet & P&L

## कोर्स हायलाइट्स

| विषय | शिकण्याचा कालावधी |
|------|-------------------|
| Basic Accounting | 2 आठवडे |
| Tally Fundamentals | 2 आठवडे |
| GST in Tally | 2 आठवडे |
| Advanced Features | 2 आठवडे |
| Practical Training | 2 आठवडे |

## Incite Computer फोंडाघाट चे वैशिष्ट्ये

✅ **GST Expert Faculty** - Updated GST Knowledge  
✅ **Real Business Cases** - Practical Training  
✅ **Job Assistance** - Placement Support  
✅ **Certificate** - Course Completion Certificate  
✅ **Doubt Sessions** - Extra Practice Classes  

## Career Opportunities

- Junior Accountant: ₹12,000 - ₹18,000/month
- Senior Accountant: ₹20,000 - ₹35,000/month
- GST Consultant: ₹25,000 - ₹50,000/month

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

**सरकारी नोकरी** मिळवण्यासाठी **Typing Test** उत्तीर्ण होणे अनिवार्य आहे. Talathi, Clerk, Data Entry Operator या पदांसाठी typing आवश्यक आहे.

## आम्ही काय शिकवतो?

### English Typing
- Touch Typing Method
- Speed: 30-50 WPM (Words Per Minute)
- Accuracy Training
- Government Exam Pattern

### Marathi Typing (ISM/Inscript)
- Marathi Keyboard Layout
- Speed: 25-40 WPM
- Special Characters & Matras
- Exam Pattern Practice

## Government Typing Requirements

| परीक्षा | English Speed | Marathi Speed |
|--------|---------------|---------------|
| Talathi | 30 WPM | 25 WPM |
| Clerk | 40 WPM | 30 WPM |
| Data Entry | 35 WPM | 30 WPM |

## कोर्स Details

### Duration
- **Basic Course:** 1 महिना
- **Advanced Course:** 2 महिने
- **Government Exam Prep:** 3 महिने

### What You'll Learn
1. **Touch Typing** - बघता बघता typing
2. **Speed Building** - वेग वाढवणे
3. **Accuracy** - चुका कमी करणे
4. **Exam Practice** - Mock Tests

## फोंडाघाट येथे का शिकावे?

✅ **Daily Practice** - रोज 2-3 तास practice  
✅ **Individual Attention** - प्रत्येक विद्यार्थ्यावर लक्ष  
✅ **Speed Tracking** - Weekly speed test  
✅ **Exam Simulation** - Government exam जसे वातावरण  
✅ **Flexible Batches** - सोयीनुसार वेळ  

## Success Stories

> "मी Incite Computer मध्ये typing शिकलो आणि Talathi परीक्षेत 35 WPM मिळवले!" - **राहुल पाटील, फोंडाघाट**

> "3 महिन्यात Marathi typing 30 WPM पर्यंत पोहोचली." - **प्रिया देसाई, फोंडा**

## आजच Join करा!

**Incite Computer Phondaghat** येथे Typing Course साठी संपर्क करा.

📞 **संपर्क:** 7499697181  
📍 **पत्ता:** फोंडाघाट, फोंडा, सिंधुदुर्ग

सरकारी नोकरीचे स्वप्न पूर्ण करा - Typing शिका!
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

**Microsoft Office** हा जगभरात सर्वात जास्त वापरला जाणारा Office Software आहे. कोणत्याही Office Job साठी MS Office येणे अनिवार्य आहे.

## MS Office मध्ये काय शिकाल?

### MS Word
- Document Creation & Formatting
- Tables & Images
- Mail Merge
- Headers, Footers, Page Numbers
- Resume/CV Making

### MS Excel
- Basic Formulas (SUM, AVERAGE, COUNT)
- Advanced Functions (VLOOKUP, IF, SUMIF)
- Charts & Graphs
- Data Filtering & Sorting
- Pivot Tables
- **Salary Sheet, Invoice बनवणे**

### MS PowerPoint
- Professional Presentations
- Animations & Transitions
- Charts & SmartArt
- Video & Audio Insert
- **Business Presentation बनवणे**

## Practical Projects

| Project | Software |
|---------|----------|
| Professional Resume | MS Word |
| Salary Sheet | MS Excel |
| Business Presentation | PowerPoint |
| Invoice Template | MS Excel |
| Event Invitation | MS Word |

## कोर्स Level

### Basic Level (1 महिना)
- Word: Document creation
- Excel: Basic formulas
- PowerPoint: Simple presentations

### Advanced Level (2 महिने)
- Word: Mail merge, Templates
- Excel: VLOOKUP, Pivot Tables
- PowerPoint: Professional presentations

### Expert Level (3 महिने)
- Excel Macros
- Advanced Data Analysis
- Dashboard Creation

## Job Opportunities

MS Office शिकल्यानंतर या पदांसाठी अर्ज करू शकता:

- **Office Assistant:** ₹10,000 - ₹15,000
- **Data Entry Operator:** ₹12,000 - ₹18,000
- **MIS Executive:** ₹18,000 - ₹30,000
- **Admin Executive:** ₹15,000 - ₹25,000

## Incite Computer चे फायदे

✅ **Practical Training** - सर्व concepts हाताळणी  
✅ **Real Projects** - खऱ्या कामाचा अनुभव  
✅ **Certificate** - Course Completion Certificate  
✅ **Job Support** - Interview Preparation  
✅ **Lifetime Notes** - PDF Notes Free  

## फोंडाघाट, फोंडा येथे शिका

**Incite Computer Phondaghat** - सिंधुदुर्ग जिल्ह्यातील सर्वोत्तम Computer Training Center

📞 **संपर्क:** 7499697181  
📍 **पत्ता:** Incite Computer, फोंडाघाट

Office Job साठी तयार व्हा - MS Office शिका!
    `
  },
  "computer-basic-course-beginners-phondaghat": {
    title: "Computer Basic कोर्स - नवीन शिकणाऱ्यांसाठी फोंडाघाट",
    category: "Basic Computer",
    date: "2023-12-28",
    readTime: "5 मिनिटे",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    metaDescription: "Learn computer basics in Phondaghat for beginners. Computer course for all ages at Incite Computer, Phonda Sindhudurg. Start your digital journey.",
    keywords: ["computer basics phondaghat", "beginner computer course phonda", "learn computer sindhudurg", "basic computer training"],
    content: `
## संगणक शिकायचा आहे का?

तुम्हाला **Computer** शिकायचा आहे पण कुठून सुरू करायचे माहित नाही? Incite Computer फोंडाघाट येथे **Basic Computer Course** शिका - सर्व वयोगटासाठी!

## हा कोर्स कोणासाठी?

- 🎓 **विद्यार्थी** - शाळा-कॉलेजमधील
- 👨‍💼 **नोकरदार** - Office work साठी
- 🏠 **गृहिणी** - Digital literacy साठी
- 👴 **ज्येष्ठ नागरिक** - Banking, WhatsApp साठी
- 🏪 **व्यापारी** - Business साठी

## काय शिकाल?

### Computer Basics
- Computer चालू/बंद करणे
- Mouse आणि Keyboard वापर
- Desktop Icons ओळखणे
- Files आणि Folders बनवणे

### Windows Operating System
- Windows Navigate करणे
- Settings बदलणे
- Software Install/Uninstall
- Pen Drive वापर

### Internet & Email
- Google वापर (Search)
- Gmail Account बनवणे
- Email पाठवणे/वाचणे
- YouTube वापर
- Online Forms भरणे

### Social Media & Apps
- WhatsApp वापर
- Facebook Basics
- Online Banking (Overview)
- Government Apps (Aadhar, DigiLocker)

## Course Schedule

| आठवडा | विषय |
|-------|------|
| 1 | Computer Hardware & Basics |
| 2 | Windows Operating System |
| 3 | File Management |
| 4 | Internet & Email |
| 5 | WhatsApp & Social Media |
| 6 | Practice & Revision |

## फायदे

✅ **शून्यापासून शिकवतो** - कोणताही पूर्व अनुभव नको  
✅ **Marathi मध्ये शिक्षण** - सोप्या भाषेत  
✅ **Practical Training** - हाताळणी-आधारित  
✅ **Small Batches** - वैयक्तिक लक्ष  
✅ **Flexible Timings** - तुमच्या सोयीनुसार  

## विद्यार्थ्यांचे अनुभव

> "मी 55 वर्षांचा आहे आणि पहिल्यांदा Computer शिकलो. Incite Computer मध्ये खूप छान शिकवतात!" - **श्री. रामचंद्र नाईक, फोंडा**

> "आता मी स्वतः Online Banking करू शकते. धन्यवाद Incite Computer!" - **सौ. सुनीता पाटील, फोंडाघाट**

## कोर्स Details

- **कालावधी:** 6 आठवडे
- **वेळ:** सकाळ/दुपार/संध्याकाळ batches
- **फी:** किफायतशीर - संपर्क करा
- **Certificate:** Course Completion Certificate

## आजच Join करा!

**Incite Computer Phondaghat** - फोंडा, सिंधुदुर्ग

📞 **संपर्क:** 7499697181  
📍 **पत्ता:** Incite Computer, फोंडाघाट

Digital India चा भाग व्हा - Computer शिका!
    `
  }
};

// Related posts for sidebar
const getRelatedPosts = (currentSlug: string) => {
  return Object.entries(blogContent)
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
  
  if (!slug || !blogContent[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogContent[slug];
  const relatedPosts = getRelatedPosts(slug);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative container-main px-4 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              सर्व ब्लॉग्स
            </Link>
            
            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('mr-IN')}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-main px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-table:text-muted-foreground
                  prose-th:bg-muted prose-th:text-foreground prose-th:p-3
                  prose-td:p-3 prose-td:border-border
                  prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-lg
                  prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/^## /gm, '<h2>')
                    .replace(/^### /gm, '<h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>')
                    .replace(/^- (.*?)$/gm, '<li>$1</li>')
                    .replace(/(<li>.*?<\/li>\n?)+/g, '<ul>$&</ul>')
                    .replace(/^✅ (.*?)$/gm, '<p class="flex items-start gap-2"><span class="text-primary">✅</span> $1</p>')
                    .replace(/^📞 (.*?)$/gm, '<p class="flex items-start gap-2"><span>📞</span> $1</p>')
                    .replace(/^📍 (.*?)$/gm, '<p class="flex items-start gap-2"><span>📍</span> $1</p>')
                }}
              />
              
              {/* CTA Box */}
              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    आजच प्रवेश घ्या!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Incite Computer फोंडाघाट येथे या कोर्ससाठी संपर्क करा
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://wa.me/917499697181?text=नमस्कार! मला या कोर्स बद्दल माहिती हवी आहे">
                      <Button size="lg">
                        WhatsApp वर संपर्क करा
                      </Button>
                    </a>
                    <a href="tel:+917499697181">
                      <Button variant="outline" size="lg">
                        <Phone className="w-4 h-4 mr-2" />
                        7499697181
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    संबंधित ब्लॉग्स
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <Badge variant="outline" className="mb-1 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="hero-gradient text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    मदत हवी आहे?
                  </h3>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    आमच्याशी संपर्क साधा
                  </p>
                  <a href="https://wa.me/917499697181">
                    <Button variant="hero" className="w-full">
                      WhatsApp करा
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
