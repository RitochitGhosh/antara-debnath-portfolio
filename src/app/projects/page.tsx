'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { projects } from '@/contents/projects';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 mt-32">
      <div className="mb-8">
        
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="text-muted-foreground">
          Total Projects: {projects.length}
        </p>
        
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-muted-foreground">
                  Completed: {new Date(project.completedAt).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                {project.sourceCode && (
                  <Button variant="outline" className='' size="sm" asChild>
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                )}
                {project.deployedUrl && (
                  <Button className='bg-primary text-white dark:bg-primary-dark hover:bg-primary/80 dark:hover:bg-primary-dark/80 dark:text-black' variant="default" size="sm" asChild>
                    <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No projects found. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  );
} 