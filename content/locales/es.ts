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
    eyebrow: 'Flujo de trabajo con IA para equipos de campo',
    title: 'Ejecución mobile-first para servicios de HVAC y fontanería',
    subtitle:
      'Fieldvance se integra con tu CRM/FSM actual para guiar técnicos, validar evidencia de campo y generar informes de servicio rápidos y consistentes.',
    primaryCta: 'Solicitar demo',
    secondaryCta: 'Ver precios',
    visualLabel: 'Marcador de posición de vista previa del producto',
  },
  howItWorks: {
    title: 'Cómo funciona',
    intro: 'Una capa de flujo de trabajo simple que mejora cada orden de servicio de inicio a fin.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Preparación antes del despacho',
        text: 'El técnico recibe un resumen con IA con el contexto del cliente y los datos relevantes de la orden.',
      },
      {
        label: 'Paso 2',
        title: 'Ejecución guiada en campo',
        text: 'El flujo móvil ayuda al diagnóstico usando manuales, SOPs y checklists aprobados.',
      },
      {
        label: 'Paso 3',
        title: 'Validación, informe y sincronización',
        text: 'La evidencia se estructura y valida, se genera el informe y los resultados vuelven al CRM/FSM.',
      },
    ],
  },
  capabilities: {
    title: 'Capacidades clave',
    intro: 'Diseñado para condiciones reales de campo y operaciones auditables.',
    items: [
      {
        title: 'Flujo guiado para técnicos',
        text: 'Flujo móvil paso a paso para acciones, mediciones, fotos, repuestos usados y notas de voz.',
      },
      {
        title: 'Diagnóstico con RAG',
        text: 'Las respuestas se basan en manuales, SOPs y checklists internos aprobados.',
      },
      {
        title: 'Motor de validación',
        text: 'Verifica evidencia obligatoria y consistencia antes de cerrar la orden.',
      },
      {
        title: 'Visibilidad para supervisión',
        text: 'Supervisores controlan calidad en consola web, mientras CRM/FSM sigue siendo el sistema principal.',
      },
    ],
  },
  results: {
    title: 'Resultados de pilotos iniciales',
    intro: 'Resultados actuales medidos en pilotos con empresas españolas de HVAC y fontanería.',
    metrics: [
      { label: 'Empresas piloto en España', value: '3', note: 'Entornos piloto activos' },
      { label: 'Técnicos activos al día', value: '18', note: 'Usando el flujo móvil' },
      { label: 'Servicios registrados', value: '~200', note: 'Ejecuciones de campo medidas' },
      { label: 'Tiempo promedio de informe', value: '~12m → ~2m', note: 'Generación y sincronización más rápida' },
      { label: 'Errores críticos en informes', value: '~22% → ~9%', note: 'Menor tasa de error observada' },
    ],
  },
  pricing: {
    title: 'Precios',
    intro: 'Precio simple por técnico más una tarifa de plataforma por cliente.',
    cardCta: 'Hablar con ventas',
    plans: [
      {
        name: 'Starter',
        price: '€45 / técnico / mes + €250 / cliente / mes',
        points: ['Para despliegue inicial del equipo', 'Base de flujo operativo e informes'],
      },
      {
        name: 'Pro',
        price: '€63 / técnico / mes + €250 / cliente / mes',
        points: ['Para equipos en crecimiento', 'Soporte operativo y controles ampliados'],
      },
      {
        name: 'Enterprise',
        price: '€99 / técnico / mes + €250 / cliente / mes',
        points: ['Para operaciones complejas', 'Soporte personalizado de despliegue e implementación'],
      },
    ],
    setupFeeNote: 'Tarifa única de implementación: €4.000.',
    annualNote: 'Se prefieren contratos anuales.',
  },
  finalCta: {
    title: 'Estandariza la ejecución en campo sin reemplazar tu CRM/FSM',
    text: 'Descubre cómo Fieldvance puede encajar en tu operación de HVAC o fontanería y mejorar la calidad de los informes desde el primer día.',
    ctaLabel: 'Solicitar recorrido guiado',
    href: '#',
  },
  footer: {
    note: '© Fieldvance. Capa de flujo de trabajo con IA para empresas de servicio HVAC y fontanería en España.',
  },
};
