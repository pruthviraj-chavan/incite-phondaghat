import { useState, useEffect } from "react";
import { ExternalLink, Search, Sparkles, Zap, Brain, Palette, Video, Code, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

interface AITool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  icon_url: string | null;
  is_featured: boolean;
}

const categoryIcons: Record<string, any> = {
  general: Sparkles,
  writing: BookOpen,
  image: Palette,
  video: Video,
  coding: Code,
  productivity: Zap,
  education: Brain,
};

const categoryColors: Record<string, string> = {
  general: "from-purple-500 to-pink-500",
  writing: "from-blue-500 to-cyan-500",
  image: "from-orange-500 to-red-500",
  video: "from-green-500 to-emerald-500",
  coding: "from-violet-500 to-indigo-500",
  productivity: "from-yellow-500 to-orange-500",
  education: "from-teal-500 to-green-500",
};

const categories = [
  { id: "all", label: "All Tools" },
  { id: "general", label: "General" },
  { id: "writing", label: "Writing" },
  { id: "image", label: "Image" },
  { id: "video", label: "Video" },
  { id: "coding", label: "Coding" },
  { id: "productivity", label: "Productivity" },
  { id: "education", label: "Education" },
];

const AITools = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTools = async () => {
      const { data, error } = await supabase
        .from("ai_tools")
        .select("*")
        .order("display_order", { ascending: true });

      if (!error && data) {
        setTools(data);
      }
      setLoading(false);
    };

    fetchTools();
  }, []);

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesSearch = searchQuery === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTools = tools.filter(t => t.is_featured);

  return (
    <Layout>
      <SEO
        title="AI Tools Directory - Free AI Tools Collection"
        description="Explore our curated collection of AI tools for writing, image generation, coding, and more. Find the best AI tools to boost your productivity."
        keywords="AI tools, ChatGPT, AI image generator, AI writing tools, free AI tools"
        canonical="/ai-tools"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />
        </div>

        <div className="container-main relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                AI Tools Collection
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
              Discover Amazing <span className="text-gradient">AI Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              आधुनिक AI tools चा संग्रह. तुमच्या कामासाठी योग्य AI tool शोधा आणि productivity वाढवा.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3 bg-card rounded-2xl p-4 shadow-lg border border-border">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search AI tools..."
                  className="border-0 bg-transparent focus-visible:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-background sticky top-16 z-20 border-b border-border">
        <div className="container-main px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {featuredTools.length > 0 && selectedCategory === "all" && (
        <section className="section-padding bg-muted/30">
          <div className="container-main">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-secondary" />
              Featured Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool, index) => {
                const IconComponent = categoryIcons[tool.category] || Sparkles;
                const gradientClass = categoryColors[tool.category] || "from-purple-500 to-pink-500";
                return (
                  <a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all animate-fade-up overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        {tool.icon_url ? (
                          <img src={tool.icon_url} alt={tool.name} className="w-8 h-8 object-contain" />
                        ) : (
                          <IconComponent className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {tool.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        Visit Tool
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Tools Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {selectedCategory === "all" ? "All AI Tools" : categories.find(c => c.id === selectedCategory)?.label}
            <span className="text-muted-foreground font-normal text-lg ml-2">({filteredTools.length})</span>
          </h2>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-xl p-5 border border-border animate-pulse">
                  <div className="w-12 h-12 rounded-lg bg-muted mb-4" />
                  <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-full mb-1" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No tools found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredTools.map((tool, index) => {
                const IconComponent = categoryIcons[tool.category] || Sparkles;
                const gradientClass = categoryColors[tool.category] || "from-purple-500 to-pink-500";
                return (
                  <a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card rounded-xl p-5 border border-border hover:shadow-lg hover:border-primary/30 transition-all animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {tool.icon_url ? (
                        <img src={tool.icon_url} alt={tool.name} className="w-6 h-6 object-contain" />
                      ) : (
                        <IconComponent className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {tool.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Open <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-main text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              AI शिकायचे आहे का?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              आमच्या computer courses मध्ये AI tools वापरायला शिका. Modern skills साठी आजच प्रवेश घ्या.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/courses">Explore Courses</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AITools;
