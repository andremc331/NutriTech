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

const fetchData = async () => {
  try {
    const response = await api.get('/seu-endpoint'); // Chama um endpoint do backend
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};

fetchData(); // Chama a função para buscar os dados

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
}