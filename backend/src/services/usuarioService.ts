// services/usuarioService.ts
import prisma from "../prisma/prismaClient";

// Função para criar um novo usuário
export const criarUsuario = async (nome: string, email: string, senha: string) => {
  try {
    // Verifica se o e-mail já está cadastrado
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      throw new Error('E-mail já cadastrado.');
    }

    // Inserir o usuário no banco de dados usando o Prisma
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
      },
    });

    return novoUsuario;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error; // Propague o erro para o handler apropriado
  }
};

// Função para buscar todos os usuários
export const buscarUsuarios = async () => {
  return await prisma.usuario.findMany();
};

// Função para atualizar um usuário pelo ID
export const atualizarUsuario = async (id: number, nome: string) => {
  if (nome.length > 100) {
    throw new Error("O nome é muito longo. Máximo de 100 caracteres.");
  }

  return await prisma.usuario.update({
    where: { id },
    data: { nome },
  });
};
// Função para deletar um usuário pelo ID
export const deletarUsuario = async (id: number) => {
  return await prisma.usuario.delete({
    where: { id },
  });
};