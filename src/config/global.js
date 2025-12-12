export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Medicina Preventiva y del Trabajo en Colombia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medicina Preventiva y del Trabajo en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normatividad en materia psicosocial en Colombia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Aplicación práctica y enfoque de prevención',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategias Preventivas ante Riesgos Ocupacionales ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estrategias ergonómicas comunes en el entorno laboral',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Control de Factores Ambientales: Proteger de agentes físicos, químicos y biológicos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Evaluaciones Médicas Periódicas: Vigilancia de la salud del trabajador',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño de programas de medicina preventiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Vacunación: Protección frente a enfermedades transmisibles',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Charlas Educativas: Promoción del autocuidado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Orientación nutricional: alimentación saludable en el trabajo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Cuestionarios estandarizados',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'KPI de Salud',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Balanced Scorecard en SST',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1979). <em>Ley 9 de 1979: Por la cual se dictan medidas sanitarias</em>. Diario Oficial No. 35.118, del 24 de enero de 1979.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). <em>Ley 1562 de 2012: Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional</em>. Diario Oficial No. 48.488, del 11 de julio de 2012.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). <em>Decreto 1072 de 2015: Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo</em>. Diario Oficial No. 49.523, del 26 de mayo de 2015.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). <em>Resolución 0312 de 2019: Por la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST)</em>. Diario Oficial No. 50.870, del 13 de febrero de 2019.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2025). <em>Resolución 1843 de 2025: Por la cual se regula la práctica de evaluaciones médicas ocupacionales y se dictan otras disposiciones</em>. Diario Oficial No. 53.109, 6 de mayo de 2025.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). <em>Guía de Atención Integral en Salud Ocupacional basada en la evidencia para la hipoacusia inducida por ruido (GATISO Ruido)</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2022). <em>Resolución 2764 de 2022: Por la cual se adopta la Guía técnica para la promoción, prevención e intervención de los factores psicosociales en el trabajo</em>. Diario Oficial No. 52.182, del 12 de diciembre de 2022.',
      link: '',
    },
    {
      referencia:
        'Calderón Hernández, G., Murillo Galvis, S. M., & Torres Narváez, K. Y. (2003). <em>Cultura organizacional y bienestar laboral</em>. Cuadernos de Administración, 16(25), 109–137. Pontificia Universidad Javeriana.',
      link: 'https://www.redalyc.org/pdf/205/20502506.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ARL',
      significado:
        'Administradora de Riesgos Laborales. Entidad responsable de gestionar la afiliación, prevención, atención y rehabilitación en riesgos laborales.',
    },
    {
      termino: 'Autocuidado',
      significado:
        'Conjunto de acciones conscientes que realiza una persona para mantener y mejorar su salud física, mental y social.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Ciencia que adapta el trabajo a las capacidades y limitaciones del ser humano para mejorar la seguridad, salud y eficiencia.',
    },
    {
      termino: 'Evaluación médica periódica',
      significado:
        'Examen de salud regular que permite detectar precozmente alteraciones causadas por exposición a riesgos ocupacionales.',
    },
    {
      termino: 'Exposición ocupacional',
      significado:
        'Contacto repetido o constante de un trabajador con factores de riesgo derivados de su actividad laboral.',
    },
    {
      termino: 'Factores ambientales',
      significado:
        'Elementos del entorno laboral como ruido, iluminación, temperatura o agentes químicos que pueden afectar la salud del trabajador.',
    },
    {
      termino: 'GATISO',
      significado:
        'Guía de Atención Integral en Salud Ocupacional. Documento técnico que orienta la atención de enfermedades laborales específicas en Colombia.',
    },
    {
      termino: 'Hipoacusia',
      significado:
        'Pérdida parcial o total de la capacidad auditiva, frecuentemente inducida por exposición prolongada a ruido en el trabajo.',
    },
    {
      termino: 'Medicina del trabajo',
      significado:
        'Rama de la medicina encargada de promover y mantener el bienestar físico, mental y social de los trabajadores.',
    },
    {
      termino: 'Medicina preventiva',
      significado:
        'Especialidad enfocada en prevenir enfermedades, detectar riesgos tempranos y promover hábitos saludables en la población.',
    },
    {
      termino: 'PHVA',
      significado:
        'Ciclo de mejora continua Planear – Hacer – Verificar – Actuar, base del SG-SST.',
    },
    {
      termino: 'Prevención primaria',
      significado:
        'Conjunto de acciones dirigidas a evitar la aparición de enfermedades mediante el control de factores de riesgo.',
    },
    {
      termino: 'Riesgo psicosocial',
      significado:
        'Condiciones del entorno laboral que pueden afectar la salud mental del trabajador, como el estrés o el acoso.',
    },
    {
      termino: 'SG-SST',
      significado:
        'Sistema de Gestión de la Seguridad y Salud en el Trabajo. Conjunto de políticas, procesos y actividades para proteger la salud de los trabajadores.',
    },
    {
      termino: 'Vacunación',
      significado:
        'Estrategia preventiva que busca generar inmunidad frente a enfermedades infecciosas mediante la administración de biológicos.',
    },
  ],
}
