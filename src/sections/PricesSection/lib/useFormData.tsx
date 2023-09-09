import {useMemo, useReducer, useState} from "react";
import {ToggleBlock, ToggleBlockProps} from "../components/ToggleBlock/ToggleBlock";
import {formInitialState, formReducer, InputId, SubtoggleId, ToggleId} from "./reducer";
import {Input} from "../components/Input/Input";


export function useFormData() {
    const [formData, setFormData] = useReducer(formReducer, formInitialState);

    const handleInput = (field: InputId, value: string) => {
        if (value.charCodeAt(value.length - 1) < 48 || value.charCodeAt(value.length - 1) > 57) {
            return;
        }
        setFormData({type: 'changeInput', payload: {id: field, value}})
    }

    const placeholders: Record<InputId, string> = useMemo(() => {
        return {
            length: 'Длина товара, см',
            width: 'Ширина товара, см',
            height: 'Высота товара, см',
            count: 'Количество товара, шт'
        }
    }, [])

    const inputs = useMemo(() => {
        return Object.entries(formData.inputs).map(([inputKey, value]) => (
            <Input
                // type="number"
                // pattern=" 0+\.[0-9]*[1-9][0-9]*$"
                // pattern="[0-9]*"
                value={value}
                placeholder={placeholders[inputKey as InputId]}
                onChange={e => handleInput(inputKey as InputId, e.target.value)}
                required
            />
        ))
    }, [formData.inputs, handleInput]);

    const toggles = useMemo(() => {
        const toggles = Object.entries(formData.toggles.main).filter(([key]) => key !== 'subtoggles').map(([key, value]) => (
            <ToggleBlock
                label={value.label}
                id={key}
                checked={value.value}
                onToggle={(isChecked) => setFormData({type: 'switchToggle', payload: key as ToggleId})}
            />
        ))
        const {subtoggles} = formData.toggles;
        const subtoggleValues = Object.values(subtoggles).map(subtoggle => subtoggle.value);
        toggles.unshift(
            <ToggleBlock
                checked={subtoggleValues.some(value => value)}
                label="Упаковка"
                id="wrapping"
                onToggle={(isChecked) => setFormData({type: 'toggleWrapping', payload: isChecked})}
                subtogglesVisible={subtoggleValues.some(value => value)}
                subToggles={Object.entries(subtoggles).map(([key, value]) => ({
                    label: value.label,
                    id: key,
                    checked: value.value,
                    onToggle: () => setFormData({type: 'switchSubtoggle', payload: key as SubtoggleId})
                }))}
            />
        )
        return toggles;
    }, [formData.toggles, setFormData])

    return {inputs, toggles, formData};
}
