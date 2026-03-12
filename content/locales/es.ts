import { type LandingContent } from '@/content/types';

export const esContent: LandingContent = {
  header: {
    brand: 'Fieldvance',
    nav: [
      { label: 'Cómo funciona', href: '#how-it-works' },
      { label: 'Capacidades', href: '#capabilities' },
      { label: 'Resultados', href: '#results' },
      { label: 'Precios', href: '#pricing' },
    ],
  },
  hero: {
    eyebrow: 'Para equipos de servicio de HVAC y fontanería',
    title: 'Estandariza la ejecución en campo en cada servicio',
    subtitle:
      'Fieldvance añade un flujo de trabajo móvil con IA a tu CRM/FSM actual para que los técnicos lleguen mejor preparados, sigan pasos de diagnóstico aprobados y terminen con informes validados.',
    primaryCta: 'Reservar una demo',
    secondaryCta: 'Ver precios',
    visualLabel: 'Vista previa del flujo de producto',
  },
  howItWorks: {
    title: 'Cómo funciona',
    intro: 'Un único flujo, desde el contexto previo al envío hasta el informe sincronizado.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Prepárate antes de llegar',
        text: 'Antes del envío, los técnicos reciben un resumen con IA con el contexto del cliente y de la orden de trabajo desde tu CRM/FSM.',
      },
      {
        label: 'Paso 2',
        title: 'Ejecuta con diagnóstico guiado',
        text: 'En campo, el flujo móvil guía las acciones y el diagnóstico con manuales, SOP y checklists aprobados.',
      },
      {
        label: 'Paso 3',
        title: 'Valida y cierra más rápido',
        text: 'La evidencia de campo se comprueba para asegurar su completitud, se genera el informe de servicio y los resultados se sincronizan con tu CRM/FSM.',
      },
    ],
  },
  capabilities: {
    title: 'Capacidades clave',
    intro: 'Diseñado para operaciones auditables en condiciones reales de campo.',
    items: [
      {
        title: 'Flujo móvil para técnicos',
        text: 'Captura acciones, mediciones, fotos, piezas usadas y notas de voz breves en un único flujo guiado.',
      },
      {
        title: 'Diagnóstico basado en conocimiento aprobado',
        text: 'Las respuestas RAG se basan en tus manuales, SOP y checklists aprobados.',
      },
      {
        title: 'Validación antes del cierre',
        text: 'La evidencia obligatoria y los controles de consistencia ayudan a evitar cierres incompletos o incoherentes.',
      },
      {
        title: 'Control y visibilidad para supervisión',
        text: 'Los supervisores revisan la calidad de ejecución en una consola web, mientras el CRM/FSM sigue siendo tu sistema de registro.',
      },
    ],
  },
  results: {
    title: 'Resultados iniciales',
    intro: 'Resultados medidos en los primeros despliegues activos de Fieldvance.',
    metrics: [
      { label: 'Tracción inicial', value: '3 empresas', note: 'Operando con flujos de Fieldvance en producción' },
      { label: 'Técnicos activos al día', value: '18', note: 'Usando el flujo móvil cada día' },
      { label: 'Servicios registrados', value: '~200', note: 'Servicios ejecutados y medidos con Fieldvance' },
      { label: 'Tiempo medio de informe', value: '~12m → ~2m', note: 'Generación y sincronización de informes más rápidas' },
      { label: 'Errores críticos de reporte', value: '~22% → ~9%', note: 'Menor tasa de errores críticos en los informes' },
    ],
  },
  pricing: {
    title: 'Precios',
    intro: 'Precio por técnico más una tarifa de plataforma por cliente.',
    cardCta: 'Hablar con ventas',
    plans: [
      {
        name: 'Starter',
        price: '€45 / técnico / mes + €250 / cliente / mes',
        points: ['Para un despliegue inicial', 'Flujo guiado principal e informes'],
      },
      {
        name: 'Pro',
        price: '€63 / técnico / mes + €250 / cliente / mes',
        points: ['Para operaciones en crecimiento', 'Más control de calidad y ejecución'],
      },
      {
        name: 'Enterprise',
        price: '€99 / técnico / mes + €250 / cliente / mes',
        points: ['Para operaciones complejas', 'Soporte personalizado para despliegue e implementación'],
      },
    ],
    setupFeeNote: 'Tarifa de configuración única: €4,000.',
    annualNote: 'Se prefieren contratos anuales.',
  },
  finalCta: {
    title: 'Mejora la calidad en campo sin sustituir tu CRM/FSM',
    text: 'Descubre cómo Fieldvance puede estandarizar la ejecución, los informes y la supervisión en toda tu operación de servicio.',
    ctaLabel: 'Solicitar una sesión guiada',
    href: '#contact',
  },
  contact: {
    kicker: 'Contacto',
    title: 'Solicita una demo o haz una consulta',
    text: 'Cuéntanos brevemente sobre tu operación y te contactaremos para programar una sesión guiada.',
    helper: 'Todos los campos son obligatorios.',
    fields: {
      name: { label: 'Nombre', placeholder: 'Tu nombre completo' },
      phone: { label: 'Teléfono', placeholder: 'Tu número de teléfono' },
      email: { label: 'Correo electrónico', placeholder: 'tu@empresa.com' },
      message: { label: 'Mensaje', placeholder: '¿Qué te gustaría mejorar en tu operación de campo?' },
    },
    validation: {
      nameRequired: 'Por favor, introduce tu nombre.',
      phoneRequired: 'Por favor, introduce tu número de teléfono.',
      emailRequired: 'Por favor, introduce tu correo electrónico.',
      emailInvalid: 'Por favor, introduce un correo electrónico válido.',
      messageRequired: 'Por favor, introduce tu mensaje.',
    },
    submit: {
      default: 'Enviar solicitud',
      submitting: 'Enviando...',
      success: 'Gracias. Hemos recibido tu solicitud. Te contactaremos pronto.',
    },
  },
  footer: {
    note: '© Fieldvance. Capa de flujo de trabajo con IA para empresas de servicio de HVAC y fontanería.',
  },
};
