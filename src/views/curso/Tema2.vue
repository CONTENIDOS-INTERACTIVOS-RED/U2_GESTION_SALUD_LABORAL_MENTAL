<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Estrategias Preventivas ante Riesgos Ocupacionales '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el contexto actual del trabajo, donde las exigencias físicas, mentales y ambientales evolucionan constantemente, la prevención de riesgos ocupacionales es una prioridad esencial para garantizar la salud, seguridad y bienestar de los trabajadores.
    
        .bg-color-4.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las organizaciones responsables no se limitan a cumplir con la normatividad vigente, sino que adoptan enfoques integrales y proactivos dentro del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) para anticiparse a daños potenciales derivados de la actividad laboral.
        p A continuación, se presenta un video que expone los tres componentes fundamentales de la prevención en el entorno laboral, con especial énfasis en la ergonomía como eje estratégico para la reducción de riesgos y la promoción del bienestar ocupacional.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ow6x-fC30w0?si=1DMl0jtT0f8Ft8yU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Estrategias ergonómicas comunes en el entorno laboral

    p.mb-5 Estas son algunas de las prácticas ergonómicas más utilizadas actualmente en entornos laborales formales:

    .bg-full-width.bg-color-14
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Diseño de estaciones de trabajo
              p.mb-0.text-center Escritorios ajustables, sillas ergonómicas, ubicación correcta de pantallas y periféricos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Rotación de tareas
              p.mb-0.text-center Previene la sobrecarga por movimientos repetitivos y posturas mantenidas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Capacitación en higiene postural
              p.mb-0.text-center Enseña técnicas de postura saludable y promueve pausas activas.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Evaluaciones ergonómicas periódicas
              p.mb-0.text-center Realizadas por fisioterapeutas o especialistas para ajustar condiciones de trabajo.
        
        p.mb-5 En Colombia, el enfoque ergonómico está respaldado por normas como:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Resolución 0312 de 2019
              p Establece estándares mínimos del SG-SST, incluyendo la ergonomía.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Decreto 1072 de 2015
              p Obliga a las empresas a identificar y gestionar peligros biomecánicos, como posturas forzadas, sobreesfuerzos y movimientos repetitivos.
      
    .bg-full-width.bg-color-13.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estas disposiciones consolidan la ergonomía como un eje esencial de la prevención de riesgos ocupacionales y de la promoción de entornos laborales seguros.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Control de Factores Ambientales: Proteger de agentes físicos, químicos y biológicos
    
    p.mb-5 El entorno laboral puede contener múltiples elementos que, si no se controlan, afectan la salud del trabajador. Estos se clasifican en tres grandes grupos:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Físicos
              p.mb-0 Ruido, iluminación deficiente, vibraciones, temperaturas extremas, radiaciones.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Químicos
              p.mb-0 Sustancias tóxicas, vapores, gases, polvos.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Biológicos
              p.mb-0 Virus, bacterias, hongos y otros microorganismos.
    
    h2(data-aos="fade-left").mb-5 Importancia del control ambiental

    .bg-color-1.bg-full-width.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
              p Mantener controlados estos factores ofrece beneficios clave:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Prevención de enfermedades como hipoacusia, dermatitis, intoxicaciones, alergias o infecciones respiratorias.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Disminución de accidentes por condiciones inadecuadas de temperatura, iluminación o ventilación.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cumplimiento de la legislación y garantía de un entorno seguro para todos.
            .col-lg-4(data-aos="zoom-in").order-lg-1
              img.img-fluid(src='@/assets/curso/tema2/12.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Principales estrategias preventivas
    p.mb-5 Estas son las acciones más utilizadas para reducir riesgos ambientales en el lugar de trabajo:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          div(numero="1" titulo="Monitoreo ambiental periódico") 
            p Mediciones técnicas de ruido, calidad del aire, temperatura, iluminación, etc.
          div(numero="2" titulo="Ventilación adecuada")
            p Natural o mecánica, que asegure la renovación del aire.
          div(numero="3" titulo="Control de emisiones contaminantes")
            p Uso de extractores localizados y filtros adecuados.
          div(numero="4" titulo="Manejo seguro de sustancias químicas") 
            p Según fichas SDS y normativa vigente.
          div(numero="5" titulo="Uso obligatorio de EPP") 
            p Cuando el riesgo no puede eliminarse en la fuente o el medio.

    h2(data-aos="fade-left") GATISO Ruido: Estrategia nacional para prevenir la hipoacusia ocupacional
    p.mb-5 La exposición constante a ruido es un riesgo auditivo frecuente en muchas actividades laborales. La GATISO Ruido es una guía técnica oficial diseñada para enfrentar este riesgo.

    .bg-color-4.bg-full-width.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
              p Objetivos principales
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Prevenir la hipoacusia inducida por ruido (HIR).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Orientar acciones tempranas y eficaces.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Promover entornos laborales auditivamente saludables.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Establecer estándares para todos los actores del sistema de riesgos laborales.
            .col-lg-4(data-aos="zoom-in").order-lg-1
              img.img-fluid(src='@/assets/curso/tema2/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
   

    .bg-full-width.bg-color-8
      .px-4.px-md-5
        h2(data-aos="fade-left") Evaluación del riesgo por exposición a ruido
        p.mb-5 Estas técnicas permiten conocer los niveles de exposición en cada puesto:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5 Dosimetría de ruido
                p.mb-0 Mide el nivel personal de presión sonora.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5 Mapeo sonoro ambiental
                p.mb-0 Detecta áreas con mayor concentración de ruido.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5 Clasificación de zonas
                p.mb-0 Define zonas seguras, de precaución y de peligro.
    
    .bg-full-width.bg-color-13.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Según la Resolución 8321 de 1983, el límite permisible es de 85 dB(A) durante una jornada de 8 horas.
    
    h2(data-aos="fade-left") Vigilancia de la salud auditiva
    p.mb-5 Estas acciones permiten monitorear y proteger la audición del trabajador expuesto:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Audiometrías periódicas
              p.mb-0 Al ingreso, de forma regular, después de exposición y al egreso.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Seguimiento médico especializado
              p.mb-0 Evaluación médica cuando se detectan pérdidas auditivas.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Clasificación de resultados auditivos
              p.mb-0 Según criterios técnicos de la guía.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Registro y análisis de casos
              p.mb-0 Para generar alertas e intervenir a tiempo.
    
    h2(data-aos="fade-left") Intervenciones técnicas y organizacionales
    p.mb-5 Se aplican controles desde la ingeniería, la administración y la formación:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/22.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          div(numero="1" titulo="Ingeniería") 
            p Aislamiento acústico, mantenimiento, sustitución de maquinaria ruidosa.
          div(numero="2" titulo="Administrativo")
            p Rotación, descansos auditivos, límites de exposición.
          div(numero="3" titulo="Capacitación")
            p Información clara sobre el riesgo y el uso correcto de protectores.

    .bg-full-width.bg-color-8
      .px-4.px-md-5
        h2(data-aos="fade-left") Dotación y uso de elementos de protección auditiva (EPA)
        p.mb-5 El uso de protectores auditivos debe cumplir con los siguientes criterios:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/23.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5 Certificación técnica del producto
                p.mb-0 Asegura la eficacia real del protector.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/24.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5 Compatibilidad con el entorno de trabajo
                p.mb-0 Evita interferencias con otras tareas o equipos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/25.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5 Mantenimiento y reposición adecuados
                p.mb-0 Evita que se deterioren o pierdan efectividad.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/26.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5 Capacitación al usuario
                p.mb-0 Promueve un uso correcto, constante y seguro.
    
    h2(data-aos="fade-left") Registro y reporte de casos
    p.mb-5 Cuando se detectan casos de hipoacusia laboral, deben cumplirse estos pasos:

    .bg-color-1.bg-full-width.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Reportar el caso sospechoso o confirmado a la ARL.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Clasificar la enfermedad como laboral si cumple con los criterios clínicos, epidemiológicos y ocupacionales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Incluir al trabajador en procesos de rehabilitación o reubicación si es necesario.
            .col-lg-4(data-aos="zoom-in").order-lg-1
              img.img-fluid(src='@/assets/curso/tema2/27.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-14
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Beneficios de implementar la GATISO Ruido
        p.mb-5 La adopción efectiva de esta guía ofrece múltiples ventajas:
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/29.png' alt='AvatarTop').mx-auto.mb-3
                p.text-center Reducción de la hipoacusia ocupacional.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/30.png' alt='AvatarTop').mx-auto.mb-3
                p.text-center Menor ausentismo e incapacidad laboral.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/31.png' alt='AvatarTop').mx-auto.mb-3
                p.text-center Prevención de sanciones legales y económicas.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/32.png' alt='AvatarTop').mx-auto.mb-3
                p.text-center Mejora en la calidad de vida del trabajador.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/33.png' alt='AvatarTop').mx-auto.mb-3
                p.text-center Mayor eficacia del SG-SST en las organizaciones.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/28.png', alt='')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Evaluaciones Médicas Periódicas: Vigilancia de la salud del trabajador

    p.mb-5 Las evaluaciones médicas periódicas permiten realizar un seguimiento sistemático del estado de salud del trabajador para detectar precozmente alteraciones derivadas de la exposición a factores de riesgo ocupacional. Son una herramienta clave de vigilancia epidemiológica individual y colectiva, y su aplicación es obligatoria según la legislación colombiana.

    h2(data-aos="fade-left") Tipos de evaluaciones médicas
    p.mb-5 A continuación se presentan los distintos momentos en los que deben realizarse evaluaciones médicas ocupacionales:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/34.png")
            .col-lg-7
              h5 De ingreso
              p Verificar que el trabajador está apto para asumir sus funciones sin poner en riesgo su salud ni la de otros. Detectar restricciones o condiciones preexistentes.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/35.png")
            .col-lg-7
              h5 Periódicas programadas
              p Supervisar la exposición a riesgos y detectar afectaciones tempranas. Se ajustan a edad, tipo y duración de exposición.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/36.png")
            .col-lg-7
              h5 Por cambio de ocupación
              p Evaluar si el trabajador puede asumir nuevas funciones sin riesgo para su salud. Se aplican cuando hay cambios en tareas o entorno..
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/37.png")
            .col-lg-7
              h5 De retiro (egreso)
              p Documentar el estado de salud al finalizar la relación laboral. Obligatoria según el Código Sustantivo del Trabajo.

    h2(data-aos="fade-left").mb-5 Beneficios clave

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/38.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Estas evaluaciones no solo cumplen un requisito legal, sino que también ofrecen múltiples ventajas:
        .bg-color-12.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Prevención y diagnóstico temprano de enfermedades laborales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Seguimiento efectivo a trabajadores expuestos a factores de alto riesgo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Soporte técnico para adecuar tareas y ambientes a las condiciones individuales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Base objetiva para decisiones en salud laboral, reubicación y compensación
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 La Resolución 1843 de 2025 regula estas evaluaciones en Colombia, definiendo requisitos técnicos, perfiles profesionales y condiciones éticas obligatorias para su correcta realización.

    h2(data-aos="fade-left") Integración de estrategias dentro del SG-SST
    p Las estrategias preventivas no deben aplicarse de forma aislada. La ergonomía, el control ambiental y las evaluaciones médicas periódicas forman un conjunto coherente dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).

    p.mb-5 Estas estrategias se alinean con el ciclo de mejora continua (PHVA):

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/39.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="20%" y="31.5%" numero="+")
                h5 Planear
                p Diagnóstico de condiciones de salud y riesgos laborales.
    
              .bg-color-white.box-shadow.p-3(x="77%" y="26%" numero="+")
                h5 Hacer
                p Ejecución de medidas: ergonomía, controles ambientales, vigilancia médica.
    
              .bg-color-white.box-shadow.p-3(x="77%" y="72%" numero="+")
                h5 Verificar
                p Evaluación de resultados: análisis de indicadores, seguimiento a trabajadores.
    
              .bg-color-white.box-shadow.p-3(x="25%" y="76%" numero="+")
                h5 Actuar
                p Ajustes, correcciones y mejora continua del SG-SST.

    p.mb-5 Las estrategias preventivas ante los riesgos ocupacionales constituyen pilares fundamentales para la protección de la salud de los trabajadores y la sostenibilidad operativa de las organizaciones.

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/40.png', alt='')
        .col-lg.mb-3.mb-lg-0
          .p-4.text-white
            p(data-aos="fade-up") La aplicación eficaz de medidas ergonómicas, el control ambiental y la ejecución sistemática de evaluaciones médicas permite anticipar efectos nocivos del trabajo y transformar el entorno laboral en un espacio seguro, saludable y productivo.
            p.mb-0 Más allá del cumplimiento legal, estas acciones reflejan un compromiso ético con la vida, el bienestar y la dignidad del ser humano en el trabajo. 



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.paho.org/es/documentos/modelo-atencion-integral-salud-mias-colombia " target="_blank" rel="noopener noreferrer") Organización Panamericana de la Salud – Colombia. (2019). Modelo de Atención Integral en Salud – MIAS: Avances en Colombia. Bogotá D.C.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.cdc.gov/prevention  " target="_blank" rel="noopener noreferrer") https://www.cdc.gov/prevention 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=DuBPa8hG6eI" target="_blank" rel="noopener noreferrer") EXÁMENES MÉDICOS OCUPACIONALES PROTEGER IPS. (2019, 2 de febrero). Profesiograma - Examenes medicos ocupacionales [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
