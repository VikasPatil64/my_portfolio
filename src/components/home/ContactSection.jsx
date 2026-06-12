import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPen } from "react-icons/fa";
import { sendContactEmail } from "../../utils/email";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await sendContactEmail({
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Vikas Pathade"
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 md:py-24 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black transition-colors duration-300" id="Contact">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <motion.div 
          className="flex mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 dark:text-white">Contact Me</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary">.</h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mb-10 font-bold uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let's build something amazing together.
        </motion.h2>

        {/* Contact Form Container */}
        <motion.div
          className="rounded-3xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 p-8 md:p-10 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                <FaUser size={10} /> Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Vikas Pathade"
                disabled={status === "loading"}
                className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 font-medium text-sm"
              />
            </div>

            {/* Email input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                <FaEnvelope size={10} /> Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="pathadevikas54@gmail.com"
                disabled={status === "loading"}
                className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 font-medium text-sm"
              />
            </div>

            {/* Message text-area */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                <FaPen size={10} /> Message
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                disabled={status === "loading"}
                className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 font-medium text-sm resize-none"
              />
            </div>

            {/* Status alerts */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-semibold"
              >
                Thank you! Your message has been sent successfully. I will get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-semibold"
              >
                {errorMessage}
              </motion.div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl hover:scale-[1.01] transition-all font-bold shadow-md cursor-pointer disabled:opacity-50 text-sm hover:bg-neutral-900 dark:hover:bg-neutral-200"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}
