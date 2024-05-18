import Fuse from 'fuse.js';

export function initSearch() {
  const url = new URL(window.location.href);
  const searchElement = document.getElementById('search') as HTMLInputElement;
  const summaryElement = document.getElementById('summary') as HTMLInputElement;
  const blogElements = document.querySelectorAll<HTMLElement>('[data-blog]');
  const yearElements = document.querySelectorAll<HTMLElement>('[data-year]');
  const collegeElements =
    document.querySelectorAll<HTMLElement>('[data-college]');

  const blogs = Array.from(blogElements, (element) => ({
    element,
    id: element.dataset.blog,
    name: getProperty(element, 'name'),
    countries: getPropertyList(element, 'countries'),
    languages: getPropertyList(element, 'languages'),
    year: getAncestorProperty(element, 'year'),
    college: getAncestorProperty(element, 'college'),
  }));

  const fuse = new Fuse(blogs, {
    keys: ['name', 'countries', 'languages', 'year', 'college'],
    threshold: 0.2,
  });

  const search = (value: string) => {
    const results = value
      ? fuse.search(value).map((result) => result.item.id)
      : [];

    blogs.forEach((blog) => {
      const isMatch = !value || results.includes(blog.id);
      if (isMatch) {
        show(blog.element);
      } else {
        hide(blog.element);
      }
    });

    if (value) {
      summaryElement.textContent = `Found ${results.length} blog${results.length === 1 ? '' : 's'}`;
      url.searchParams.set('q', value);
    } else {
      summaryElement.textContent = null;
      url.searchParams.delete('q');
    }

    window.history.replaceState(null, '', url.toString());

    if (!CSS.supports('selector(:has(div))')) {
      // Hide empty year groups
      yearElements.forEach((element) => {
        const hasMatches = element.querySelector('[data-blog]:not([hidden])');
        if (hasMatches) {
          show(element);
        } else {
          hide(element);
        }
      });

      // Hide empty college groups
      collegeElements.forEach((element) => {
        const hasMatches = element.querySelector('[data-year]:not([hidden])');
        if (hasMatches) {
          show(element);
        } else {
          hide(element);
        }
      });
    }
  };

  // Apply initial search query
  if (url.searchParams.has('q')) {
    const value = url.searchParams.get('q') as string;
    searchElement.value = value;
    search(value);
  }

  searchElement.addEventListener('input', (event) => {
    const { value } = event.target as HTMLInputElement;
    search(value);
  });
}

function getProperty(element: HTMLElement, name: string) {
  return element.querySelector(`[data-${name}]`)?.textContent;
}

function getPropertyList(element: HTMLElement, name: string) {
  return getProperty(element, name)
    ?.split(/,&/)
    .map((item) => item.trim());
}

function getAncestorProperty(element: HTMLElement, name: string) {
  return element.closest<HTMLElement>(`[data-${name}]`)?.dataset[name];
}

function hide(element: HTMLElement) {
  element.setAttribute('hidden', '');
}

function show(element: HTMLElement) {
  element.removeAttribute('hidden');
}
