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
      'Accesos por roles y estrategia de respaldos'
    ],
    techTags: ['React', 'Node.js', 'PostgreSQL', 'Cloud Native', 'Tailwind']
  },
  {
    id: 'sistemas-gestion',
    category: 'software',
    title: 'Sistemas de Gestión Empresarial (ERP/CRM)',
    shortDesc: 'Sistemas a medida para flujos comerciales, inventarios y cobranzas con un alcance definido.',
    fullDesc: 'Diseñamos sistemas que reflejan exactamente el flujo de valor de tu negocio, permitiéndote gestionar cotizaciones, inventarios, facturación, órdenes de trabajo y seguimiento de clientes.',
    iconName: 'Layers',
    typicalProblem: 'Trabajar con sistemas de gestión que no se adaptan a los procesos de tu empresa.',
    businessBenefit: 'Herramientas personalizadas que pueden crecer por etapas según las necesidades de tu empresa.',
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
    businessBenefit: 'Una primera versión centrada en una necesidad concreta, con alcance y presupuesto definidos.',
    capabilities: [
      'Alcance definido por etapas para controlar presupuesto',
      'Curva de aprendizaje mínima para tu equipo de trabajo',
      'Entrega de código y documentación según el alcance acordado',
      'Soporte técnico cercano y en español'
    ],
    techTags: ['Soluciones Ágiles', 'Bajo Mantenimiento', 'Escalable']
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

export const FAQ_ITEMS = [
  {
    question: '¿Necesito tener una idea completamente definida?',
    answer: 'No. Podemos partir de un problema cotidiano: tareas repetitivas, información dispersa o una herramienta que ya no alcanza. En la primera conversación revisamos el contexto y las prioridades para definir un alcance inicial.',
  },
  {
    question: '¿Cuánto cuesta un desarrollo a medida?',
    answer: 'Depende de las funciones, las integraciones y la complejidad del proyecto. Después de entender tu caso, preparamos una propuesta con alcance, etapas y presupuesto. También podemos plantear una primera versión enfocada en lo esencial.',
  },
  {
    question: '¿Se puede conectar con los sistemas que ya usamos?',
    answer: 'Evaluamos las herramientas existentes, la disponibilidad de sus APIs y las condiciones de acceso a los datos. Con esa información definimos qué integraciones son viables y cómo implementarlas.',
  },
  {
    question: '¿Mi empresa necesita inteligencia artificial?',
    answer: 'No todos los problemas requieren IA. Primero evaluamos la tarea y los datos disponibles. Si tiene sentido aplicarla, acordamos cómo medir su utilidad y dónde se necesita revisión humana.',
  },
  {
    question: '¿Qué pasa después de la puesta en marcha?',
    answer: 'Definimos contigo la entrega, la documentación y la capacitación necesarias. Las condiciones de mantenimiento, soporte, infraestructura y propiedad del código se especifican en la propuesta del proyecto.',
  },
];

export const HERO_EXAMPLES = [
  {
    id: 'software',
    label: 'Software',
    icon: 'Layers',
    title: 'Tu operación, en un solo lugar.',
    subtitle: 'Del primer pedido al seguimiento de tu cliente.',
    source: 'Nuevo pedido',
    sourceDetail: 'Portal de clientes',
    core: 'Gestión a medida',
    detail: 'Ventas · Inventario · Operaciones',
    outputs: [
      'Stock actualizado',
      'Equipo coordinado',
      'Cliente informado',
    ],
  },
  {
    id: 'automation',
    label: 'Automatización',
    icon: 'GitFork',
    title: 'Menos tareas. Más tiempo.',
    subtitle: 'Conecta las herramientas que tu equipo ya utiliza.',
    source: 'Solicitud recibida',
    sourceDetail: 'Formulario de contacto',
    core: 'Flujo automatizado',
    detail: 'Validación · Integración · Seguimiento',
    outputs: [
      'Registro en CRM',
      'Aviso al equipo',
      'Seguimiento programado',
    ],
  },
  {
    id: 'ai',
    label: 'IA aplicada',
    icon: 'Sparkles',
    title: 'Tu información, más útil.',
    subtitle: 'Convierte documentos en respuestas para tu equipo.',
    source: 'Pregunta del equipo',
    sourceDetail: 'Consulta sobre un proceso',
    core: 'Asistente con tus datos',
    detail: 'Búsqueda · Contexto · Fuentes',
    outputs: [
      'Información localizada',
      'Respuesta con fuentes',
      'Revisión del equipo',
    ],
  },
];

export const SERVICE_LABELS = [
  'Aplicaciones y portales',
  'Sistemas de gestión',
  'Automatización de procesos',
  'Integración de herramientas',
  'Soluciones para pymes',
];

export const SERVICE_PROBLEMS = [
  'Tu negocio necesita una plataforma propia.',
  'La información está en demasiadas planillas.',
  'Tu equipo repite las mismas tareas cada día.',
  'Tus sistemas no se comunican entre sí.',
  'Necesitas empezar por algo concreto.',
];

export const SERVICE_OUTCOMES = [
  'Una experiencia pensada para tus clientes y tu equipo.',
  'Ventas, inventario y operaciones en un mismo lugar.',
  'Flujos de trabajo que liberan tiempo para lo importante.',
  'Información conectada, sin volver a digitarla.',
  'Una primera solución útil, con espacio para crecer.',
];

export const METHODOLOGY_NAMES = [
  'Entendemos',
  'Diseñamos',
  'Construimos',
  'Implementamos',
];

export const METHODOLOGY_DESCRIPTIONS = [
  'Conversamos sobre tu operación y definimos qué vale la pena resolver primero.',
  'Damos forma a la solución. Revisas los flujos y las pantallas antes de desarrollar.',
  'Desarrollamos por etapas, con demostraciones para revisar el avance contigo.',
  'Ponemos el sistema en marcha, acompañamos a tu equipo y definimos los próximos pasos.',
];

export const METHODOLOGY_DELIVERABLES = [
  'Alcance y propuesta',
  'Prototipo y arquitectura',
  'Software probado',
  'Puesta en marcha y capacitación',
];

export interface AiExample {
  id: string;
  label: string;
  icon: string;
  technology: string;
  title: string;
  description: string;
  inputTitle: string;
  input: string;
  request?: string;
  outputTitle: string;
  output: { label: string; value: string }[];
  benefit: string;
}

export const AI_EXAMPLES: AiExample[] = [
  {
    id: 'documentos',
    label: 'Consultar documentos',
    icon: 'Sparkles',
    technology: 'Asistentes con RAG',
    title: 'El conocimiento de tu empresa, a mano.',
    description: 'Un asistente que busca en tus manuales y políticas para ayudar a tu equipo a encontrar respuestas con sus fuentes.',
    inputTitle: 'Manual de cambios · ejemplo',
    input: 'Los cambios se aceptan dentro de 10 días, con comprobante de compra y el producto sin uso.',
    request: '¿Qué necesito para cambiar un producto?',
    outputTitle: 'Una respuesta con contexto',
    output: [
      {
        label: 'Respuesta',
        value: 'Presenta el comprobante y el producto sin uso dentro de los 10 días siguientes a la compra.',
      },
      {
        label: 'Fuente consultada',
        value: 'Manual de cambios · Condiciones generales',
      },
      {
        label: 'Si falta información',
        value: 'Derivar la consulta al equipo responsable.',
      },
    ],
    benefit: 'Para equipos que responden las mismas preguntas todos los días.',
  },
  {
    id: 'facturas',
    label: 'Leer facturas',
    icon: 'FileSearch',
    technology: 'OCR y extracción de datos',
    title: 'Del documento al dato que necesitas.',
    description: 'Extrae campos de facturas, guías o formularios y prepara la información para revisarla e integrarla con tu sistema.',
    inputTitle: 'Factura · contenido de ejemplo',
    input: 'Documento N.º 1042\nNeto: $100.000\nIVA (19%): $19.000\nTotal: $119.000',
    outputTitle: 'Campos listos para revisar',
    output: [
      {
        label: 'Documento',
        value: 'Factura N.º 1042',
      },
      {
        label: 'Desglose',
        value: 'Neto $100.000 · IVA $19.000 · Total $119.000',
      },
      {
        label: 'Siguiente paso',
        value: 'Validar los campos antes de enviarlos al sistema contable.',
      },
    ],
    benefit: 'Para negocios que todavía traspasan documentos a planillas a mano.',
  },
  {
    id: 'imagenes',
    label: 'Analizar imágenes',
    icon: 'ScanFace',
    technology: 'Visión por computador',
    title: 'Una segunda mirada a tu operación.',
    description: 'Diseña controles visuales para detectar objetos, contar productos o apoyar la inspección de empaques.',
    inputTitle: 'Escena de ejemplo',
    input: 'En una línea de empaque, una caja avanza con una de sus solapas abierta. Una cámara registra la escena.',
    outputTitle: 'Una observación accionable',
    output: [
      {
        label: 'Objeto de interés',
        value: 'Caja en la línea de empaque.',
      },
      {
        label: 'Condición a detectar',
        value: 'Solapa abierta antes del despacho.',
      },
      {
        label: 'Acción propuesta',
        value: 'Enviar la imagen a una persona para revisar el cierre.',
      },
    ],
    benefit: 'Para operaciones que necesitan apoyar su revisión visual con tecnología.',
  },
  {
    id: 'reuniones',
    label: 'Resumir reuniones',
    icon: 'Mic',
    technology: 'Audio y reconocimiento del habla',
    title: 'Que los acuerdos no queden en el aire.',
    description: 'Convierte grabaciones en texto consultable, resúmenes y tareas que tu equipo pueda revisar y compartir.',
    inputTitle: 'Fragmento de reunión · ejemplo',
    input: '“Camila enviará la propuesta el viernes. Antes, Diego tiene que confirmar la disponibilidad de los productos.”',
    outputTitle: 'Acuerdos ordenados',
    output: [
      {
        label: 'Camila',
        value: 'Enviar la propuesta el viernes.',
      },
      {
        label: 'Diego',
        value: 'Confirmar la disponibilidad antes del envío.',
      },
      {
        label: 'Pendiente de definir',
        value: 'Fecha exacta para la confirmación de Diego.',
      },
    ],
    benefit: 'Para equipos que coordinan ventas y operaciones por reuniones o audios.',
  },
  {
    id: 'relaciones',
    label: 'Conectar información',
    icon: 'Network',
    technology: 'Grafos de conocimiento',
    title: 'Entiende cómo se conecta tu negocio.',
    description: 'Relaciona clientes, productos, proveedores y operaciones para explorar dependencias que una tabla no muestra fácilmente.',
    inputTitle: 'Relaciones de ejemplo',
    input: 'Producto A → Proveedor Norte\nProducto B → Proveedor Norte\nPedido de cliente → Productos A y B',
    outputTitle: 'Una dependencia visible',
    output: [
      {
        label: 'Relación compartida',
        value: 'Los productos A y B dependen del mismo proveedor.',
      },
      {
        label: 'Pedido relacionado',
        value: 'El pedido necesita ambos productos.',
      },
      {
        label: 'Decisión a evaluar',
        value: 'Revisar disponibilidad y alternativas de abastecimiento.',
      },
    ],
    benefit: 'Para empresas que necesitan entender las relaciones entre sus datos.',
  },
];

export const CALCULATOR_TYPE_OPTIONS = [
  {
    id: 'erp',
    label: 'Sistema de gestión',
    desc: 'Ordenar ventas, clientes e inventario.',
  },
  {
    id: 'web',
    label: 'Plataforma web',
    desc: 'Conectar a tu equipo o a tus clientes.',
  },
  {
    id: 'ai',
    label: 'Inteligencia artificial',
    desc: 'Trabajar con documentos, imágenes o voz.',
  },
  {
    id: 'auto',
    label: 'Automatización',
    desc: 'Conectar herramientas y reducir tareas manuales.',
  },
];

export const CALCULATOR_SCALE_OPTIONS = [
  {
    id: 'mvp',
    label: 'Primera versión',
    timeframe: '2 a 4 semanas',
    focus: 'Resolver primero una necesidad clave.',
  },
  {
    id: 'full',
    label: 'Solución completa',
    timeframe: '4 a 8 semanas',
    focus: 'Conectar los procesos de un área.',
  },
  {
    id: 'enterprise',
    label: 'Varias áreas',
    timeframe: '8 a 12 semanas',
    focus: 'Integrar equipos, sedes y operaciones.',
  },
];

export const CALCULATOR_INTEGRATION_OPTIONS = [
  {
    id: 'whatsapp',
    label: 'Notificaciones por WhatsApp',
  },
  {
    id: 'sii',
    label: 'Facturación / SII',
  },
  {
    id: 'payments',
    label: 'Pagos en línea',
  },
  {
    id: 'excel',
    label: 'Datos de Excel o bases de datos',
  },
  {
    id: 'security',
    label: 'Roles y permisos',
  },
];

export const CONTACT_PROJECT_OPTIONS = [
  {
    value: 'software',
    label: 'Software a medida',
  },
  {
    value: 'erp',
    label: 'Sistema de gestión / ERP / CRM',
  },
  {
    value: 'ia',
    label: 'Inteligencia artificial aplicada',
  },
  {
    value: 'ocr',
    label: 'Lectura y extracción de documentos',
  },
  {
    value: 'automatizacion',
    label: 'Automatización e integraciones',
  },
  {
    value: 'otro',
    label: 'Necesito orientación',
  },
];

export const CONTACT_BUDGET_OPTIONS = [
  {
    value: 'flexible',
    label: 'Por definir con FORVI',
  },
  {
    value: 'mvp',
    label: 'Una primera versión para empezar',
  },
  {
    value: 'medio',
    label: 'Una solución completa para mi pyme',
  },
  {
    value: 'corporativo',
    label: 'Un proyecto a escala empresarial',
  },
];
