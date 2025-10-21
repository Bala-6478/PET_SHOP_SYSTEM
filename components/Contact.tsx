
import React from 'react';
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from '../constants';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const Contact: React.FC = () => {
  return (
    <section className="bg-brand-green/30 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">Get In Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Have questions or want to say hello? We'd love to hear from you!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chat on WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:opacity-90 transition-transform transform hover:scale-105 shadow-lg"
          >
            <InstagramIcon className="w-6 h-6" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
