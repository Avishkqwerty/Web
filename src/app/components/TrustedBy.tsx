import { motion } from "motion/react";

const logos = [
  "https://services.hashxinnovations.com/logo/Digiecon.png",
  "https://services.hashxinnovations.com/logo/LNBTI.png",
  "https://services.hashxinnovations.com/logo/EXPO%20Printers.jpg",
  "https://services.hashxinnovations.com/logo/Athlan.png",
  "https://services.hashxinnovations.com/logo/Barista.png",
  "https://services.hashxinnovations.com/logo/BE%20DAPPER.jpg",
  "https://services.hashxinnovations.com/logo/CICRA.png",
  "https://services.hashxinnovations.com/logo/CyberMass%20Solutions.webp",
  "https://services.hashxinnovations.com/logo/GIGGLES.png",
  "https://services.hashxinnovations.com/logo/11th%20Cyber%20Summit.png",
  "https://services.hashxinnovations.com/logo/Rocell.png",
  "https://services.hashxinnovations.com/logo/Softmint%20Solutions.png",
  "https://services.hashxinnovations.com/logo/Jeewana%20Lanka%20Foundation.png",
  "https://services.hashxinnovations.com/logo/ISACA%20NSBM.png",
  "https://services.hashxinnovations.com/logo/Kelaniya%20University.png",
  "https://services.hashxinnovations.com/logo/Swift%20Hosting.png",
  "https://services.hashxinnovations.com/logo/Seylan%20Bank.png",
  "https://services.hashxinnovations.com/logo/Sri%20Lanka%20CERT.png",
  "https://services.hashxinnovations.com/logo/Axiata%20Difital%20Labs.png",
  "https://services.hashxinnovations.com/logo/Durdans%20Hospitals.png",
  "https://services.hashxinnovations.com/logo/Infinte%20Ventures.png",
  "https://services.hashxinnovations.com/logo/Kings%20Pavillion.png",
  "https://services.hashxinnovations.com/logo/MEASA%20Consultancies.png",
  "https://services.hashxinnovations.com/logo/OREL%20Cloud.png",
  "https://services.hashxinnovations.com/logo/Poly%20Package%20Services.jpg",
  "https://services.hashxinnovations.com/logo/Pwnverse.png",
  "https://services.hashxinnovations.com/logo/DATACORE.png",
  "https://services.hashxinnovations.com/logo/Allianz.png",
  "https://services.hashxinnovations.com/logo/SLIIT%20IEEE.png",
  "https://services.hashxinnovations.com/logo/SLSI.png",
  "https://services.hashxinnovations.com/logo/Sri%20Lanka%20Army.png",
  "https://services.hashxinnovations.com/logo/MAS%20TRISCHEL.png",
  "https://services.hashxinnovations.com/logo/Safety%20Sure.jpg",
  "https://services.hashxinnovations.com/logo/Chello%20Diary%20Products.png",
  "https://services.hashxinnovations.com/logo/Euronet.png",
  "https://services.hashxinnovations.com/logo/National%20Cyber%20Summit.png",
  "https://services.hashxinnovations.com/logo/Rezpitch.png",
  "https://services.hashxinnovations.com/logo/Walks%20of%20Dubai.png",
  "https://services.hashxinnovations.com/logo/Cybix%20Consultating.png",
  "https://services.hashxinnovations.com/logo/Cybershield.png",
  "https://services.hashxinnovations.com/logo/Zmessenger.jpg",
  "https://services.hashxinnovations.com/logo/Coco%20Tusker.png",
  "https://services.hashxinnovations.com/logo/TEG%20Holdings.png",
  "https://services.hashxinnovations.com/logo/Tropicoir.png",
  "https://services.hashxinnovations.com/logo/Euro%20Substrates.png",
  "https://services.hashxinnovations.com/logo/Tropical%20Holdings.png",
  "https://services.hashxinnovations.com/logo/Tropical%20Ventures.png",
  "https://services.hashxinnovations.com/logo/DINRO%20Holdings.png",
  "https://services.hashxinnovations.com/logo/DP%20Lesuire.png"
  "https://melstacorp.com/assets/images/seo/preview.jpg"
];

export function TrustedBy() {
  return (
    <section className="relative w-full py-16 bg-white/50 dark:bg-black/20 backdrop-blur-md border-y border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
          Trusted By Leading Organizations
        </h4>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400">
          Our Valued Clients
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-16 items-center px-16"
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate list for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-40 h-20 flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={logo}
                alt={`Client logo ${index}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
