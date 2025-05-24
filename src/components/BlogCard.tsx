import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-4 left-4" variant="secondary">
          {post.category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>
          <Link
            href={`/blog/${post.id}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground pt-0">
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <ClockIcon className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
} 