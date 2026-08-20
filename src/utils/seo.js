import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageTitle(title, description) {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo(0, 0);

    // Set page title
    if (title) {
      document.title = `${title} | Lifa Insurance Brokers (FSP 43132)`;
    } else {
      document.title = 'Lifa Insurance Brokers | Authorised FSP 43132';
    }

    // Set meta description if present
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description, location.pathname]);
}
