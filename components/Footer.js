import styles from './Footer.module.css'



import { useState } from 'react';


export default function Home() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...data }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  return (
    <>
      <main>
   <span className="footerspan"> <a href="mailto:mindsarray@gmail.com"><img src="/email.svg" width="30"/></a>
    
    <a href="https://wa.me/918928399570"><img src="/whatsapp.svg" width="30"/></a>
    </span>
      </main>
    </>
  );
}
