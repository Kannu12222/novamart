export default function Stats() {

  const stats = [

    {
      value: "10K+",
      label: "Happy Customers",
      color: "text-pink-500",
      bg: "from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/20",
    },

    {
      value: "5K+",
      label: "Premium Products",
      color: "text-blue-400",
      bg: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/20",
    },

    {
      value: "24/7",
      label: "AI Support",
      color: "text-purple-400",
      bg: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/20",
    },

    {
      value: "Fast",
      label: "Delivery System",
      color: "text-orange-400",
      bg: "from-orange-500/20 to-yellow-500/20",
      border: "border-orange-500/20",
    },

  ];

  return (
    <section className="w-full px-6 lg:px-10">

      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {
            stats.map((item, index) => (

              <div
                key={index}
                className={`bg-gradient-to-br ${item.bg} border ${item.border} rounded-[28px] p-6 backdrop-blur-xl hover:translate-y-[-5px] transition duration-300`}
              >

                <h1 className={`text-3xl md:text-4xl font-black ${item.color}`}>

                  {item.value}

                </h1>

                <p className="text-gray-300 mt-3 text-sm md:text-base">

                  {item.label}

                </p>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}