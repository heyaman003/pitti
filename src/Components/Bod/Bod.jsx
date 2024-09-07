import React, { useState } from "react";
import Slider from "react-slick";
import "./Bod.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
    {
        id: 1,
        title: "Shri Sharad B Pitti",
        subtitle: "Founder & Chairman",
        message: "Shri Sharad B Pitti, founder of the Company is a visionary leader who pioneered lamination manufacturing in India. He has remained integral to the growth and success of the Company."
    },
    {
        id: 2,
        title: "Shri Akshay S Pitti",
        subtitle: "Managing Director & Chief Executive Officer",
        message: "Shri Akshay S Pitti, started his entrepreneurial journey at an early age. With his extensive experience of serving in different roles within the organisation, he has gathered the expertise to efficiently lead the Company."
    },
    {
        id: 3,
        title: "Ms. Gayathri Ramachandran",
        subtitle: "Non-Executive Independent Director",
        message: "Ms. Gayathri Ramachandran, IAS (Retd.), has held prominent positions in the Ministries of Power, Petroleum, Chemical & Fertilisers and Civil Aviation. She has also served as a Special Chief Secretary to the Government of Andhra Pradesh. She is the Chairperson of the Company’s Stakeholders Relationship Committee."
    },
    {
        id: 4,
        title: "Shri G Vijaya Kumar",
        subtitle: "Non-Executive Independent Director",
        message: "Shri G Vijaya Kumar is a practicing Advocate at the High Court of Telangana and has also served as a Government Pleader for revenue for the United State of Andhra Pradesh. He is the Chairman of the Company’s Risk Management Committee."
    },
    {
        id: 5,
        title: "Shri M Gopalakrishna",
        subtitle: "Non-Executive Independent  Director",
        message: "Shri M Gopalakrishna is a retired IAS officer who has held senior posts in the Government of Assam, Andhra Pradesh and Government of India. He also served in the Central & State level public sector undertakings and retired as Chairman and Managing Director of Rural Electrification Corporation. He has over five decades of Administrative and Managerial experience. He is the Chairman of the Company’s Nomination and Remuneration Committee."
    },
    {
        id: 6,
        title: "Shri N R  Ganti",
        subtitle: "Non-Executive Independent Director",
        message: "Shri N R Ganti is a postgraduate in Business Administration and has rich experience in the field of finance and management. He had started his career in the field of banking with the State Bank of India and later took up management consultancy services."
    },
    {
        id: 7,
        title: "Shri S Thiagarajan",
        subtitle: "Non-Executive Independent Director",
        message: "Shri S Thiagarajan is a Chartered Accountant with vast experience in financial management and accounting roles. He was the Director (Finance) of NMDC and also served as a Board Member of various associates of NMDC. He is the Chairman of the Company’s Audit Committee."
    },
    {
        id: 8,
        title: "Shri Y B Sahgal",
        subtitle: "Non-Executive Independent Director",
        additional: "(w.e.f 9th November 2023)",
        message: "Shri Y B Sahgal is a Mechanical Engineer with over 4 decades of industry experience. He has served in middle and top management at Sahney Steels and Techno Electricals, a unit of Vijay Electricals. He has in the past worked in various capacities in the Company and retired as Executive Director of the Company in 2016."
    },
    {
        id: 9,
        title: "Shri N Vinod Kumar",
        subtitle: "Non-Executive Independent Director",
        additional: "(w.e.f 14th August 2024)",
        message: "Shri N Vinod Kumar is a fellow member of the Institute of Chartered Accountants of India. He has over 3 decades of experience in Central Public Sector Undertakings. He stated his career in 1977 as a Junior officer in Western Coal fields, He worked in various capacities in National Mineral Development Corporation Limited, Electronics Corporation of India Ltd, Praga Tools Ltd and Bharat Dynamics Limited."
    },
    {
        id: 10,
        title: "Ms. Kemisha Soni",
        subtitle: "Non-Executive Independent Director",
        additional: "(w.e.f 14th August 2024)",
        message: "Ms. Kemisha Soni, is a Chartered Accountant with over 2 decades of experience in Accounting, Audit and Taxation services. Ms. Kemisha is the Managing partner of GDK & Associates, Chartered Accountants. She is experienced in the field of auditing, primarily in statutory, tax and forensic auditing. She is also experienced in risk management audit, internal audit and management audit. "
    },
    {
        id: 11,
        title: "Ms. Priti Paras Savla",
        subtitle: "Non-Executive Independent Director",
        additional: "(w.e.f 14th August 2024)",
        message: "Ms. Priti Paras Savla, is a fellow member of the Institute of Chartered Accountants of India and partner in K P B & Associates. She has over 2 decades of experience in areas of strategic planning, business advisory, corporate governance, ESG advisory, CSR & impact assessment, audit and risk mitigation."
    },

];

const Bod = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpand = (id) => {
        setExpandedCard((prevId) => (prevId === id ? null : id));
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the delay between slides (3000ms = 3 seconds)
        pauseOnHover: true, // Optionally, pause when the user hovers over the carousel
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="Bod-container b2">
            <h1 className="sec-heading marginal text-center">Board of Directors</h1>
        <div className="carousel-container">
            <Slider {...settings}>
                {cardData.map((card) => (
                    <div key={card.id} className="card">
                        <h2>{card.title}</h2>
                        <h4>{card.subtitle}</h4>
                        <p
                            className={`card-message ${expandedCard === card.id ? "expanded" : "collapsed"
                                }`}
                        >
                            {card.message}
                        </p>
                        <button className="expand-btn" onClick={() => toggleExpand(card.id)}>
                            {expandedCard === card.id ? "Show Less" : "Read More"}
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
            <img className="gear-elem" src="./homepage/elem.png" alt="" />
        </div>
    );

};

export default Bod;
