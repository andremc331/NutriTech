import styled from "styled-components";
import { ProductNutrientsProps, UserProps } from "../types";
import { useState } from "react";
import ProductNutrients from "./ProductNutrients";
import { useProduct } from "../hooks";
import Button from "./Button";
import ProductSearch from "./ProductSearch";

interface Props {
  label: string;
  products: ProductNutrientsProps[];
  setMessagePopup: (value: string) => void;
  setShowPopup: (value: boolean) => void;
}

export default function ScrollableProductList({
  label,
  products,
  setMessagePopup,
  setShowPopup,
}: Props) {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductNutrientsProps | null>(null);
  const { create, update, remove, setError } = useProduct();

  const handleSave = async (product: ProductNutrientsProps) => {
    const defaultUser: UserProps = {
      // Defina valores padrão para UserProps
      id: "0", // Exemplo de ID padrão
      alias: "Usuário Padrão", // Exemplo de alias padrão
      mail: "usuario@exemplo.com",
      role: ""
    };
  
    // Verificações de erro
    if (!product.description || product.description.trim().length === 0) {
      setError({
        error: "Forneça a descrição do produto",
        token: "",
        user: defaultUser, // Usando um usuário padrão
        alias: "",
        mail: "",
      });
      return;
    } else if (product.serving_size === null) {
      setError({
        error: "Forneça o peso/volume de cada porção",
        token: "",
        user: defaultUser,
        alias: "",
        mail: "",
      });
      return;
    } else if (
      !product.serving_size_unit ||
      product.serving_size_unit.trim().length === 0
    ) {
      setError({
        error: "Forneça a unidade de medida de cada porção, por exemplo, g (gramas)",
        token: "",
        user: defaultUser,
        alias: "",
        mail: "",
      });
      return;
    } else if (product.quantity_per_serving === null) {
      setError({
        error: "Forneça a quantidade de unidades por porção, por exemplo, 3 biscoitos",
        token: "",
        user: defaultUser,
        alias: "",
        mail: "",
      });
      return;
    } else if (
      !product.quantity_per_serving_unit ||
      product.quantity_per_serving_unit.trim().length === 0
    ) {
      setError({
        error: "Forneça a unidade usada por porção, por exemplo, biscoitos e colheres",
        token: "",
        user: defaultUser,
        alias: "",
        mail: "",
      });
      return;
    }
  
    // Lógica de criação ou atualização do produto
    const productData: ProductNutrientsProps = {
      id: product.id || "", // Ensure id is present
      description: product.description,
      serving_size: product.serving_size,
      serving_size_unit: product.serving_size_unit,
      quantity_per_serving: product.quantity_per_serving,
      quantity_per_serving_unit: product.quantity_per_serving_unit,
      energy: product.energy,
      protein: product.protein,
      carbohydrate: product.carbohydrate,
      sugar: product.sugar,
      dietary_fiber: product.dietary_fiber,
      total_fat: product.total_fat,
      saturated_fat: product.saturated_fat,
      trans_fat: product.trans_fat,
      calcium: product.calcium,
      sodium: product.sodium,
    };
  
    if (!product.id) {
      const response = await create(productData); // Chamada para criar
      if (response) {
        setMessagePopup("Produto criado com sucesso");
        setShowPopup(true);
      }
    } else {
      const response = await update(product.id, productData); // Chamada para atualizar
      if (response) {
        setMessagePopup("Produto atualizado com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handleDelete = async (id: string) => {
    const response = await remove(id);
    if (response) {
      if (id === selectedProduct?.id) {
        setSelectedProduct(null);
      }
      setMessagePopup("Produto excluído com sucesso");
      setShowPopup(true);
    }
  };

  const handleCreate = async () => {
    const newProduct: ProductNutrientsProps = {
      id: "1", // deve ser um id único, mesmo que seja um novo produto e você não tenha um id ainda, você pode definir como uma string vazia ou um valor padrão
      description: "Produto Exemplo",
      serving_size: 100,
      serving_size_unit: "g",
      quantity_per_serving: 2,
      quantity_per_serving_unit: "biscoitos",
      energy: 200,
      protein: 5,
      carbohydrate: 30,
      sugar: 10,
      dietary_fiber: 2,
      total_fat: 8,
      saturated_fat: 1,
      trans_fat: 0,
      calcium: 0,
      sodium: 50,
    };

    setError(null);
    setSelectedProduct(newProduct);
  };

  return (
    <Wrapper>
      <ProductsSld>
        <LabelSld>{label}</LabelSld>
        <ListSld>
          {products.map((product: ProductNutrientsProps) => (
            <ItemSld
              key={product.id}
              onClick={() => {
                setError(null);
                setSelectedProduct(product);
              }}
            >
              {product.description}
            </ItemSld>
          ))}
        </ListSld>
        <LineSld>
          <Button label="Novo produto" click={handleCreate} />
        </LineSld>

        <ProductSearch setSelectedProduct={setSelectedProduct} />
      </ProductsSld>
      {selectedProduct && (
        <ProductNutrients
          product={selectedProduct}
          setMessagePopup={setMessagePopup}
          setShowPopup={setShowPopup}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: flex-start;
`;

const ProductsSld = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelSld = styled.label`
  display: flex;
  color: #333;
  padding: 0px;
  margin: 5px 0px;
`;

const ListSld = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 350px;
  padding: 5px;
`;

const ItemSld = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  white-space: nowrap; // texto não quebra em várias linhas
  overflow: hidden; // esconde qualquer texto que ultrapasse o limite da caixa
  text-overflow: ellipsis; // adiciona reticências no final do texto que ultrapassar o limite da caixa
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const LineSld = styled.div`
  display: flex;
  margin-top: 10px;
`;
