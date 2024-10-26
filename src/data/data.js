import p1 from "../assets/images/products_images/p1-lifting-serum.jpg";
import p2 from "../assets/images/products_images/p2-Sunscreen-50.jpg";
import p3 from "../assets/images/products_images/p3-BBOIL.jpg";
import p4 from "../assets/images/products_images/p4-Mini-Kit.jpg";


const products = [
    {id: 1, name: "LIFTING SERUM", type: "Sérum Tensor", description: "Proage | Todo tipo de piel",
        identifier: "lifting-serum-serum-tensor",
        category: "Proage", effects: ["Efecto Inmediato", "Reduce Arrugas", "Make Up Primer"],
        contains: null,
        usage: [{title: null, 
            steps: ["Realizar la rutina de cuidado facial habitual.", 
                "Aplicar y extender sobre cara, cuello y escote, incluyendo contorno de ojos y párpados antes del maquillaje."]}],
        ingredients: [{title: null, 
            list: ["• Tens’ Up™", "• Neosome EM Ultrafill", '• Partículas “Soft Focus”']}],
        price: 21.57, oldPrice: null, img: p1},





    {id: 2, name: "SUNSCREEN 50+", type: "Bloqueador Solar", description: "Protección | Todo tipo de piel",
        identifier: "sunscreen-50-bloqueador-solar-50",
        category: "Protección", effects: ["Acabado invisible", "Absorción inmediata", "Hidratante y Calmante", "Antiage"],
        contains: null,
        usage: [{title: null, 
            steps: ["Aplicar 20 minutos antes de la exposición solar. Cantidad adecuada: dos dedos de la mano.",
                "Aplicar una capa y extender sobre la superficie cutánea realizando ligeros masajes para que quede bien repartida sobre la superficie.",
                "Repetir la aplicación del producto cada 3 horas o después de cada baño, secado o actividad deportiva.",
            ]}],
        ingredients: [{title: null, 
            list:["• Resconcept 50+", "• Ácido Hialurónico", "• Aloe Vera Gel"]}],
        price: 24.64, oldPrice: null, img: p2},




        
    {id: 3, name: "BIO BEAUTY OIL", type: "Aceite Seco Hidratante", description: "Hidratación | Todo tipo de piel",
        identifier: "bio-beauty-oil-aceite-seco-hidratante",
        category: "Hidratación", effects: ["Hidrata, nutre y suaviza", "Cuerpo, rostro y cabello", "Absorción Inmediata"],
        contains: null,
        usage: [{title: "CORPORAL",
            steps:["Aplicar en todo el cuerpo para obtener una mayor hidratación, un efecto satinado y un olor muy agradable.",
                "Lo puedes añadir a la crema corporal para conseguir una mayor hidratación y suavidad.",
                "Como aromaterapia, puedes agregar unas gotas de BioFemme® Bio Beauty Oil al bañarte, y te transportarás a un momento de relajación.",
                "Utilízalo para suavizar la piel y calmar la irritación luego de la depilación.",
                "Para unas piernas suaves y satinadas, aplica BioFemme® Bio Beauty Oil con un ligero masaje que te ayudará a que luzcan fantásticas.",
            ],
        },
        {title: "CAPILAR",
            steps:["Como anti-frizz para el cabello, aplica un par de pulverizaciones de BioFemme® Bio Beauty Oil en la palma de la mano, frótalas y luego reparte el producto por el cabello, desde la mitad hacia las puntas.",
                "Utilizar una mínima cantidad para dejar el pelo flexible, darle brillo y con un delicado aroma de vainilla.",
                "Especialmente indicado en caso de cabello seco y opaco, ya que aporta una gran hidratación y brillo, mejorando el color, dejándolo Brillante y suave.",
                "Como tratamiento de prelavado de cabello, aplica el producto desde la mitad hacia las puntas y permítele actuar por media hora antes de lavarlo para obtener un cabello más suave y con brillo.",
            ],
        },
        {title: "FACIAL",
            steps:["Puedes utilizar BioFemme® Bio Beauty Oil después de tomar el sol, estar expuesta al cloro, aire acondicionado, para hidratarte y que tu rostro luzca resplandeciente y menos cansado.",
                "Para reafirmar y nutrir la piel en profundidad, aportar elasticidad, luminosidad, vitalidad y combatir el envejecimiento prematuro.",
                "Utilízalo como enriquecimiento con la crema hidratante facial para obtener un plus de hidratación, luminosidad, y suavidad.",
                "Puedes mezclarla con la mascarilla, incluso usarla antes de su aplicación, para potenciar los beneficios de la misma y obtener un rostro resplandeciente.",
                "Es un potente regenerador celular ideal para el tratamiento de pieles maduras, secas y sensibles."
            ],
        }],
        ingredients: [{title: null, 
            list: ["• Vitamina E", "• Aceite de Nuez de Brasil", "• Aceite de Chía", "• Aceite de Argán", "• Aceite de Abisinia", "• Aceite de Macadamia", "• Aceite de Borraja", "• Aceite de Camellia Japónica, Tsubaki"]}],
        price: 16.42, oldPrice: null, img: p3},




        
    {id: 4, name: "BIOFEMME MINI KIT", type: "Mini Sizes", description: "Sets | Piel mixta a grasa",
        identifier: "biofemme-mini-kit",
        category: "BFKits", effects: null, 
        contains: ["EYE MAKEUP REMOVER (Desmaquillante Bifásico de Ojos)", "EAU MICELLAIRE (Agua Micelar)", "GEL-CRÈME HYDRATANT (Gel-Crema Hidratante)"],
        usage: [{title: "EYE MAKEUP REMOVER",
            steps: ["Agitar bien antes de usar.",
                "Humedece un pad de algodón con EYE",
                "Aplicar sobre ojos y pestañas, retirando el maquillaje con movimientos circulares hacia fuera.",
                "No requiere enjuague, dejarlo aplicado para tratamiento fortalecedor de pestañas.",
                "Continuar la rutina de limpieza con EAU MICELLAIRE.",
            ],
        },
        {title: "EAU MICELLAIRE",
            steps: ["Humedecer un pad de algodón con EAU MICELLAIRE.",
                "Limpiar con cuidado las impurezas o eliminar el maquillaje del rostro con ligeros movimientos hacia el exterior del rostro.",
                "No requiere enjuague, dejarlo aplicado como tónico.",
            ],
        },
        {title: "GEL-CRÈME HYDRATANT",
            steps: ["Aplicar mañana y noche en cara, cuello, y escote GEL-CRÉME HYDRATANT después de limpiar profundamente la piel."],
        },
        ],
        ingredients: [{title: "EYE MAKEUP REMOVER", 
            list:["• Extracto de Camellia Japónica","• Matrikina y Vitamina B5"]},
            {title: "EAU MICELLAIRE", 
                list:["• Niacinamide PC", "• Agua de Azahar"]},
            {title: "GEL-CRÈME HYDRATANT", 
                list: ["• Epidermosil", "• Bicosome FS"]}],
        price: 15.00, oldPrice: 20.70, img: p4},
]

export default products;