export const SITE_INFO = {
  name: 'FORVI',
  legalName: 'FORVI SpA',
  domain: 'www.forvi.cl',
  url: 'https://www.forvi.cl',
  slogan: 'Transformamos datos en conocimiento',
  heroSubheadline: 'Análisis cuantitativo, cualitativo y multimodal para tu investigación, con resultados claros y acompañamiento personalizado',
  email: 'contacto@forvi.cl',
  phoneDisplay: '+56 9 3577 9373',
  phoneRaw: '56935779373',
  whatsappUrl: `https://wa.me/56935779373?text=${encodeURIComponent('Hola FORVI, me gustaría solicitar una cotización para el análisis de mi proyecto.')}`,
  socials: {
    instagram: 'https://www.instagram.com/forvi.cl/',
    facebook: 'https://www.facebook.com/forvi.cl/',
  },
  location: 'Santiago, Chile',
};

export const ABOUT_FORVI = {
  eyebrow: '04 / SOBRE FORVI',
  name: 'FORVI',
  legalName: 'FORVI SpA',
  role: 'Consultoría en análisis de datos y metodología de investigación',
  tagline: 'Rigor analítico, criterio metodológico y acompañamiento técnico para resolver preguntas complejas de investigación.',
  summary: 'FORVI conecta preguntas de investigación con métodos de análisis rigurosos y una comprensión integral del contexto, para que los resultados se puedan interpretar, discutir y utilizar con fundamento.',
  commitments: [
    'Rigor metodológico y reproducibilidad de resultados',
    'Confidencialidad absoluta de bases de datos y antecedentes',
    'Entregables claros, estructurados y con código documentado',
    'Interpretación fundamentada de modelos y hallazgos estadísticos',
    'Respeto irrestricto a los estándares éticos e institucionales',
  ],
};


export const FAQ_ITEMS = [
  {
    question: '¿Qué tipos de datos o fuentes pueden analizar?',
    answer: 'Encuestas, bases de datos, documentos, texto, imágenes y audio. Revisamos su calidad, formato y pertinencia para tus objetivos antes de proponer un análisis. Podemos combinar fuentes cuando el enfoque y los datos lo permiten.',
  },
  {
    question: '¿Cómo se cotiza el análisis?',
    answer: 'La cotización es personalizada. Consideramos los objetivos, el volumen y estado de los datos, los métodos pertinentes y los entregables. Antes de empezar acordamos alcance, precio y plazo. No todos los proyectos requieren todas las técnicas.',
  },
  {
    question: '¿Qué información necesitan para evaluar mi proyecto?',
    answer: 'Tu objetivo o pregunta de investigación, el tipo y volumen aproximado de datos, la etapa en que estás y el plazo que tienes en mente. Basta una descripción general para el primer contacto; no envíes archivos sensibles ni información identificable de participantes, pacientes o terceros.',
  },
  {
    question: '¿Cuánto tarda un proyecto?',
    answer: 'El plazo se define para cada proyecto después de revisar el alcance y la disponibilidad de los datos. Cuéntanos tu fecha deseada para evaluar su viabilidad. Si cambian los objetivos o se incorporan nuevos datos, reevaluamos el trabajo y el plazo.',
  },
  {
    question: '¿Me ayudan a entender los resultados?',
    answer: 'Sí. La propuesta contempla la interpretación del análisis y una sesión explicativa para revisar resultados, supuestos y limitaciones. Incluimos una ronda de ajustes dentro del alcance acordado. La colaboración es técnica y transparente: tú mantienes la autoría de tu investigación y debes seguir las reglas de tu institución.',
  },
  {
    question: '¿Cómo se maneja la confidencialidad?',
    answer: 'Antes de compartir datos, acordamos qué información es necesaria, quién tendrá acceso, el medio de transferencia y las condiciones de uso y conservación. Si corresponde, evaluamos un acuerdo de confidencialidad. No envíes datos sensibles en el contacto inicial; la desidentificación y los permisos de uso deben revisarse según cada proyecto.',
  },
];

export const HERO_EXAMPLES = [
  {
    id: 'cuantitativo', label: 'Cuantitativo', icon: 'BarChart3',
    title: 'De tus preguntas a la evidencia.',
    subtitle: 'Un recorrido posible, según tus objetivos y datos.',
    source: 'Encuestas y bases de datos', sourceDetail: 'Variables, observaciones y contexto',
    core: 'Análisis estadístico', detail: 'Calidad de datos · Métodos · Supuestos',
    outputs: ['Tablas y gráficos pertinentes', 'Interpretación de resultados', 'Alcances y limitaciones'],
  },
  {
    id: 'cualitativo', label: 'Cualitativo', icon: 'FileSearch',
    title: 'Comprender lo que dicen tus fuentes.',
    subtitle: 'Un recorrido posible, según el enfoque de tu investigación.',
    source: 'Documentos y texto', sourceDetail: 'Fuentes y contexto de investigación',
    core: 'Análisis cualitativo', detail: 'Codificación · Categorías · Interpretación',
    outputs: ['Temas y relaciones relevantes', 'Lectura contextual de los hallazgos', 'Criterios de análisis explícitos'],
  },
  {
    id: 'multimodal', label: 'Multimodal', icon: 'Layers',
    title: 'Distintas fuentes, una mirada integrada.',
    subtitle: 'Un recorrido posible, sujeto a la viabilidad del proyecto.',
    source: 'Texto, imágenes y audio', sourceDetail: 'Fuentes que aportan distintas perspectivas',
    core: 'Análisis multimodal', detail: 'Técnicas de IA · Revisión experta',
    outputs: ['Información organizada para analizar', 'Hallazgos revisados en contexto', 'Limitaciones documentadas'],
  },
];
