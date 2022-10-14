// import React from 'react'
// import './Css/contact.css'

// export default function Contact() {
//   // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// window.initMap = initMap;

//   return (
//     <>
//     <div className="contact-container">
//         <iframe src="" frameborder="0" className="map-location" id="map"></iframe>
//     </div>
//     </>
//   )
// }

import React, { useState } from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Playfair+Display:wght@400;500;700&family=Poppins:wght@400;700&display=swap');
    background-color: gray;
    font-family: 'Montserrat';
    padding: 3em;
.wrapper{
        width: auto;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        padding: 2em;
        border-radius: 2em;
}
    .heading_for_contact {
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        margin-bottom: 1em;
    }

    @media (min-width: 700px){
        .wrapper{
            padding: 3em;
        }

        .heading_for_contact{
            text-align: left;
            padding-left: 1.5em;
            margin-bottom: .5em !important;
        }

        .grid-container{
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        /* width: fit-content !important; */
        padding: 3em;
        /* width: fit-content; */
        }

        .message{
            grid-column-start: 1 ;
            grid-column-end: 3;
        }
}
    .grid-container{
        display: flex;
        flex-direction: column;
        grid-gap: 2em;
        /* min-width: 350px; */
        /* width: 80% ; */
    }
    
    .heading{
        font-weight: bold;
        color: rgba(0,0,0,.8);
        font-size: 1.2rem;
    }
    .items{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: .7em;
        /* width: 50% */
    }
    .com-input{
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.5);
    font-weight: 700;
    padding-bottom: .4em;
    font-family: 'Montserrat';
    font-size: 1.1rem;
    color: rgba(0,0,0,.9);

    &:focus{
        outline: none;
        border-bottom: 1px solid red ;
        transition: border-bottom .6s ease-in-out;
    }
    ::placeholder{
        color: rgba(0,0,0,.4);
    }
}

.sub{
    button{
        padding: 1em 2em;
        border-radius: 1em;
        color: white;
        background-color: #ff5d4b;
        font-family: 'Montserrat';
        font-weight: 600;
        letter-spacing: 2px;
        border: none;
        font-size: .95rem;

        :hover{
            background-color: #464646;
            box-shadow: 0 5px 1px 2px rgba(0,0,0,.2);
        }
    }
}
.request{
    margin-top: 2em;
}

.num{
    color: #ff5d4b;
    /* margin-top: 2em; */
    &:hover{
        color: #464646;
    }
}

`;

const Contact = () => {

    let [count, setCount] = useState({
        Fname: "",
        Email:"",
        number:"",
        address:"",
        message:""
    })

    let getUserData = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setCount({...count, [name]:value})
    }

    const PostData = async(e) => {
        e.preventDefault();

    const {Fname, Email, number, address, message} = count;

    if(Fname && Email && number && address && message){
         const res = await fetch(
                'https://fir-frontend-backend-default-rtdb.asia-southeast1.firebasedatabase.app/youtubereact.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({
                        Fname,
                        Email,
                        number,
                        address,
                        message
                    })
                })
    
            if(res){
                setCount({
                        Fname: "",
                        Email:"",
                        number:"",
                        address:"",
                        message:""
                    })
    
                alert("Data Stored Successfully!!!")
            }
        }
        else{
            alert("Plz fill all the details")
        }
    }
  return (
    <>
    <Wrapper>
    <div className="wrapper">
    <form method="POST">
    <div className="heading_for_contact">
        Contact Us
    </div>
    <div className="grid-container">
    <div className="items">
        <label  for='Fname' className="heading">Your Name</label>
        <input 
        type="text"
        name='Fname'
        id="name"
        value={count.Fname}
        onChange={getUserData}
        autoComplete='off'
        className='com-input'
        placeholder='Enter your name'
        required />
    </div>
    <div className="items">
        <label for='Email' className="heading">Your email</label>
        <input 
        type="email"
        name='Email'
        id="Email"
        value={count.Email}
        onChange={getUserData}
        autoComplete='off'
        className='com-input'
        placeholder='Enter your email address'
        required />
    </div>
    <div className="items">
        <label for='number' className="heading">Your number</label>
        <input 
        type="text"
        name='number'
        id="number"
        // pattern='[0-9]{5}-[0-9]{5}'
        maxLength={10}
        value={count.number}
        onChange={getUserData}
        autoComplete='off'
        className='com-input'
        placeholder='Enter your number'
        required />
    </div>
    <div className="items">
        <label for='address' className="heading">Your address</label>
        <input 
        type="text"
        name='address'
        id="address"
        value={count.address}
        onChange={getUserData}
        autoComplete='off'
        className='com-input'
        placeholder='Enter your Address'
        required />
    </div>
    <div className="items message">
        <label for='message' className="heading">Your message</label>
        <textarea 
        name='message'
        id="message"
        value={count.message}
        onChange={getUserData}
        autoComplete='off'
        className='com-input'
        required />
    </div>
    <div className="sub">
        <button onClick={PostData}>Submit</button>
    </div>
    </div>
    </form>
    <div className='request'>For the Question: Contact 24/7 call: <span className='num'> +91-9381768242 </span></div>
    </div>
    </Wrapper>
    </>
  )
}

export default Contact;