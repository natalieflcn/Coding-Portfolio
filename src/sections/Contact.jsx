import Panel from "../components/layout/Panel";
import Button from "../components/ui/Button";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";

const LinkItem = function ({ children }) {
  return (
    <div className="flex sm:gap-15 justify-center items-center not-last:border-b border-blue-0 px-4 pb-4 ">
      {children}
    </div>
  );
};

const ContactButton = function ({ variant, className, children }) {
  return (
    <Button
      variant={variant}
      className={`text-[0.6rem] w-full sm:text-xs lg: max-w-sm ${className}  text-white`}
    >
      {children}
    </Button>
  );
};
function Contact() {
  return (
    <Panel title="Contact">
      <div className="flex flex-col gap-5 pt-5">
        <LinkItem>
          <IoLogoLinkedin
            className="hidden sm:block "
            size={40}
            fill="var(--color-pink-300)"
          />
          <a
            href="https://www.linkedin.com/in/natalieflcn/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[50%] hover:cursor-pointer"
          >
            <ContactButton variant="blue" className="button-shimmer-linkedin">
              Connect with me on Linkedin
            </ContactButton>
          </a>
        </LinkItem>

        <LinkItem>
          <FaGithub
            className="hidden sm:block "
            size={40}
            fill="var(--color-pink-300)"
          />
          <a
            href="https://github.com/natalieflcn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[50%] hover:cursor-pointer"
          >
            <ContactButton variant="purple" className="button-shimmer-github">
              View my GitHub profile
            </ContactButton>
          </a>
        </LinkItem>

        <LinkItem>
          <IoIosDownload
            className="hidden sm:block "
            size={40}
            fill="var(--color-pink-300)"
          />
          <a
            href="/images/resume.png"
            download="Natalie_Falcon_Resume"
            className="w-full max-w-[50%] hover:cursor-pointer"
          >
            <ContactButton variant="red" className="button-shimmer-download">
              Download CV/Resume
            </ContactButton>
          </a>
        </LinkItem>
      </div>
    </Panel>
  );
}

export default Contact;
