import styled from "styled-components";

export default function Input({ type, id, name, label, value, setValue, onChange, required, placeholder }: Props) {
  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <InputSld
        type={type}
        value={value}
        onChange={(e) => setValue(type === "number" ? parseFloat(e.target.value) : e.target.value)}
  // Chame onChange se estiver presente
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LabelSld = styled.label`
  display: flex;
  color: #333;
  padding: 0px;
  margin: 5px 0px;
`;

const InputSld = styled.input`
  display: flex;
  border-radius: 5px;
  border: none;
  padding: 8px;
  color: rgb(27, 71, 153);
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
`;

interface Props {
  type: string;
  name: string;
  id: string;
  label: string;
  value: string | number;
  setValue: (value: string | number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  placeholder: string;
}