import { Star } from "lucide-react";

export default function Testimonials() {

  const reviews = [

    {
      name: "Aman Sharma",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "NovaMart completely transformed my shopping experience with its futuristic UI and premium design.",
    },

    {
      name: "Priya Verma",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Smooth browsing, premium recommendations, and elegant layouts make this platform feel modern.",
    },

    {
      name: "Rahul Singh",
      image:
        "https://randomuser.me/api/portraits/men/75.jpg",
      review:
        "The AI search and beautiful shopping experience make NovaMart feel like a real next-gen platform.",
    },

  ];

  return (
    <section className="container-main">

      <div>

        {/* TOP */}
        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-black tracking-tight">

            What Customers Say

          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-4">

            Trusted by thousands of modern shoppers worldwide.

          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {
            reviews.map((review, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl hover:translate-y-[-5px] transition duration-300"
              >

                {/* PROFILE */}
                <div className="flex items-center gap-4">

                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>

                    <h2 className="text-lg font-bold">

                      {review.name}

                    </h2>

                    {/* STARS */}
                    <div className="flex gap-1 text-yellow-400 mt-1">

                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />

                    </div>

                  </div>

                </div>

                {/* REVIEW */}
                <p className="text-gray-400 text-sm leading-7 mt-6">

                  {review.review}

                </p>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}
