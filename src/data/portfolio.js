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
    tech: ['React JS', 'Laravel', 'SQLite'],
    github: 'https://github.com/Heang-Dev/CHOUBMIT_POS',
    liveDemo: 'https://matcha-pos-staging.up.railway.app/v1',
  },
  {
    title: 'Number Guessing Game',
    description:
      'An interactive browser-based game focusing on DOM manipulation, state management, and user feedback.',
    image: '/assets/number-guessing.png',
    alt: 'Number guessing game interface preview',
    tech: ['Laravel', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/BuoBotin/number-guessing-game',
    liveDemo: null,
  },
  {
    title: 'To-Do List Application',
    description:
      'A focused productivity app with persistent tasks, completion states, and clean LocalStorage data handling.',
    image: '/assets/todo-list.png',
    alt: 'To-do list application interface preview',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/BuoBotin/taskflow-todo-app',
    liveDemo: 'https://buobotin.github.io/taskflow-todo-app/',
  },
];

export const contact = {
  email: 'buobotin123@gmail.com',
  phone: '056 415 023',
  github: 'GitHub',
};
