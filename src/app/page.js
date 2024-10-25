"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TextInput from '@/components/TextInput';
import Dropdown from '@/components/Dropdown';
import StarRating from '@/components/StarRating';
import ActionButton from '@/components/ActionButton';
import { useForm } from 'react-hook-form'; // Importando react-hook-form

const Page = () => {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const onSubmit = (data) => {
    console.log('Dados do formulário:', JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <Sidebar
        id="sidebarId"
        components={[
          <form id="formId" onSubmit={handleSubmit(onSubmit)}>

            {/* Campo de Email */}
            <TextInput
              label="Email"
              placeholder="Digite seu email"
              name="email"
              register={register}
              styleType="customStyle2"
            />
            {errors.email && <span>{errors.email.message}</span>}

            {/* Dropdown */}
            <Dropdown
              label="Escolha uma opção"
              options={dropdownOptions}
              name="dropdownSelect"
              control={control}
            />

            {/* Classificação por estrelas */}
            <StarRating
              label="Avaliação"
              name="rating"
              setValue={setValue}
              register={register}
            />

            {/* Campo de Nome */}
            <TextInput
              label="Nome"
              placeholder="Digite seu nome"
              name="nome"
              register={register}
              styleType="customStyle1"
            />
            {errors.nome && <span>{errors.nome.message}</span>}



            {/* Botão de ação */}
            <ActionButton
              label="Imprimir JSON"
              action="submit"
              styleType="primary"
              id="botaoAction"
              form="formId"
            />

          </form>,

          <ActionButton
            label="teste"
            action="submit"
            styleType="primary"
            id="minimize"
            level={3}
            form="formId"
          />
        ]}
      />
    </div>
  );
};

export default Page;