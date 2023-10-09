"use client";

import Link from "next/link";
import payment from "../assets/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsReddit,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100 ">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est
            dignissimos eos vel ea vitae asperiores molestiae voluptatibus quia,
            illum vero tenetur velit ullam deleniti saepe ab eligendi esse sit!
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="https://youtube.com/@AshishKumar-by6jm?si=QAOmzWvdAbzt2CNG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a
              href="https://youtube.com/@AshishKumar-by6jm?si=QAOmzWvdAbzt2CNG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a
              href="https://youtube.com/@AshishKumar-by6jm?si=QAOmzWvdAbzt2CNG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a
              href="https://youtube.com/@AshishKumar-by6jm?si=QAOmzWvdAbzt2CNG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a
              href="https://youtube.com/@AshishKumar-by6jm?si=QAOmzWvdAbzt2CNG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialLink">
                <BsReddit />
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg">Latest Posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2022</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-600 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-orange-600 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <li className="hover:text-orange-600 cursor-pointer duration-200">
              About
            </li>
            <li className="hover:text-orange-600 cursor-pointer duration-200">
              Newsletter
            </li>
            <li className="hover:text-orange-600 cursor-pointer duration-200">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2">Pay us with you tusted services</p>
          <Image
            src={payment}
            alt="payment banner"
            className="w-full h-10 object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
