import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Header.css";
import { useEffect, useRef,useState } from 'react';

export default function Header () {

    const nav = useRef(null);
    const [menuOpen,setMenuOpen] = useState(false);

    const menuItems = [
        {
            id: 1,
            content: "Home",
            linker: "#home"
        },
        {
            id: 2,
            content: "About",
            linker: "#about"
        },
        {
            id: 3,
            content: "Experience",
            linker: "#exp"
        },
        {
            id: 4,
            content: "Portfolio",
            linker: "#portfolio"
        },
        {
            id: 5,
            content: "Contact",
            linker: "#contact"
        },
    ]

    useEffect(() => {

        const closeMenu = (e) => {
            if(!nav.current.contains(e.target) && nav.current){
                setMenuOpen(false);
            }   
        }
 
        document.addEventListener("mousedown",closeMenu);
        return () => document.removeEventListener("mousedown",closeMenu);

    });

    function navigationScroll(e){
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const location = document.querySelector(target).offsetTop;
        const height = document.querySelector(".header").offsetHeight;
        window.scrollTo({
            left: 0,
            top: location - height
        });
        if(nav.current.classList.contains("active")){
            nav.current.classList.remove("active");
        }
    }

    return (
        <header className="header">
            <div className="container flex">
                <div className='menu' onClick={() => setMenuOpen(true)}>
                    <MenuIcon sx={{
                        width: 30,
                        height: 30,
                        color: "#286f6c"
                    }}/>
                </div>
                <div className='title'>
                    <h1 className='named_title'>AKASH V</h1>
                </div>
                <nav className={`nav${menuOpen? " active" : ""} flex`} ref={nav}>
                    <ul className='nav-list'>
                        {menuItems.map(item => {
                            return (
                                <li key={item.id} className='list-item'>
                                    <a href={item.linker} onClick={navigationScroll} className='link-item'>{item.content.toUpperCase()}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='number flex'>
                        <PhoneIcon className='phone_icon' sx={{
                            width: 30,
                            height: 30,
                            color: "#286f6c",
                            borderRadius: 50,
                            backgroundColor: "#FFFF",
                            padding: 1
                        }}/>
                        <p className='phone'>+1 437-566-8427</p>
                    </div>
                </nav>
            </div>
        </header>
    )
}