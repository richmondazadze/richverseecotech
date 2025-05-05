import React from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500 text-white shadow-2xl hover:scale-110 hover:shadow-blue-400/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/40 border-0 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
      style={{ boxShadow: '0 4px 32px 0 rgba(59,130,246,0.25), 0 1.5px 8px 0 rgba(99,102,241,0.10)' }}
    >
      <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" /></svg>
    </button>
  );
};

export default ScrollToTopButton; 