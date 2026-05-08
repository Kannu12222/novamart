export default function Featured() {

  const products = [
    {
      title: "Gaming Laptop",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    },

    {
      title: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      title: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      title: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  return (
    <section className="bg-black text-white px-16 py-20">

      {/* TITLE */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Featured Collection
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Trending futuristic products curated for you.
        </p>

      </div>

      {/* SCROLL SECTION */}
      <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">

        {
          products.map((product, index) => (

            <div
              key={index}
              className="min-w-[320px] bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold">
                  {product.title}
                </h2>

                <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full">
                  Explore
                </button>

              </div>

            </div>
          ))
        }

      </div>

    </section>
  );
}