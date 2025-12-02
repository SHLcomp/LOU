import "./ContactInfo.scss";
import data from "../../data/contactInfo";

export const ContactInfo = () => {
  return (
    <div className="contactInfo" id="contact">
      <h2>Contact Information</h2>
      <div className="contact-cont">
        {data.map((item) => {
          return (
            <div className="item">
              <div className="txt">
                <h4>{item.title}</h4>
                <i className={item.icon}></i>
              </div>
              <ul>
                {item.des.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <a
        href="https://wa.me/+966123456789?text=Hello%20there!"
        target="_blank"
        rel="noopener noreferrer"
        className="a"
      >
        <h4 className="cta">
          {" "}
          <i className="fa-brands fa-whatsapp fa-xl"></i>Contact On Whastsapp
        </h4>
      </a>
    </div>
  );
};
export default ContactInfo;
