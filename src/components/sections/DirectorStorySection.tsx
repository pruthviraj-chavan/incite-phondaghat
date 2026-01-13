import { Heart, Quote, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url: string | null;
  is_leadership: boolean;
}

const DirectorStorySection = () => {
  const { data: teamMembers } = useQuery({
    queryKey: ["director-member"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .eq("is_leadership", true)
        .order("display_order", { ascending: true })
        .limit(1);
      if (error) throw error;
      return data as TeamMember[];
    },
  });

  const director = teamMembers?.[0] || {
    name: "प्रशांत वंजुळे",
    role: "संस्थापक व संचालक",
    image_url: null,
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-secondary/10 blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-secondary/5 blur-xl" />
      
      <div className="container-main relative z-10 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-medium text-secondary">आमची प्रेरणादायी कथा</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
            संचालकांची <span className="text-secondary">प्रेरणादायी गोष्ट</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Director Photo - Larger Size */}
          <div className="lg:col-span-2 flex justify-center animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-secondary/30 animate-spin-slow" style={{ width: 'calc(100% + 30px)', height: 'calc(100% + 30px)', top: '-15px', left: '-15px' }} />
              
              {/* Main photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                {director.image_url ? (
                  <img
                    src={director.image_url}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-7xl md:text-8xl font-bold text-primary-foreground">
                      {director.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg animate-float">
                <Star className="w-8 h-8 text-secondary-foreground fill-secondary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl px-4 py-2 shadow-lg border border-border animate-float-delayed">
                <p className="text-sm font-bold text-foreground">10+ वर्षे</p>
                <p className="text-xs text-muted-foreground">अनुभव</p>
              </div>
            </div>
          </div>

          {/* Director Story */}
          <div className="lg:col-span-3 space-y-6 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{director.name}</h3>
                <p className="text-secondary font-medium">{director.role}</p>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-12 h-12 text-secondary/20" />
              <div className="pl-8 space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <span className="text-foreground font-semibold">एक स्वप्न होतं...</span> गावातल्या प्रत्येक मुलांना, 
                  मुलींना संगणक शिक्षणाची संधी मिळावी. आर्थिक परिस्थिती कशीही असो, ज्ञानाची दारं 
                  सर्वांसाठी खुली असावीत.
                </p>
                <p>
                  <span className="text-foreground font-semibold">फोंडाघाट</span> सारख्या छोट्या गावात राहून, 
                  शहरांत जाणं अवघड होतं. मग विचार केला - शहर इथं येणार नाही, पण शहराचं शिक्षण 
                  इथं आणता येईल!
                </p>
                <p>
                  <span className="text-secondary font-semibold">Incite Computer</span> ची स्थापना झाली. 
                  सुरुवातीला फक्त एक संगणक आणि भरपूर जिद्द होती. आज <span className="text-foreground font-semibold">1000+ विद्यार्थी</span> यशस्वीपणे 
                  प्रशिक्षित झाले आहेत.
                </p>
                <p className="text-lg italic border-l-4 border-secondary pl-4 bg-secondary/5 py-3 rounded-r-lg">
                  "प्रत्येक विद्यार्थ्याचं यश हे माझं यश आहे. त्यांच्या डोळ्यात जेव्हा आत्मविश्वास दिसतो, 
                  तेव्हा माझ्या मेहनतीचं फळ मिळाल्यासारखं वाटतं."
                </p>
                <p>
                  आज आमचे विद्यार्थी <span className="text-foreground font-semibold">सरकारी कार्यालयांत, बँकांत, IT कंपन्यांत</span> 
                  कार्यरत आहेत. त्यांचं यश हेच आमचं बक्षीस!
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-secondary">1000+</p>
                <p className="text-xs md:text-sm text-muted-foreground">यशस्वी विद्यार्थी</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-secondary">10+</p>
                <p className="text-xs md:text-sm text-muted-foreground">वर्षांचा अनुभव</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-secondary">98%</p>
                <p className="text-xs md:text-sm text-muted-foreground">यश दर</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorStorySection;
