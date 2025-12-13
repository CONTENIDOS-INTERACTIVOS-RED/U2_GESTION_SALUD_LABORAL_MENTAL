<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Diseño de programas de medicina preventiva'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          p La medicina preventiva es un pilar fundamental de la salud pública y ocupacional. Su principal objetivo es anticiparse a la aparición de enfermedades, reducir sus complicaciones y fomentar hábitos de vida saludables.
          p.mb-0(data-aos="fade-left") En el ámbito laboral, un programa de medicina preventiva bien diseñado permite proteger la salud de los trabajadores, reducir el ausentismo, mejorar la productividad y contribuir al bienestar general.
        p Un enfoque efectivo debe ser integral, continuo y adaptado a los riesgos y características de cada población laboral. A continuación, se presentan los componentes esenciales de un programa de este tipo.
    
        

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Vacunación: Protección frente a enfermedades transmisibles
    
    p.mb-5 La vacunación en el entorno laboral busca prevenir la propagación de enfermedades infecciosas, especialmente en sectores de alto contacto o riesgo biológico (salud, alimentos, educación, transporte). Este componente se diseña de acuerdo con los siguientes elementos:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          div(numero="1" titulo="Diagnóstico inicial") 
            p Identificación de riesgos epidemiológicos según el sector y exposición laboral.
          div(numero="2" titulo="Esquemas recomendados")
            p Hepatitis B, tétanos-difteria, influenza estacional, COVID-19, fiebre amarilla.
          div(numero="3" titulo="Registro y seguimiento")
            p Carnet de vacunación actualizado y alertas para refuerzos.
          div(numero="4" titulo="Alianzas institucionales") 
            p Coordinación con EPS, IPS o secretarías de salud para jornadas de vacunación.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Charlas Educativas: Promoción del autocuidado
    
    p.mb-5 La educación en salud permite modificar conductas de riesgo y fomentar el autocuidado. Las charlas mejoran el ambiente laboral, promueven estilos de vida saludables y fortalecen la cultura preventiva. Los temas más abordados en estas charlas incluyen:

    .bg-color-1.bg-full-width.p-4.px-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Higiene personal y del entorno laboral.
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Prevención del consumo de alcohol, tabaco y sustancias psicoactivas.
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Manejo del estrés y promoción de la salud mental.
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Actividad física y pausas activas.
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Autoexamen y signos de alarma (cáncer, diabetes, hipertensión).
                li.mb-2.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Ergonomía básica y prevención de lesiones.
            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema3/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    p.mb-5 El diseño del componente educativo incluye los siguientes pasos:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Diagnóstico de necesidades
              p.mb-0 Encuestas de percepción, ausentismo y morbilidad.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Plan anual de formación
              p.mb-0 Cronograma temático con fechas, responsables y recursos.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Metodologías participativas
              p.mb-0 Talleres, dramatizaciones, juegos, videos y otras técnicas vivenciales.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-5.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Evaluación de impacto
              p.mb-0 Encuestas de satisfacción y medición del conocimiento adquirido.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Orientación nutricional: alimentación saludable en el trabajo
    
    p.mb-5 Las ECNT como la hipertensión arterial, diabetes mellitus, dislipidemias, enfermedades cardiovasculares y ciertos tipos de cáncer son principales causas de morbilidad y mortalidad laboral. Su detección temprana mejora la calidad de vida y reduce incapacidades. Las estrategias más efectivas en el entorno laboral incluyen:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 Tamizajes periódicos
              p Control de presión arterial, glucemia, colesterol, IMC, entre otros.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7
              h5 Campañas de salud
              p Jornadas educativas y diagnósticas con especialistas o entidades aliadas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5 Seguimiento médico individual
              p Atención a trabajadores con factores de riesgo o diagnóstico confirmado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5 Programas de ejercicio físico
              p Clases dirigidas, convenios con gimnasios, caminatas corporativas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5 Apoyo psicosocial
              p Atención a estrés, ansiedad y depresión, factores que inciden en el desarrollo de ECNT.

    h2(data-aos="fade-left") Integración con el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)
    p.mb-5 Todo programa de medicina preventiva debe articularse con el SG-SST, en cumplimiento de la normativa colombiana. Su implementación debe ser planificada bajo el ciclo PHVA y con indicadores de proceso y resultado para su evaluación continua. Normativa aplicable:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          div(numero="1" titulo="Resolución 0312 de 2019") 
            p Define los estándares mínimos del SG-SST.
          div(numero="2" titulo="Decreto 1072 de 2015")
            p Decreto Único Reglamentario del sector trabajo.
          div(numero="3" titulo="Ley 1562 de 2012")
            p Reforma al Sistema General de Riesgos Laborales e integración con la salud preventiva.

    .bg-full-width.bg-color-14
      .px-4.px-md-5
        p Relación con el ciclo PHVA:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/14.svg" alt="" style="width: 90px")
              h5.text-center Planear
              p.mb-0.text-center Diagnóstico de necesidades y diseño del programa.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/15.svg" alt="" style="width: 90px")
              h5.text-center Hacer
              p.mb-0.text-center Ejecución de intervenciones: vacunación, charlas, tamizajes, seguimiento.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/16.svg" alt="" style="width: 90px")
              h5.text-center Verificar
              p.mb-0.text-center Evaluación de impacto, indicadores, encuestas y seguimiento de casos.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/17.svg" alt="" style="width: 90px")
              h5.text-center Actuar
              p.mb-0.text-center Ajustes y mejora continua de estrategias y actividades implementadas.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4.text-white
        p.mb-0 El diseño de un programa de medicina preventiva en el entorno laboral no solo responde al cumplimiento legal, sino que representa una inversión estratégica en el bienestar y sostenibilidad del talento humano.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4 Al incorporar componentes como la vacunación, las charlas educativas, la orientación nutricional y la prevención de ECNT, las organizaciones:
        .bg-color-7.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fortalecen la cultura del autocuidado.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Disminuyen el riesgo de enfermedades y ausentismo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Promueven una fuerza laboral más saludable, productiva y comprometida.
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 En última instancia, prevenir es más que una obligación: es proteger lo más valioso de una organización: su gente.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.supersalud.gov.co " target="_blank" rel="noopener noreferrer") Superintendencia Nacional de Salud. (2019). Informe anual de gestión en salud pública y vigilancia del sistema general de seguridad social en salud. Bogotá D.C., Colombia. 

 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.paho.org/es/temas/enfermedades-no-transmisibles " target="_blank" rel="noopener noreferrer") https://www.paho.org/es/temas/enfermedades-no-transmisibles  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=MtGFflaH7bE " target="_blank" rel="noopener noreferrer") EXÁMENES MÉDICOS OCUPACIONALES PROTEGER IPS. (2019, 1 de febrero). Riesgo psicosocial  -  Pruebas Psicologicas [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
