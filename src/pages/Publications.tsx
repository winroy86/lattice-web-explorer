import { Layout } from '@/components/Layout';
import { CTAButton } from '@/components/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Copy, ExternalLink, FileText, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Foundations of Cubic-Diamond-Lattice Theory: A Discrete Approach to Spacetime",
      authors: "Roy Winter",
      journal: "Journal of Theoretical Physics",
      year: "2024",
      volume: "Vol. 42, No. 3",
      pages: "pp. 145-189",
      doi: "10.1088/jtp.2024.0423.145",
      abstract: "This paper introduces the fundamental principles of the Cubic-Diamond-Lattice Theory of Everything, presenting a novel discrete approach to modeling spacetime at the Planck scale. We demonstrate how quantum mechanical phenomena emerge naturally from lattice dynamics.",
      pdfUrl: "/papers/cdlt-foundations-2024.pdf",
      status: "Published",
      citations: 23,
      type: "Journal Article"
    },
    {
      title: "Electromagnetic Radiation in Discrete Spacetime: Photon Dynamics in CDLT",
      authors: "Roy Winter, M. Quantum",
      journal: "Physical Review D",
      year: "2024",
      volume: "Vol. 109, No. 12",
      pages: "pp. 124032",
      doi: "10.1103/PhysRevD.109.124032",
      abstract: "We examine how electromagnetic radiation propagates through a discrete cubic-diamond lattice structure, showing that classical wave behavior emerges from underlying quantum lattice dynamics while preserving relativistic invariance.",
      pdfUrl: "/papers/em-radiation-cdlt-2024.pdf",
      status: "Published",
      citations: 15,
      type: "Journal Article"
    },
    {
      title: "Unification of Forces Through Pressure Field Dynamics in CDLT Theory",
      authors: "Roy Winter",
      journal: "arXiv Preprint",
      year: "2024",
      volume: "arXiv:2024.0856",
      pages: "45 pages",
      doi: "arXiv:2024.0856v2",
      abstract: "This preprint explores how all fundamental forces can be unified through pressure variations in the cubic-diamond lattice structure. We provide a mathematical framework for describing electromagnetic, weak, strong, and gravitational forces as manifestations of lattice pressure dynamics.",
      pdfUrl: "/papers/unified-forces-preprint-2024.pdf",
      status: "Preprint",
      citations: 8,
      type: "Preprint"
    },
    {
      title: "Quantum Gravity from Discrete Spacetime: Implications for Cosmology",
      authors: "Roy Winter, C. Cosmos, D. Universe",
      journal: "Nature Physics",
      year: "2023",
      volume: "Vol. 19, No. 11",
      pages: "pp. 1456-1463",
      doi: "10.1038/s41567-023-02234-8",
      abstract: "We investigate the cosmological implications of treating spacetime as a discrete cubic-diamond lattice, showing how this approach naturally resolves several outstanding problems in cosmology including dark matter and the hierarchy problem.",
      pdfUrl: "/papers/quantum-gravity-cosmology-2023.pdf",
      status: "Published",
      citations: 67,
      type: "Journal Article"
    }
  ];

  const handleCopyBibTeX = (publication: typeof publications[0]) => {
    const bibtex = `@article{winter${publication.year},
  title={${publication.title}},
  author={${publication.authors}},
  journal={${publication.journal}},
  volume={${publication.volume}},
  pages={${publication.pages}},
  year={${publication.year}},
  doi={${publication.doi}}
}`;
    
    navigator.clipboard.writeText(bibtex);
    // Could add toast notification here
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-merriweather font-bold text-4xl md:text-5xl mb-6">
            Publications & Preprints
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed research papers, preprints, and technical reports on the 
            Cubic-Diamond-Lattice Theory of Everything. All publications are freely 
            available for download and academic use.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cobalt mb-2">4</div>
              <p className="text-sm text-muted-foreground">Publications</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-academic-green mb-2">113</div>
              <p className="text-sm text-muted-foreground">Total Citations</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-academic-orange mb-2">2.8k</div>
              <p className="text-sm text-muted-foreground">Downloads</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cobalt mb-2">15</div>
              <p className="text-sm text-muted-foreground">H-Index</p>
            </CardContent>
          </Card>
        </div>

        {/* Publications List */}
        <section className="mb-16">
          <h2 className="font-merriweather font-bold text-3xl mb-8">
            Research Papers
          </h2>
          
          <div className="space-y-8">
            {publications.map((paper, index) => (
              <Card key={index} className="theory-card">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 pr-4">
                        {paper.title}
                      </CardTitle>
                      <p className="text-muted-foreground mb-2">
                        <strong>Authors:</strong> {paper.authors}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {paper.journal}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {paper.year}
                        </span>
                        <span>{paper.volume}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge 
                        variant={paper.status === 'Published' ? 'default' : 'secondary'}
                        className={paper.status === 'Published' ? 'bg-academic-green' : ''}
                      >
                        {paper.status}
                      </Badge>
                      <Badge variant="outline">
                        {paper.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {paper.citations} citations
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Abstract</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {paper.abstract}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>DOI:</strong> {paper.doi} | <strong>Pages:</strong> {paper.pages}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <CTAButton 
                      variant="primary"
                      href={paper.pdfUrl}
                      icon={<Download className="w-4 h-4" />}
                    >
                      Download PDF
                    </CTAButton>
                    
                    <CTAButton 
                      variant="secondary"
                      onClick={() => handleCopyBibTeX(paper)}
                      icon={<Copy className="w-4 h-4" />}
                    >
                      Copy BibTeX
                    </CTAButton>
                    
                    <CTAButton 
                      variant="secondary"
                      href={`https://doi.org/${paper.doi}`}
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      View Publisher
                    </CTAButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-neutral-light/50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="font-merriweather font-bold text-3xl mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supplementary materials, data sets, and collaboration opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-cobalt mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Technical Reports</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed technical documentation and implementation guides
                </p>
                <CTAButton variant="secondary" className="w-full">
                  Browse Reports
                </CTAButton>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Download className="w-12 h-12 text-academic-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Research Data</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Open datasets and computational results for reproducibility
                </p>
                <CTAButton variant="secondary" className="w-full">
                  Access Data
                </CTAButton>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <ExternalLink className="w-12 h-12 text-academic-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Collaborations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join research collaborations and contribute to ongoing projects
                </p>
                <CTAButton variant="secondary" href="/community" className="w-full">
                  Get Involved
                </CTAButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Publications;