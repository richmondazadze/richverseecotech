import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  id: string;
}

const FAQAccordion = ({ items, id }: FAQAccordionProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <div className="accordion accordion-flush" id={id}>
      {items.map((item, index) => (
        <div 
          className="accordion-item" 
          key={index}
          data-aos="fade-up" 
          data-aos-delay={100 + (index * 100)}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeItem === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={activeItem === index}
            >
              <i className={`bi bi-question-circle me-2 ${activeItem === index ? 'text-primary' : ''}`}></i>
              <span className={activeItem === index ? 'text-primary fw-bold' : ''}>{item.question}</span>
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${activeItem === index ? 'show' : ''}`}
            data-bs-parent={`#${id}`}
          >
            <div className="accordion-body">
              <div className="ps-4 border-start border-3 border-primary">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
