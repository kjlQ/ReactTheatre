import React , {useState} from 'react'
import './App.css';
import'./media768.css'
import'./media500.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import Slider from "react-slick";

export default function App() {
  const [active , setActive ] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    autoplayTimer:50,
    pauseOnHover: true,
  };
  return(
      <>
      <div className="main" style={{backgroundImage: "url(img/first_screen.jpg)" }} id="main">
        <div className={active?"all-links active-sidebar":"all-links"}>
          <div className="burger-button">
            <div className="burg" onClick={()=>{
              setActive(!active)
              console.log(active)
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={active?"links disable":"links"} >
                <ul onClick={()=>{
                  setActive(!active)
                  console.log(active)
                }}>
                  <li><a href="#main" className="link">Главная</a></li>
                  <li><a href="#about" className="link">О комплексе</a></li>
                  <li><a href="#gallery" className="link">Наши постановки</a></li>
                  <li><a href="#partners" className="link">Партеры театра</a></li>
                  <li><a href="#contact" className="link">Контакты</a></li>
                  <li><p className="main-number">+38(067)863 06 19</p></li>
                  <li><span><a href="https://www.instagram.com/tertiches8716/"><span><FaInstagram /></span>Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=100014951770130"><span><FaFacebook /></span>Facebook</a>
                  <a href="https://www.youtube.com/channel/UCfpS5NWqUr9Qd-LrkCWKRHw"><span><FaYoutube /></span>Youtube</a></span></li>
                </ul>
          </div>
        </div>
        <div className="container">
          <div className="sl">
            <div className="prew">
              <div className="poster">
                <h1>Большой театр</h1>
                <p>Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах,
                  с 1886 года — Петербургская консерватория. Первое постоянное в
                  Санкт-Петербурге, крупнейшее в России и одно из крупнейших
                  театральных зданий в Европе XVIII.</p>
              </div>
            </div>
            <div className="main-slider">
              <div className="min-slider">
                <div>
                <Slider {...settings}>
                  <div>
                    <div><img src="img/fest.jpg" alt=""></img></div>
                  </div>
                  <div>
                    <div><img src="img/romeo_juliet.jpg" alt=""></img></div>
                  </div>
                  <div>
                    <div><img src="img/bye.jpg" alt=""></img></div>
                  </div>
                </Slider>
              </div>
              </div>
              <div className="arrows">

              </div>
            </div>
          </div>
          <div className="contacts">
            <h2>Контактная ифнормация</h2>
            <div className="fass">
              <a href="https://www.instagram.com/tertychnyi8716/"><span><FaInstagram /></span></a>
              <a href="https://www.facebook.com/profile.php?id=100014951770130"><span><FaFacebook/></span></a>
              <a href="https://www.youtube.com/channel/UCfpS5NWqUr9Qd-LrkCWKRHw"><span><FaYoutube /></span></a>
            </div>
          </div>
        </div>
      </div>
  <div className="gray">
    <div className="about">
      <div className="container">
        <h1 id="about"><span>O</span> театре</h1>
        <div className="propirate-about">
          <div className="best">
            <h2>Лутший театр спб</h2>
            <p>Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия можно считать 1784 год.</p>
          </div>
          <div className="numbers">
            <h2>Немного о цифрах</h2>
            <div><img src="img/armchair.png" alt="123"></img></div>
              <p><span>1600 </span>посадочных мест</p>
            <img src="img/theater.png" alt=""></img>
                <p><span>350 </span>лет истории</p>
          </div>
          <div className="pikcha">
            <img src="img/cathedral.jpg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
    <div className="gallery" id="gallery">
      <h1><span>Наши </span> постановки</h1>
      <div className="pictures">
        <div className="pic1">
          <img src="img/pic1.jpg" alt="" className="scale"></img>
            <p>Оскар 2020</p>
        </div>
        <div className="pic2">
          <img src="img/pic2.jpg" alt="" className="scale"></img>
            <p>Золотой Арлекин</p>
        </div>
        <div className="pic3">
          <img src="img/pic3.jpg" alt="" className="scale"></img>
            <p>Золотой грамофон</p>
        </div>
        <div className="pic4">
          <img src="img/pic4.jpg" alt="" className="scale"></img>
            <p>Щелкунчик</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="stars">
        <img src="img/stars.jpg" alt=""></img>
      </div>
      <div className="partners" id="partners">
        <h1><span>Партнеры </span>театра</h1>
        <div className="partners-logo">
          <a href="https://www.tinkoff.ru/"><img src="img/tinkoff.jpg" alt=""></img></a>
          <a href="https://www.kodak.com/en/"><img src="img/kodak.png"></img></a>
          <a href="https://www.cia.gov/"><img src="img/CIA.png" alt=""></img></a>
          <a href="https://www.uber.com/ua/ru/"><img src="img/uber.png" alt=""></img></a>
        </div>
      </div>
      <div className="contact" id="contact">
        <h1><span>Наши </span>Контакты</h1>
        <div className="num1">
          <p>+38(097)876 23 83</p>
          <p>+38(097)876 23 93</p>
        </div>
        <div className="num2">
          <p>theatre@gmail.com</p>
          <p>г.Киев ,бул.Шевченка 47</p>
        </div>
      </div>
    </div>
    <footer>
      <p>
        (с) Все права защищены. Большой театр. 2021
      </p>
    </footer>
  </div>
  </>
  )}