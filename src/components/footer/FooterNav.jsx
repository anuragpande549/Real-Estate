import React from "react";
import { Link } from "react-router-dom";

const FooterNav = ({ title, links }) => {
  return (
    <div className="mx-auto">
      <p className="font-semibold text-[24px]/[32px] mb-3">{title}</p>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.url} className="hover:text-gray-500">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
