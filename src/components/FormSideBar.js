// src/pages/Page.js
import React from 'react';
import FormSideBar from './components/FormSideBar';
import TextInput from './components/TextInput';
import Dropdown from './components/Dropdown';
import StarRating from './components/StarRating';
import ActionButton from './components/ActionButton';

const Page = () => {
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <div>
            <FormSideBar
                id="formSidebarId"
                components={[
                    <TextInput label="Nome" placeholder="Digite seu nome" id="nomeInput" name="nome" />,
                    <TextInput label="Email" placeholder="Digite seu email" id="emailInput" name="email" />,
                    <Dropdown label="Escolha uma opção" options={dropdownOptions} id="dropdownSelect" name="dropdown" />,
                    <StarRating label="Avaliação" id="ratingInput" name="rating" />,
                    <ActionButton label="Imprimir JSON" id="imprimirButton" action="imprimirJson" />,
                ]}
            />
        </div>
    );
};

export default Page;