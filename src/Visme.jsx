// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

const CustomForm = () => {
  useEffect(() => {
    // Load Visme form script dynamically
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div
      className="visme_d"
      data-title="Custom Form"
      data-url="4d7z680y-custom-form?fullPage=true"
      data-domain="forms"
      data-full-page="true"
      data-min-height="100vh"
      data-form-id="39790"
    ></div>
  );
};

export default CustomForm;
