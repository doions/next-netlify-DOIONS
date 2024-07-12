import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>DOIONS - An AI Automation Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <header>
        <div class="container-about">
            <div id="branding">
                <h1>DOIONS</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="showcase">
        <div class="container">
            <h1>Welcome to DOIONS</h1>
            <p>Your trusted partner in AI-driven automation solutions</p>
        </div>
    </section>

    <div id="main-content" class="container">
        <h2 class="section-title">Who We Are</h2>
        <p>DOIONS is an innovative AI automation company dedicated to revolutionizing business operations across India. With a deep understanding of cutting-edge AI technologies like OpenAI and other open-source language models (LLMs), we provide tailored solutions that enhance efficiency, reduce costs, and improve the overall quality of your business processes.</p>

        <h2 class="section-title">What We Do</h2>
        <p>Our mission is to empower businesses to thrive in the digital age by leveraging AI to automate and streamline their workflows. Our comprehensive services include:</p>
        <ul>
            <li><strong>Workflow Auditing:</strong> We meticulously analyze your current processes to identify inefficiencies and areas for improvement.</li>
            <li><strong>Customized AI Solutions:</strong> Based on our audit, we design and implement AI-driven strategies to optimize your operations.</li>
            <li><strong>Cost Reduction:</strong> Our solutions aim to significantly reduce operational costs while maintaining or enhancing quality.</li>
            <li><strong>Quality Improvement:</strong> Through precise automation, we help you achieve higher standards of quality in your deliverables.</li>
        </ul>

        <h2 class="section-title">Why Choose DOIONS</h2>
        <p><strong>Expertise in AI Technologies:</strong> Our team comprises AI specialists with extensive experience in deploying AI tools and open-source LLMs.</p>
        <p><strong>Tailored Solutions:</strong> We understand that every business is unique, and we offer customized solutions that cater to your specific needs.</p>
        <p><strong>Commitment to Excellence:</strong> We are dedicated to providing top-notch services that drive tangible results for your business.</p>
        <p><strong>Client-Centric Approach:</strong> Your success is our priority. We work closely with you to ensure our solutions align perfectly with your goals.</p>

        <h2 class="section-title">Our Vision</h2>
        <p>At DOIONS, we envision a future where businesses can seamlessly integrate AI into their operations to achieve unprecedented levels of efficiency and innovation. We strive to be the leading AI automation company in India, known for our expertise, reliability, and commitment to excellence.</p>
        <p>Join us on this journey towards a smarter, more efficient future. Let DOIONS be the catalyst that propels your business into the next era of automation and AI-driven success.</p>

        <h2 class="section-title">Contact Us</h2>
        <p>Ready to transform your business with AI? Get in touch with us today to learn more about our services and how we can help you achieve your automation goals.</p>
    </div>

    <footer>
        <p>&copy; 2024 DOIONS. All rights reserved.</p>
    </footer>     
     </main>

      <Footer />
    </div>
  )
}
