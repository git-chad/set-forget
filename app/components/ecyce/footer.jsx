import Image from "next/image";
import sfSmall from "@/app/images/logos/SfSmall.png";
import Link from "next/link";
import Container from "./container";
import Button from "./buttons";
import BuenosAiresClock from "./bsasClock";
import githubLogo from "@/app/images/logos/githubLogo.png";
import linkedinLogo from "@/app/images/logos/linkedinLogo.png";
import instagramLogo from "@/app/images/logos/instagramLogo.png";

const Footer = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Our work", path: "/projects" },
    { name: "Success stories", path: "/reviews" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-w-screen bg-[#111] border-t border-sf-cream/60 text-sf-cream flex justify-between items-center px-20">
      <Container className="flex justify-between w-full">
        <div className="flex flex-col min-h-96 justify-between py-8">
          <div className="flex items-center">
            <Image src={sfSmall} className="w-10 h-10" alt="company logo" />
            <p className="font-semibold text-2xl">Set & Forget</p>
          </div>

          <div>
            <h1 className="reg-neue text-4xl mb-4">
              Let&apos;s work together!
            </h1>
            <Button type="outline" text="Get to know us" className="max-w-64" />
          </div>

          <div className="flex items-center gap-2">
            <p>Buenos Aires, Argentina.</p>
            <BuenosAiresClock />
          </div>
        </div>

        <div className="w-80 min-h-96 flex flex-col justify-between py-8">
          <nav className="flex flex-col w-full min-h-48 mt-10">
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                className="border-t border-sf-cream parent-hover hover:font-semibold"
              >
                <p className="leading-10 child-hover transition-all">
                  {route.name}
                </p>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-8">
            <p className="font-bold text-sf-lime">Follow us!</p>
            <Link target="_blank" href="https://www.linkedin.com/company/setandforget/"><Image src={linkedinLogo} className="hover:scale-125 transition-transform"/></Link>
            <Link target="_blank" href="https://github.com/Set-Forget/"><Image src={githubLogo} className="hover:scale-125 transition-transform"/></Link>
            <Link target="_blank" href="https://www.instagram.com/setandforget.io/"><Image src={instagramLogo} className="hover:scale-125 transition-transform"/></Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
