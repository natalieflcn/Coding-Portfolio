import Panel from "../components/layout/Panel";
import Button from "../components/ui/Button";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";

const LinkItem = function ({ children }) {
  return (
    <div className="flex sm:gap-15 lg:gap-30 justify-center items-center not-last:border-b border-blue-0 px-4 pb-4">
      {children}
    </div>
  );
};

const ContactButton = function ({ variant, className, children }) {
  return (
    <Button
      variant={variant}
      className={`text-[0.6rem] w-full sm:text-xs lg: max-w-sm ${className}`}
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
          <ContactButton variant="blue">
            Connect with me on Linkedin
          </ContactButton>
        </LinkItem>
        <LinkItem>
          <FaGithub
            className="hidden sm:block "
            size={40}
            fill="var(--color-pink-300)"
          />
          <ContactButton variant="purple">
            View the source code on GitHub
          </ContactButton>
        </LinkItem>
        <LinkItem>
          <IoIosDownload
            className="hidden sm:block "
            size={40}
            fill="var(--color-pink-300)"
          />
          <ContactButton variant="red">Download CV/Resume</ContactButton>
        </LinkItem>
      </div>
    </Panel>
  );
}

export default Contact;
