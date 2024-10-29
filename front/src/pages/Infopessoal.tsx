import { useEffect, useState } from "react";
import {
    Input,
    // Button,
    Header,
    Error,
    PopupMessage,
    InputDatePicker,
    Select,
} from "../components";
import { useUser } from "../hooks";
import { calculateAge, dateFormat } from "../utils";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.nutritech.png";
import styled_Infop from "../styled/styled_Infop";



const {
    Body,
    BackButton,
    Button,
    ButtonContainer,
    Container,
    Gender,
    GenderInput,
    GenderLabel,
    // Input,
    Label,
    Logo,
    LogoImage,
    Title,
} = styled_Infop();


type NivelAtividade = "sedentario" | "leve" | "moderado" | "intenso" | "muito_intenso";


const InfoPessoal: React.FC = () => {
    const { profile, saveProfile, deleteProfile, error, setError } = useUser();
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [weight, setWeight] = useState("");
    const [sex, setSex] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [messagePopup, setMessagePopup] = useState("");
    const navigate = useNavigate();


    const options = [
        { value: "female", label: "Feminino" },
        { value: "male", label: "Masculino" }
    ];

    useEffect(() => {
        if (profile) {
            setBirthDate(new Date(`${profile.birth_date} 00:00:00`));
            setWeight(profile.weight);
            setSex(profile.sex);
        }
        else {
            setBirthDate(null);
            setWeight("");
            setSex("");
        }
    }, [profile, setError]);

    const handleSave = async () => {
        if (!birthDate) {
            setError({ error: "Forneça a data de nascimento" });
        } else if (calculateAge(birthDate) < 1) {
            setError({ error: "É necessário idade mínima de 1 ano" });
        } else if (!weight) {
            setError({ error: "Forneça o peso" });
        } else if (!sex) {
            setError({ error: "Forneça o sexo" });
        } else {
            const formattedDate = dateFormat(birthDate);
            const response = await saveProfile(formattedDate, weight, sex);
            if (response) {
                setMessagePopup("Perfil salvo com sucesso");
                setShowPopup(true);
            }
        }
    };

    const handleDelete = async () => {
        const response = await deleteProfile();
        if (response) {
            setMessagePopup("Perfil excluído com sucesso");
            setShowPopup(true);
        }
    };

    return (
        <Body>
            <Logo>
                <LogoImage src={logo} alt="Nutritech logo" />
            </Logo>
            <Header />
            {error && <Error>{error.error}</Error>}
            {showPopup && (
                <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
            )}
            <Container>
                <Title>Informações de Usuário</Title>
                <InputDatePicker
                    label="Data de nascimento"
                    value={birthDate}
                    setValue={setBirthDate}
                />
                <label htmlFor="weight">Peso</label>
                <Input
                    type="number"
                    id="weight"
                    label="Peso"
                    value={weight}
                    setValue={setWeight}
                    />
                <Select
                    id="sex"
                    label="Sexo"
                    value={sex}
                    setValue={setSex}
                    options={options}
                />
                <Label htmlFor="nivelAtividade">Nível de Atividade:</Label>
          <select
            name="nivelAtividade"
            required
          >
            <option value="sedentario">Sedentário</option>
            <option value="leve">Leve</option>
            <option value="moderado">Moderado</option>
            <option value="intenso">Intenso</option>
            <option value="muito_intenso">Muito Intenso</option>
          </select>
                <ButtonContainer>
                    <Button onClick={handleSave}>Salvar</Button>
                    {profile && <Button onClick={handleDelete}>Excluir</Button>}

                    <BackButton type="button" onClick={() => navigate("/cadastro")}>Voltar</BackButton>
                    <Button type="submit">Próximo</Button>

                </ButtonContainer>
            </Container>
        </Body>
    );
}

export default InfoPessoal;