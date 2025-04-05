import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_qe5p86a";
  const TEMPLATE_ID = "template_4m04kyx";
  const PUBLIC_KEY = "sUeGdgS-7moJjDP_F";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", formData);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ from_name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Ошибка EmailJS:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-32 py-16 md:py-24"
    >
      <RevealOnScroll>
        <div className="w-full max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#63c5da] to-[#3d95d1] bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="col-span-1">
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                value={formData.from_name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name"
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
              />
            </div>

            <div className="col-span-1">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#63c5da] to-[#3d95d1] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
