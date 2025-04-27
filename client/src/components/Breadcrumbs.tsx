import { Link } from 'wouter';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              {item.path ? (
                <Link href={item.path}>{item.name}</Link>
              ) : (
                item.name
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Breadcrumbs;
