import React from "react";
import { daysOfWeek } from "../constants/lists";
import { contactLinks } from "../constants/lists";
import ContactModal from "./ContactModal";

const Contact = () => {
  const now = new Date();

  const timeOfDay = now.getHours();

  let hours =
    timeOfDay < 12 && timeOfDay >= 0
      ? "morning"
      : timeOfDay >= 12 && timeOfDay <= 17
      ? "afternoon"
      : "evening";

  const getDayOfWeek = () => {
    return daysOfWeek[now.getDay()];
  };

  const hoverStyles = " hover:text-yellow-500 transition-all 2s ease";

  return (
    <div className="h-full py-10 bg-black text-white">
      <div className="flex flex-col gap-10 align-elements">
        <h1 className="text-xl font-bold">
          Thank you for your time and consideration! I hope you enjoy the rest
          of your
          {` ${getDayOfWeek()} ${hours}!`}
        </h1>

        <h1 className="text-center text-2xl font-bold">Get in touch!</h1>
        <div className="flex justify-center items-center gap-8 text-xl">
          <ContactModal />
          {contactLinks.map((item) => {
            const { id, url, label } = item;
            return (
              <a
                key={id}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                className={hoverStyles}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
