import { useEffect, useState } from 'react';
import { HeaderStyle } from './Header.style';

const Header = () => {
  const [isWindowWidthPhoneSize, setIWindowWidthPhoneSize] = useState(1000);

  useEffect(() => {
    const reportWindowSize = () => {
      if (typeof window !== 'undefined') {
        setIWindowWidthPhoneSize(window.innerWidth);
      }
    };
    window.addEventListener('resize', reportWindowSize);

    return () => {
      window.removeEventListener('resize', reportWindowSize);
    };
  }, []);

  if (isWindowWidthPhoneSize > 500) {
    return <HeaderStyle>Desktop</HeaderStyle>;
  }
  return <HeaderStyle>Mobile</HeaderStyle>;
};

export default Header;
