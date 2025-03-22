import React from 'react';
import { Link } from 'react-scroll';
import { Code2, User, Briefcase, Mail, FileText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="home" smooth={true} duration={500} className="text-2xl font-bold text-violet-400 cursor-pointer">
            <Code2 className="inline-block mr-2" />
            Anandhu Biju
          </Link>
          <div className="flex gap-8">
            <Link to="home" smooth={true} duration={500} className="nav-link flex items-center gap-2">
              <User size={20} />
              Home
            </Link>
            <Link to="projects" smooth={true} duration={500} className="nav-link flex items-center gap-2">
              <Briefcase size={20} />
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link flex items-center gap-2">
              <Mail size={20} />
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/124VuzNMLdtzStLHFIEaFS9mLQK5_V4BA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center gap-2"
            >
              <FileText size={20} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;