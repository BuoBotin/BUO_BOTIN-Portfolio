export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend & DB',
    icon: 'backend',
    skills: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub'],
  },
];

export const projects = [
  {
    title: 'Cafe POS System',
    description:
      'A point-of-sale solution tailored for cafes, handling order management, inventory tracking, and daily reporting.',
    image: '/assets/cafe-pos.png',
    alt: 'Cafe POS analytics dashboard preview',
    tech: ['Laravel', 'MySQL'],
  },
  {
    title: 'Number Guessing Game',
    description:
      'An interactive browser-based game focusing on DOM manipulation, state management, and user feedback.',
    image: '/assets/number-guessing.png',
    alt: 'Number guessing game interface preview',
    tech: ['JS', 'CSS'],
  },
  {
    title: 'To-Do List Application',
    description:
      'A focused productivity app with persistent tasks, completion states, and clean LocalStorage data handling.',
    image: '/assets/todo-list.png',
    alt: 'To-do list application interface preview',
    tech: ['JavaScript', 'LocalStorage', 'CSS'],
  },
];

export const contact = {
  email: 'buobotin123@gmail.com',
  phone: '056 415 023',
  github: 'GitHub',
};
