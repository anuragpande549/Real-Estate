import React from "react";
import Logo from "../header/Logo";
import { FooterImages } from "../container";
import FooterNav from "./FooterNav";
import { Link } from "react-router-dom";

const [Facebook, Wiki, LinkedIn, Instagram, Be] = FooterImages;

// Social media icons
const socialLinks = [
  { icon: Facebook, url: "#" },
  { icon: Wiki, url: "#" },
  { icon: LinkedIn, url: "#" },
  { icon: Instagram, url: "#" },
  { icon: Be, url: "#" },
];

// Footer navigation sections
const featuresLinks = [
  { label: "Home", url: "/" },
  { label: "Become a Host", url: "/host" },
  { label: "Pricing", url: "/pricing" },
  { label: "Blog", url: "/blog" },
  { label: "Contact", url: "/contact" },
];

const companyLinks = [
  { label: "About Us", url: "/about" },
  { label: "Press", url: "/press" },
  { label: "Contact", url: "/contact" },
  { label: "Careers", url: "/careers" },
  { label: "Blog", url: "/blog" },
];

const policyLinks = [
  { label: "Terms of services", url: "/terms" },
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Security", url: "/security" },
];

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-white px-4 py-12 md:px-20 grid grid-cols-1 md:grid-cols-4 xl:items-start xl:place-items-center place-items-start gap-8 text-[#1A1A1A] justify-evenly text-sm"
    >
      {/* Contact Info */}
      <div>
        <Logo />
        <p className="font-semibold text-[24px]/[32px] mt-4 mb-3">Contact Us</p>
        <p className="mb-1">Call: +123 400 123</p>
        <p className="mb-1">
          Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </p>
        <p className="mb-4">Email: example@mail.com</p>

        {/* Social Media */}
        <div className="flex space-x-2">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="w-8 h-8 bg-[#EDEFF6] rounded-md flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.icon} alt="social" className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Navigation Sections */}
      <FooterNav title="Features" links={featuresLinks} />
      <FooterNav title="Company" links={companyLinks} />
      <FooterNav title="Team and policies" links={policyLinks} />
    </div>
  );
};

export default Footer;
