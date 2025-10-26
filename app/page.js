import React from "react";
import Image from "next/image";
import Link from "next/link"
import { FiChevronDown } from "react-icons/fi";
import { CiCircleCheck } from "react-icons/ci";
import { AiTwotoneCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { BiLayerMinus } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";
const page = () => {
  return (
    <>
      <nav className="navdiv">
        <div className="navdiv">
          <ul className="uli">
            <li>
              <Link href="./">Home</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/Manufacturer">Manufacturer</Link>
            </li>
            <li className="business">
              <Link href="/business">Business(API)</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          <button className="btn">Get Started</button>
          <div className="btn1">
            <Image
              src="/flag.jpg"
              width={500}
              height={500}
              alt=""
              className="image"
            />
            
            <p>En</p> <FiChevronDown className="inconss"/> 
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="main">
          <h1 className="first">Smart Vehicle APIs</h1>
          <p>
            Unlock comprehensive vehicle data insights with our advanced API
            suite for developers and platforms
          </p>
          <ul>
            <h2>VIN Decoder API-</h2>
            <li>
             <TbPointFilled className="point"/> Complete manufacturer specifications including trim codes and body
              type
            </li>
            <li>
              <TbPointFilled className="point"/> Detailed vehicle features & options based on official build data
            </li>
            <li>
             <TbPointFilled className="point"/> Manufacturing plant information including location and production
              batch
            </li>
            <li>
              <TbPointFilled className="point"/> Technical specifications for Chinese models including engine and
              drivetrain
            </li>
          </ul>
        </div>
        <div className="main">
          <ul>
            <h2>VIN History API-</h2>
            <li>
             <TbPointFilled className="point"/> Verified accident records from Chinese databases and police
              sources
            </li>
            <li>
             <TbPointFilled className="point"/> Ownership history in mainland China including previous transfers
            </li>
            <li>
             <TbPointFilled className="point"/> Title status & registration details with regional verification
            </li>
            <li>
             <TbPointFilled className="point"/> Import/Export documentation including customs and border logs
            </li>

            <li><TbPointFilled className="point"/> Theft records from Chinese authorities with case references</li>
            <li>
             <TbPointFilled className="point"/> Insurance claims history for damages, totals, and settlements
            </li>
          </ul>
        </div>
        <div className="main">
          <ul>
            <h2>Maintenance Records API-</h2>
            <li>
             <TbPointFilled className="point"/> Chinese service center records with timestamps and work orders
            </li>
            <li>
             <TbPointFilled className="point"/> Detailed vehicle features & options based on official build data
            </li>
            <li><TbPointFilled className="point"/> Authorized repair documentation including OEM part usage</li>
            <li><TbPointFilled className="point"/> Original parts replacement history by certified mechanics</li>

            <li><TbPointFilled className="point"/> Factory recall status based on manufacturer bulletins</li>
            <li><TbPointFilled className="point"/> Verified mileage reports validated by service intervals</li>
          </ul>
        </div>
      </section>
     
        {" "}
        {/* section start*/}
                 
         <section className="section">
          
        <div className="section2">
          
          <div className="section3">
            <div className="unit">
        <BiLayerMinus className="unitee" />
            <h3>Basic</h3>
            </div>
            <div className="amount">
              $1.99<span>/month</span>
            </div>
            <p> Fees:$100 + $250 prepaid credit</p>
            <div className="list">
              <ul>
                <li><CiCircleCheck className="checker"/>Up to 100 requests/month</li>
                <li><CiCircleCheck className="checker" />Full API suite access</li>
                <li><CiCircleCheck className="checker" />Standard support</li>
              </ul>
            </div>
          </div>

          <button className="btn2">Get started</button>
          <button className="btn3">Text on WhatsApp</button>
          <button className="btn4">Bulk or Manual Order</button>
        </div>
         <div className="section2 colorr">
          
          <div className="section3">
            <div className="unit">
        <BiLayerMinus className="unite" />
            <h3>Professional</h3>
            </div>
            <div className="amount">
              $12<span>/report</span>
            </div>
            <p>Fees:$100 + $400 prepaid credit</p>
            <div className="list">
              <ul>
                <li><CiCircleCheck className="checker" />100 requests/month</li>
                <li><CiCircleCheck className="checker" />Complete API access</li>
                <li><CiCircleCheck className="checker" />Priority support response</li>
              </ul>
            </div>
          </div>

          <button className=" btn5">Get started</button>
          <button className="btn6">Text on WhatsApp</button>
          <button className="btn7">Bulk or Manual Order</button>
        </div>
         <div className="section2">
          
          <div className="section3">
            <div className="unit">
        <BiLayerMinus className="unitee" />
            <h3>Enterprise</h3>
            </div>
            <div className="amount">
              $10<span>/report</span>
            </div>
            <p>Fees:$100 + $900 prepaid credit</p>
            <div className="list">
              <ul>
                <li><CiCircleCheck className="checker"/>1000+ requests/month</li>
                <li><CiCircleCheck className="checker" />Full API functionality</li>
                <li><CiCircleCheck className="checker" />Dedicated support team</li>
              </ul>
            </div>
          </div>

          <button className="btn2">Get started</button>
          <button className="btn3">Text on WhatsApp</button>
          <button className="btn4">Bulk or Manual Order</button>
        </div>
         
     
     
      </section>{" "}
      {/* section End*/}
      {/*footer section start*/}
      <footer className="footer">
        <div className="footer2">
          <div>
            <h4><IoSearchSharp className="search"/>VIN Inspector</h4>
            <p>
              Your comprehensive expert for Chinese vehicle verification and
              history reports
            </p>
              <FaLinkedin className="linkedd"/>
            <FaInstagram className="inss" />
            <FaFacebookSquare className="face" />
          </div>
          <div>
          
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Popular Brands</h4>
            <ul>
              <li>BYD</li>
              <li>Geely</li>
              <li>NIO</li>
              <li>Changan</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Support</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
       
        </div>
      </footer>
         <div className="footer4">
            <div>
             <AiTwotoneCopyright className="icons"/> 2025 VIN Inspector ALL rights reserved 
            </div>
            <div className="terms">
              Terms of Service <span>Privacy Policy</span>
            </div>
          </div>
      {/*footer section rnd*/}
    </>
  );
};

export default page;
