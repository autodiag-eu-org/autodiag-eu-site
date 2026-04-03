"use client";

import { motion } from "framer-motion";

interface Innovation {
  number: string;
  title: string;
  description: string;
  span2?: boolean;
}

const innovations: Innovation[] = [
  {
    number: "01",
    title: "Scan audio moteur IA",
    description:
      "Notre SVM detecte 11 classes de pannes par le son avec 91.3% de precision. Placez le telephone pres du capot, on fait le reste.",
    span2: true,
  },
  {
    number: "02",
    title: "Scan audio habitacle",
    description:
      "7 classes de bruits interieurs identifies automatiquement : claquements, grincements, sifflements et plus.",
  },
  {
    number: "03",
    title: "Vision AI / OCR",
    description:
      "Photographiez un code, une piece ou un voyant. Reconnaissance instantanee et explication claire.",
  },
  {
    number: "04",
    title: "IA mecanicien",
    description:
      "Posez vos questions en langage naturel. Reponses personnalisees a votre vehicule, pas du copier-coller generique.",
  },
  {
    number: "05",
    title: "Drive Test sans dongle",
    description:
      "Accelerometre, gyroscope, GPS et micro du telephone. Pas besoin de dongle OBD2 pour un premier diagnostic sur route.",
    span2: true,
  },
  {
    number: "06",
    title: "RPM par FFT audio",
    description:
      "Estimation du regime moteur par analyse frequentielle : f = (RPM x N_cyl) / (2 x 60). Precision surprenante.",
  },
  {
    number: "07",
    title: "Amortisseurs par rebond",
    description:
      "Test du ratio d'amortissement zeta via accelerometre. Evaluez l'etat de vos amortisseurs en roulant.",
  },
  {
    number: "08",
    title: "Virtual Dyno",
    description:
      "Estimez la puissance reelle : P = m.a.v + forces resistives. Un banc de puissance dans votre poche.",
  },
  {
    number: "09",
    title: "Patinage embrayage",
    description:
      "Correlation audio RPM et vitesse GPS. Detecte le patinage avant que l'embrayage ne lache completement.",
  },
  {
    number: "10",
    title: "Disque frein voile",
    description:
      "Analyse frequentielle pendant le freinage. Identifie les vibrations caracteristiques d'un disque voile.",
  },
  {
    number: "11",
    title: "Empreinte acoustique",
    description:
      "Distance de Kullback-Leibler : on compare le son de votre moteur a sa signature saine de reference.",
  },
  {
    number: "12",
    title: "Score predictif flotte",
    description:
      "Modele de Weibull pour anticiper les pannes. Ideal pour les gestionnaires de flotte professionnels.",
  },
];

export default function InnovationCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="text-gradient">12 innovations</span> qui changent
          tout
        </h2>
        <p className="mt-3 text-secondary">
          Des technologies exclusives qu'aucun concurrent ne propose
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {innovations.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className={`glass group rounded-2xl border border-border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.08)] ${
              item.span2 ? "sm:col-span-2" : ""
            }`}
          >
            <span className="text-xs font-semibold tracking-widest text-cyan/60">
              {item.number}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
