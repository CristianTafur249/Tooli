// Datos mock de herramientas — extraído del prompt
export const tools = [
  {
    id: 1,
    name: "Taladro",
    image: "/assets/tools/Electric drill_3D.png",
    status: "occupied",
    usedFor: "Usado principalmente en madera",
    category: "perforación",
    materials: ["Madera", "Metal", "Cerámica", "Acrílico"],
    commonErrors: [
      "No fijar bien la pieza",
      "Elegir mal la broca",
      "Usar ambas manos",
      "Quitar el protector",
      "Encenderla con cuidado",
      "Usar broca desgastada"
    ],
    safetyItems: [
      "Gafas de seguridad",
      "Guantes resistentes",
      "Mascarilla antipolvo",
      "Calzado cerrado"
    ],
    quizAnswers: {
      q1_correct: ["No fijar bien la pieza", "Elegir mal la broca", "Usar broca desgastada"],
      q2_correct: ["Gafas de seguridad", "Guantes resistentes", "Mascarilla antipolvo"],
      q3_correct: ["Madera", "Metal", "Acrílico"]
    }
  },
  {
    id: 2,
    name: "Abrazadera",
    image: "/assets/tools/clamp_3D.png",
    status: "available",
    usedFor: "Usado principalmente para fijar piezas",
    category: "sujeción",
    materials: ["Madera", "Metal", "Acrílico"],
    commonErrors: ["Apretar demasiado", "No proteger la superficie", "Usar en material frágil sin protección"],
    safetyItems: ["Guantes resistentes", "Protección ocular"],
    quizAnswers: {
      q1_correct: ["Apretar demasiado", "No proteger la superficie"],
      q2_correct: ["Guantes resistentes"],
      q3_correct: ["Madera", "Metal", "Acrílico"]
    }
  },
  {
    id: 3,
    name: "Martillo",
    image: "/assets/tools/Hammer_3D.png",
    status: "available",
    usedFor: "Usado principalmente para golpear o clavar objetos",
    category: "percusión",
    materials: ["Madera", "Metal"],
    commonErrors: ["Golpear con el lado equivocado", "No sostener firmemente el mango", "Usar en superficies frágiles"],
    safetyItems: ["Gafas de seguridad", "Guantes resistentes", "Calzado cerrado"],
    quizAnswers: {
      q1_correct: ["Golpear con el lado equivocado", "No sostener firmemente el mango"],
      q2_correct: ["Gafas de seguridad", "Guantes resistentes"],
      q3_correct: ["Madera", "Metal"]
    }
  },
  {
    id: 4,
    name: "Pulidora",
    image: "/assets/tools/Angle grinder_3D.png",
    status: "available",
    usedFor: "Usada para pulir y cortar materiales",
    category: "acabado",
    materials: ["Metal", "Cerámica", "Madera", "Acrílico", "Tela", "Vidrio"],
    commonErrors: [
      "No fijar bien la pieza",
      "Elegir mal el disco",
      "Usar ambas manos",
      "Quitar el protector",
      "Encenderla con cuidado",
      "Usar disco desgastado"
    ],
    safetyItems: [
      "Gafas de seguridad",
      "Guantes resistentes",
      "Sandalia abiertas",
      "Mascarilla antipolvo",
      "Gorra de tela"
    ],
    quizAnswers: {
      q1_correct: ["No fijar bien la pieza", "Elegir mal el disco", "Usar disco desgastado"],
      q2_correct: ["Gafas de seguridad", "Guantes resistentes", "Mascarilla antipolvo"],
      q3_correct: ["Metal", "Cerámica", "Madera", "Acrílico"]
    }
  },
  {
    id: 5,
    name: "Sierra caladora",
    image: "/assets/tools/Saw_3D.png",
    status: "available",
    usedFor: "Cortes curvos y rectos en madera y acrílico",
    category: "corte",
    materials: ["Madera", "Acrílico", "Metal"],
    commonErrors: ["No sujetar la pieza", "Cambiar hoja sin desconectar", "Forzar el avance"],
    safetyItems: ["Gafas de seguridad", "Guantes resistentes", "Mascarilla antipolvo"],
    quizAnswers: {
      q1_correct: ["No sujetar la pieza", "Cambiar hoja sin desconectar"],
      q2_correct: ["Gafas de seguridad", "Guantes resistentes"],
      q3_correct: ["Madera", "Acrílico"]
    }
  }
]

export const recentSearches = ["Taladro", "Martillo", "Caladora", "Mototool"]

export const userProfile = {
  name: "Luis",
  studentCode: "2190123",
  avatar: null,
  currentTool: {
    id: 4,
    name: "Pulidora",
    image: "/assets/tools/Angle grinder_3D.png",
    status: "in-use",
    timeRemaining: "30 min",
    reservedAt: "2026-03-16"
  },
  history: [
    {
      id: 2,
      name: "Abrazadera",
      image: "/assets/tools/clamp_3D.png",
      status: "completed",
      date: "Semana pasada"
    },
    {
      id: 1,
      name: "Taladro",
      image: "/assets/tools/Electric drill_3D.png",
      status: "completed",
      date: "Semana pasada"
    }
  ]
}
