import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, BookOpen, Clock, Users } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Introduction to CDLT Theory",
      level: "Beginner",
      duration: "4 weeks",
      students: 142,
      description: "Learn the fundamental concepts of the Cubic-Diamond-Lattice Theory, starting with basic principles of discrete spacetime and building up to quantum mechanical implications.",
      topics: ["Discrete Spacetime", "Lattice Structure", "Basic Quantum Mechanics", "Historical Context"],
      price: "Free",
      featured: true
    },
    {
      title: "Mathematical Foundations",
      level: "Intermediate",
      duration: "6 weeks", 
      students: 89,
      description: "Deep dive into the mathematical formalism underlying CDLT theory, including lattice field theory, discrete calculus, and computational physics methods.",
      topics: ["Lattice Field Theory", "Discrete Mathematics", "Computational Methods", "Advanced Equations"],
      price: "$99"
    },
    {
      title: "Advanced Applications",
      level: "Advanced",
      duration: "8 weeks",
      students: 34,
      description: "Explore cutting-edge applications of CDLT theory to cosmology, particle physics, and quantum gravity. Includes original research methodologies.",
      topics: ["Cosmological Models", "Particle Interactions", "Quantum Gravity", "Research Methods"],
      price: "$199"
    },
    {
      title: "Computational Simulations",
      level: "Intermediate",
      duration: "5 weeks",
      students: 67,
      description: "Learn to build and run simulations of CDLT systems using Python, Julia, and specialized physics software. Hands-on programming intensive.",
      topics: ["Python Programming", "Numerical Methods", "Visualization", "HPC Techniques"],
      price: "$149"
    }
  ];

  const lessons = [
    {
      title: "The Nature of Discrete Spacetime",
      duration: "45 min",
      type: "Video Lecture",
      free: true
    },
    {
      title: "Lattice Geometry and Topology",
      duration: "30 min", 
      type: "Interactive Demo",
      free: true
    },
    {
      title: "Wave Propagation Mechanics",
      duration: "60 min",
      type: "Video + Lab",
      free: false
    },
    {
      title: "Quantum Field Emergence",
      duration: "90 min",
      type: "Advanced Seminar",
      free: false
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Physics Courses & Training
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured learning paths to master the Cubic-Diamond-Lattice Theory. 
            From introductory concepts to advanced research methods, 
            our courses are designed for students, researchers, and professionals.
          </p>
        </div>

        {/* Course Catalog */}
        <section className="mb-20">
          <h2 className="font-merriweather font-bold text-3xl mb-8">
            Course Catalog
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`theory-card ${course.featured ? 'ring-2 ring-cobalt shadow-lg' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students} students
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}>
                        {course.level}
                      </Badge>
                      {course.featured && (
                        <Badge variant="outline" className="ml-2 text-cobalt border-cobalt">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Course Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cobalt">
                      {course.price}
                    </span>
                    <CTAButton 
                      variant={course.featured ? "hero" : "primary"}
                      icon={<BookOpen className="w-4 h-4" />}
                    >
                      {course.price === "Free" ? "Start Free" : "Enroll Now"}
                    </CTAButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sample Lessons */}
        <section className="mb-20">
          <h2 className="font-merriweather font-bold text-3xl mb-8">
            Sample Lessons
          </h2>
          <div className="bg-neutral-light/50 rounded-lg p-8">
            <p className="text-center text-muted-foreground mb-8">
              Preview our teaching style with these sample lessons from our course catalog
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {lessons.map((lesson, index) => (
                <Card key={index} className="theory-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{lesson.title}</h3>
                      {lesson.free && (
                        <Badge variant="secondary" className="bg-academic-green/10 text-academic-green">
                          Free
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {lesson.duration}
                      </span>
                      <span>{lesson.type}</span>
                    </div>
                    
                    <CTAButton 
                      variant="secondary" 
                      icon={<Play className="w-4 h-4" />}
                      className="w-full"
                    >
                      {lesson.free ? "Watch Free" : "Preview"}
                    </CTAButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-cobalt text-white rounded-lg p-12">
          <h2 className="font-merriweather font-bold text-3xl mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-cobalt-light mb-8 max-w-2xl mx-auto">
            Join thousands of students and researchers exploring the frontiers of physics. 
            Start with our free introduction course and progress at your own pace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              variant="secondary"
              size="lg"
              className="bg-white text-cobalt hover:bg-gray-100"
            >
              Start Free Course
            </CTAButton>
            <CTAButton 
              variant="secondary"
              size="lg" 
              href="/community"
              className="bg-transparent border-white text-white hover:bg-white hover:text-cobalt"
            >
              Join Community
            </CTAButton>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Courses;