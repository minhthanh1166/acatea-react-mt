import React from 'react'
import "./css/footer/footer.css"

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-row'>
          <img alt='logo'/>
          <p>0912513505 | 0961537088</p>
          <p>acatea.vn@acatea.vn</p>
          <address>189A, tổ 17, thị trấn Đông Anh, huyện Đông Anh, TP. Hà Nội</address>
        </div>
        <div className='footer-row'>
          <h2>Về chúng tôi</h2>
          <p>Giới thiệu</p>
          <p>Sản phẩm</p>
          <p>Tin tức</p>
        </div>
        <div className='footer-row'>
          <h2>Liên hệ</h2>
          <div className='social-network'>
            <img alt='facebook'/>
            <img alt='youtobe'/>
            <img alt='gmail'/>
          </div>
          <p>Copyright © 2022-2023</p>
          <p>Acatea.vn - All rights reserved</p>
        </div>
    </footer>
  )
}
