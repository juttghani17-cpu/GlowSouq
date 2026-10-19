import React, { useState } from "react";
import { Check, Mail, ArrowRight } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please provide an email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Interactive demonstration state
    setIsSubscribed(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#55463E] text-[#FFFCF8] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#FFFCF8]/10 border border-[#D4C2AD]/30 flex items-center justify-center text-[#D6AAA4] mb-6">
          <Mail className="w-5 h-5 stroke-[1.6]" />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D6AAA4] block mb-2">
          The Atelier Dispatch
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#FFFCF8]">
          A Little Beauty in Your Inbox
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#D4C2AD] font-light max-w-xl mx-auto leading-relaxed">
          Discover new arrivals, thoughtful edits, private seasonal invitations, and inspiration for your everyday style.
        </p>

        {isSubscribed ? (
          <div className="mt-8 p-6 bg-[#FFFCF8]/10 backdrop-blur-md rounded-xl border border-[#D6AAA4]/40 max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="w-8 h-8 rounded-full bg-[#D6AAA4] text-[#55463E] flex items-center justify-center mx-auto mb-3">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#FFFCF8]">
              Welcome to Glow Souq
            </h3>
            <p className="text-xs text-[#D4C2AD] mt-1.5 font-light leading-relaxed">
              Thank you for subscribing with <span className="font-medium text-[#FFFCF8]">{email}</span>. (Demonstration state: ready to connect to your Klaviyo or Mailchimp endpoint in <code className="font-mono text-[10px]">Newsletter.tsx</code>).
            </p>
            <button
              onClick={() => {
                setIsSubscribed(false);
                setEmail("");
              }}
              className="mt-4 text-xs text-[#D6AAA4] hover:text-[#FFFCF8] underline tracking-wider cursor-pointer"
            >
              Enter another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 bg-[#FFFCF8] text-[#302722] placeholder:text-[#A99A8D] rounded-sm text-xs font-normal focus:outline-hidden focus:ring-2 focus:ring-[#D6AAA4]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#D6AAA4] text-[#302722] hover:bg-[#FFFCF8] text-xs font-semibold tracking-widest uppercase transition-colors rounded-sm cursor-pointer shrink-0 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {error && (
              <p className="text-xs text-[#D6AAA4] text-left pt-1 font-medium">
                {error}
              </p>
            )}

            <p className="text-[11px] text-[#A99A8D] text-center pt-2 font-light">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
