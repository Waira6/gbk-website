import React, { useState } from "react";

// Emma's Digital Solution - Single-file React component
// Tailwind CSS utility classes are used for styling (no external colors hard-coded)
// Replace posterImage and logoImage with your uploaded poster and logo paths if needed

const posterImage = "/mnt/data/A_promotional_advertisement_for_Emma's_Digital_Sol.png"; // replace if necessary
const logoImage = "/mnt/data/unnamed.jpg"; // replace if necessary

const sampleProducts = [
  {
    id: "vivo-y85",
    name: "Vivo Y85 (Used UK)",
    priceUGX: 145000,
    specs: ["64GB ROM", "6GB RAM", "13MP Camera", "5000mAh Battery", "Android 9"],
    colors: ["Black", "Red", "Blue"],
    img: posterImage,
  },
];

export default function EmmaDigitalSite() {
  const [products] = useState(sampleProducts);
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [filterColor, setFilterColor] = useState("All");

  function addToCart(product) {
    setCart((c) => [...c, product]);
    alert(`${product.name} added to cart. Open WhatsApp to complete purchase.`);
  }

  function openWhatsApp(product) {
    const phone = "+256760759741"; // whatsapp number
    const message = encodeURIComponent(`Hi, I'm interested in ${product.name} (UGX ${product.priceUGX}). Is it available? Location: Lwamba-Kaliro.`);
    window.open(`https://wa.me/${phone.replace(/\+/g, "")}?text=${message}`, "_blank");
  }

  const filtered = products.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesColor = filterColor === "All" || p.colors.includes(filterColor);
    return matchesQuery && matchesColor;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 text-slate-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logoImage} alt="Emma's Digital Logo" className="w-16 h-16 object-contain rounded-md shadow-md" />
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">EMMA'S DIGITAL SOLUTION</h1>
            <p className="text-sm text-slate-600">Location: <strong>Lwamba–Kaliro</strong></p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#products" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow">Shop</a>
          <a href="#contact" className="px-4 py-2 border border-slate-200 rounded-lg">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">GET A USED UK SMARTPHONE OF YOUR DREAM</h2>
            <p className="mt-4 text-lg text-slate-600">Shop quality used UK phones, inspected and tested. Great prices, easy pickup in Lwamba–Kaliro, and fast WhatsApp support.</p>

            <div className="mt-6 flex gap-3">
              <input
                aria-label="Search products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-4 py-3 rounded-lg border border-slate-200 shadow-sm w-full md:w-72"
                placeholder="Search phones, e.g. Vivo Y85"
              />

              <select
                value={filterColor}
                onChange={(e) => setFilterColor(e.target.value)}
                className="px-4 py-3 rounded-lg border border-slate-200"
              >
                <option>All</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
              </select>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow hover:scale-105 transform transition">
                Browse Phones
n              </a>

              <button
                onClick={() => window.open('https://wa.me/256760759741?text=' + encodeURIComponent('Hello, I need help with buying a phone.'), '_blank')}
                className="inline-flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-lg hover:bg-slate-100">
                Chat on WhatsApp
              </button>
            </div>

            <div className="mt-8 text-sm text-slate-500 rounded-lg p-4 bg-slate-50 border">
              <strong>Note:</strong> Some phones come without a charger. Terms &amp; conditions applied. Pickup: Lwamba–Kaliro.
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-72 h-96 bg-white rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
              <img src={posterImage} alt="Poster" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        <section id="products" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Available Phones</h3>
            <div className="text-sm text-slate-500">Easy pickup in Lwamba–Kaliro • WhatsApp support: 0760759741</div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
                <div className="h-56 bg-slate-100 rounded overflow-hidden flex items-center justify-center">
                  <img src={p.img} alt={p.name} className="object-contain h-full" />
                </div>

                <div className="mt-4 flex-1">
                  <h4 className="text-lg font-bold">{p.name}</h4>
                  <div className="text-slate-600 mt-1">{p.specs.join(' • ')}</div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Price</div>
                    <div className="text-xl font-extrabold">UGX {p.priceUGX.toLocaleString()}</div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => { setSelected(p); addToCart(p); }}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg">
                      Add
                    </button>

                    <button
                      onClick={() => openWhatsApp(p)}
                      className="px-4 py-2 border border-slate-200 rounded-lg">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 bg-gradient-to-r from-sky-50 to-white rounded-lg p-6 shadow">
          <h4 className="text-xl font-semibold">Need help?</h4>
          <p className="text-slate-600 mt-2">Call or WhatsApp us and we'll help you choose, arrange pickup or delivery.</p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/256760759741" className="flex items-center gap-3 px-4 py-3 bg-green-600 text-white rounded-lg shadow">
              WhatsApp: 0760759741
            </a>

            <a href="tel:+256765401122" className="flex items-center gap-3 px-4 py-3 bg-slate-700 text-white rounded-lg shadow">
              Call: 0765401122
            </a>

            <div className="ml-auto text-right text-sm text-slate-500">Pickup: <strong>Lwamba–Kaliro</strong></div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-6 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold">Emma's Digital Solution</div>
            <div className="text-sm text-slate-300">Quality used UK phones • Pickup: Lwamba–Kaliro</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm">WhatsApp: 0760759741</div>
            <div className="text-sm">Call: 0765401122</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
