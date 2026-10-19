import React, { useState } from "react";
import { siteConfig } from "../data/config";
import { Mail, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Personal Styling Advice",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim() || !form.email.includes("@"))
      newErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Please write your message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F4EE] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Concierge Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-[1px] bg-[#D6AAA4]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#75645A]">
                Concierge Atelier
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight leading-[1.15]">
              We Would Love to{" "}
              <span className="italic font-light text-[#75645A]">
                Hear From You
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#82766E] font-light leading-relaxed">
              Whether you are inquiring about bespoke sizing, fragrance pairing, or order tracking, our atelier team is at your complete disposal.
            </p>

            <div className="space-y-4 pt-4 text-xs sm:text-sm text-[#55463E]">
              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFCF8] border border-[#E5DCD3]">
                <Mail className="w-4 h-4 text-[#75645A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block uppercase text-[10px] tracking-wider text-[#A99A8D]">
                    Direct Concierge Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="hover:underline font-medium text-[#302722]"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFCF8] border border-[#E5DCD3]">
                <Clock className="w-4 h-4 text-[#75645A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block uppercase text-[10px] tracking-wider text-[#A99A8D]">
                    Concierge Hours
                  </span>
                  <p className="text-[#82766E]">
                    Monday – Saturday: 9:00 AM – 9:00 PM (AST)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#FFFCF8] border border-[#E5DCD3]">
                <MapPin className="w-4 h-4 text-[#75645A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block uppercase text-[10px] tracking-wider text-[#A99A8D]">
                    Digital Flagship
                  </span>
                  <p className="text-[#82766E]">
                    Dispatched from our Riyadh & Dubai fulfillment ateliers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-[#FFFCF8] p-8 sm:p-10 rounded-2xl border border-[#E5DCD3] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#D6AAA4] mx-auto" />
                <h3 className="font-serif text-2xl font-medium text-[#302722]">
                  Message Received
                </h3>
                <p className="text-sm text-[#82766E] max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <span className="font-medium text-[#302722]">{form.name}</span>. Your inquiry regarding "{form.subject}" has been queued.
                </p>
                <div className="p-4 bg-[#F8F4EE] rounded-lg border border-[#E5DCD3] max-w-md mx-auto text-xs text-[#75645A] text-left">
                  <span className="font-semibold uppercase text-[10px] tracking-wider block mb-1">
                    Atelier Notice:
                  </span>
                  This contact form is in demonstration mode. To forward submissions directly to your email, connect your Resend or Formspree webhook in <code className="font-mono text-[10px]">ContactSection.tsx</code>.
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "Personal Styling Advice", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#55463E] text-[#FFFCF8] text-xs font-semibold uppercase tracking-widest rounded-sm cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55463E] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Sophia Al-Mansoor"
                      className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#E5DCD3] rounded-md text-xs text-[#302722] placeholder:text-[#A99A8D] focus:outline-hidden focus:border-[#75645A]"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-[#D6AAA4] font-medium mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55463E] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="sophia@example.com"
                      className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#E5DCD3] rounded-md text-xs text-[#302722] placeholder:text-[#A99A8D] focus:outline-hidden focus:border-[#75645A]"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-[#D6AAA4] font-medium mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55463E] mb-1.5">
                    Subject of Inquiry
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#E5DCD3] rounded-md text-xs text-[#302722] focus:outline-hidden focus:border-[#75645A] font-medium cursor-pointer"
                  >
                    <option value="Personal Styling Advice">Personal Styling Advice</option>
                    <option value="Fragrance Consultation">Fragrance Consultation</option>
                    <option value="Order & Dispatch Question">Order & Dispatch Question</option>
                    <option value="Atelier Gift Curation">Atelier Gift Curation</option>
                    <option value="Press & Collaborations">Press & Collaborations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#55463E] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can assist you..."
                    className="w-full px-4 py-3 bg-[#F8F4EE] border border-[#E5DCD3] rounded-md text-xs text-[#302722] placeholder:text-[#A99A8D] focus:outline-hidden focus:border-[#75645A]"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-[#D6AAA4] font-medium mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#55463E] text-[#FFFCF8] hover:bg-[#302722] text-xs font-semibold tracking-widest uppercase transition-colors rounded-sm cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Atelier</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
