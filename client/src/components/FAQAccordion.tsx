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
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeItem === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={activeItem === index}
            >
              {item.question}
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${activeItem === index ? 'show' : ''}`}
            data-bs-parent={`#${id}`}
          >
            <div className="accordion-body">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
