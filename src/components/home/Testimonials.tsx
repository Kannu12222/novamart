import { Star } from "lucide-react";

export default function Testimonials() {

  const reviews = [
    {
      name: "Aman Sharma",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "NovaMart completely changed my online shopping experience. The UI feels futuristic and premium.",
    },

    {
      name: "Priya Verma",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Super smooth experience with beautiful product recommendations and fast browsing.",
    },

    {
      name: "Rahul Singh",
      image:
        "https://randomuser.me/api/portraits/men/75.jpg",
      review:
        "The AI search and premium design make this feel like a real next-generation shopping platform.",
    },
  ];

  return (
    <section className="bg-black text-white px-16 py-24">

      {/* TITLE */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold">
          What Customers Say
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Trusted by thousands of modern shoppers worldwide.
        </p>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {
          reviews.map((review, index) => (

            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300"
            >

              {/* PROFILE */}
              <div className="flex items-center gap-4">

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    {review.name}
                  </h2>

                  <div className="flex gap-1 text-yellow-400 mt-1">

                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />

                  </div>

                </div>

              </div>

              {/* REVIEW */}
              <p className="text-gray-400 mt-8 leading-8">
                {review.review}
              </p>

            </div>
          ))
        }

      </div>

    </section>
  );
}