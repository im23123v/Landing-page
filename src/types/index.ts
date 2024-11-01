export interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}