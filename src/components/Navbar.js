import React, { useState, useEffect } from 'react';
import logoo from '../acatea-green.svg';
import { Link } from 'react-router-dom';
import "./css/navbar/style.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Đặt sự kiện cuộn trang
    window.addEventListener('scroll', handleScroll);

    // Hủy đăng ký sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Kiểm tra vị trí cuộn của trang
    const scrollPosition = window.scrollY;

    // Kiểm tra xem vị trí cuộn có lớn hơn 0 không
    if (scrollPosition > 0) {
      // Nếu có, đánh dấu navbar đã được cuộn
      setIsScrolled(true);
    } else {
      // Nếu không, đánh dấu navbar chưa được cuộn
      setIsScrolled(false);
    }
  };

  return (
    <header>
      <nav className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <img src={logoo} alt="logo" style={{ width: '15rem' }} />
          </div>
          <div className="navbar-content">
            <ul className="navbar-nav-custom">
              <li className="nav-item-custom">
                <Link className="nav-link-custom" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item-custom">
                <Link className="nav-link-custom" to="/">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item-custom">
                <Link className="nav-link-custom" to="/">
                  Sản phẩm
                </Link>
              </li>
              <li className="nav-item-custom">
                <Link className="nav-link-custom" to="/">
                  Tin tức
                </Link>
              </li>
              <li className="nav-item-custom">
                <Link className="nav-link-custom" to="/">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
