import pr1 from '../../Assets/imgs/001.png'
import pr2 from '../../Assets/imgs/002.png'
import pr3 from '../../Assets/imgs/003.png'
import pr4 from '../../Assets/imgs/004.png'
import pr5 from '../../Assets/imgs/005.png'
import pr6 from '../../Assets/imgs/006.png'
import pr7 from '../../Assets/imgs/007.png'
import pr8 from '../../Assets/imgs/008.png'
import pr9 from '../../Assets/imgs/009.png'
import pr10 from '../../Assets/imgs/010.png'
import pr11 from '../../Assets/imgs/011.png'
import pr12 from '../../Assets/imgs/012.png'
import pr13 from '../../Assets/imgs/013.png'
import pr14 from '../../Assets/imgs/014.png'
import pr15 from '../../Assets/imgs/015.png'
import pr16 from '../../Assets/imgs/016.png'
import pr17 from '../../Assets/imgs/017.png'
import pr18 from '../../Assets/imgs/018.png'
import pr19 from '../../Assets/imgs/019.png'
import pr20 from '../../Assets/imgs/020.png'
import pr21 from '../../Assets/imgs/021.png'
import pr22 from '../../Assets/imgs/021.png'
import pr23 from '../../Assets/imgs/023.png'
import pr24 from '../../Assets/imgs/024.png'
import pr25 from '../../Assets/imgs/025.png'
import pr26 from '../../Assets/imgs/026.png'
import pr27 from '../../Assets/imgs/027.png'
import pr28 from '../../Assets/imgs/028.png'
import pr29 from '../../Assets/imgs/029.png'
import pr30 from '../../Assets/imgs/030.png'
import pr31 from '../../Assets/imgs/031.png'
import pr32 from '../../Assets/imgs/032.png'
import pr33 from '../../Assets/imgs/033.png'


import '@fortawesome/fontawesome-free/css/all.min.css';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Digital Stethoscope",
      description: "Advanced acoustic performance with digital amplification",
      icon: "fas fa-stethoscope",
      price: "$120",
      image: pr1,
      stripeUrl: "https://buy.stripe.com/cNi9AUc4oees7aC5eh7g400",
    },
    {
      id: 2,
      name: "Surgical Forceps",
      description: "Precision-crafted stainless steel instruments",
      icon: "fas fa-tools",
      price: "$35",
      image: pr2,
      stripeUrl: "https://buy.stripe.com/14AdRafgA5HWcuWdKN7g401",
    },
    {
      id: 3,
      name: "Blood Pressure Monitor",
      description: "Digital automatic with irregular heartbeat detection",
      icon: "fas fa-heartbeat",
      price: "$89",
      image: pr3,
      stripeUrl: "https://buy.stripe.com/6oUcN60lG3zO52u0Y17g402",
    },
    {
      id: 4,
      name: "Otoscope Set",
      description: "Professional diagnostic set with LED illumination",
      icon: "fas fa-ear-listen",
      price: "$150",
      image: pr4,
      stripeUrl: "https://buy.stripe.com/cNi8wQ8Scc6k7aCgWZ7g403",
    },
    {
      id: 5,
      name: "Thermometer",
      description: "Non-contact infrared thermometer for accurate readings",
      icon: "fas fa-thermometer-half",
      price: "$40",
      image: pr5,
      stripeUrl: "https://buy.stripe.com/eVq6oI0lG9YccuW2257g404",
    },
    {
      id: 6,
      name: "Surgical Scissors",
      description: "Sharp, durable scissors for various surgical procedures",
      icon: "fas fa-cut",
      price: "$25",
      image: pr6,
      stripeUrl: "https://buy.stripe.com/28E6oIc4o5HW8eG8qt7g405",
    },
    {
      id: 7,
      name: "Glucose Meter",
      description: "Portable device for quick and accurate sugar testing",
      icon: "fas fa-vial",
      price: "$55",
      image: pr7,
      stripeUrl: "https://buy.stripe.com/4gM4gAb0kfiweD43697g406",
    },
    {
      id: 8,
      name: "Wheelchair",
      description: "Lightweight, foldable wheelchair for daily use",
      icon: "fas fa-wheelchair",
      price: "$350",
      image: pr8,
      stripeUrl: "https://buy.stripe.com/00w4gAecw1rG0Me3697g407",
    },
    {
      id: 9,
      name: "Syringe Pack",
      description: "Disposable sterile syringes (100 pcs)",
      icon: "fas fa-syringe",
      price: "$60",
      image: pr9,
      stripeUrl: "https://buy.stripe.com/9B6cN63xS8U8amOcGJ7g408",
    },
    {
      id: 10,
      name: "First Aid Kit",
      description: "Complete emergency medical supplies kit",
      icon: "fas fa-briefcase-medical",
      price: "$75",
      image: pr10,
      stripeUrl: "https://buy.stripe.com/14A7sMfgA0nC2UmcGJ7g409",
    },
    {
      id: 11,
      name: "Medical Gloves",
      description: "Disposable latex gloves for safe examinations",
      icon: "fas fa-hand-holding-medical",
      price: "$20",
      image: pr11,
      stripeUrl: "https://buy.stripe.com/dRm5kE9WggmA0Me8qt7g40a",
    },
    {
      id: 12,
      name: "Surgical Mask Pack",
      description: "Protective 3-layer masks (50 pcs)",
      icon: "fas fa-head-side-mask",
      price: "$15",
      image: pr12,
      stripeUrl: "https://buy.stripe.com/28E28secw1rGcuW4ad7g40b",
    },
    {
      id: 13,
      name: "Defibrillator",
      description: "Portable AED for emergency cardiac care",
      icon: "fas fa-bolt",
      price: "$1200",
      image: pr13,
      stripeUrl: "https://buy.stripe.com/8x26oI0lG8U8dz0bCF7g40c",
    },
    {
      id: 14,
      name: "Crutches",
      description: "Adjustable lightweight aluminum crutches",
      icon: "fas fa-crutch",
      price: "$80",
      image: pr14,
      stripeUrl: "https://buy.stripe.com/3cIbJ2ecw2vKdz00Y17g40d",
    },
    {
      id: 15,
      name: "Medical Bed",
      description: "Adjustable hospital bed with remote control",
      icon: "fas fa-bed-pulse",
      price: "$950",
      image: pr15,
      stripeUrl: "https://buy.stripe.com/8x2aEYb0kc6kfH8dKN7g40e",
    },
    {
      id: 16,
      name: "X-Ray Machine",
      description: "High-quality digital imaging system",
      icon: "fas fa-x-ray",
      price: "$5000",
      image: pr16,
      stripeUrl: "https://buy.stripe.com/9B68wQ3xS5HWcuW9ux7g40f",
    },
    {
      id: 17,
      name: "Ultrasound Device",
      description: "Portable ultrasound scanner with 3D imaging",
      icon: "fas fa-wave-square",
      price: "$3200",
      image: pr17,
      stripeUrl: "https://buy.stripe.com/3cI8wQ8Sc2vKgLc9ux7g40g",
    },
    {
      id: 18,
      name: "Medical Lamp",
      description: "Adjustable LED lamp for surgeries and checkups",
      icon: "fas fa-lightbulb",
      price: "$140",
      image: pr18,
      stripeUrl: "https://buy.stripe.com/eVq00kgkEc6kfH8eOR7g40h",
    },
    {
      id: 19,
      name: "Sterilizer",
      description: "High-pressure autoclave for instrument sterilization",
      icon: "fas fa-shower",
      price: "$600",
      image: pr19,
      stripeUrl: "https://buy.stripe.com/6oUcN6b0k5HWeD4gWZ7g40i",
    },
    {
      id: 20,
      name: "Patient Monitor",
      description: "Multi-parameter monitor for vital signs",
      icon: "fas fa-desktop",
      price: "$2200",
      image: pr20,
      stripeUrl: "https://buy.stripe.com/28E14o4BW5HWeD42257g40j",
    },
    {
      id: 21,
      name: "Electrocardiograph (ECG Machine)",
      description: "Advanced device to record the electrical activity of the heart",
      icon: "fas fa-heart-pulse",
      price: "$2500",
      image: pr21,
      stripeUrl: "https://buy.stripe.com/eVq5kE4BW5HW8eG9ux7g40k",
    },
    {
      id: 22,
      name: "Surgical Microscope",
      description: "High-precision microscope for neurosurgery",
      icon: "fas fa-microscope",
      price: "$7800",
      image: pr22,
      stripeUrl: "https://buy.stripe.com/14A4gA0lG3zO52uayB7g40l",
    },
    {
    id: 36,
    name: "Ophthalmic Laser System",
    description: "Excimer laser for advanced eye surgeries",
    icon: "fas fa-eye-dropper",
    price: "$7700",
    image: pr23,
      stripeUrl: "https://buy.stripe.com/9B67sMgkEgmAbqS2257g40m",
    },
    {
    id: 39,
    name: "Centrifuge Machine",
    description: "High-speed centrifuge for medical laboratories",
    icon: "fas fa-atom",
    price: "$2600",
    image: pr24,
      stripeUrl: "https://buy.stripe.com/dRm3cw6K40nCfH8gWZ7g40n",
    },
    {
  id: 81,
  name: "Mid-Range Ultrasound System",
  description: "Full-featured ultrasound unit (new or certified-refurbished)",
  icon: "fas fa-wave-square",
  price: "$18 000",
  image: pr31,
      stripeUrl: "https://buy.stripe.com/8x23cw0lGdao1Qi3697g40o",
},

    {
    id: 33,
    name: "Laboratory Analyzer",
    description: "Automated blood and urine test analyzer",
    icon: "fas fa-vials",
    price: "$5200",
    image: pr25,
      stripeUrl: "https://buy.stripe.com/3cI8wQ8Sc7Q41QigWZ7g40p",
    },
    {
    id: 41,
    name: "Infusion Pump System",
    description: "Advanced volumetric infusion pump for precise fluid delivery",
    icon: "fas fa-syringe",
    price: "$3100",
    image: pr26,
      stripeUrl: "https://buy.stripe.com/14A00kb0k4DScuW8qt7g40q",
    },
    {
  id: 26,
  name: "ENT Treatment Unit",
  description: "Complete workstation for ear, nose and throat procedures",
  icon: "fas fa-head-side-mask",
  price: "$6800",
  image: pr27,
      stripeUrl: "https://buy.stripe.com/eVqbJ2ecwgmA8eGgWZ7g40r",
},
    {
    id: 42,
    name: "C-Arm X-Ray Machine",
    description: "Mobile imaging system for surgical procedures",
    icon: "fas fa-x-ray",
    price: "$9200",
    image: pr28,
      stripeUrl: "https://buy.stripe.com/14A7sM9Wg7Q4fH8fSV7g40s",
    },
    {
  id: 85,
  name: "Anesthesia Workstation",
  description: "State-of-the-art anesthesia delivery system",
  icon: "fas fa-procedures",
  price: "$20 500",
  image: pr33,
      stripeUrl: "https://buy.stripe.com/9B6fZi2tOees8eG2257g40t",
},
    {
  id: 63,
  name: "Portable Ultrasound Device",
  description: "Lightweight ultrasound scanner with color Doppler",
  icon: "fas fa-wave-square",
  price: "$5800",
  image: pr29,
      stripeUrl: "https://buy.stripe.com/bJe5kEecw5HW3YqayB7g40u",
},
{
  id: 71,
  name: "Digital X-Ray Viewer",
  description: "Wall-mounted medical X-ray film viewer with LED backlight",
  icon: "fas fa-x-ray",
  price: "$3400",
  image: pr30,
      stripeUrl: "https://buy.stripe.com/dRm3cw1pKb2gbqS6il7g40v",
},

{
  id: 83,
  name: "ICU Ventilator (Advanced)",
  description: "Modern ventilator for intensive care units",
  icon: "fas fa-lungs",
  price: "$17 000",
  image: pr32,
      stripeUrl: "https://buy.stripe.com/fZudRa9Wg7Q4cuWdKN7g40w",
},

  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-icon">
                <i className={product.icon}></i>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">{product.price}</p>
               <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  window.location.href = product.stripeUrl;
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
