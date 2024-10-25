import React from 'react';
import { createRoot } from 'react-dom/client';
import { FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';

const ActionButton = ({ label, id, action, styleType, level, form }) => {
    // Função para encontrar o elemento pai até o nível especificado
    const findParentElement = (element, levels) => {
        let parent = element;
        for (let i = 0; i < levels; i++) {
            if (parent.parentElement) {
                parent = parent.parentElement;
            }
        }
        return parent;
    };

    // Função para coletar dados JSON do formulário
    const imprimirJson = (level) => {
        const targetElement = findParentElement(document.getElementById(id), level);
        if (targetElement) {
            const elements = targetElement.querySelectorAll('[name], [id]');
            const data = Array.from(elements).map(el => {
                let value = el.value || el.textContent || el.innerText;
                if (el.classList.contains('react-stars')) {
                    const starInput = document.getElementById(`${el.id}-value`);
                    if (starInput) {
                        value = starInput.value;
                    }
                }
                return {
                    name: el.getAttribute('name') || null,
                    id: el.id,
                    value
                };
            });

            const targetData = {
                id: targetElement.id,
                width: targetElement.style.width,
                height: targetElement.style.height,
                components: data
            };

            console.log(JSON.stringify(targetData, null, 2));
        } else {
            console.log("Elemento alvo não encontrado.");
        }
    };

    // Função para coletar dados JSON de um formulário
    const formJson = () => {
        const formElement = document.getElementById(id);
        if (formElement && formElement.tagName === 'FORM') {
            const formData = new FormData(formElement);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log(JSON.stringify(data, null, 2));
        } else {
            console.log("Elemento alvo não é um formulário ou não foi encontrado.");
        }
    };

    const outraFuncao = () => {
        console.log('Outra função foi chamada');
    };

    const minimize = (level) => {
        const parent = findParentElement(document.getElementById(id), level);
        if (parent) {
            parent.style.transition = 'all 0.3s ease';
            parent.style.display = 'none';

            // Criar botão de maximizar
            const maximizeButton = document.createElement('div');
            maximizeButton.id = `${id}-maximizeButton`;
            maximizeButton.setAttribute('data-parent-id', parent.id);
            maximizeButton.style.position = 'absolute';
            maximizeButton.style.top = `${parent.offsetTop}px`;
            maximizeButton.style.left = `${parent.offsetLeft}px`;
            maximizeButton.style.zIndex = '1000';

            const MaximizeButtonComponent = () => (
                <ActionButton
                    label=""
                    id={`${id}-maximize`}
                    action="maximize"
                    styleType="maximize"
                />
            );

            const root = createRoot(maximizeButton);
            root.render(<MaximizeButtonComponent />);
            document.body.appendChild(maximizeButton);
        }
    };

    const maximize = () => {
        const maximizeButton = document.getElementById(`${id}-maximizeButton`);
        if (maximizeButton) {
            const parentId = maximizeButton.getAttribute('data-parent-id');
            const parentElement = document.getElementById(parentId);
            if (parentElement) {
                parentElement.style.display = 'block';
                parentElement.style.transition = 'all 0.3s ease';
                maximizeButton.remove();
            } else {
                console.log(`Elemento com ID ${parentId} não encontrado.`);
            }
        }
    };

    // Função para evitar a submissão e mostrar os dados sem recarregar
    const submitForm = () => {

        const formElement = document.getElementById(form);
        if (formElement && formElement.tagName === 'FORM') {
            const formData = new FormData(formElement);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log('Dados do formulário:', JSON.stringify(data, null, 2));
        } else {
            console.log("Formulário não encontrado.");
        }
    };

    const handleClick = () => {
        switch (action) {
            case 'imprimirJson':
                imprimirJson(level);
                break;
            case 'outraFuncao':
                outraFuncao();
                break;
            case 'minimize':
                minimize(level);
                break;
            case 'maximize':
                maximize();
                break;
            case 'formJson':
                formJson();
                break;
            case 'submit':
                submitForm();
                break;
            default:
                console.log('Ação desconhecida.');
        }
    };

    const getStyle = () => {
        switch (styleType) {
            case 'icon':
                return styles.iconButton;
            case 'small':
                return styles.smallButton;
            case 'maximize':
                return styles.maxButton;
            default:
                return styles.defaultButton;
        }
    };

    return (
        <button id={id} style={getStyle()} onClick={handleClick}>
            {styleType === 'icon' ? (
                <FaChevronRight style={styles.icon} />
            ) : styleType === 'small' ? (
                <FaMinus style={styles.icon} />
            ) : styleType === 'maximize' ? (
                <FaPlus style={styles.icon} />
            ) : (
                <>
                    {label} <FaChevronRight style={styles.icon} />
                </>
            )}
        </button>
    );
};

const styles = {
    defaultButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0070f3',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '10px',
    },
    iconButton: {
        position: 'absolute',
        top: '10px',
        right: '-20px',
        backgroundColor: '#f3f3f3',
        color: '#333',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
        padding: '5px',
    },
    smallButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        color: '#333',
        padding: '5px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
        fontSize: '12px',
        marginLeft: 'auto',
    },
    maxButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0070f3',
        color: '#fff',
        padding: '5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    icon: {
        fontSize: '16px',
    },
};

export default ActionButton;
