import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from '@/contents/projects';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsPreview() {
  // Show only the first 3 projects
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="py-8">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {previewProjects.map((project) => (
            <article
              key={project.title}
              className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.sourceCode && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                  {project.deployedUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 