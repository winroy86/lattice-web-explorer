import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Breaking Down the Planck Scale: Why Discrete Spacetime Makes Sense",
      excerpt: "Exploring the fundamental reasons why spacetime might be discrete rather than continuous, and what this means for our understanding of reality at the smallest scales.",
      author: "Roy Winter",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Theory",
      featured: true,
      image: "/images/planck-scale-blog.jpg"
    },
    {
      title: "Simulation Results: Wave Propagation in Cubic-Diamond Lattices",
      excerpt: "Latest computational results showing how electromagnetic waves propagate through discrete spacetime structures, with interactive visualizations and analysis.",
      author: "Roy Winter",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Research",
      featured: false,
      image: "/images/wave-simulation-blog.jpg"
    },
    {
      title: "The Mathematics Behind Pressure Field Unification",
      excerpt: "A deep dive into the mathematical formalism that allows us to describe all fundamental forces as manifestations of pressure variations in the lattice structure.",
      author: "Roy Winter",
      date: "2023-12-22",
      readTime: "15 min read",
      category: "Mathematics",
      featured: false,
      image: "/images/pressure-field-blog.jpg"
    },
    {
      title: "Experimental Predictions: Testing CDLT Theory",
      excerpt: "Specific experimental predictions that could validate or falsify the Cubic-Diamond-Lattice Theory, and how current experiments are already providing supportive evidence.",
      author: "Roy Winter",
      date: "2023-12-10",
      readTime: "10 min read",
      category: "Experiments",
      featured: false,
      image: "/images/experiments-blog.jpg"
    },
    {
      title: "From Classical to Quantum: How CDLT Bridges the Gap",
      excerpt: "Understanding how classical physics emerges from discrete quantum lattice dynamics, resolving the measurement problem and quantum-classical transition.",
      author: "Roy Winter",
      date: "2023-11-28",
      readTime: "11 min read",
      category: "Theory",
      featured: false,
      image: "/images/quantum-classical-blog.jpg"
    },
    {
      title: "Dark Matter Solved? Lattice Compression and Cosmic Structure",
      excerpt: "How variations in lattice density could explain dark matter observations without requiring new particles, and the cosmological implications of this approach.",
      author: "Roy Winter",
      date: "2023-11-15",
      readTime: "9 min read",
      category: "Cosmology",
      featured: false,
      image: "/images/dark-matter-blog.jpg"
    }
  ];

  const categories = ["All", "Theory", "Research", "Mathematics", "Experiments", "Cosmology"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Research Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, discoveries, and thoughts on the Cubic-Diamond-Lattice Theory. 
            Follow the development of revolutionary physics concepts and their implications 
            for our understanding of the universe.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-cobalt hover:text-white transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          <Card className="theory-card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-48 md:h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2Ij5GZWF0dXJlZCBQb3N0PC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-academic-orange">Featured</Badge>
                  <Badge variant="outline">{posts[0].category}</Badge>
                </div>
                
                <CardTitle className="text-2xl mb-4">
                  {posts[0].title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-6">
                  {posts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {posts[0].author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(posts[0].date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {posts[0].readTime}
                    </span>
                  </div>
                  
                  <CTAButton 
                    variant="primary"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Read Article
                  </CTAButton>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <h2 className="font-merriweather font-bold text-3xl mb-8">
            Recent Posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="theory-card group hover:shadow-lg transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2Ij5CbG9nIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-cobalt transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <CTAButton 
                      variant="secondary"
                      size="sm"
                      icon={<ArrowRight className="w-3 h-3" />}
                    >
                      Read More
                    </CTAButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-cobalt text-white rounded-lg p-12 text-center">
          <h2 className="font-merriweather font-bold text-3xl mb-4">
            Stay Updated with Latest Research
          </h2>
          <p className="text-xl text-cobalt-light mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, research updates, 
            and breakthrough discoveries in CDLT theory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <CTAButton 
              variant="secondary"
              className="bg-white text-cobalt hover:bg-gray-100"
            >
              Subscribe
            </CTAButton>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;