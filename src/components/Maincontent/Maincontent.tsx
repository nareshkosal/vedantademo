import Image from "next/image";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zF7jVcHWZMT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function MainContent() {
    const handleMouseEnter = (index: number) => {
        console.log('Mouse entered on item:', index);
      };
    
      const handleMouseLeave = () => {
        console.log('Mouse left');
      };
    return (
      <div className="flex flex-col min-h-screen">
       
        <main className="flex flex-1 p-4 md:p-6">
          <aside className="w-full md:w-1/4 pr-4 md:pr-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold">Services</h2>
                <ul className="space-y-2 mt-4" onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}>
                  <li className=" bg-white hover:bg-red-500 py-3 ">
                    <a href="#" className="block text-gray-700">
                    Nickel Metal (Cathode)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-gray-700">
                    Nickel Sulphate Hexahydrate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-gray-700">
                    Nickel Sulphate Solution
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-gray-700">
                    Cobalt Sulphate Crystals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-gray-700">
                    Cobalt Sulphate Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-gray-700">
                    Manganese Sulphate Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-gray-700">
                    Manganese Sulphate Crystals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-gray-700">
                    Sodium Sulphate Anhydrous
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold">Brochures</h2>
                <p className="mt-2 text-gray-700">
                  View our 2019 financial prospectus brochure for an easy to read guide on all of the services offer.
                </p>
                <button className="mt-4 w-full bg-gray-200 text-gray-700 px-4 py-2 rounded">Download Brochure</button>
                <button className="mt-2 w-full bg-gray-200 text-gray-700 px-4 py-2 rounded">Characteristics</button>
              </div>
            </div>
          </aside>
          <section className="flex-1 bg-white p-4 md:p-6 rounded shadow">
            <h1 className="text-2xl font-bold">Chemical Research</h1>
            <Image
        src="https://images.pexels.com/photos/8851075/pexels-photo-8851075.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Chemical Research"
        width={700}  // Adjust width and height as per your design requirements
        height={300}
        className="mt-4 rounded"
      />            <p className="mt-4 text-gray-700">
              Manufacturing industry became a key sector of production and labour in European and North American countries
              during the Industrial Revolution, upsetting previous mercantile and feudal economies. The Industrial
              Revolution, which took place from the 18th to the 19th centuries, transformed agricultural, rural societies
              in Europe and America into industrial, urban ones. The Industrial Revolution, which took place from the 18th
              to the 19th centuries, transformed agricultural, rural societies in Europe and America into industrial,
              urban ones.
            </p>
            <h2 className="mt-4 text-xl font-bold">Why choose us?</h2>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>Manufacturing industry</li>
              <li>Industrial Revolution</li>
              <li>Upsetting previous</li>
              <li>Feudal economies</li>
              <li>Technological advancements</li>
            </ul>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded">
                <h3 className="text-lg font-bold">Creative Ideas</h3>
                <p className="mt-2 text-gray-700">Sed quia non numquam eius modi tempora incidunt ut labore.</p>
              </div>
              <div className="bg-orange-500 p-4 rounded text-white">
                <h3 className="text-lg font-bold">Super Safety</h3>
                <p className="mt-2">Sed quia non numquam eius modi tempora incidunt ut labore.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-white">
                <h3 className="text-lg font-bold">24/7 Support</h3>
                <p className="mt-2">Sed quia non numquam eius modi tempora incidunt ut labore.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-white">
                <h3 className="text-lg font-bold">24/7 Support</h3>
                <p className="mt-2">Sed quia non numquam eius modi tempora incidunt ut labore.</p>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">How to process the function for consulting?</h2>
              <p className="mt-2 text-gray-700">
                Many of our SELC registered employees are requested as main preferred Guides were given for associations
                of trades and industries. The main preference with the production and distribution of a particular good
                has been over.
              </p>
              <div className="mt-4 space-y-2">
                <details className="border-b border-gray-200 pb-2">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Where should I incorporate my business?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                    ante dapibus diam.
                  </p>
                </details>
                <details className="border-b border-gray-200 pb-2">
                  <summary className="cursor-pointer text-lg font-semibold">
                    How much should I capitalize with at the beginning?
                  </summary>
                  <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                    ante dapibus diam.
                  </p>
                </details>
                <details className="border-b border-gray-200 pb-2">
                  <summary className="cursor-pointer text-lg font-semibold">What is certification?</summary>
                  <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                    ante dapibus diam.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }