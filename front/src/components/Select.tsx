import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: Option[];
}

export default function Select({ id, label, value, setValue, options }: SelectProps) {
  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <SelectSld
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectSld>
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

const SelectSld = styled.select`
    width: 90%; /* Deixa o select ocupar apenas o necessário */
    height: 40px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    transition: border-color 0.3s;

    &:focus {
      border-color: #000000;
      outline: none;
    }
  `;
