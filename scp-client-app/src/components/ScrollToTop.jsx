import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component scrolls to the top of the browser window before react router switches the current route / page
// as without this pages can sometimes be rendered scrolled to the bottom

// I used this stack overlow answer to help me create this component
// https://stackoverflow.com/questions/58598637/why-react-new-page-render-from-the-bottom-of-the-screen

const ScrollToTop = ({ children }) => {
  // get the url using useLocation and destruct it to get the pathname
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll the window to the top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);
  return children ? children : null;
}
 
export default ScrollToTop;