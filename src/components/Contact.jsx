import React from "react";
import "./Contact.css";

const contacts = [
  { label: "Github", link: "https://github.com/kirillovaaa", target: "_blank" },
  { label: "Email", link: "mailto: kiri2lova@gmail.com" },
  { label: "Telegram", link: "https://t.me/kiri2lova", target: "_blank" },
];

const Contact = () => (
  <div className="contact">
    {contacts.map((contact) => (
      <a className="contact-item" href={contact.link} target={contact.target}>
        {contact.label}
      </a>
    ))}
  </div>
);

export default Contact;
