export interface ServiceItem {
  id: string;
  category: 'software' | 'ai';
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  businessBenefit: string;
  typicalProblem: string;
  capabilities: string[];
  techTags: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export const SITE_INFO = {
  name: 'FORVI',
  legalName: 'FORVI SpA',
  domain: 'www.forvi.cl',
  url: 'https://www.forvi.cl',
  slogan: 'Software a tu medida.',
  heroHeadline: 'Software a tu medida. Inteligencia para tu negocio.',
  heroSubheadline: 'Desarrollamos soluciones tecnológicas personalizadas para empresas de todos los tamaños, especialmente pymes: desde aplicaciones sencillas y eficientes hasta sistemas avanzados de inteligencia artificial aplicados a tus procesos reales.',
  email: 'contacto@forvi.cl',
  phoneDisplay: '+56 9 3577 9373',
  phoneRaw: '56935779373',
  whatsappUrl: 'https://wa.me/56935779373?text=Hola%20FORVI,%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto%20de%20software%20para%20mi%20empresa.',
  socials: {
    instagram: 'https://www.instagram.com/forvi.cl/',
    facebook: 'https://www.facebook.com/forvi.cl/',
    linkedinFounder: 'https://www.linkedin.com/in/guillermo-peralta',
  },
  location: 'Santiago, Chile',
};

export const FOUNDER_CREDENTIALS = {
  name: 'Guillermo Peralta',
  role: 'Dirección Estratégica & Arquitectura Tecnológica',
  summary: 'Liderazgo que articula de manera natural la visión de negocios y la ingeniería computacional avanzada.',
  credentials: [
    'Ingeniero Comercial',
    'Licenciado en Ciencias de la Administración de Empresas',
    'Magíster en Ciencias Empresariales con especialización en Emprendimiento',
    'Candidato a Doctor en Computación de la Pontificia Universidad Católica de Chile',
    'Especialista en Inteligencia Artificial Multimodal',
  ],
  linkedin: 'https://www.linkedin.com/in/guillermo-peralta',
};

export const SOFTWARE_SERVICES: ServiceItem[] = [
  {
    id: 'web-apps',
    category: 'software',
    title: 'Aplicaciones Web & Portales Cloud',
    shortDesc: 'Plataformas seguras, rápidas y hechas a la medida de tu modelo operativo.',
    fullDesc: 'Desarrollamos plataformas web modernas que centralizan tus operaciones, gestionan clientes o conectan sucursales en tiempo real, accesibles desde cualquier navegador sin fricción.',
    iconName: 'Globe',
    typicalProblem: 'Depender de hojas de cálculo desordenadas o plataformas genéricas que no se adaptan a cómo realmente trabaja tu equipo.',
    businessBenefit: 'Control operativo total en tiempo real, reducción de errores de digitación y disponibilidad 24/7 en la nube.',
    capabilities: [
      'Paneles de administración y dashboards analíticos',
      'Portales de clientes y autogestión comercial',
      'Arquitectura modular escalable y responsive',
      'Altos estándares de seguridad y respaldos automáticos'
    ],
    techTags: ['React', 'Node.js', 'PostgreSQL', 'Cloud Native', 'Tailwind']
  },
  {
    id: 'sistemas-gestion',
    category: 'software',
    title: 'Sistemas de Gestión Empresarial (ERP/CRM)',
    shortDesc: 'Sistemas a medida para flujos comerciales, inventarios y cobranzas sin licencias abusivas.',
    fullDesc: 'Diseñamos sistemas que reflejan exactamente el flujo de valor de tu negocio, permitiéndote gestionar cotizaciones, inventarios, facturación, órdenes de trabajo y seguimiento de clientes.',
    iconName: 'Layers',
    typicalProblem: 'Contratar ERPs masivos costosos y complejos, donde terminas usando solo el 10% de las funciones pero pagas el 100% de la tarifa mensual.',
    businessBenefit: 'Herramientas precisas, ágiles y personalizadas que se pagan una vez y crecen al ritmo de tu empresa.',
    capabilities: [
      'Seguimiento integral del ciclo de ventas y CRM',
      'Control de inventario, stock y alertas de reposición',
      'Gestión de órdenes de servicio y asignación de tareas',
      'Reportes ejecutivos automáticos e indicadores clave (KPIs)'
    ],
    techTags: ['TypeScript', 'APIs REST', 'Bases Relacionales', 'Dashboards']
  },
  {
    id: 'automatizacion-procesos',
    category: 'software',
    title: 'Automatización de Procesos & Workflows',
    shortDesc: 'Elimina tareas manuales repetitivas y sincroniza la información entre tus áreas.',
    fullDesc: 'Conectamos tus canales de comunicación, formularios, correos y sistemas para que los datos fluyan solos sin requerir horas hombre de copiado y pegado manual.',
    iconName: 'Cpu',
    typicalProblem: 'Empleados dedicando horas valiosas a tareas mecánicas de baja rentabilidad propensas a errores humanos.',
    businessBenefit: 'Ahorro sustancial en horas de trabajo operativo, aceleración en los tiempos de respuesta a clientes y fiabilidad de datos.',
    capabilities: [
      'Disparadores automáticos de notificaciones y confirmaciones',
      'Generación y envío automatizado de cotizaciones o PDFs',
      'Sincronización bidireccional entre herramientas y hojas de cálculo',
      'Alertas de seguimiento comercial y cobro'
    ],
    techTags: ['Webhooks', 'Background Workers', 'Event-Driven', 'Bots']
  },
  {
    id: 'integracion-sistemas',
    category: 'software',
    title: 'Digitalización e Integración de Plataformas',
    shortDesc: 'Conecta tus herramientas actuales en un ecosistema integrado y fluido.',
    fullDesc: 'Creamos puentes tecnológicos para conectar pasarelas de pago, sistemas de facturación electrónica, servicios de mensajería (WhatsApp/correo) y software existente.',
    iconName: 'GitFork',
    typicalProblem: 'Sistemas aislados ("islas de información") que obligan a reingresar datos manualmente una y otra vez.',
    businessBenefit: 'Visión unificada del negocio y operaciones sin fricción técnica entre departamentos.',
    capabilities: [
      'Integración con pasarelas de pago chilenas y globales',
      'Conexión con facturación electrónica y SII / ERPs',
      'Sincronización con WhatsApp Business API y correo',
      'APIs seguras para conectar sucursales y proveedores'
    ],
    techTags: ['API REST', 'GraphQL', 'OAuth2', 'Webhooks']
  },
  {
    id: 'herramientas-pymes',
    category: 'software',
    title: 'Herramientas Tecnológicas para Pymes',
    shortDesc: 'Soluciones ágiles y accesibles con presupuesto claro, sin gastos innecesarios.',
    fullDesc: 'Sabemos que las pequeñas y medianas empresas necesitan soluciones directas al grano que resuelvan su problema inmediato sin sobredimensionar la inversión inicial.',
    iconName: 'Wrench',
    typicalProblem: 'Sentir que el desarrollo a medida es un lujo inalcanzable reservado únicamente a grandes corporaciones.',
    businessBenefit: 'Inversión dimensionada con retorno tangible en productividad y orden empresarial desde las primeras semanas.',
    capabilities: [
      'Alcance definido por etapas para controlar presupuesto',
      'Curva de aprendizaje mínima para tu equipo de trabajo',
      'Independencia tecnológica: el código y sistema te pertenecen',
      'Soporte técnico cercano y en español'
    ],
    techTags: ['Soluciones Ágiles', 'Bajo Mantenimiento', 'Escalable']
  }
];

export const AI_SERVICES: ServiceItem[] = [
  {
    id: 'vision-facial',
    category: 'ai',
    title: 'Visión por Computador & Reconocimiento Facial',
    shortDesc: 'Inspección visual automatizada, detección de objetos y control de acceso biométrico.',
    fullDesc: 'Modelos de visión artificial capaces de procesar video e imágenes para identificar patrones, verificar identidades o detectar anomalías con precisión milimétrica.',
    iconName: 'ScanFace',
    typicalProblem: 'Controles de acceso lentos con credenciales que se pierden o inspecciones visuales manuales propensas a fatiga humana.',
    businessBenefit: 'Seguridad robusta en tiempo real, agilización de accesos y control de calidad estandarizado sin interrupciones.',
    capabilities: [
      'Detección y verificación facial para control de accesos',
      'Conteo de personas o vehículos en recintos y sucursales',
      'Inspección visual de productos o empaques en líneas de producción',
      'Detección de elementos de seguridad (EPP, mascarillas, cascos)'
    ],
    techTags: ['Computer Vision', 'Deep Learning', 'PyTorch', 'ONNX', 'Edge AI']
  },
  {
    id: 'nlp-analisis',
    category: 'ai',
    title: 'Procesamiento de Lenguaje Natural (NLP)',
    shortDesc: 'Comprensión semántica de textos, contratos, correos y opiniones de clientes.',
    fullDesc: 'Algoritmos que leen y comprenden el lenguaje humano para clasificar peticiones, analizar contratos legales extensos o extraer información clave de miles de comunicaciones.',
    iconName: 'MessageSquareCode',
    typicalProblem: 'Bandejas de entrada saturadas y necesidad de revisar cientos de documentos o reclamos de forma manual.',
    businessBenefit: 'Clasificación instantánea de mensajes entrantes, detección temprana de riesgos y atención priorizada a clientes.',
    capabilities: [
      'Clasificación automática y enrutamiento inteligente de correos',
      'Análisis de sentimiento y detección de urgencia en feedback',
      'Extracción de cláusulas críticas en contratos y pólizas',
      'Generación estructurada de resúmenes ejecutivos'
    ],
    techTags: ['Transformers', 'LLMs', 'NLP Semántico', 'Embeddings']
  },
  {
    id: 'asr-transcripcion',
    category: 'ai',
    title: 'Reconocimiento del Habla (ASR) & Audio',
    shortDesc: 'Transcripción precisa de voz a texto y generación automática de minutas de reunión.',
    fullDesc: 'Modelos avanzados de reconocimiento de voz adaptados al español y modismos locales, capaces de transcribir audios, llamadas y reuniones para convertirlos en texto buscable.',
    iconName: 'Mic',
    typicalProblem: 'Perder acuerdos clave discutidos en reuniones orales o audios de WhatsApp por falta de registro escrito estructurado.',
    businessBenefit: 'Registro permanente y consultable de acuerdos comerciales, minutas generadas en segundos y auditoría de llamadas.',
    capabilities: [
      'Transcripción automática con distinción de hablantes (diarización)',
      'Extracción automática de tareas y compromisos de reuniones',
      'Transcripción de audios comerciales recibidos por WhatsApp',
      'Búsqueda textual sobre archivos de audio y video'
    ],
    techTags: ['Whisper ASR', 'Diarization', 'Speech-to-Text', 'FastAPI']
  },
  {
    id: 'ocr-documental',
    category: 'ai',
    title: 'OCR Inteligente & Extracción Estructurada',
    shortDesc: 'Transforma facturas, boletas y documentos escaneados en datos digitales listos para usar.',
    fullDesc: 'Supera las limitaciones del OCR tradicional combinando visión artificial con modelos de lenguaje para extraer tablas, montos, RUTs y fechas incluso en fotos torcidas o documentos físicos.',
    iconName: 'FileSearch',
    typicalProblem: 'Personal digitando manualmente montos y datos de facturas en PDF o guías de despacho impresas.',
    businessBenefit: 'Cero digitación manual, conciliación bancaria y contable instantánea y eliminación de errores numéricos.',
    capabilities: [
      'Lectura precisa de facturas, boletas y notas de crédito en PDF/imagen',
      'Extracción de tablas y filas de productos a formato Excel/JSON',
      'Validación automática de RUT, totales y coherencia de cálculos',
      'Integración directa con tu sistema contable o ERP'
    ],
    techTags: ['Smart OCR', 'Document AI', 'Layout Analysis', 'RegEx Validation']
  },
  {
    id: 'rag-asistentes',
    category: 'ai',
    title: 'Sistemas RAG & Asistentes Inteligentes',
    shortDesc: 'Chatbots con conocimiento exclusivo y seguro de las políticas y catálogo de tu empresa.',
    fullDesc: 'Implementamos arquitecturas RAG (Retrieval-Augmented Generation) que permiten a tu equipo y clientes conversar con la documentación interna de tu negocio sin inventar respuestas.',
    iconName: 'Sparkles',
    typicalProblem: 'Chatbots genéricos que "alucinan" o no conocen los precios, políticas y especificaciones técnicas de tus productos.',
    businessBenefit: 'Respuestas 100% fundamentadas en tus documentos oficiales, soporte 24/7 y capacitación instantánea para nuevos colaboradores.',
    capabilities: [
      'Asistente de ventas con acceso al catálogo y stock en tiempo real',
      'Buscador semántico sobre manuales técnicos y normativas',
      'Protección de datos: tus documentos no se utilizan para entrenar modelos públicos',
      'Historial de conversaciones y métricas de satisfacción'
    ],
    techTags: ['Vector DBs', 'RAG Architecture', 'LlamaIndex', 'LangChain', 'Private AI']
  },
  {
    id: 'grafos-conocimiento',
    category: 'ai',
    title: 'Grafos de Conocimiento & Análisis Relacional',
    shortDesc: 'Mapeo de datos interconectados para descubrir patrones de negocio ocultos.',
    fullDesc: 'Estructuración de datos en redes relacionales que permiten conectar clientes, productos, proveedores y transacciones para descubrir oportunidades cruzadas o prevenir fraudes.',
    iconName: 'Network',
    typicalProblem: 'Bases de datos tradicionales que dificultan entender relaciones multicapa entre personas, empresas y operaciones.',
    businessBenefit: 'Visión estratégica en 360 grados, identificación de cuellos de botella y detección temprana de anomalías.',
    capabilities: [
      'Mapeo de redes de proveedores y dependencias operativas',
      'Sistemas de recomendación contextual para clientes',
      'Detección de patrones complejos y relaciones no evidentes',
      'Visualización interactiva de nodos y flujos de información'
    ],
    techTags: ['Knowledge Graphs', 'Neo4j', 'NetworkX', 'Graph Analytics']
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Descubrimiento & Diagnóstico',
    subtitle: 'Comprender tu negocio antes de tocar el código',
    description: 'Nos reunimos contigo para entender tus dolores operativos, flujos actuales y metas comerciales. No te ofrecemos soluciones empaquetadas: identificamos la oportunidad de mayor impacto con la menor complejidad.',
    deliverables: ['Levantamiento de requerimientos', 'Definición de alcance y presupuesto claro', 'Hoja de ruta tecnológica'],
    iconName: 'Compass'
  },
  {
    step: '02',
    title: 'Diseño de Arquitectura & UX/UI',
    subtitle: 'Prototipado intuitivo y arquitectura robusta',
    description: 'Diseñamos la experiencia de usuario y estructuramos la base de datos y la arquitectura técnica. Validamos contigo pantallas e interacciones antes del desarrollo para asegurar que resuelva el problema real.',
    deliverables: ['Prototipos interactivos visuales', 'Arquitectura de base de datos y APIs', 'Definición de seguridad y escalabilidad'],
    iconName: 'Layout'
  },
  {
    step: '03',
    title: 'Desarrollo Ágil & Pruebas',
    subtitle: 'Construcción modular con entregas continuas',
    description: 'Escribimos código limpio, probado y modular mediante sprints ágiles. Tienes visibilidad constante del avance en ambientes de prueba reales para entregar retroalimentación en cada etapa.',
    deliverables: ['Sprints de avance con demos funcionales', 'Pruebas rigurosas de funcionalidad y rendimiento', 'Código documentado y de alta calidad'],
    iconName: 'Code2'
  },
  {
    step: '04',
    title: 'Implementación & Evolución',
    subtitle: 'Puesta en marcha segura y acompañamiento continuo',
    description: 'Desplegamos el sistema en servidores seguros, capacitamos a tu equipo en su uso y monitoreamos su funcionamiento en vivo. Quedamos a tu lado para evolucionar y escalar la solución cuando tu negocio crezca.',
    deliverables: ['Despliegue en producción con HTTPS y respaldos', 'Capacitación a colaboradores y manuales de uso', 'Garantía técnica y planes de soporte continuo'],
    iconName: 'Rocket'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Visión de Negocio + Tecnología',
    desc: 'No solo sabemos programar: entendemos de finanzas, operaciones y rentabilidad para diseñar soluciones que generen retorno real.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Presupuestos Honestos y a Escala',
    desc: 'Diseñamos proyectos pensados para pymes, evitando costos innecesarios y cobros mensuales abusivos por licencias.',
    iconName: 'Coins'
  },
  {
    title: 'Software que te Pertenece',
    desc: 'El software y los datos son de tu empresa. Sin ataduras forzadas ni dependencia de plataformas propietarias opacas.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'IA Práctica y Aplicable',
    desc: 'Implementamos inteligencia artificial orientada a resolver problemas concretos de tu operación, no como simple adorno de marketing.',
    iconName: 'BrainCircuit'
  }
];
