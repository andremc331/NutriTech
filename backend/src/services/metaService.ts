// src/services/metaService.ts
import prisma from "../prisma/prismaClient";

// Função para criar uma nova meta
export const criarMeta = async (descricao: string, usuarioId: number) => {
  try {
    // Inserir a meta no banco de dados usando o Prisma
    const novoMeta = await prisma.meta.create({
      data: {
        metas_usuario_id: usuarioId, // Supondo que você tenha um usuarioId
        metas: "Defina sua meta", // Exemplo de meta
        descricao: descricao // Aqui é onde você usa o parâmetro recebido
      }
    });
    return novoMeta; // Retorne o novo registro criado
  } catch (error) {
    console.error("Erro ao criar meta:", error);
    throw error;
  }
};