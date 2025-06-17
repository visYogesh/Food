import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import { useState } from "react";
import GloriaFoodWidget from "./GloriaFoodWidget";
import HalalToaster from "./HalalToaster";

const categories = [
  {
    id: "chicken",
    name: "Sandwich - Chicken",
    icon: "/images/menu/icons/chicken.png",
  },
  {
    id: "turkey",
    name: "Sandwich - Turkey",
    icon: "/images/menu/icons/turkey.png",
  },
  {
    id: "signatures",
    name: "House Specials",
    icon: "/images/menu/icons/specials.png",
  },
  {
    id: "smokedbbq",
    name: "Smoked BBQ Stacks",
    icon: "/images/menu/icons/smokedmeat.png",
  },
  {
    id: "signatuemeats",
    name: "Signature Meats",
    icon: "/images/menu/icons/signaturemeats.png",
  },
  {
    id: "barbecuebakers",
    name: "Barbecue Bakers",
    icon: "/images/menu/icons/barbecuebeast.png",
  },
  { id: "sides", name: "Sides", icon: "/images/menu/icons/sides.png" },
  {
    id: "desserts",
    name: "Sweet Endings",
    icon: "/images/menu/icons/desserts.png",
  },
  { id: "drinks", name: "Drinks", icon: "/images/menu/icons/drinks.png" },
];

const menuItems: Record<
  string,
  {
    name: string;
    description: string;
    price: string;
    spicy: boolean;
    image: string;
    width: string;
    height: string;
    bestseller: boolean;
  }[]
> = {
  chicken: [
    {
      name: "CLASSIC CHICKEN SANDWICH",
      description: "Buttered buns, smoked chicken",
      price: "$16",
      spicy: true,
      image: "/images/menu/regular/chicken/classicchickensandwich.png",
      width: "75px",
      height: "100px",
      bestseller: true,
    },
    {
      name: "SWEET HEAT CHICKEN",
      description: "Pulled chicken, hot honey glaze, toping lettuce, mayo",
      price: "$22",
      spicy: true,
      image: "/images/chicken2.png",
      width: "100px",
      height: "100px",
      bestseller: false,
    },
    {
      name: "CRISPY KICK",
      description: "Chicken, buffalo + BBQ mix, ranch, cole slaw",
      price: "$18",
      spicy: false,
      image: "/images/chicken3.png",
      width: "100px",
      height: "100px",
      bestseller: false,
    },
    {
      name: "CRISPY CHICKEN CRUNCH",
      description: "chicken, comeback sauce, crispy onions, and pickles",
      price: "$18",
      spicy: false,
      image: "/images/ccc.png",
      width: "75px",
      height: "100px",
      bestseller: true,
    },
    {
      name: "SPICY CRISPY",
      description: "CRISPY CHICKEN, NASHVILLE,",
      price: "$16",
      spicy: true,
      image: "/images/chickencrispy.png",
      width: "100px",
      height: "100px",
      bestseller: false,
    },
    {
      name: "NASHVILLE-STYLE HOT CHICKEN",
      description: "Spicy, crispy fried chicken with bold Nashville heat",
      price: "$22",
      spicy: true,
      image: "/images/chicken5.png",
      width: "100px",
      height: "100px",
      bestseller: false,
    },
    {
      name: "SWEET N SPICY",
      description: "SPICY BBQ SAUCE, BUFFALO, HONEY, TOPING COLESLAW OPTIONAL",
      price: "$18",
      spicy: false,
      image: "/images/chicken6.png",
      width: "100px",
      height: "100px",
      bestseller: false,
    },
    {
      name: "SOUTHERN HEAT STACK",
      description: "COLESLAW, PICKLES, NASHVILLE HOT SAUCE, RANCH DRIZZLE",
      price: "$18",
      spicy: false,
      image: "/images/chicken7.png",
      width: "100px",
      height: "100px",
      bestseller: false,
    },
  ],
  turkey: [
    {
      name: "SWEET HEAT TURKEY",
      description: "Turkey, spicy BBQ, candied jalapeños, slaw",
      price: "$16",
      spicy: true,
      image: "/images/menu/regular/turkey/sweetheatturkey.png",
      width: "",
      height: "",
      bestseller: true,
    },
    {
      name: "TURKEY CLUB DELUXE",
      description: "Turkey, crispy bacon, green onions",
      price: "$22",
      spicy: true,
      image: "/images/menu/regular/turkey/turkeyclubdeluxe.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "SMOKEHOUSE TURKEY",
      description: "Smoked Fusion Special Turkish Sandwich",
      price: "$18",
      spicy: false,
      image: "/images/menu/regular/turkey/smokehouseturkey.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "BUFFALO GARDEN STACK",
      description:
        "Turkey sausage, buffalo sauce, lettuce, ranch, crispy onions",
      price: "$18",
      spicy: false,
      image: "/images/menu/regular/turkey/buffalogardenstack.png",
      width: "",
      height: "",
      bestseller: false,
    },
  ],
  signatures: [
    {
      name: "MEAT TORNADO",
      description: "Brisket + Pulled Pork + Sausage, BBQ sauce, slaw, cheddar",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/housespecials/meattornado.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "TEXAS BBQ BOMB",
      description: "Brisket + Sausage + Pork, cheddar, pickles, BBQ glaze",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/housespecials/texasbbqbomb.png",
      width: "",
      height: "",
      bestseller: true,
    },

    {
      name: "CARNIVORE CLUB",
      description: "Brisket, Turkey, Pork, cheddar, chipotle BBQ",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/housespecials/carnivoreclub.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "SIZZLIN’ SLAW STACK",
      description: "Pork + Chicken, slaw, hot honey, pickled onions",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/housespecials/sizzlinslawstack.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "BBQ CRUNCH WRAP",
      description: "Brisket + Sausage, Ranch, chedder cheese, crispy onions",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/housespecials/bbqcrunchwrap.png",
      width: "",
      height: "",
      bestseller: true,
    },

    {
      name: "SMOKED DUO MELT",
      description: "Brisket + Turkey, pepper jack, Mix of ranch and buffalo",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/housespecials/smokedduomelt.png",
      width: "",
      height: "",
      bestseller: true,
    },
    {
      name: "SMOKEHOUSE PHILLY",
      description: "Brisket + Chicken, grilled onions, chedder",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/housespecials/smokehousephilly.png",
      width: "",
      height: "",
      bestseller: false,
    },
  ],
  smokedbbq: [
    {
      name: "FRITO PIE SMASH STACK",
      description: "Brisket + Pulled Pork + Sausage, BBQ sauce, slaw, cheddar",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/smoked/fritopiesmashstack.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "THE MAGNIFICO",
      description: "Brisket + Sausage + Pork, cheddar, pickles, BBQ glaze",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/smoked/themagnifico.png",
      width: "",
      height: "",
      bestseller: true,
    },

    {
      name: "NACHO NACHO MAN",
      description: "Brisket, Turkey, Pork, cheddar, chipotle BBQ",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/smoked/nachonachoman.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "FRIED PICKLE BRISKET MELT",
      description: "Pork + Chicken, slaw, hot honey, pickled onions",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/smoked/friedpicklebrisketmelt.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "QUESO LAVA BOWL",
      description: "Brisket + Sausage, Ranch, chedder cheese, crispy onions",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/smoked/quesolavabowl.png",
      width: "",
      height: "",
      bestseller: true,
    },
  ],
  signatuemeats: [
    {
      name: "CHOPPED BRISKET",
      description: "Tender smoked brisket, chopped and seasoned to perfection",
      price: "$15",
      spicy: false,
      image: "/images/menu/regular/signatureitems/choppedbrisket.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "SLICED BRISKET",
      description:
        "Juicy slices of slow-smoked brisket with a rich smoky flavor",
      price: "$16",
      spicy: false,
      image: "/images/menu/regular/signatureitems/slicedbrisket.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "JALAPENO CHEDDAR SAUSAGE",
      description: "Spicy jalapeño sausage blended with sharp cheddar cheese",
      price: "$13",
      spicy: true,
      image: "/images/menu/regular/signatureitems/jalapenocheddarsausage.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "POLISH KIELBASA",
      description: "Traditional Polish sausage with a smoky and savory kick",
      price: "$13",
      spicy: false,
      image: "/images/menu/regular/signatureitems/polishkielbasa.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "SMOKED TURKEY BREAST",
      description: "Lean turkey breast smoked to juicy perfection",
      price: "$15",
      spicy: false,
      image: "/images/menu/regular/signatureitems/smokedturkeybreast.png",
      width: "",
      height: "",
      bestseller: false,
    },
  ],
  barbecuebakers: [
    {
      name: "THE BRISKET BOMB",
      description:
        "Slow-smoked brisket layered with melty cheese and savory BBQ sauce",
      price: "$18",
      spicy: false,
      image: "/images/menu/regular/barbecuebakers/thebrisketbomb.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "TEXAS MAC BAKER",
      description:
        "Baked potato loaded with mac & cheese, brisket, and BBQ drizzle",
      price: "$19",
      spicy: false,
      image: "/images/menu/regular/barbecuebakers/texasmacbaker.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "FRITO BAKER CRUNCH",
      description: "Crispy Fritos, smoky meat blend, cheese, and creamy sauce",
      price: "$16",
      spicy: false,
      image: "/images/menu/regular/barbecuebakers/fritobakercrunch.png",
      width: "",
      height: "",
      bestseller: true,
    },
    {
      name: "SMOKE HOUSE STACK",
      description: "Hearty smoked meats stacked on a buttered potato base",
      price: "$20",
      spicy: false,
      image: "/images/menu/regular/barbecuebakers/smokehousestack.png",
      width: "",
      height: "",
      bestseller: false,
    },

    {
      name: "SOUTHERN COMFORT STACK",
      description:
        "Southern-style BBQ meats with gravy, onions, and cheddar blend",
      price: "$20",
      spicy: false,
      image: "/images/menu/regular/barbecuebakers/southerncomfortstack.png",
      width: "",
      height: "",
      bestseller: false,
    },
  ],
  sides: [
    {
      name: "NACHOS",
      description: "Three-cheese blend with smoked gouda and crispy bacon bits",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/sides/nachos.png",
      width: "",
      height: "",
      bestseller: true,
    },
    {
      name: "FRIES",
      description:
        "Mexican-style corn with cotija cheese, lime, and chili powder",
      price: "$8",
      spicy: true,
      image: "/images/menu/regular/sides/fries.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "WEDGES",
      description: "Seasoned potato wedges with crispy golden texture",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/wedges.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "ONION RINGS",
      description: "Crispy golden onion rings served with house sauce",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/onionrings.png",
      width: "",
      height: "",
      bestseller: true,
    },
    {
      name: "OKRA",
      description: "Southern-style fried okra with seasoning",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/okra.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "HOUSE MADE PERI PERI WEDGES",
      description: "Spicy peri peri seasoned wedges made in-house",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/sides/housemadeperiperiwedges.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "MOZRILLA STICKS",
      description: "Fried mozzarella sticks with a gooey cheese center",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/mozrillasticks.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "BRISKIT CHILI",
      description: "Slow-cooked chili with tender brisket and rich spices",
      price: "$10",
      spicy: true,
      image: "/images/menu/regular/sides/briskitchili.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "MAC & CHEESE",
      description: "Creamy mac & cheese with a cheddar cheese blend",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/macandcheese.png",
      width: "",
      height: "",
      bestseller: true,
    },
    {
      name: "BARBECUE BEANS",
      description: "Sweet and smoky barbecue baked beans",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/barbecuebeans.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "MASHED POTATO",
      description: "Creamy mashed potatoes with butter and herbs",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/mashedpotato.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "COLESLAW",
      description: "Fresh coleslaw with a tangy and creamy dressing",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/coleslaw.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "POTATO SALAD",
      description: "Classic potato salad with herbs and creamy mayo",
      price: "$10",
      spicy: false,
      image: "/images/menu/regular/sides/potatosalad.png",
      width: "",
      height: "",
      bestseller: true,
    },
  ],
  desserts: [
    {
      name: "VANILLA GULAB JAMUN",
      description: "delicious Indian fusion dessert",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/vanillagulabjamun.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "KULFI MILK SHAKES",
      description: "delicious Indian fusion dessert",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/kulfimilkshakes.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "CHEESECAKE JAMUNS",
      description: "delicious Indian fusion dessert",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/cheesecakejamuns.png",
      width: "20",
      height: "20",
      bestseller: true,
    },
    {
      name: "MASALA CHAI  COTTA",
      description:
        "Heat cream with chai spices, sugar, and gelatin. Pour in cups, chill. Top with crumbs or honey.",
      price: "$12.99",
      spicy: false,
      image: "/images/menu/regular/desserts/masalachaipannacotta.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "CARDAMOM CUSTARD CUPS",
      description:
        "Mix eggs, milk, sugar, cardamom. Bake in ramekins. Chill and top with pistachios.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/cardamomcustardcups.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "NUTELLA TOAST BOMB",
      description:
        "Toast naan, spread Nutella, fold. Warm and top with nuts or cookie dust.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/nutellatoastbomb.png",
      width: "20",
      height: "20",
      bestseller: true,
    },
    {
      name: "RABRI SHOTS",
      description:
        "Reduce milk with sugar + cardamom or use rabri. Portion in cups. Garnish with nuts/jalebi.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/rabrishots.png",
      width: "20",
      height: "20",
      bestseller: true,
    },
    {
      name: "SAFFRON/ROSE MILK CAKE",
      description:
        "Bake sponge, poke holes, soak in flavored milk. Chill, cut, top with cream or nuts.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/saffronrosemilkcake.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "CHAI-SPICED DONUTS",
      description:
        "Toss mini donuts in chai sugar mix. Serve with caramel or condensed milk dip.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/chaispiceddonuts.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "FALOODA FLOAT",
      description:
        "Layer sabja seeds, rose syrup, milk, falooda sev. Add ice cream. Serve cold.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/faloodafloat.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "BISCOFF KULFI SLICE",
      description:
        "Slice kulfi, drizzle warm Biscoff. Top with biscuit or pistachio dust.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/biscoffkulfislice.png",
      width: "20",
      height: "20",
      bestseller: false,
    },

    {
      name: "MANGO MOUSSE CUPS",
      description:
        "Mix mango pulp, cream, condensed milk. Chill in cups. Top with mango or mint.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/mangomoussecups.png",
      width: "20",
      height: "20",
      bestseller: true,
    },
    {
      name: "DATE & NUT ENERGY BALLS",
      description:
        "Blend dates, nuts, cardamom. Roll into balls. Chill. Serve 2 per order.",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/dateandnutenergyballs.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "BANANA PUDDING",
      description: "delicious Indian fusion dessert",
      price: "$12",
      spicy: false,
      image: "/images/menu/regular/desserts/bananapudding.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
  ],
  drinks: [
    {
      name: "WATER BOTTLE",
      description: "",
      price: "$14",
      spicy: false,
      image: "/images/menu/regular/drinks/water.png",
      width: "20",
      height: "20",
      bestseller: false,
    },
    {
      name: "REDBULL",
      description: "give you wings",
      price: "$14",
      spicy: false,
      image: "/images/menu/regular/drinks/redbull.png",
      width: "",
      height: "",
      bestseller: true,
    },
    {
      name: "MONSTER",
      description: "",
      price: "$14",
      spicy: false,
      image: "/images/menu/regular/drinks/monster.png",
      width: "",
      height: "",
      bestseller: false,
    },

    {
      name: "THUMBSUP",
      description: "",
      price: "$14",
      spicy: false,
      image: "/images/menu/regular/drinks/thumbsup.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "SPRITE",
      description: "",
      price: "$14",
      spicy: false,
      image: "/images/menu/regular/drinks/sprite.png",
      width: "",
      height: "",
      bestseller: false,
    },
    {
      name: "FANTA",
      description: "",
      price: "$14",
      spicy: false,
      image: "/images/menu/regular/drinks/fanta.png",
      width: "",
      height: "",
      bestseller: false,
    },
  ],
};

const MenuPage: React.FC = () => {
  const [openCat, setOpenCat] = useState<string | null>(null);

  const toggleCat = (id: string) => {
    const wasOpen = openCat === id;
    setOpenCat((prev) => (prev === id ? null : id));

    // If opening a new category (not closing), scroll it into view
    if (!wasOpen) {
      setTimeout(() => {
        const element = document.getElementById(`category-${id}`);
        if (element) {
          const headerHeight = 120; // Account for fixed navigation header
          const elementTop = element.offsetTop - headerHeight;

          window.scrollTo({
            top: elementTop,
            behavior: "smooth",
          });
        }
      }, 350); // Wait for animation to complete (0.3s + buffer)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="select-none bg-gradient-to-br from-black via-gray-900 to-amber-900 text-amber-100"
    >
      <Navigation />
      <HalalToaster></HalalToaster>

      <section className="pt-28 md:pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-between items-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500 animate-typing-regular">
              Regular Menu
            </h2>

            <GloriaFoodWidget />
          </motion.div>

          <p className="text-base sm:text-lg leading-relaxed mb-12 text-gray-50">
            Each  item is a masterpiece, crafted to deliver an unforgettable
            culinary journey.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {categories.map(({ id, name, icon }) => {
              const isOpen = id === openCat;
              return (
                <div
                  key={id}
                  id={`category-${id}`}
                  className="border border-gray-600 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleCat(id)}
                    className="w-full flex items-center justify-between px-6 py-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={icon}
                        alt=""
                        className="w-20 h-10 mr-3 object-cover"
                      />
                      <span className="text-xl font-medium text-gray-300">
                        {name}
                      </span>
                    </div>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 text-amber-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 py-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {menuItems[id].map((item) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.3 }}
                              whileHover={{
                                y: -5,
                                x: 5,
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(245,158,11,0.25)",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                              className="relative border border-gray-600 flex items-center rounded-lg overflow-hidden bg-black/20 min-h-[84px] sm:min-h-[115px]"
                            >
                              {item.bestseller && (
                                <img
                                  src="/images/bestseller2.png"
                                  alt="Bestseller"
                                  className="absolute sm:top-4 top-1.5 right-2 w-16 h-20 sm:w-[80px] sm:h-[90px]"
                                />
                              )}

                              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-20 ml-2">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-contain"
                                  loading="lazy"
                                />
                              </div>

                              <div className="px-4 py-3 pr-20 sm:pr-24">
                                <h3 className="text-base sm:text-lg font-bold text-amber-200 leading-tight">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-gray-400">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Full Menu PDF button + text */}
          <div className="mt-16 text-center">
            <a
              href="/regular-menu.pdf"
              title="Regular Menu"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-amber-300 rounded-lg text-amber-300 hover:bg-amber-300 hover:text-gray-900 transition"
            >
              Full Menu
            </a>
            <p className="text-base text-gray-300 mt-8">
              Images used in the menu are AI-generated for better visual representation.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MenuPage;
