import React from "react";
import "../pages/styles/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <div className="hero-container">
          <div className="hero-content">
            <h1>Welcome to Sufiyan Ecommerce Website</h1>
            <h4> We are the world Best It Company</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nulla esse deleniti veritatis sunt, ipsa obcaecati, ab, inventore
              corrupti possimus voluptas exercitationem temporibus reprehenderit
              repellendus perspiciatis eveniet optio impedit praesentium facilis
              adipisci est quibusdam officia!
            </p>
            <div className="btns">
              <button>
                <Link to={"/contact"}>Connect Now</Link>
              </button>
              <button>
                {" "}
                <Link to={"/service"}>More Now</Link>
              </button>
            </div>
          </div>
          <div className="image">
            <img
              src="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?ga=GA1.1.386693064.1710494351&semt=ais_hybrid"
              alt="female"
            />
          </div>
        </div>
      </main>
      {/* Google Map Section */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28009.854703071924!2d77.28594837520605!3d28.6527761523641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb391e594f2b%3A0xbb138f2e3928608e!2sAnand%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1743070973179!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{
            border: 0,
            width: "100%",
            height: "400px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}

export default Home;
