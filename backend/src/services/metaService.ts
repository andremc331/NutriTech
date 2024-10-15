import prisma from "../prisma/prismaClient";

// Função para criar uma nova meta
export const criarMeta = async (descricao: string, usuarioId: number) => {
  try {
    // Inserir a meta no banco de dados usando o Prisma
    const novaMeta = await prisma.meta.create({
      data: {
        metas_usuario_id: usuarioId, // Usando metas_usuario_id como chave estrangeira
        descricao: descricao // Aqui é onde você usa o parâmetro recebido
      }
    });
    return novaMeta; // Retorne o novo registro criado
  } catch (error) {
    console.error("Erro ao criar meta:", error);
    throw error;
  }
};