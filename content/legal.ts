import { type Locale } from '@/config/i18n';

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageContent = {
  title: string;
  intro: string;
  lastUpdatedLabel: string;
  lastUpdatedValue: string;
  sections: LegalSection[];
  backLabel: string;
};

type LegalContent = {
  privacy: LegalPageContent;
  terms: LegalPageContent;
};

export const legalContentByLocale: Record<Locale, LegalContent> = {
  en: {
    privacy: {
      title: 'Privacy Policy',
      intro:
        'This Privacy Policy explains what information this website may collect and how Fieldvance uses it.',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: 'May 2026',
      sections: [
        {
          heading: 'Information we may collect',
          bullets: [
            'Information you submit through the contact form, such as your name, email, phone number, and message.',
            'Basic technical information sent by your browser when you visit the site (for example, browser type and page requests).',
          ],
        },
        {
          heading: 'How we use information',
          bullets: [
            'To respond to demo requests and other inquiries.',
            'To understand and improve how the website performs and how visitors use it.',
            'To maintain site security and reliability.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'This website uses essential cookies needed for basic functionality, including remembering your cookie notice choice.',
          ],
        },
        {
          heading: 'Sharing and retention',
          paragraphs: [
            'We do not sell personal information submitted through this website.',
            'We keep submitted information only for as long as needed to handle your request and operate the site responsibly.',
          ],
        },
        {
          heading: 'Your requests',
          paragraphs: [
            'You can request access, correction, or deletion of information you submitted through this site by contacting us via the contact form.',
          ],
        },
      ],
      backLabel: 'Back to homepage',
    },
    terms: {
      title: 'Terms of Use',
      intro: 'These Terms of Use apply to your use of the Fieldvance website.',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: 'May 2026',
      sections: [
        {
          heading: 'Website purpose',
          paragraphs: [
            'This website provides general information about Fieldvance and lets visitors request demos or contact our team.',
          ],
        },
        {
          heading: 'Informational content',
          paragraphs: [
            'Content on this site is provided for general informational purposes and may change over time.',
          ],
        },
        {
          heading: 'Demo and contact requests',
          paragraphs: [
            'When you submit a request, please provide accurate information so we can follow up appropriately.',
          ],
        },
        {
          heading: 'Acceptable use',
          bullets: [
            'Do not misuse the website, interfere with its operation, or attempt unauthorized access.',
            'Do not submit unlawful, harmful, or misleading content through the contact form.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'All website content, branding, and materials are owned by Fieldvance or used with permission and may not be reused without authorization.',
          ],
        },
        {
          heading: 'No guarantee and limitation',
          paragraphs: [
            'The website is provided on an “as is” basis without guarantees of uninterrupted availability or error-free operation.',
            'To the extent permitted by applicable law, Fieldvance is not liable for damages arising from the use of this website.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: ['For questions about these terms, please use the contact form on this website.'],
        },
      ],
      backLabel: 'Back to homepage',
    },
  },
  es: {
    privacy: {
      title: 'Política de Privacidad',
      intro:
        'Esta Política de Privacidad explica qué información puede recopilar este sitio web y cómo la utiliza Fieldvance.',
      lastUpdatedLabel: 'Última actualización',
      lastUpdatedValue: 'Mayo 2026',
      sections: [
        {
          heading: 'Información que podemos recopilar',
          bullets: [
            'Información que envías mediante el formulario de contacto, como nombre, correo electrónico, teléfono y mensaje.',
            'Información técnica básica que envía tu navegador al visitar el sitio (por ejemplo, tipo de navegador y solicitudes de páginas).',
          ],
        },
        {
          heading: 'Cómo usamos la información',
          bullets: [
            'Para responder a solicitudes de demo y otras consultas.',
            'Para entender y mejorar el rendimiento del sitio y cómo lo usan los visitantes.',
            'Para mantener la seguridad y confiabilidad del sitio.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Este sitio web usa cookies esenciales necesarias para su funcionamiento básico, incluido recordar tu elección sobre el aviso de cookies.',
          ],
        },
        {
          heading: 'Compartir y conservación',
          paragraphs: [
            'No vendemos información personal enviada a través de este sitio web.',
            'Conservamos la información enviada solo durante el tiempo necesario para atender tu solicitud y operar el sitio de forma responsable.',
          ],
        },
        {
          heading: 'Tus solicitudes',
          paragraphs: [
            'Puedes solicitar acceso, corrección o eliminación de la información que enviaste a través de este sitio usando el formulario de contacto.',
          ],
        },
      ],
      backLabel: 'Volver al inicio',
    },
    terms: {
      title: 'Términos de Uso',
      intro: 'Estos Términos de Uso se aplican al uso del sitio web de Fieldvance.',
      lastUpdatedLabel: 'Última actualización',
      lastUpdatedValue: 'Mayo 2026',
      sections: [
        {
          heading: 'Propósito del sitio web',
          paragraphs: [
            'Este sitio ofrece información general sobre Fieldvance y permite solicitar demos o contactar a nuestro equipo.',
          ],
        },
        {
          heading: 'Contenido informativo',
          paragraphs: [
            'El contenido de este sitio se proporciona con fines informativos generales y puede cambiar con el tiempo.',
          ],
        },
        {
          heading: 'Solicitudes de demo y contacto',
          paragraphs: [
            'Al enviar una solicitud, proporciona información precisa para que podamos responder de forma adecuada.',
          ],
        },
        {
          heading: 'Uso aceptable',
          bullets: [
            'No hagas un uso indebido del sitio, no interfieras en su funcionamiento y no intentes accesos no autorizados.',
            'No envíes contenido ilegal, dañino o engañoso mediante el formulario de contacto.',
          ],
        },
        {
          heading: 'Propiedad intelectual',
          paragraphs: [
            'Todo el contenido, la marca y los materiales del sitio pertenecen a Fieldvance o se usan con autorización y no pueden reutilizarse sin permiso.',
          ],
        },
        {
          heading: 'Sin garantía y limitación',
          paragraphs: [
            'El sitio se ofrece “tal cual”, sin garantías de disponibilidad ininterrumpida ni de funcionamiento sin errores.',
            'En la medida permitida por la ley aplicable, Fieldvance no será responsable de daños derivados del uso de este sitio web.',
          ],
        },
        {
          heading: 'Contacto',
          paragraphs: ['Si tienes preguntas sobre estos términos, usa el formulario de contacto de este sitio web.'],
        },
      ],
      backLabel: 'Volver al inicio',
    },
  },
  ru: {
    privacy: {
      title: 'Политика конфиденциальности',
      intro:
        'В этой Политике конфиденциальности описано, какие данные может собирать сайт и как Fieldvance их использует.',
      lastUpdatedLabel: 'Последнее обновление',
      lastUpdatedValue: 'Май 2026',
      sections: [
        {
          heading: 'Какие данные мы можем собирать',
          bullets: [
            'Данные, которые вы отправляете через форму контакта: имя, email, телефон и сообщение.',
            'Базовую техническую информацию, которую браузер передает при посещении сайта (например, тип браузера и запросы страниц).',
          ],
        },
        {
          heading: 'Как мы используем данные',
          bullets: [
            'Чтобы отвечать на запросы демо и другие обращения.',
            'Чтобы понимать, как работает сайт, и улучшать его для посетителей.',
            'Чтобы поддерживать безопасность и стабильность работы сайта.',
          ],
        },
        {
          heading: 'Cookie',
          paragraphs: [
            'Сайт использует только необходимые cookie для базовой работы, включая запоминание вашего выбора в уведомлении о cookie.',
          ],
        },
        {
          heading: 'Передача и хранение',
          paragraphs: [
            'Мы не продаем персональные данные, отправленные через этот сайт.',
            'Мы храним отправленные данные только столько, сколько нужно для обработки запроса и ответственного администрирования сайта.',
          ],
        },
        {
          heading: 'Ваши запросы',
          paragraphs: [
            'Вы можете запросить доступ, исправление или удаление данных, которые отправили через сайт, используя форму контакта.',
          ],
        },
      ],
      backLabel: 'Вернуться на главную',
    },
    terms: {
      title: 'Условия использования',
      intro: 'Эти Условия использования применяются к использованию сайта Fieldvance.',
      lastUpdatedLabel: 'Последнее обновление',
      lastUpdatedValue: 'Май 2026',
      sections: [
        {
          heading: 'Назначение сайта',
          paragraphs: [
            'Сайт предоставляет общую информацию о Fieldvance и позволяет запросить демо или связаться с нашей командой.',
          ],
        },
        {
          heading: 'Информационный характер контента',
          paragraphs: [
            'Контент сайта предоставляется в общих информационных целях и может со временем меняться.',
          ],
        },
        {
          heading: 'Запросы демо и обращений',
          paragraphs: [
            'При отправке запроса указывайте корректные данные, чтобы мы могли связаться с вами по существу.',
          ],
        },
        {
          heading: 'Допустимое использование',
          bullets: [
            'Не используйте сайт ненадлежащим образом, не мешайте его работе и не пытайтесь получить несанкционированный доступ.',
            'Не отправляйте через форму контакта незаконный, вредоносный или вводящий в заблуждение контент.',
          ],
        },
        {
          heading: 'Интеллектуальная собственность',
          paragraphs: [
            'Весь контент, бренд и материалы сайта принадлежат Fieldvance или используются с разрешения и не могут использоваться повторно без согласования.',
          ],
        },
        {
          heading: 'Отсутствие гарантий и ограничение ответственности',
          paragraphs: [
            'Сайт предоставляется «как есть», без гарантий бесперебойной или безошибочной работы.',
            'В пределах, разрешенных применимым законодательством, Fieldvance не несет ответственности за убытки, связанные с использованием этого сайта.',
          ],
        },
        {
          heading: 'Контакты',
          paragraphs: ['По вопросам, связанным с этими условиями, используйте форму контакта на сайте.'],
        },
      ],
      backLabel: 'Вернуться на главную',
    },
  },
};
