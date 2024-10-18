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
import axios from "axios";

const DataFetchingComponent = () => {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await api.get('/seu-endpoint');
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || 'Erro ao buscar dados');
            } else {
                setError('Erro inesperado ao buscar dados');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            {error && <Error message={error}>Um erro ocorreu:</Error>} {/* Exibe a mensagem de erro */}
            {isLoading ? (
                <p>Carregando dados...</p>
            ) : (
                <ListFood data={data} />
            )}
        </div>
    );
};

export default DataFetchingComponent;

// Exportando os componentes
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