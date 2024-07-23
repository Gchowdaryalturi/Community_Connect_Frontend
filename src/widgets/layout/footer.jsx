import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto text-center"> {/* Add text-center class here */}
        <div className="flex flex-wrap justify-center pt-6"> {/* Center the content */}
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-5/5 mx-auto"> {/* Center the text and container */}
              {description}
            </Typography>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Community Connect",
  description:
    "A social place to post your campaigns for social cause",
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
