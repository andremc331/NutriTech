import styled from "styled-components";

export default function Input({ type, id, label, value, setValue }: Props) {
  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <InputSld
        type={type}
        value={value /*!== null ? value : ""*/}
        onChange={(e) => setValue(e.target.value)}
  // Chame onChange se estiver presente
      id={id}
      // placeholder={placeholder}
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
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    text-transform: uppercase;
    color: var(--color-1);
    font-size: 14px;
    margin-bottom: 5px;
    display: grid;
  `;

const InputSld = styled.input`
    height: 40px;
    width: 90%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%; /* O input ocupará toda a largura em telas menores */
    }
  `;

interface Props {
  type: string;
  id: string;
  label: string;
  value: string | number;
  setValue: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // placeholder: string;
}