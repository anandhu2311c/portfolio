import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { Code2, User, Briefcase, Mail, FileText, Award, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold text-violet-400 cursor-pointer">
            <Code2 className="inline-block mr-2" />
            <span className="hidden sm:inline">Anandhu Biju</span>
            <span className="sm:hidden">AB</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          {isHomePage ? (
            <div className="hidden md:flex gap-8">
              <ScrollLink to="home" smooth={true} duration={500} className="nav-link flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <User size={18} />
                <span>Home</span>
              </ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500} className="nav-link flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Briefcase size={18} />
                <span>Projects</span>
              </ScrollLink>
              <ScrollLink to="certificates" smooth={true} duration={500} className="nav-link flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Award size={18} />
                <span>Certificates</span>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="nav-link flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Mail size={18} />
                <span>Contact</span>
              </ScrollLink>
              <a
                href="https://drive.google.com/drive/folders/1NqFkGPp5mfdUjUft0EuYW6forfZdwDxU?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link flex items-center gap-2"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>
          ) : (
            <div className="hidden md:flex gap-8">
              <Link to="/" className="nav-link flex items-center gap-2">
                <User size={18} />
                <span>Home</span>
              </Link>
              <a
                href="https://drive.google.com/drive/folders/1NqFkGPp5mfdUjUft0EuYW6forfZdwDxU?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link flex items-center gap-2"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            {isHomePage ? (
              <div className="flex flex-col space-y-4 pt-4">
                <ScrollLink to="home" smooth={true} duration={500} className="nav-link flex items-center gap-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={20} />
                  <span>Home</span>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} className="nav-link flex items-center gap-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Briefcase size={20} />
                  <span>Projects</span>
                </ScrollLink>
                <ScrollLink to="certificates" smooth={true} duration={500} className="nav-link flex items-center gap-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Award size={20} />
                  <span>Certificates</span>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="nav-link flex items-center gap-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mail size={20} />
                  <span>Contact</span>
                </ScrollLink>
                <a
                  href="https://drive.google.com/drive/folders/1NqFkGPp5mfdUjUft0EuYW6forfZdwDxU?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link flex items-center gap-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText size={20} />
                  <span>Resume</span>
                </a>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="nav-link flex items-center gap-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={20} />
                  <span>Home</span>
                </Link>
                <a
                  href="https://drive.google.com/drive/folders/1NqFkGPp5mfdUjUft0EuYW6forfZdwDxU?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link flex items-center gap-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText size={20} />
                  <span>Resume</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;