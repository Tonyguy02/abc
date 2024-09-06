import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="w-full bg-zinc-950 text-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                <h1>Toni & Guy Dwarka</h1>
                <h3 className='code ml-2 text-sm font-thin'>The ultimate salon experience</h3>
              </span>
            </a>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Phone:</p>
              <a
                href="tel:+917669666360"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +91-7669666360/7669666361
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:toniguyluxurysalon@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                toniandguydwarka@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Address:</p>
              <a
                href="https://www.google.com/maps/dir//Ground+floor,+plot+no+9,+A,+near+Bikanerwala,+Block+A,+Sector+12+Dwarka,+Dwarka,+Delhi,+110075/@28.5966015,76.9594564,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d1b8baa0eafc3:0xaf157af2513485b!2m2!1d77.0418578!2d28.5966264?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Ground Floor Plot no .9, Near Bikanervala, Sector 12A Dwarka, 110075
              </a>
            </div>
          </div>
          <div>
            <span className="text-xl font-bold tracking-wide text-white">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <SocialIcon network="instagram" url="https://www.instagram.com/toniandguydwarkaofficial?igsh=MTFmdDVwdTVqbWhyaA==" target='_blank' />
              <SocialIcon network="facebook" url="https://www.facebook.com/Toniandguydwarka" target='_blank' />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t border-gray-700 lg:flex-row">
          <p className="text-sm text-gray-400">
            © Copyright 2024 Toni & Guy All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
