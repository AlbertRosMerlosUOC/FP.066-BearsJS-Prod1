export const typeDefs = `#graphql
type Tarea {
  _id: String
  titulo: String 
  descripcion: String
  fecha_inicio: String
  fecha_fin: Strin
  week: String
  Inday: String
  user: String
}
type Panel {
  _id: String
  titulo: String
  descripcion: String
  color: String
  tareas: [Tarea]
}

type Query {
  hello: String

  panel(_id: ID): Panel
  tarea(_id: ID): Tarea

  allPaneles: [Panel]
  allTareas: [Tarea]
}

type Mutation {
  addTarea(
    idPanel: String,
    titulo: String,
    descripcion: String,
    fecha_inicio: String,
    fecha_fin: String,
    week: String,
    Inday: String,
    user: String,
  ): Tarea
  addPanel(
    titulo: String,
    descripcion: String,
    color: String,
  ): Panel
}
`;

export const mongoDbUrl =
  "mongodb+srv://BearsJS:BearsJS@product2.v5kejnx.mongodb.net/test";
