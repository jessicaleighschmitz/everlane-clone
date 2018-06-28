import React from 'react';
import newYork from './../assets/img/newYork.jpg';
import employee from './../assets/img/employee.webp';
import fabric from  './../assets/img/fabric.webp';

function AboutUs(){
  return(
    <div className="about-content">
      <div claasName="overlay"></div>
      <div className="about-header">
        <h1 className="title">Our Story</h1>
      </div>
      <div className="intro">
        <h4>Everlane Values</h4>
        <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
      </div>
      <div className='flex-content'>
        <img src={employee} className="img-resize"/>
        <div className="copy2">
          <p className="grey-text">OUR FACTORIES</p>
          <h2>Our ethical approach.</h2>
          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className='flex-content2'>
        <img src={fabric} className="img-resize"/>
        <div className="copy3">
          <p className="grey-text">OUR QUALITY</p>
          <h2>Designed to last.</h2>
          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>



      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Assistant|Abel');

          .about-content {
            max-width: 1200px;
            margin: 20px auto;
          }

          .about-content .intro, .flex-content, .flex-content2  {
            padding: 0 5rem;
          }
          .about-content .intro {
             background-color: rgb(128, 130, 132);
             padding: 2rem 5rem;
             color: white;
           }
           .about-content h4 {
             font-size: 3.3rem;
           }

           .about-content .copy {
             line-height: 2.3rem;
             font-size: 1.3rem;
             font-family: 'Assistant', sans-serif;
           }

          .about-header{
            position:relative;
            background-image:url(${newYork});
            background-size: cover;
            min-height: 800px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-position: center center;
            background-position-x: center;
            background-position-y: center;
            background-attachment: fixed;
            z-index: 10;
          }



          .title{
            font-size: 8rem;
            text-transform: uppercase;
            color: #fff;
            text-shadow: 5px 1px 18px rgba(0, 0, 0, 1);
          }
          h4 {
            font-size: 3.1rem;
            margin: 1.2rem .3rem;
          }
          .copy {
            font-size: 1.1rem;
            line-height: 1.6rem;
          }

          .flex-content {
            display: flex;
            justify-content: center;
            line-height: 1.6;
            padding-top: 2rem;
          }

          .flex-content h2, .flex-content2 h2{
            font-size: 2rem;
          }

          .grey-text {
            color: #B0AFAC;
            font-family: 'Abel', sans-serif;
            font-size: 1.2rem;
          }

          .copy2 {
            padding-left: 2rem;
            padding-top: 11rem;
          }

          .flex-content2 {
            display: flex;
            justify-content: center;
            flex-direction: row-reverse;
            line-height: 1.6;
            padding-top: 2rem;
          }

          .flex-content2 h2, .flex-content2 p {
            padding-right: 2rem;
          }

          .copy3 {
            padding-left: 2rem;
            padding-top: 11rem;
          }





        `}
      </style>
    </div>
  );
}

export default AboutUs;
