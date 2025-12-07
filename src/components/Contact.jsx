import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const XIcon = ({ size = 24, className = "" }) => (
   <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.21 2H21L14.33 10.09L22 22H15.82L11.06 14.66L5.6 22H2.77L9.8 13.3L2 2H8.35L12.66 8.71L18.21 2ZM16.92 20.33H18.74L7.15 3.6H5.22L16.92 20.33Z" />
            </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "mail",     
        "template_ilggigl",  
        e.target,
        "w4h-Dys3-HOov7jWl"    
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#050505] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20"></div>

      <div className="max-w-5xl mx-auto relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-purple-400 mb-10"
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Have a project, want to collaborate, or just want to connect?
          <br />
          I'm always open to internships, freelance work, and collabs.
        </p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            { icon: Github, link: "https://github.com/nandinisingh27" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/nandinisingh07/" },
            { icon: XIcon, link: "https://x.com/NandiniSingh_27" },
            { icon: Mail, link: "mailto:nandinisingh52891@gmail.com" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, rotate: 5 }}
                className="
                  p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-purple-400/40 hover:bg-purple-500/10
                  transition-all shadow-lg hover:shadow-purple-500/40
                "
              >
                <Icon className="text-purple-300" size={28} />
              </motion.a>
            );
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              p-8 rounded-2xl bg-black/50 backdrop-blur-xl 
              border border-white/10
              shadow-xl hover:shadow-purple-600/30 transition-all
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <Mail size={28} className="text-purple-400" />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-medium">nandinisingh52891@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={28} className="text-purple-400" />
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="font-medium">+91-7906103348</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              p-8 rounded-2xl bg-black/50 backdrop-blur-xl
              border border-white/10
              shadow-xl hover:shadow-purple-600/30 transition-all
            "
          >
            {!submitted ? (
              <>
                <div className="mb-4">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <input
                    name="user_name"   // required for EmailJS
                    required
                    className="
                      w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10
                      text-white focus:border-purple-400 transition
                    "
                  />
                </div>

                <div className="mb-4">
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    name="user_email"  // required for EmailJS
                    required
                    type="email"
                    className="
                      w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10
                      text-white focus:border-purple-400 transition
                    "
                  />
                </div>

                <div className="mb-4">
                  <label className="text-sm text-gray-400">Message</label>
                  <textarea
                    name="message"    
                    required
                    className="
                      w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10
                      text-white h-28 focus:border-purple-400 transition
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700
                    transition text-white font-medium shadow-lg
                  "
                >
                  Send Message
                </button>
              </>
            ) : (
              <div className="text-green-400 font-medium text-center">
                Thanks — your message has been sent! 💜
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
