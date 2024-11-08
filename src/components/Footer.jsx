import React from "react";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="h-24 flex justify-center">
      <div className="flex flex-col justify-center items-center ">
        <p>Joshua Emmanuel Capito @ {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
