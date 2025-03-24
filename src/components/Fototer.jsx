import { Github, Mail, Facebook } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ndungutse Eugide</h3>
            <p className="text-gray-300 mb-4">
              Software Developer passionate about creating impactful web
              solutions that help businesses grow and succeed.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span>{" "}
                eugidendungutse770@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> +250 726150601
              </p>
              <span className="font-semibold">Whatsapp:</span> +250 726150601
              <p className="text-gray-300">
                <span className="font-semibold">Location:</span> Gatsibo,
                Rwanda, Nyabiheke Camp
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Ndungutse Eugide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
