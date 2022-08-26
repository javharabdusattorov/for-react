import { useRef, useState } from 'react';
import './App.scss';

function App() {
  const modalRef = useRef()

  const handleToggleOpen = () => {
    console.log(modalRef.current.classList);
    console.log('Bosildi');

    modalRef.current.classList.toggle('modal--open');
  }

  return (
    <div className="App">
        <h2>Hello MODAL</h2>
        <Modal modalRef={modalRef}/>
        <button className='modal__open' onClick={handleToggleOpen}>Open</button>
    </div>
  );
}

  function Modal({modalRef}) {
    const closeModal = (e) => {
      if(e.target === modalRef.current) {
        modalRef.current.classList.toggle('modal--open');
      }

    }

    return <div onClick={closeModal} ref={modalRef} className="modal">
        <div className="modal__content">
          <h2 className='modal__title'><span>my</span>Modal</h2>
          <p className="modal__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione explicabo quibusdam velit laboriosam consectetur totam aut similique natus excepturi minima labore quam, culpa ducimus quaerat deleniti, repellat cum eum ab porro aperiam ut nemo! Asperiores aliquid fugiat qui nihil ullam laboriosam a aliquam! Enim asperiores tempora totam cum amet earum consequatur nulla eaque facere, maiores voluptates commodi possimus molestiae ut expedita! Deleniti corrupti commodi, molestias, ducimus non facere quisquam obcaecati provident animi, fugit quia suscipit aperiam officiis est aut facilis.
          </p>
        </div>
    </div>
  }

export default App;


/*  useRef - bu ham React'dagi bir function. Bu bizga virtual DOM'dagi element'larni property'larni olish uchun. Ya'ni olish, o'zgartirish kabilar ishlarni bajarishi uchun. Uni useState'ga o'xshab tepada ulab olish kerak. 

// JS
const loginEl = useRef();
const passwordEl = useRef();
const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));

const handleClick = () => {
    const body = {
      email: loginEl.current.value,
      password: passwordEl.current.value
    }
    console.log(body);
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(body) 
    })
      .then(res => {
        if(res.ok) {
          loginEl.current.value = ""
          passwordEl.current.value = ""
          return res.json()
        }
        else {
          Promise.reject("XATOOO")
        }
      })
      .then(res => {
      console.log(res);
      setIsLoggedIn(true)
      localStorage.setItem('token', res.token); 
    }).catch(err => {
      setIsLoggedIn(false)
      console.log(err);
    })
}

// HTML
  <input placeholder='enter Login...' type="text" ref={loginEl} />
  <input placeholder='enter PassWord...' type="text" ref={passwordEl}/>    
    <button onClick={handleClick}>SHow input</button>

  <div>
        {isLoggedIn ? 'Admin' : 'Mexmon'}
  </div>

*/