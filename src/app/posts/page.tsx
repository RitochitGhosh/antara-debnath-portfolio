'use client';

import { useState } from 'react';
import { posts } from '@/contents/posts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart } from 'lucide-react';
export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 mt-32">
      <nav className="flex mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="text-gray-900">Posts</Link>
      </nav>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        <p className="text-muted-foreground">
          Total Posts: {posts.length}
        </p>
        
        {/* Search Input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.title}
              className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    By {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-card-foreground mb-4">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t mt-auto">
                  <Button variant="ghost" asChild>
                    <Link href={post.content}>Read More</Link>
                  </Button>
                  <span className="text-muted-foreground text-sm flex items-center gap-1">
                    <Heart className="w-4 h-4 mr-1" /> {post.likes} likes
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No posts found. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  );
}
