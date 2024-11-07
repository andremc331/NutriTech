    import { 
    Input, 
    Header, 
    Error, 
    PopupMessage, 
    InputDatePicker, 
    Select 
    } from "../components";
    import styled_Infop from "../styled/styled_Infop";
    import { useUser } from "../hooks";
    import { calculateAge, dateFormat } from "../utils";
    import { useNavigate } from "react-router-dom";
    import React, { useEffect, useState } from "react";
    const {
        Body,
        BackButton,
        Button,
        ButtonContainer,
        Container,
        FormRow,
        GenderContainer,
        GenderInput,
        GenderLabel,
        // Input,
        // Select,
        Label,
        Logo,
        LogoImage,
        Title,
    } = styled_Infop();

    const InfoPessoal: React.FC = () => {
    const { profile, saveProfile, deleteProfile, error, setError } = useUser();
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
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
            setBirthDate(new Date(`${profile.birth_date}`));
            setWeight(profile.weight);
            setSex(profile.sex);
            setHeight(profile.height);
        } else {
            setBirthDate(null);
            setWeight(null);
            setSex("");
            setHeight(null);
        }
    }, [profile, setError]);

    const handleSave = async () => {
        if (!birthDate) {
            setError({ error: "Forneça a data de nascimento" });
        } else if (calculateAge(birthDate) < 1) {
            setError({ error: "É necessário idade mínima de 1 ano" });
        } else if (weight === null) {
            setError({ error: "Forneça o peso" });
        } else if (!sex) {
            setError({ error: "Forneça o sexo" });
        }else if (!height){
            setError({ error: "Forneça sua altura" });
        } 
        else if (weight <= 0) {
            window.alert("O valor de peso tem ser maior que zero");
        }else if (height !== null && (height <= 0 || height > 4)) {
            window.alert("O valor de altura não pode ser negativo nem maior que 4");
        } 
        else {
            const formattedDate = dateFormat(birthDate);
            const formattedWeight = weight ? parseFloat(weight.toFixed(2)) : 0; // Formata o peso com duas casas decimais
            const formattedHeight = height ? parseFloat(height.toFixed(2)) : 0;
            const response = await saveProfile(formattedDate, formattedWeight, sex, formattedHeight); // Passa os parâmetros
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
                <Input
                type="number"
                id="height"
                label="Altura"
                value ={height !== null ? height : ''}
                setValue={(value)=> setHeight(parseFloat(value) || null)}
                />
                {/* <label htmlFor="weight">Peso</label> */}
                <Input
                    type="number"
                    id="weight"
                    label="Peso"
                    value={weight !== null ? weight : ''} // Convert number to string or empty string if null
                    setValue={(value) => setWeight(parseFloat(value) || null)} // Convert to float directly
                />
                <Select
                    id="sex"
                    label="Sexo"
                    value={sex}
                    setValue={setSex}
                    options={options}
                />
                <ButtonContainer>
                    <Button onClick={handleSave}>Salvar</Button>
                    {profile && <Button onClick={handleDelete}>Excluir</Button>}
                    <BackButton type="button" onClick={() => navigate("/cadastro")}>Voltar</BackButton>
                    <Button type="submit" onClick={() => navigate("/definicao-metas")}>Próximo</Button>
                </ButtonContainer>
            </Container>
        </Body>
    );
    }

    export default InfoPessoal;