<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Herramientas de evaluación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg.mb-3.mb-lg-0.order-lg-1
          .p-4.text-white
            p.mb-0(data-aos="fade-up") Las herramientas de evaluación en salud laboral y mental son esenciales para monitorear, medir y mejorar el bienestar de los empleados en las organizaciones. Entre las más utilizadas se encuentran los cuestionarios estandarizados, los KPI de salud y el <em>Balanced Scorecard </em> aplicado a la Seguridad y Salud en el Trabajo (SST). Cada herramienta ofrece una visión integral y permite tomar decisiones informadas para promover entornos laborales seguros y saludables.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Cuestionarios estandarizados
    
    p.mb-5 Los cuestionarios estandarizados son herramientas psicométricas diseñadas y validadas para medir de forma objetiva distintas dimensiones de la salud mental y física de los empleados. Su fiabilidad (consistencia interna) y validez (de contenido, criterio y constructo) garantizan resultados reproducibles y precisos, permitiendo comparaciones fiables entre grupos de trabajo, periodos temporales o unidades organizativas. Entre los instrumentos más reconocidos se encuentran:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          div(numero="1" titulo="GHQ (<em>General Health Questionnaire</em>)") 
            p Detecta malestar emocional y síntomas iniciales de ansiedad y depresión.
          div(numero="2" titulo="BDI (<em>Beck Depression Inventory</em>)")
            p Cuantifica la severidad de síntomas depresivos.
          div(numero="3" titulo="Cuestionario de Estrés Laboral")
            p Evalúa cargas y demandas del puesto, incluyendo presión de tiempo y ambigüedad de rol.
          div(numero="4" titulo="DASS-21 (<em>Depression Anxiety Stress Scales</em>)") 
            p Diferencia entre depresión, ansiedad y estrés de forma específica.
          div(numero="5" titulo="WHO-5 <em>Well-Being Index</em>") 
            p Mide el bienestar subjetivo con cinco ítems breves.
    
    p.mb-5 Su aplicación puede realizarse en papel, en plataformas digitales seguras o mediante apps corporativas, facilitando la monitorización periódica de la plantilla y la detección temprana de señales de alarma, como:

    .bg-color-1.bg-full-width.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Altos niveles de ansiedad.
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Episodios depresivos incipientes.
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Síntomas físicos somáticos relacionados con estrés laboral (cefaleas, tensión muscular, trastornos digestivos).
              p La recogida sistemática de datos no solo permite diagnosticar el estado sanitario de los empleados, sino también identificar grupos de riesgo, compararlos con <em>benchmarks</em> sectoriales y priorizar intervenciones preventivas o formativas.
            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema4/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Gracias a su estandarización, los resultados pueden integrarse en sistemas de gestión de RR. HH. y salud ocupacional, generando informes detallados que incluyen tendencias, análisis por departamento y evolución temporal, útiles para diseñar planes de mejora como:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 01
              p.mb-0 Programas de resiliencia.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 02
              p.mb-0 Talleres de manejo del estrés.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 03
              p.mb-0 Ajustes ergonómicos personalizados.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4.text-white
        p.mb-0 Finalmente, las reevaluaciones periódicas permiten medir el impacto de estas intervenciones, fortaleciendo la cultura organizacional orientada al cuidado integral de las personas y la optimización del rendimiento laboral.

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] KPI de Salud
    
    .bg-color-2.bg-full-width.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
              p Los Indicadores Clave de Desempeño (KPI) en Seguridad y Salud en el Trabajo (SST) son métricas esenciales para:
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Medir la eficacia del sistema de gestión.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Detectar áreas de mejora.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Asegurar el cumplimiento de normas internacionales y normativa local.
              p Una estrategia de KPI en SST debe sustentarse en tres ejes principales:
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cumplimiento normativo.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Gestión de riesgos y prevención.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mejora continua y cultura de seguridad.
              p Estos indicadores se integran con los requisitos de ISO 45001, ISO 45003, la Resolución 0312 de 2019 y el Decreto 1072 de 2015 en Colombia.
            .col-lg-4(data-aos="zoom-in").order-lg-1
              img.img-fluid(src='@/assets/curso/tema4/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Principales KPI de SST
    p.mb-5 A continuación, se presentan los principales KPI organizados por categoría, lo que facilita su identificación, monitoreo y análisis comparativo:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/8.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          div(numero="1" titulo="Cumplimiento normativo") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>% de cumplimiento de requisitos legales</b>: Mide obligaciones SST cumplidas vs. identificadas (Resolución 0312/2019 y Decreto 1072/2015). Un valor cercano al 100 % indica actualización de la matriz legal.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>N.º de no conformidades en auditorías</b>: Hallazgos en auditorías internas/externas frente a ISO 45001 e ISO 45003. Su disminución refleja la mejora del sistema.
          div(numero="2" titulo="Gestión de riesgos y prevención")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Tasa de frecuencia de accidentes</b>: (Accidentes ÷ Horas trabajadas) × 1 000 000. Refleja exposición a incidentes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Tasa de gravedad de accidentes</b>: (Días perdidos ÷ Horas trabajadas) × 1 000 000. Cuantifica el impacto operativo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>% de evaluación de riesgos psicosociales</b>: Cobertura de evaluaciones realizadas vs. planificadas según ISO 45003 (> 90 % ideal).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>N.º de acciones correctivas/preventivas implementadas</b>: Evalúa eficacia para cerrar brechas y evitar recurrencias.
          div(numero="3" titulo="Capacitación y competencia")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>% de trabajadores capacitados en SST</b>: Empleados con formación completada ÷ Total de empleados × 100. Cumple Resolución 0312/2019 e ISO 45001
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Horas de formación en riesgos psicosociales</b>: Total de horas dedicadas a sensibilización sobre bienestar mental y burnout. Se recomiendan ≥ 4 h por empleado/año (ISO 45003).
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          div(numero="4" titulo="Monitoreo de la salud de los trabajadores") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Cobertura de exámenes médicos periódicos</b>: Exámenes realizados ÷ Programados × 100. Cumple Decreto 1072/2015 y Resolución 0312/2019.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Tasa de ausentismo por causas laborales</b>: Días de ausencia por accidente/enfermedad ÷ Días laborables × 100. Refleja el impacto de medidas preventivas.
          div(numero="5" titulo="Mejora continua y cultura de seguridad")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Índice de reporte de condiciones subestándar</b>: Riesgos reportados ÷ Total empleados × 100. Fomenta cultura de reporte proactivo (ISO 45001, art. 5.4).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Satisfacción y percepción de la gestión SST</b>: Resultado medio de encuestas internas (≥ 4/5 indica cultura sólida).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Revisión de la Alta Dirección</b>: Frecuencia de reuniones documentadas (ISO 45001, art. 9.3). Mínimo semestral asegura alineación estratégica.
  
    h2(data-aos="fade-left") Interpretación y utilidad de los KPI
    p.mb-5 El seguimiento de estos KPI permite a las organizaciones:

    .bg-color-4.bg-full-width.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cumplir con ISO 45001 y 45003.
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Garantizar la observancia normativa local (Resolución 0312/2019 y Decreto 1072/2015).
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Integrar indicadores <em>lagging</em> (accidentes, ausentismo) con indicadores <em>leading</em> (formación, reportes, cumplimiento legal).
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0  
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Integrar indicadores <em>lagging</em> (accidentes, ausentismo) con indicadores leading (formación, reportes, cumplimiento legal).
            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema4/10.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] <em>Balanced Scorecard </em> en SST

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El <em><em>Balanced Scorecard </em></em> (BSC) aplicado a Seguridad, Salud en el Trabajo (SST) y Medio Ambiente (HSE) constituye una plataforma de gestión estratégica que trasciende la mera contabilidad de costos o accidentes, al integrar indicadores financieros y no financieros en cuatro perspectivas interrelacionadas. Su objetivo es ofrecer una visión global del desempeño en SST, alineando los objetivos de salud laboral con la estrategia de negocio para que cada iniciativa preventiva y de bienestar se convierta en un motor de productividad y sostenibilidad.
        p(data-aos="fade-left") Las cuatro perspectivas del <em><em>Balanced Scorecard </em></em> aplicadas a Seguridad y Salud en el Trabajo permiten integrar indicadores financieros y no financieros en un marco estratégico que facilita la toma de decisiones basadas en evidencia: 
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Financiera
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Costo total de incidentes: Directos (gastos médicos, indemnizaciones) e indirectos (horas no trabajadas, reemplazos, multas). 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Retorno de inversión (ROI) de programas de prevención y ergonomía. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Ahorros generados por la optimización de recursos.
              p <b>Impacto</b>: Evidencia económica que demuestra cómo la SST fortalece la competitividad organizacional.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Clientes (empleados internos)
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Satisfacción con servicios de salud ocupacional. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Net Promoter Score interno (NPS): Disposición a recomendar la empresa como un lugar seguro y saludable.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Tiempo de respuesta ante solicitudes de intervención ergonómica, médica o psicosocial. 
              p <b>Impacto</b>: Refleja la percepción real de bienestar y permite detectar oportunidades de mejora en la atención.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Procesos Internos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cobertura de evaluaciones de riesgo: físico, químico, ergonómico y psicosocial.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cumplimiento de inspecciones y auditorías. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Acciones correctivas y preventivas ejecutadas a tiempo. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Observancia de normativas: ISO 45001 e ISO 45003.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Indicadores de salud mental: Evaluaciones psicosociales realizadas, reportes de acoso o estrés laboral, talleres completados, uso de apoyo psicológico, evolución del índice de burnout.  
              p <b>Impacto</b>: Evalúa la eficacia operativa del sistema SST y su enfoque integral de prevención.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aprendizaje y Crecimiento
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Horas de capacitación en prevención de riesgos y manejo del estrés.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Porcentaje de líderes certificados en liderazgo seguro.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Participación en programas de bienestar: Mindfulness, pausas activas, ergonomía.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Iniciativas de innovación en salud: Proyectos piloto de <em>job crafting</em>.  
              p <b>Impacto</b>: Fortalece el capital humano y la cultura preventiva, impulsando la mejora continua.
    
    .bg-full-width.bg-color-14
      .px-4.px-md-5.pb-md-3
        p.mb-5 La implementación efectiva del BSC en SST sigue cinco fases interrelacionadas:
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/15.svg' , style="max-width: 90px" alt='AvatarTop').mx-auto.mb-3
                h5.text-center 1. Diagnóstico y alineación estratégica
                p.text-center Evaluación de la madurez del sistema SST y creación de un mapa estratégico HSE que vincule objetivos prioritarios con las cuatro perspectivas del BSC.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/16.svg' , style="max-width: 90px" alt='AvatarTop').mx-auto.mb-3
                h5.text-center 2. Diseño de indicadores SMART
                p.text-center Definición de KPIs con responsables, métodos de medición y umbrales de alerta tipo semáforo (rojo–ámbar–verde) para activar acciones correctivas inmediatas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/17.svg' , style="max-width: 90px" alt='AvatarTop').mx-auto.mb-3
                h5.text-center 3. Implementación de plataformas de seguimiento
                p.text-center Integración de software como ERP, sistemas de riesgos y e-learning para alimentar <em>dashboards</em> interactivos, favoreciendo la transparencia y la rendición de cuentas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/18.svg' , style="max-width: 90px" alt='AvatarTop').mx-auto.mb-3
                h5.text-center 4. Revisión y mejora continua
                p.text-center Realización de reuniones trimestrales para presentar avances, ajustar metas y rediseñar iniciativas, como ampliar pausas activas o incrementar horas de capacitación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/19.svg' , style="max-width: 90px" alt='AvatarTop').mx-auto.mb-3
                h5.text-center 5. Cultura y sostenibilidad
                p.text-center Comunicación de logros y retos, reconocimiento de equipos destacados, participación en comités mixtos y vinculación de métricas SST a sistemas de recompensa.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema4/14.png', alt='')
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/20.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 De este modo, el BSC deja de ser solo una herramienta informativa para convertirse en un motor de transformación cultural. Los empleados comprenden cómo acciones diarias —reportar riesgos, participar en talleres de resiliencia o cumplir protocolos ergonómicos— impactan en la estrategia empresarial y en la salud colectiva. Así, la SST se consolida como una palanca de productividad, innovación y sostenibilidad, generando un círculo virtuoso donde el bienestar individual y colectivo fortalece la competitividad y la reputación corporativa.
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          p.mb-0 La implementación de cuestionarios estandarizados, KPI específicos y el <em>Balanced Scorecard </em> permite a las organizaciones detectar riesgos, promover la salud mental y física, y consolidar ambientes laborales saludables y productivos mediante intervenciones sostenibles y estratégicamente alineadas.
    
        
        

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span OMS (Organización Mundial de la Salud). (2022). Guía de la OMS sobre la salud mental en el trabajo. Organización Mundial de la Salud

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rJqlILI1diM" target="_blank" rel="noopener noreferrer") Facultad de Estudios a Distancia UMNG. (2021, 13 de julio). <em>Balanced Scorecard </em> [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál fue la primera ley en Colombia que incorporó un título específico sobre salud ocupacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Decreto 1072 de 2015',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Resolución 1016 de 1989',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ley 9 de 1979',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Resolución 0312 de 2019',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué estrategia preventiva está diseñada específicamente para reducir el riesgo de hipoacusia laboral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Resolución 2764 de 2022',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'GATISO Ruido',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decreto 614 de 1984',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evaluación médica periódica',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué tipo de evaluación médica se realiza al finalizar la relación laboral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluación de retiro',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Evaluación periódica',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Evaluación pre-ocupacional',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evaluación por cambio de ocupación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es el objetivo principal del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Garantizar la contratación del personal de salud ocupacional',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aumentar la productividad empresarial',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Prevenir lesiones y enfermedades causadas por condiciones laborales',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Administrar los recursos financieros de las empresas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué componente NO forma parte de las estrategias ergonómicas comunes en el entorno laboral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sillas ajustables',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Higiene postural',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Uso de tapabocas certificados',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Pausas activas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
