<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.mb-3.mb-lg-0
          .p-4.text-white
            p.mb-0(data-aos="fade-up") En Colombia, la Medicina Preventiva y del Trabajo ha evolucionado desde enfoques básicos centrados en el tratamiento de enfermedades profesionales, hasta convertirse en un componente esencial de la salud pública y de la gestión organizacional. Su propósito actual es integral: prevenir enfermedades, promover el bienestar, vigilar la salud laboral y garantizar entornos de trabajo seguros y resilientes.
    
    h2(data-aos="fade-left").mb-5 Orígenes y evolución histórica

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las primeras manifestaciones de preocupación por la salud de los trabajadores en Colombia surgieron a mediados del siglo XX, cuando industrias como la manufactura y los ingenios azucareros implementaron servicios médicos básicos. Estos consistían, por lo general, en enfermerías dirigidas por personal generalista, con el objetivo de garantizar la continuidad productiva y reducir ausencias por enfermedad.
        p(data-aos="fade-left") Durante las décadas de 1950 y 1960, se hizo evidente la necesidad de ampliar estos servicios debido a riesgos como la exposición a sustancias químicas, el manejo de maquinaria pesada y las largas jornadas laborales. Algunas empresas pioneras comenzaron a incorporar exámenes pre-ocupacionales y chequeos periódicos.
    
    .bg-full-width.bg-color-14
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-4(data-aos="fade-left").mb-3
              p.mb-0 La década de 1960 marcó un punto de inflexión gracias al impulso de la Organización Internacional del Trabajo (OIT) y la Organización Mundial de la Salud (OMS). Estas entidades promovieron estructuras normativas que incluían la vigilancia epidemiológica y la formación de equipos interdisciplinarios. Se implementaron las primeras encuestas nacionales de morbilidad ocupacional y se conformaron comités tripartitos (gobierno, empleadores y trabajadores) para analizar estadísticas y proponer medidas preventivas.
            p(data-aos="fade-left") El gran hito normativo fue la promulgación de la Ley 9 de 1979, que obligó a las empresas a estructurar programas de Medicina Preventiva y del Trabajo, liderados por profesionales en salud ocupacional. Esta ley estableció las competencias mínimas para enfermeras, médicos y coordinadores de higiene y seguridad industrial, e impulsó la creación de centros de investigación en universidades y laboratorios especializados. Desde entonces, Colombia ha fortalecido de manera progresiva su marco normativo:
    
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ley 9 de 1979
                p.text-center Marco integral para servicios de Medicina Preventiva y del Trabajo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Decreto 614 de 1984
                p.text-center Reglamentación de condiciones de higiene y seguridad industrial.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Resolución 1016 de 1989
                p.text-center Estructura del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ley 1562 de 2012
                p.text-center Actualización del SG-SST y fortalecimiento de la articulación institucional.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Resolución 0312 de 2019
                p.text-center Establece estándares mínimos para programas de salud ocupacional.

    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/5.png', alt='')
        
        .bg-full-width.bg-color-3.mb-5
          .px-4.px-md-5.py-4.text-white
            p.mb-0 Este marco permite la articulación efectiva entre Aseguradoras de Riesgos Laborales (ARL), Entidades Promotoras de Salud (EPS) y autoridades de inspección laboral, creando un sistema de aseguramiento y vigilancia integral para la población trabajadora.

   
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5
        h2(data-aos="fade-left") Retos y perspectivas
        p.mb-5 A pesar de los avances, persisten retos estructurales:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Alta informalidad laboral, que limita la cobertura.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Dispersión geográfica, que obstaculiza el acceso a servicios especializados.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Necesidad de incorporar la salud mental en los programas preventivos.
    
    p.mb-5 Al mismo tiempo, la revolución digital plantea oportunidades emergentes como la telemedicina ocupacional, el uso de wearable devices para monitoreo en tiempo real y la aplicación de big data para anticipar riesgos.

    .bg-color-4.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
              p La Medicina Preventiva y del Trabajo en Colombia se ha consolidado como un pilar de la sostenibilidad empresarial y del bienestar social. Su enfoque integral —basado en un marco legal robusto, estrategias de prevención, promoción de la salud y vigilancia epidemiológica— contribuye a construir entornos laborales seguros, productivos y resilientes.
              p.mb-0 Invertir en prevención no solo disminuye los costos por incapacidades y accidentes, sino que también fortalece la confianza, la motivación y la pertenencia de los trabajadores. En el futuro, será clave continuar innovando tecnológicamente, cerrar brechas de cobertura y priorizar la salud mental para avanzar hacia un modelo de trabajo más humano e inclusivo.
            .col-lg-3(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema1/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-13.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Marco Normativo Colombiano en Seguridad y Salud en el Trabajo
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Marco Normativo Colombiano en Seguridad y Salud en el Trabajo, donde se aborda la evolución y estructura legal de las normas que regulan la seguridad y salud en el ámbito laboral en Colombia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Marco Normativo Colombiano en Seguridad y Salud en el Trabajo
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Normatividad en materia psicosocial en Colombia
    
    p.mb-5 La salud mental de los trabajadores ha sido reconocida como un componente esencial del bienestar integral y la productividad laboral. En Colombia, el marco normativo ha avanzado significativamente para garantizar la prevención y el manejo de los riesgos psicosociales en los entornos laborales.

    h2(data-aos="fade-left").mb-5 Resolución 2646 de 2008

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          p Expedida por el Ministerio de la Protección Social, esta resolución constituye un hito normativo al establecer disposiciones para la identificación, evaluación, prevención, intervención y monitoreo de los factores de riesgo psicosocial en el trabajo, en el marco del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).
          p.mb-0 Su aplicación es obligatoria para todas las empresas y entidades públicas y privadas, sin distinción de tamaño o sector económico, y protege a todos los trabajadores, incluidos contratistas, cooperativas, asociaciones y aprendices.
        p(data-aos="fade-left") El objetivo general es proteger y promover la salud mental, entendida como un estado de bienestar donde el individuo es consciente de sus capacidades, puede afrontar tensiones normales, trabaja productivamente y contribuye a su comunidad.
    
    .bg-color-1.bg-full-width.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
              p Objetivos específicos:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Prevenir la exposición a factores de riesgo psicosocial.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Promover entornos laborales saludables.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Evaluar los riesgos con métodos científicos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Implementar acciones correctivas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Realizar seguimiento y control a largo plazo.
            .col-lg-4(data-aos="zoom-in").order-lg-1
              img.img-fluid(src='@/assets/curso/tema1/17.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    

    .bg-full-width.bg-color-8
      .px-4.px-md-5
        h2(data-aos="fade-left") Resolución 2764 de 2022
        p.mb-5 Esta resolución establece el protocolo obligatorio para evaluar los factores de riesgo psicosocial en el trabajo, incluyendo factores intralaborales, extralaborales y condiciones individuales del trabajador. Hace parte integral del SG-SST y responde a los desafíos contemporáneos del mundo laboral:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/18.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Auge del teletrabajo.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/19.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Intensificación de las jornadas laborales.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/20.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Impacto de la pandemia.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/21.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Aumento de enfermedades mentales vinculadas al estrés laboral.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Su implementación no solo responde a un mandato legal, sino que actúa como una herramienta estratégica para la protección de la salud mental, el aumento de la productividad y la construcción de ambientes laborales más humanos, sostenibles y resilientes.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Aplicación práctica y enfoque de prevención
    
    p.mb-5 En la práctica, el marco normativo colombiano en materia de Seguridad y Salud en el Trabajo (SST) exige que todas las empresas, independientemente de su tamaño o sector económico, implementen un Sistema de Gestión de la SST (SG-SST) adaptado a sus características y nivel de riesgo. Este sistema debe incluir actividades como:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-7.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La planeación de acciones preventivas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La evaluación de riesgos ocupacionales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La capacitación del personal.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La provisión de equipos de protección y condiciones laborales adecuadas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La auditoría periódica del sistema implementado.
        .bg-color-4.p-5(data-aos="fade-left")
          p.mb-0 El enfoque central es la prevención de riesgos laborales, entendidos como factores que pueden generar accidentes o enfermedades. Entre los principales se incluyen los riesgos químicos, físicos, biológicos, ergonómicos y psicosociales, que deben ser controlados mediante medidas técnicas, organizativas y administrativas.

    p.mb-5 Los Ministerios de Salud y Trabajo, junto con las Aseguradoras de Riesgos Laborales (ARL), cumplen funciones de inspección, asesoría y vigilancia. Estas entidades pueden imponer sanciones y exigir la mejora de los programas cuando detectan incumplimientos.

    h2(data-aos="fade-left") Ciclo integral del SG-SST
    p.mb-5 El sistema se basa en un ciclo de mejora continua que abarca tres componentes esenciales:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Prevenir
              p Identificar peligros, evaluar y controlar riesgos, mediante políticas, programas y actividades del SG-SST.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/25.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Proteger
              p Garantizar condiciones de trabajo seguras, instalaciones adecuadas y dotación de equipos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Corregir
              p Investigar incidentes y enfermedades laborales, aplicar medidas correctivas y actualizar los controles existentes.
    .bg-full-width.bg-color-13.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 El cumplimiento de este marco legal es obligatorio. Las empresas deben conservar documentación que evidencie su gestión, mientras que los trabajadores están obligados a colaborar activamente con el sistema.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Obligaciones en el SG-SST
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-3.text-white Empleador
            th.bg-color-3.text-white Trabajador
        tbody.bg-color-11
          tr
            td Formular y difundir una política de SST, asignando recursos humanos, técnicos y financieros.
            td Cumplir normas y procedimientos del SG-SST.
          tr
            td Elaborar un plan anual de trabajo en SST, con metas, controles e indicadores.
            td Utilizar correctamente los equipos de protección personal (EPP).
          tr
            td Garantizar la existencia y operación del Comité Paritario de SST (or Vigía, en empresas pequeñas).
            td Acatar señales, instrucciones y prácticas seguras en el lugar de trabajo.
          tr
            td Notificar y registrar accidentes y enfermedades laborales; implementar recomendaciones derivadas de inspecciones.
            td Reportar de inmediato cualquier situación de riesgo, accidente o anomalía.
          tr
            td Mantener condiciones higiénicas, dotar equipos seguros y capacitar permanentemente al personal.
            td Participar activamente en capacitaciones y en las medidas preventivas.


    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/27.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El ordenamiento colombiano combina leyes, decretos y resoluciones para asegurar que el SG-SST sea un proceso sistemático, obligatorio y con estándares mínimos claros. Este marco protege los derechos de los trabajadores, define responsabilidades legales para empleadores, trabajadores y ARL, y obliga a las organizaciones a adoptar prácticas preventivas en todo el país.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.minsalud.gov.co " target="_blank" rel="noopener noreferrer") Ministerio de Salud y Protección Social (Colombia). (2022). Guía para la promoción de la salud y prevención de enfermedades en el entorno laboral. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/lineamientos-acciones-colectivas.pdf " target="_blank" rel="noopener noreferrer") Ministerio de Salud y Protección Social. (2013). Lineamientos para la implementación de acciones colectivas en promoción de la salud y prevención de la enfermedad. Bogotá D.C., Colombia. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ins.gov.co " target="_blank" rel="noopener noreferrer") https://www.ins.gov.co  
        


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=O4EooN2AQeo " target="_blank" rel="noopener noreferrer") Catomedia UCSG. (2025, 7 de julio). ¿Cómo prevenir las enfermedades e importancia de la salud ocupacional? -  Ricardo Loaiza [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
