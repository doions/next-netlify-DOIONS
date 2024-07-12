import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <header style={headerStyle}>
                <div style={containerStyle}>
                    <div id="branding">
                        <h1>DOIONS</h1>
                    </div>
                    <nav>
                        <ul style={ulStyle}>
                            <li style={liStyle}><a style={aStyle} href="#">Home</a></li>
                            <li style={liStyle}><a style={aStyle} href="#">About Us</a></li>
                            <li style={liStyle}><a style={aStyle} href="#">Services</a></li>
                            <li style={liStyle}><a style={aStyle} href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="showcase" style={showcaseStyle}>
                <div style={containerStyle}>
                    <h1>Welcome to DOIONS</h1>
                    <p>Your trusted partner in AI-driven automation solutions</p>
                </div>
            </section>

            <div id="main-content" style={mainContentStyle}>
                <h2 style={sectionTitleStyle}>Who We Are</h2>
                <p>DOIONS is an innovative AI automation company dedicated to revolutionizing business operations across India. With a deep understanding of cutting-edge AI technologies like OpenAI and other open-source language models (LLMs), we provide tailored solutions that enhance efficiency, reduce costs, and improve the overall quality of your business processes.</p>

                <h2 style={sectionTitleStyle}>What We Do</h2>
                <p>Our mission is to empower businesses to thrive in the digital age by leveraging AI to automate and streamline their workflows. Our comprehensive services include:</p>
                <ul>
                    <li><strong>Workflow Auditing:</strong> We meticulously analyze your current processes to identify inefficiencies and areas for improvement.</li>
                    <li><strong>Customized AI Solutions:</strong> Based on our audit, we design and implement AI-driven strategies to optimize your operations.</li>
                    <li><strong>Cost Reduction:</strong> Our solutions aim to significantly reduce operational costs while maintaining or enhancing quality.</li>
                    <li><strong>Quality Improvement:</strong> Through precise automation, we help you achieve higher standards of quality in your deliverables.</li>
                </ul>

                <h2 style={sectionTitleStyle}>Why Choose DOIONS</h2>
                <p><strong>Expertise in AI Technologies:</strong> Our team comprises AI specialists with extensive experience in deploying AI tools and open-source LLMs.</p>
                <p><strong>Tailored Solutions:</strong> We understand that every business is unique, and we offer customized solutions that cater to your specific needs.</p>
                <p><strong>Commitment to Excellence:</strong> We are dedicated to providing top-notch services that drive tangible results for your business.</p>
                <p><strong>Client-Centric Approach:</strong> Your success is our priority. We work closely with you to ensure our solutions align perfectly with your goals.</p>

                <h2 style={sectionTitleStyle}>Our Vision</h2>
                <p>At DOIONS, we envision a future where businesses can seamlessly integrate AI into their operations to achieve unprecedented levels of efficiency and innovation. We strive to be the leading AI automation company in India, known for our expertise, reliability, and commitment to excellence.</p>
                <p>Join us on this journey towards a smarter, more efficient future. Let DOIONS be the catalyst that propels your business into the next era of automation and AI-driven success.</p>

                <h2 style={sectionTitleStyle}>Contact Us</h2>
                <p>Ready to transform your business with AI? Get in touch with us today to learn more about our services and how we can help you achieve your automation goals.</p>
            </div>

            <footer style={footerStyle}>
                <p>&copy; 2024 DOIONS. All rights reserved.</p>
            </footer>
        </div>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    paddingTop: '30px',
    minHeight: '70px',
    borderBottom: '#0779e4 3px solid',
};

const containerStyle = {
    width: '60%',
    margin: 'auto',
    overflow: 'hidden',
};

const ulStyle = {
    padding: 0,
    listStyle: 'none',
};

const liStyle = {
    float: 'left',
    display: 'inline',
    padding: '0 20px',
};

const aStyle = {
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '16px',
};

const showcaseStyle = {
    minHeight: '400px',
    background: "url('showcase.jpg') no-repeat 0 -400px",
    textAlign: 'center',
    color: '#fff',
    width: '60%'

};

const mainContentStyle = {
    padding: '20px',
    background: '#f4f4f4',
};

const sectionTitleStyle = {
    marginBottom: '20px',
    color: '#333',
};

const footerStyle = {
    padding: '20px',
    marginTop: '20px',
    color: '#fff',
    backgroundColor: '#333',
    textAlign: 'center',
};

export default AboutUs;
