import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="w-full bg-white border-b border-[#e4e4e7]" aria-label="Breadcrumb">
      <div className="max-w-[1440px] mx-auto px-[150px]">
        <ol 
          className="flex items-center gap-2 py-4" 
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li 
                key={index} 
                className="flex items-center gap-2"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-[#a1a1aa]" aria-hidden="true" />
                )}
                
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    itemProp="item"
                    className="text-sm text-[#71717a] hover:text-[#1760ff] transition-colors"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span
                    className={`text-sm ${
                      isLast ? 'text-[#18181b] font-medium' : 'text-[#71717a]'
                    }`}
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </span>
                )}
                <meta itemProp="position" content={(index + 1).toString()} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
