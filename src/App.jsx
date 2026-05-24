import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

export default function WeddingInvitation() {

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // PARALLAX
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 250]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );

  // ANIMATIONS
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -120,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 120,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
      },
    },
  };

  const zoomIn = {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.1,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-[#f9fcfb] overflow-hidden text-[#4f5d5a]">

      {/* ================= HERO ================= */}

      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden"
      >

        {/* BACKGROUND */}
        <motion.img
          style={{ y: backgroundY }}
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          className="
            absolute
            inset-0
            w-full
            h-[120%]
            object-cover
            scale-110
          "
        />

        <div className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#7dbfc555]
          via-[#f7c8d055]
          to-[#d8efe355]
        " />

        {/* FLOATING LIGHTS */}
        <div className="absolute inset-0 overflow-hidden">

          {[...Array(18)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
              }}
              className="
                absolute
                rounded-full
                bg-white/30
                blur-2xl
              "
              style={{
                width: `${20 + index * 4}px`,
                height: `${20 + index * 4}px`,
                left: `${index * 5}%`,
                top: `${10 + index * 3}%`,
              }}
            />
          ))}

        </div>

        {/* HERO CONTENT */}
        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="
            relative
            z-20
            h-full
            flex
            flex-col
            justify-center
            items-center
            text-center
            text-white
            px-6
          "
        >

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0px",
            }}
            animate={{
              opacity: 1,
              letterSpacing: "8px",
            }}
            transition={{
              duration: 2,
            }}
            className="
              uppercase
              tracking-[8px]
              text-sm
              mb-8
            "
          >
            Nuestra Boda
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="
              text-6xl
              md:text-[110px]
              leading-none
              font-serif
            "
          >
            Helder
            <br />

            <span className="italic text-[#ffe3ea]">
              &
            </span>

            <br />

            Miriam
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
            }}
            className="
              mt-10
              text-xl
              tracking-[4px]
            "
          >
            20 DE JUNIO 2026
          </motion.p>

        </motion.div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="py-36 px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >

          <p className="
            uppercase
            tracking-[6px]
            text-[#88b7ba]
            text-sm
          ">
            Con la bendición de Dios
          </p>

          <h2 className="
            text-5xl
            md:text-6xl
            font-serif
            mt-8
            leading-tight
            text-[#5f7d7f]
          ">
            Tenemos el honor de invitarte
            a celebrar uno de los días más
            importantes de nuestras vidas.
          </h2>

        </motion.div>

      </section>

      {/* ================= NOVIOS ================= */}

      <section className="pb-36 px-6">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            max-w-6xl
            mx-auto
            grid
            md:grid-cols-2
            gap-12
          "
        >

          <motion.div
            variants={fadeLeft}
            className="
              bg-[#edf8f5]
              rounded-[40px]
              p-16
              shadow-xl
              text-center
            "
          >

            <p className="text-6xl mb-6">
              💍
            </p>

            <h3 className="
              text-5xl
              font-serif
              text-[#6d9092]
            ">
              Helder
              Garzofino
            </h3>

          </motion.div>

          <motion.div
            variants={fadeRight}
            className="
              bg-[#fff1f4]
              rounded-[40px]
              p-16
              shadow-xl
              text-center
            "
          >

            <p className="text-6xl mb-6">
              💍
            </p>

            <h3 className="
              text-5xl
              font-serif
              text-[#c98ea0]
            ">
              Miriam
              Quintanilla
            </h3>

          </motion.div>

        </motion.div>

      </section>

      {/* ================= CEREMONIA ================= */}

      <section className="
        py-40
        bg-[#eef7fa]
        px-6
      ">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            max-w-6xl
            mx-auto
            grid
            md:grid-cols-2
            gap-20
            items-center
          "
        >

          <motion.img
            variants={zoomIn}
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
            className="
              rounded-[40px]
              shadow-2xl
              h-[650px]
              object-cover
            "
          />

          <div>

            <p className="
              uppercase
              tracking-[6px]
              text-sm
              text-[#78aeb4]
            ">
              Ceremonia Religiosa
            </p>

            <h2 className="
              text-6xl
              font-serif
              mt-6
              text-[#5f7d7f]
            ">
              Iglesia Nuestra
              Señora de
              La Merced
            </h2>

            <div className="mt-12 space-y-6 text-lg leading-10">

              <p>
                📅 20 de junio de 2026
              </p>

              <p>
                🕙 10:00 A.M.
              </p>

              <p>
                📍 Colocar aquí enlace de Google Maps
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= RECEPCION ================= */}

      <section className="py-40 px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >

          <p className="
            uppercase
            tracking-[6px]
            text-sm
            text-[#c99bb1]
          ">
            Recepción y Boda Civil
          </p>

          <h2 className="
            text-6xl
            font-serif
            mt-6
            text-[#7c8f84]
          ">
            Calle 17 de Calacoto
          </h2>

          <p className="
            mt-10
            text-xl
            leading-10
            text-[#6c7571]
          ">
            Después de la ceremonia religiosa
            compartiremos juntos una hermosa
            celebración en jardín.
          </p>

          <div className="
            mt-16
            bg-[#f4fbf8]
            rounded-[40px]
            p-12
            shadow-xl
          ">

            <h3 className="
              text-4xl
              font-serif
              text-[#6f9b8f]
            ">
              Ceremonia Civil
            </h3>

            <p className="
              mt-6
              text-2xl
            ">
              🕑 2:00 P.M.
            </p>

          </div>

        </motion.div>

      </section>

      {/* ================= CRONOGRAMA ================= */}

      <section className="
        py-40
        bg-[#fff5f7]
        px-6
      ">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            text-center
            mb-20
          "
        >

          <p className="
            uppercase
            tracking-[6px]
            text-sm
            text-[#d39fb0]
          ">
            Cronograma
          </p>

          <h2 className="
            text-6xl
            font-serif
            mt-6
            text-[#927781]
          ">
            Celebración
          </h2>

        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            max-w-4xl
            mx-auto
            space-y-8
          "
        >

          {[
            ["2:00 P.M.", "Ceremonia Civil"],
            ["3:00 P.M.", "Recepción de invitados"],
            ["4:00 P.M.", "Brindis especial"],
            ["5:00 P.M.", "Inicio del baile"],
            ["7:30 P.M.", "Cena"],
            ["9:00 P.M.", "Corte del pastel"],
            ["11:00 P.M.", "Final de la celebración"],
          ].map((item, index) => (

            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
              }}
              className="
                bg-white
                rounded-[30px]
                p-8
                flex
                justify-between
                items-center
                shadow-lg
              "
            >

              <h3 className="
                text-2xl
                font-bold
                text-[#7baeb1]
              ">
                {item[0]}
              </h3>

              <p className="
                text-lg
                text-[#6e6e6e]
              ">
                {item[1]}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </section>

      {/* ================= GALERIA ================= */}

      <section className="py-40 px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            text-center
            mb-24
          "
        >

          <p className="
            uppercase
            tracking-[6px]
            text-sm
            text-[#8cbcb0]
          ">
            Galería
          </p>

          <h2 className="
            text-6xl
            font-serif
            mt-6
            text-[#6c8a8b]
          ">
            Nuestros Recuerdos
          </h2>

        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {[
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
          ].map((image, index) => (

            <motion.div
              key={index}
              variants={zoomIn}
              whileHover={{
                scale: 1.04,
              }}
              className="
                overflow-hidden
                rounded-[40px]
              "
            >

              <img
                src={image}
                className="
                  w-full
                  h-[550px]
                  object-cover
                  hover:scale-110
                  duration-1000
                "
              />

            </motion.div>

          ))}

        </motion.div>

      </section>

      {/* ================= REGALOS ================= */}

      <section className="
        py-40
        bg-[#edf8f4]
        px-6
      ">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >

          <p className="
            uppercase
            tracking-[6px]
            text-sm
            text-[#7eb5a7]
          ">
            Mesa de Regalos
          </p>

          <h2 className="
            text-6xl
            font-serif
            mt-6
            text-[#5d837b]
          ">
            Tu presencia es
            nuestro mejor regalo
          </h2>

          <div className="
            mt-20
            grid
            md:grid-cols-2
            gap-10
          ">

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                rounded-[40px]
                p-12
                shadow-xl
              "
            >

              <h3 className="
                text-3xl
                font-serif
                mb-6
              ">
                🎁 Regalos
              </h3>

              <p>
                Colocar aquí dirección específica
              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                rounded-[40px]
                p-12
                shadow-xl
              "
            >

              <h3 className="
                text-3xl
                font-serif
                mb-6
              ">
                💳 Código QR
              </h3>

              <p>
                Colocar aquí imagen o enlace QR
              </p>

            </motion.div>

          </div>

        </motion.div>

      </section>

      {/* ================= RSVP ================= */}

      <section className="
        py-40
        px-6
      ">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
          className="
            max-w-3xl
            mx-auto
            bg-white
            rounded-[50px]
            p-16
            shadow-2xl
          "
        >

          <div className="text-center">

            <p className="
              uppercase
              tracking-[6px]
              text-sm
              text-[#7eb6b7]
            ">
              Confirmación
            </p>

            <h2 className="
              text-6xl
              font-serif
              mt-6
              text-[#5d7d80]
            ">
              RSVP
            </h2>

          </div>

          <form className="
            mt-16
            flex
            flex-col
            gap-8
          ">

            <input
              type="text"
              placeholder="Nombre Completo"
              className="
                p-6
                rounded-2xl
                border
                border-[#dfeeee]
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Correo Electrónico"
              className="
                p-6
                rounded-2xl
                border
                border-[#dfeeee]
                outline-none
              "
            />

            <select
              className="
                p-6
                rounded-2xl
                border
                border-[#dfeeee]
                outline-none
              "
            >
              <option>Asistiré</option>
              <option>No podré asistir</option>
            </select>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                bg-gradient-to-r
                from-[#88c5cf]
                via-[#f5b7c5]
                to-[#9fd8c1]
                text-white
                py-6
                rounded-2xl
                text-lg
                tracking-[3px]
                uppercase
                shadow-xl
              "
            >
              Confirmar Asistencia
            </motion.button>

          </form>

          <div className="
            mt-14
            text-center
            leading-10
          ">

            <p>
              Confirmar asistencia antes de:
            </p>

            <p className="font-semibold">
              [Colocar fecha límite]
            </p>

            <div className="mt-10">

              <p>
                📞 Helder Garzofino
              </p>

              <p>
                📞 Miriam Quintanilla
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="
        py-24
        bg-[#7fb8bd]
        text-white
        text-center
        px-6
      ">

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
            text-2xl
            font-serif
            leading-10
          "
        >
          “El amor no consiste en mirarse
          el uno al otro, sino en mirar
          juntos en la misma dirección.”
        </motion.p>

        <p className="
          mt-10
          uppercase
          tracking-[6px]
          text-sm
        ">
          ✨ Gracias por acompañarnos
          en este nuevo comienzo ✨
        </p>

      </footer>

    </div>
  );
}