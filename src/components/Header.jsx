import '../css/Header.css';
import {useState} from "react";

function Header() {
    const [isVisible, setIsVisible]  = useState(false);
    return (
        <div>
            <div className={`dropDiv ${isVisible ? 'visible' : ''}`}></div>
            <nav className="navbar">
                <div className="navbar_logo">
                    <a href="#" style={{fontSize: '35px'}}>어쩌구회계사</a>
                </div>
                <ul className="navbar_menu">
                    <li
                        className="menuList"
                        onMouseEnter={() => setIsVisible(true)}
                        onMouseLeave={() => setIsVisible(false)}>
                        <a href="#">회사소개</a>
                        <ul className="subMenu">
                            <li><a href="#">&nbsp;인사말</a></li>
                            <li><a href="#">오시는길</a></li>
                        </ul>
                    </li>
                    <li className="menuList"><a href="#">업무소개</a></li>
                    <li className="menuList"><a href="#">기장대리</a></li>
                    <li className="menuList"><a href="#">상담신청</a></li>
                    <li className="menuList"><a href="#">상담후기</a></li>
                    <li className="menuList"><a href="#">블로그</a></li>
                </ul>

                <ul className="navbar_phone">
                    <li><a href="" style={{fontSize: '28px', color: 'white', padding: '0 25px 4px'}}>010-1234-5678</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
