// src/components/FAQ.tsx
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import Navigation from "./Navigation"; // ← adjust if this is in a different folder

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  // track open/closed state per item
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  // your FAQ data — swap in your real questions/answers
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How Can I Place a Catering Order?",
      answer:
        "You can place your catering order online through our website, by calling our catering hotline, or by visiting any of our locations. We recommend placing orders at least 24-48 hours in advance to ensure availability.",
    },
    {
      id: 2,
      question: "What Type of Events Do You Cater For?",
      answer:
        "We cater for all types of events including corporate meetings, family gatherings, weddings, birthday parties, office lunches, and special celebrations. No event is too big or too small for our catering services.",
    },
    {
      id: 3,
      question: "Do You Offer Full-Service Catering?",
      answer:
        "Yes, we offer full-service catering options that include setup, serving utensils, plates, napkins, and cleanup. Our team can handle everything so you can focus on enjoying your event.",
    },
    {
      id: 4,
      question: "How Far in Advance Do I Need to Place My Order?",
      answer:
        "We recommend placing catering orders at least 24-48 hours in advance. For larger events or during busy seasons, we suggest ordering 3-5 days ahead to guarantee availability and proper preparation time.",
    },
    {
      id: 5,
      question: "Can You Accommodate Dietary Restrictions?",
      answer:
        "Absolutely! We can accommodate various dietary restrictions including vegetarian, gluten-free, and allergen-free options. Please inform us of any special dietary needs when placing your order.",
    },
    {
      id: 6,
      question: "Can I Customize My Catering Order?",
      answer:
        "Yes, our catering menu is fully customizable. You can mix and match different items, adjust portion sizes, and add special requests to create the perfect meal for your event.",
    },
    {
      id: 7,
      question: "How is the Food Delivered and Presented?",
      answer:
        "Our food is delivered in professional catering containers that keep everything fresh and at the proper temperature. We provide serving utensils and can arrange the food buffet-style for easy serving.",
    },
    {
      id: 8,
      question: "Can I Pick Up My Catering Order?",
      answer:
        "Yes, pickup is available at all our locations. This option often provides cost savings on delivery fees. We'll have your order ready at your specified pickup time with easy-to-transport packaging.",
    },
    {
      id: 9,
      question: "Are There Minimum Order Requirements?",
      answer:
        "Yes, we have minimum order requirements for catering that vary by location and service type. Typically, our minimum is for 10-15 people. Contact us for specific details about minimums in your area.",
    },
    {
      id: 10,
      question: "How is Payment Handled for Catering Orders?",
      answer:
        "We accept various payment methods including credit cards, cash, and corporate accounts. Payment can be made when placing the order or upon delivery/pickup. We also offer invoicing for corporate clients.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed navbar */}
      <div className="fixed top-0 inset-x-0 bg-white shadow-md z-50">
        <div className="">
          <Navigation />
        </div>
      </div>

      {/* Main content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
              CATERING BARBECUE FREQUENTLY ASKED QUESTIONS
            </h1>
            {/* <p className="text-gray-800 text-sm sm:text-base py-4">
              Find answers to common questions about our catering services
            </p> */}
          </div>

          {/* Accordion */}
          <div className="space-y-4 py-5">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-800">
                    {item.question}
                  </span>
                  {openItems[item.id] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openItems[item.id] && (
                  <div className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block border-2 border-gray-500 rounded-lg px-6 py-4">
              <p className="text-black mb-4 text-lg sm:text-xl">
                Still have questions? We're here to help!
              </p>
              {/* flex container with gap */}
              <div className="inline-flex items-center justify-center gap-4">
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/12145974922?text=Hi%2C%20I%20came%20across%20your%20website%2C%20I%20want%20more%20details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 sm:py-3 sm:px-8 rounded-lg transition">
                    <FaWhatsapp className="w-5 h-5" />
                  </button>
                </a>

                {/* Mail button */}
                <a href="mailto:info@smokedfusion.com">
                  <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 sm:py-3 sm:px-8 rounded-lg transition">
                    <Mail className="w-5 h-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
