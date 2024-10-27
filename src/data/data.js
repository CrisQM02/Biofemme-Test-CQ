import p1 from "../assets/images/products_images/p1-lifting-serum.jpg";
import p2 from "../assets/images/products_images/p2-Sunscreen-50.jpg";
import p3 from "../assets/images/products_images/p3-BBOIL.jpg";
import p4 from "../assets/images/products_images/p4-Mini-Kit.jpg";
import p5 from "../assets/images/products_images/p5-Tonique-Revitalisant-Spray.jpg";

import g1 from "../assets/images/products_gifs/g1-serum-tensor.gif";
import g3 from "../assets/images/products_gifs/g3-bio-beauty-oil.gif";
import g5 from "../assets/images/products_gifs/g5-tonique-revitalisant-spray.gif";


const products = [
    {id: 1, name: "LIFTING SERUM", type: "Sérum Tensor", description: "Proage | Todo tipo de piel",
        identifier: "lifting-serum-serum-tensor",
        category: {name:"Proage", url:"https://compras.biofemme.com.ec/categoria-producto/productos/proage/"}, effects: ["Efecto Inmediato", "Reduce Arrugas", "Make Up Primer"],
        contains: null,
        usage: [{title: null, 
            steps: ["Realizar la rutina de cuidado facial habitual.", 
                "Aplicar y extender sobre cara, cuello y escote, incluyendo contorno de ojos y párpados antes del maquillaje."]}],
        ingredients: [{title: null, 
            list: ["• Tens’ Up™", "• Neosome EM Ultrafill", '• Partículas “Soft Focus”']}],
        price: 21.57, oldPrice: null, img: p1, gif: g1, youtube: null, useInfo:["SPA"],
        properties: "BioFemme® Lifting Sérum es una fórmula innovadora que proporciona a la piel, instantáneamente, un efecto lifting y antiarrugas, otorgándole una textura uniforme que permita la aplicación del maquillaje en las mejores condiciones, y que este dure más tiempo.",
        howIngAct:[{ingredient:"TENS’UP™", info:"Formado por la combinación de dos extractos vegetales, Achicoria y Tara, que juntos forman una matriz tridimensional sobre la piel aportándole efecto tensor inmediato. La Achicoria es originaria de Europa y de regiones templadas de Asia. Esta planta fue utilizada por los egipcios, los griegos y los romanos como planta medicinal y, además, en la Edad Media se la consideraba mágica. La Tara, por otra parte, es nativa de Perú pero se encuentra ampliamente distribuida en América Latina. Crece de manera silvestre en la altitud de los bosques y valles andinos, entre 1.000 y 3.100 metros de altura. Las moléculas que se extraen de estas dos plantas forman una red tridimensional sobre la piel que alisa la superficie cutánea proporcionando un aspecto terso y luminoso de forma inmediata."},
            {ingredient:"NEOSOME EM ULTRAFILL", info:"Formado por Trehalosa y Trimetilglicina encapsulados en liposomas. Su mecanismo de acción es único y consiste en aumentar la flexibilidad de las membranas celulares y el contenido de agua en el interior de las células, para que éstas aumenten de volumen y se consiga un efecto de relleno de arrugas y aumento de firmeza en tan sólo unos minutos."},
            {ingredient:'PARTÍCULAS “SOFT FOCUS”', info:"Estas partículas son capaces de difuminar ópticamente las arrugas y las líneas de expresión. Las arrugas son perceptibles a simple vista por el contraste entre claros y oscuros que se acentúa con cualquier pliegue de la piel, por sutil que sea. Para eliminar las zonas oscuras se introducen estas pequeñas partículas esféricas que dispersan la luz, consiguiendo difuminar las arrugas y enmascarar las imperfecciones."}
        ]
    },




    {id: 2, name: "SUNSCREEN 50+", type: "Bloqueador Solar", description: "Protección | Todo tipo de piel",
        identifier: "sunscreen-50-bloqueador-solar-50",
        category: {name: "Protección", url: "https://compras.biofemme.com.ec/categoria-producto/productos/proteccion/"}, effects: ["Acabado invisible", "Absorción inmediata", "Hidratante y Calmante", "Antiage"],
        contains: null,
        usage: [{title: null, 
            steps: ["Aplicar 20 minutos antes de la exposición solar. Cantidad adecuada: dos dedos de la mano.",
                "Aplicar una capa y extender sobre la superficie cutánea realizando ligeros masajes para que quede bien repartida sobre la superficie.",
                "Repetir la aplicación del producto cada 3 horas o después de cada baño, secado o actividad deportiva.",
            ]}],
        ingredients: [{title: null, 
            list:["• Resconcept 50+", "• Ácido Hialurónico", "• Aloe Vera Gel"]}],
        price: 24.64, oldPrice: null, img: p2, gif: null, youtube: "https://www.youtube.com/watch?v=R8vBSJnnRWM", useInfo:null,
        properties: "BioFemme® Sunscreen 50+ es eficaz y seguro para la piel frente a las radiaciones solares. Tiene alta protección y efecto hidratante, ideal para prevenir el envejecimiento cutáneo ocasionado por el sol. Además, tiene textura fluida, tacto suave y sedoso, es de absorción inmediata y de efecto invisible y matificante.\nSu Ingrediente Bio-Activo de alta tecnología, Resconcept Sun 50+, proporciona un alto efecto filtrante de las radiaciones solares UVB y UVA que evita las arrugas y el envejecimiento cutáneo debido al sol.\nBioFemme® Sunscreen 50+ es resistente al agua y contiene Ingredientes Bio-Activos en altas concentraciones: Ácido Hialurónico que lo convierte en hidratante y proage, y, Aloe Vera Gel, activo refrescante, calmante, anti-irritante, anti-inflamatorio y protector cutáneo.",
        howIngAct: [{ingredient:"RESCONCEPT 50+", info:"Es el principal componente de BIOFEMME® SUNSCREEN. Este Ingrediente Bio-Activo de alta tecnología tiene una alta concentración de filtros solares que se potencian entre si para obtener un alto efecto filtrante de las radiaciones UV y altos niveles de protección solar. Consigue que durante las exposiciones solares no se alteren las estructuras de la piel, no se formen eritema, ni inflamación de las células de la piel, ni deterioro de las fibras de colágeno y elastina, evitándose así arrugas y envejecimiento cutáneo debido al sol. Resconcept 50+ es un conjunto de filtros solares libre de aquellos considerados dañinos para los arrecifes de coral. ResPharma, Innovatice Ingredients, Saving Reef to Save the Planet."},
            {ingredient:"ÁCIDO HIALURÓNICO", info:"El Ácido Hialurónico incorporado en BIOFEMME® SUNSCREEN proporciona una hidratación prolongada en la piel que, con el contacto solar, se ha podido deshidratar. Gracias a este Ingrediente Bio-Activo Sunscreen 50+ tiene efecto antiaging ya que es el componente imprescindible para evitar el envejecimiento cutáneo, además que consigue que quede un tacto suave y sedoso sobre la superficie de la piel."},
            {ingredient:"ALOE VERA GEL", info:"El Aloe Vera Gel es un líquido obtenido del corazón gelatinoso de las hojas de Aloe Vera, donde se almacena sus reservas de agua. Es natural y tan conocido como eficaz ya que evita la deshidratación durante la exposición solar, además es un buen hidratante de la piel, refrescante, calmante, anti-irritante, protector cutáneo y activo antienvejecimiento. Esta Ingrediente Bio-Activo actúa como anti-inflamatorio para pieles sensibles y/o irritadas."}
        ]
    },




        
    {id: 3, name: "BIO BEAUTY OIL", type: "Aceite Seco Hidratante", description: "Hidratación | Todo tipo de piel",
        identifier: "bio-beauty-oil-aceite-seco-hidratante",
        category: {name:"Hidratación", url:"https://compras.biofemme.com.ec/categoria-producto/productos/hidratacion/"}, effects: ["Hidrata, nutre y suaviza", "Cuerpo, rostro y cabello", "Absorción Inmediata"],
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
        price: 16.42, oldPrice: null, img: p3, gif:g3, youtube: null, useInfo:["SPA","LOTION","HAIR"],
        properties: "Para la creación de BioFemme® Bio Beauty Oil se han unido la vitamina E y siete aceites procedentes de cinco continentes: Aceite de Nuez de Brasil y Chía (América), Argán y Abisinia (África), Macadamia (Oceanía), Borraja (Europa), y Camellia Japónica (Asia). Su tacto satinado y no graso es como seda para piel y además aporta brillo y flexibilidad al cabello. En un solo gesto hidrata, nutre y embellece. Su delicado aroma con gotas de vainilla te aleja de la rutina diaria y te lleva a un momento exclusivo de relajación y comodidad.",
        howIngAct:[{ingredient:"VITAMINA E", info:"La vitamina E es un potente antioxidante. Neutraliza los radicales libres y tiene la capacidad de proteger las membranas celulares frente a la oxidación de los lípidos. Además, posee cualidades hidratantes y cicatrizantes."},
            {ingredient:"ACEITE DE NUEZ DE BRASIL", info:"La Nuez de Brasil es procedente de América del Sur (Venezuela, Brasil, Colombia, Perú y Bolivia) y contiene altos porcentajes de Selenio, un poderoso antioxidante. El aceite que se obtiene de estos frutos es profundamente nutritivo, hidratante, y de rápida absorción y revitaliza la piel seca y el cabello."},
            {ingredient:"ACEITE DE CHÍA", info:"la elaboración de ungüentos cosméticos ya que hidrata, funciona como barrera protectora, y alivia la comezón de la piel. Además, al cabello le otorga brillo, lo repara, evita quebraduras, y es suave para el cuero cabelludo."},
            {ingredient:"ACEITE DE ABISINIA", info:"La Abisinia es una planta nativa de las montañas del África tropical. Ofrece múltiples beneficios para el cabello: le otorga brillo, mejora su manejo, lo deja sintiéndose suave y ligero sin hacerlo graso o pesado, reduce el frizz, y evita que se quiebre. También nutre la piel y le da suavidad."},
            {ingredient:"ACEITE DE MACADAMIA", info:"El árbol de Macadamia es originario de Australia. El aceite se extrae de las nueces y es único ya que contiene altos porcentajes de Ácido Palmitoleico que por sus propiedades antioxidantes ayuda a controlar el envejecimiento y la sequedad de la piel. Es un aceite altamente emoliente y un buen agente acondicionador para pieles secas y maduras. Se absorbe con facilidad en la piel y promueve la flexibilidad."},
            {ingredient:"ACEITE DE BORRAJA", info:"La borraja es procedente de la región mediterránea. El aceite que se extrae de las semillas de esta planta que se ha utilizado desde hace miles de años. Recientemente el aceite de Borraja ha causado una revolución en las terapias naturales ya que es una de las fuentes más ricas de ácido Gamma Linoleico, un ácido graso que estimula el proceso de regeneración de la piel."},
            {ingredient:"ACEITE DE CAMELLIA JAPÓNICA, TSUBAKI", info:"Este aceite precioso es extraído de la isla de Jeju en Asia, la cual ha sido designada como una de las siete maravillas de la naturaleza. Forma parte del ritual de belleza favorito de las mujeres japonesas y las geishas y lo utilizaban para nutrir su piel y su cabello. Posee muy alto contenido de ácido graso Omega 9 y de Escualeno, componente natural de la piel, que ayudan a reforzar la barrera cutánea. Para la piel es antioxidante, calmante, anti-arrugas, humectante, reparador de la barrera, y nutritivo. Al cabello lo repara, le añade brillo, y es suave para el cuero cabelludo. Mantiene el pelo y la piel en un nivel de humectación óptimo y los protege de la contaminación y del frío."}
        ]
    },




        
    {id: 4, name: "BIOFEMME MINI KIT", type: "Mini Sizes", description: "Sets | Piel mixta a grasa",
        identifier: "biofemme-mini-kit",
        category: {name:"BFKits", url:"https://compras.biofemme.com.ec/categoria-producto/bfkits/"}, effects: null, 
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
        price: 15.00, oldPrice: 20.70, img: p4, gif:null, youtube:"https://youtu.be/fo4BIp_rQn0", useInfo:null,
        properties: "Descubre las propiedades de cada producto que contiene nuestro BioFemme Mini Kit:\n• BioFemme® Eye Makeup Remover elimina suavemente el maquillaje de ojos, incluso las fórmulas resistentes al agua. Es de sensación no grasa y tiene un beneficio plus, fortalece y ayuda a que crezcan las pestañas.\n• BioFemme® Eau Micellaire es un agua limpiadora única con propiedades extraordinarias que elimina todo tipo de impurezas y restos de maquillaje sin necesidad de enjuague posterior.\nContiene activos, entre ellos Niacinamide PC, que hacen que su uso continuo mejore el aspecto general de la piel, ayudando a aclarar las manchas, unificando el tono de la piel, y dándole luminosidad. También mejora las imperfecciones cutáneas, la elasticidad y las arrugas.\nContiene Agua de Azahar, poderoso tonificante y purificante. Está indicado para todo tipo de piel, incluso las más delicadas. Evita el envejecimiento y además, en pieles grasas, regula la secreción sebácea. Deja la piel completamente limpia, suave, hidratada y preparada para cualquier tratamiento posterior.\n• BioFemme® Gel Crème Hydratante proporciona una sensación de frescura e hidratación inmediata y duradera. Su acabo sedoso mantiene la piel matificada y libre de grasa durante el día. Su fórmula única contiene activos de tamaño nanométrico y Ácido Hialurónico, capaces de penetrar entre las células de la piel y actuar en profundidad, estimulando la producción natural de colágeno y consiguiendo combatir las arrugar y prevenir su aparición.",
        howIngAct:[{ingredient:"EXTRACTO DE CAMELLIA JAPÓNICA", info:"Es un extracto natural que se obtiene de la isla de Jeju, en Asia, la cual está designada como una de las siete maravillas de la naturaleza. Tiene una gran eficacia como anti-oxidante, anti-inflamatorio e hidratante."},
            {ingredient:"MATRIKINA Y VITAMINA B5", info:"Estimulan el crecimiento de las pestañas y aseguran un anclaje óptimo, aumentando la síntesis y la organización de las moléculas responsables de su adhesión. Así mismo, actúan como acondicionador, ayudando a que las pestañas luzcan más largas, otorgándoles mayor volumen y fortaleza."},
            {ingredient:"NIACINAMIDE PC", info:"El uso continuo de su activo Niacinamide PC, mejora el aspecto general de la piel ya que activa la formación de colágeno, aclara las manchas, unifica su tono y le da luminosidad. Mejora las imperfecciones cutáneas (incluso en pieles con tendencia acnéica), dejándola hidratada y con un aspecto saludable. Posee efectos antiacné ya que reduce la secreción de sebo."},
            {ingredient:"AGUA DE AZAHAR", info:"Contiene el Agua de Azahar, Orange Blossom Rain. Este se obtiene de las flores del naranjo amargo denominado Citrus Aurantium de variedad amara. Gracias a sus activos, entre ellos flavonoides, aminoácidos y el aceite esencial de Neroli, es un poderoso tonificante y purificante indicado para todo tipo de piel, incluso las más delicadas. Evita el envejecimiento, mejora la elasticidad de la piel, estimula su renovación celular y suaviza las arrugas y cicatrices."},
            {ingredient:"ÁCIDO HIALURÓNICO", info:"El Ácido Hialurónico tiene como función mantener un nivel óptimo de hidratación en la piel, previniendo la aparición de arrugas y de los primeros signos de edad. Este activo tiene una gran capacidad de penetración gracias a su bajo peso molecular y a que se encuentra asociado al Silicio Orgánico, el cual tiene gran afinidad con la dermis y que arrastra al Ácido Hialurónico hasta las capas más profundas de la piel. A su vez, el Silicio Orgánico también tiene importantes beneficios ya que estimula la producción de Colágeno y la producción y supervivencia de las células de la piel."},
            {ingredient:"BICOSOME FS", info:"Bicosome® FS es un activo inteligente, biocompatible, y de tamaño nanométrico, con una estructura capaz de penetrar entre las células de la piel y quedar fijado en el lugar en que se lo necesita. Su acción de larga duración rellena la matriz lipídica y refuerza la función barrera de la piel para que esta se mantenga perfectamente hidratada durante todo el día."},
            {ingredient:"EXTRACTO DE PISTACIA LENTISCUS", info:"El extracto de Pistacia Lentiscus se obtiene de un árbol que crece en la isla griega de Chios. Afina los poros gracias a su efecto astringente y purifica la piel por medio de su acción anti-bacterial, anti-fúngica, anti-inflamatoria y anti-oxidante. Es anti-comedogénico y tiene efecto seborregulador, lo cual se debe a que inhibe la formación de la Enzima 5ª Reductasa, que es clave en la formación del sebo. Al reducirse la Secreción Sebácea se disminuyen las imperfecciones de la piel, como por ejemplo los Comedones y los Microquistes, mediante lo cual se obtiene una piel suave y matificada."},
            {ingredient:"EXTRACTO DE AGAVE TEQUILANA", info:"El Agave Tequilana es originaria de la región de Jalisco en México. Es una planta capaz de crecer donde ninguna otra puede sobrevivir, y de transformar la energía solar en Inulina, molécula que forma un film protector en la piel, el cual le dota de un acabado aterciopelado y mate que dura todo el día."}
        ]
    },




        {id: 5, name: "TONIQUE REVITALISANT", type: "Tónico Revitalizante", description: "Limpieza | Todo tipo de piel",
            identifier: "tonique-revitalisant-tonico-revitalizante",
            category: {name:"Limpieza", url: "https://compras.biofemme.com.ec/categoria-producto/productos/limpieza/"}, effects: ["Limpia profundamente", "Unifica el tono de la piel", "Mejora la elasticidad", "Energizante y antioxidante"],
            contains: null,
            usage: [{title: null, 
                steps: ["Humedecer un algodón con TONIQUE REVITALISANT o directamente sobre las manos limpias.", 
                    "Aplicarlo sobre la cara y el cuello limpio, por la mañana y la noche dando suaves toquecitos.",
                    "No requiere enjuague."]}],
            ingredients: [{title: null, 
                list: ["• Creatina", "• Oligovita", "• Extracto de Edelweiss"]}],
            price: 18.16, oldPrice: null, img: p5, gif: g5, youtube: null, useInfo:["SPA"],
            properties: "BioFemme® Tonique Revitalisant equilibra el pH de tu piel y te aporta una sensación de frescura al completar tu rutina de limpieza diaria. Su contenido en extracto de Maca aporta oligoelementos (minerales) de origen vegetal, que ayudan a mejorar el tono y la elasticidad de tu rostro. Además contiene Edelweiss de los Alpes suizos y Jengibre, extractos con propiedades antioxidantes. Finalmente, está enriquecido con Creatina, activo que aumenta la energía celular para que tu piel sintetice enzimas y proteínas como el Colágeno y la Elastina. ¡Ayuda a proteger tu piel frente al envejecimiento prematuro con esta fórmula única!",
            howIngAct: [{ingredient:"CREATINA", info:"Con el envejecimiento se produce un decrecimiento de la energía celular. La Creatina actúa mejorando la actividad de la mitocondria, estación de energía de la célula, ayudando a sintetizar proteínas elementales como Colágeno y Elastina, estimulando las enzimas responsables de los sistemas de protección ante el envejecimiento prematuro y el estrés oxidativo."},
                {ingredient:"EXTRACTO DE MACA", info:"Facilita la oxigenación del tejido con una alta concentración de calcio y zinc, elementos necesarios para la síntesis de Colágeno y Elastina, lo que contribuye a una mejora del tono y la elasticidad del rostro."},
                {ingredient:"EXTRACTO DE JENGIBRE", info:"Tiene propiedades anti-inflamatorias y anti-envejecimiento."},
                {ingredient:"L-ARGENINA", info:"Contribuye a reparar la piel, promoviendo la síntesis de Colágeno."},
                {ingredient:"EXTRACTO DE EDELWEISS", info:"De la flor de Edelweiss, que crece en los Alpes Suizos, se obtiene un extracto que es antioxidante, antiinflamatorio, relajante, purificante, ayuda a proteger la piel de la radiación solar (absorbe los rayos UV), contribuye a ralentizar el envejecimiento de la piel, estimula la regeneración celular y aporta hidratación, elasticidad y frescura."},
            ],
        },
]

export default products;