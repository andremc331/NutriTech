import React, { useEffect, useState } from "react";
import Error from "./Error";
import InputSearch from "./InputSearch";
import Header from "./Header";
import Logo from "../logo/img-logo-semfundo.png";
import NavigateButton from "./NavigateButton";
import FoodPane from "./FoodPane";
import ListFood from "./ListFood";
import NutrientPane from "./NutrientPane";
import Button from "./Button";
import Input from "./Input";
import LinkButton from "./LinkButton";
import UserMenu from "./UserMenu";
import PopupMessage from "./PopupMessage";
import InputDatePicker from "./InputDatePicker";
import Select from "./Select";
import ScrollableProductList from "./ScrollableProductList";
import ProductNutrients from "./ProductNutrients";
import ProductSearch from "./ProductSearch";
import InputDatePickerConsumer from "./InputDatePickerConsumer";
import TableEatProduct from "./TableEatProduct";
import TableEatFood from "./TableEatFood";
import AdmMenu from "./AdmMenu";
import TableUser from "./TableUser";
import { api } from '../services/api';

// Interface para representar um alimento
interface Food {
    id: string;
    description: string;
}

const DataFetchingComponent = () => {
    const [data, setData] = useState<Food[] | null>(null); // Tipagem do estado de dados
    const [error, setError] = useState<string | null>(null); // Tipagem do estado de erro

    // Função para buscar os dados do backend
    const fetchData = async () => {
        try {
            const response = await api.get('/seu-endpoint'); // Chamada ao backend
            setData(response.data); // Armazenando os dados no estado
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            setError('Erro ao buscar dados');
        }
    };

    // useEffect para buscar dados ao montar o componente
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            {error && <Error message={error} />} {/* Exibe uma mensagem de erro se houver */}
            {data ? (
                <ListFood data={data} /> // Renderiza a lista de alimentos se os dados estiverem disponíveis
            ) : (
                <p>Carregando dados...</p> // Exibe um carregando enquanto os dados estão sendo buscados
            )}
        </div>
    );
};

export default DataFetchingComponent;

// Exportando todos os componentes utilizados no sistema
export {
    AdmMenu,
    Button,
    Error,
    Header,
    Input,
    InputDatePicker,
    InputDatePickerConsumer,
    InputSearch,
    FoodPane,
    LinkButton,
    ListFood,
    Logo,
    NavigateButton,
    NutrientPane,
    PopupMessage,
    ProductNutrients,
    ProductSearch,
    ScrollableProductList,
    Select,
    TableEatProduct,
    TableEatFood,
    TableUser,
    UserMenu
};