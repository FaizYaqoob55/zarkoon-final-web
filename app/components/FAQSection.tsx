export function FAQSection() {
  const faqs = [
    {
      question: "What services does Zarkoon Security Limited offer?",
      answer: "Zarkoon Security Limited provides high-quality security limited for residential, commercial, and industrial properties. Their services encompass safeguarding individuals, Their services encompass safeguarding individuals, and businesses, with a team of experienced professionals."
    },
    {
      question: "What sets Zarkoon Security Limited apart from other security companies?",
      answer: "Zarkoon Security Limited stands out due to its dedication to providing customized security solutions to address the unique needs of professionalism, effectiveness, and friendliness in every step, with high-quality service at the forefront of every client interaction."
    },
    {
      question: "What is the core mission of Zarkoon Security Limited?",
      answer: "Zarkoon Security Limited is dedicated to being more than just a security firm. They strive to be your trusted partner in safeguarding what you value most, with a vision to provide unwavering peace of mind. Their mission is to make every client's security needs a priority by providing reliable, responsive service at all times."
    },
    {
      question: "What can clients expect when choosing Zarkoon Security Limited?",
      answer: "Clients can expect reliability, professionalism, and an unwavering commitment to service excellence. Our team of trained and qualified operatives is the cornerstone of our services. This company is dedicated to saving lives and fortifying the safety of every client."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#C8E6F5] via-[#B8E6F5] to-[#C8E6F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl text-[#0A1929] font-bold mb-4 tracking-tight">Questions and Answers</h2>
          <p className="text-[#1E5A8E] text-xl font-semibold tracking-wide">Frequently Asked Questions</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1E5A8E] to-transparent mx-auto mt-5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#1E5A8E] hover:border-[#5DADE2]">
              <h3 className="text-[#0A1929] text-lg font-bold mb-5 leading-relaxed">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-base font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
