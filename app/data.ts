import { Car } from "lucide-react"

type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Myanmar Earthquake Engineering Community',
    description:
      'Designed a responsive and accessible website for the MEEC, enhancing user experience and engagement for a diverse audience.',
    link: 'https://meec-web.vercel.app/en',
    image: '/images/meec.jpg',
    id: 'project1',
  },
  {
    name: 'AirBurma',
    description: 'A web application for AirBurma, using Carbon Design System to create a modern and user-friendly interface.',
    link: 'https://motion-primitives.com/',
    image: '/cover2.jpg',
    id: 'project2',
  },
   {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/cover3.jpg',
    id: 'project2',
  },
   {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/cover4.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'UI/UX Designer',
    start: '2024',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'DigitalBase',
    title: 'Lead UI/UX Designer',
    start: '2022',
    end: '2024',
    link: '#',
    id: 'work2',
  },
  {
    company: 'Nexcode',
    title: 'UI/UX Designer',
    start: '2020',
    end: '2024',
    link: '#',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Behance',
    link: 'https://www.behance.net/novempai',
  },
  {
    label: 'Dribbble',
    link: 'https://dribbble.com/novempai',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/novempai/',
  },
]

export const EMAIL = 'novempai@email.com'
