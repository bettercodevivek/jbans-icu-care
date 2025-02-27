import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Header = () => {
    return(
      <div className="flex flex-col sm:flex-row items-center justify-between bg-emerald-600 h-auto sm:h-12 px-4 sm:px-12 text-white py-2 sm:py-0">
        <h1 className="font-roboto font-bold text-lg text-center sm:text-left">Best Critical Care Injectable Company</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-2 sm:mt-0">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91 8527187932</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@jbansicucare.com</span>
          </div>
        </div>
      </div>
    );
}

export default Header;
