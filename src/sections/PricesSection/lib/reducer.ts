export type InputId = 'length' | 'width' | 'height' | 'count';

export type ToggleId = 'checking' | 'clientBox';

export type Toggle = {
    label: string,
    value: boolean,
}

export type SubtoggleId = "additionalLabel" | "boppBag" | "bubbleMembrane" | "zipLock";

type FormData = {
    inputs: Record<InputId, string>,
    toggles: {
        main: Record<ToggleId, Toggle>,
        subtoggles: Record<SubtoggleId, Toggle>,
    }
}

export const formInitialState: FormData = {
    inputs: {
        length: '',
        width: '',
        height: '',
        count: ''
    },
    toggles: {
        main: {
            checking: {
                label: 'Проверка на брак',
                value: false
            },
            clientBox: {
                label: 'Сборка в упаковку клиента',
                value: false
            }
        },
        subtoggles: {
            boppBag: {
                label: 'БОПП пакет + упаковка',
                value: false
            },
            additionalLabel: {
                label: 'Дополнительная маркировка',
                value: false
            },
            bubbleMembrane: {
                label: 'Пузырьковая пленка',
                value: false
            },
            zipLock: {
                label: 'ZIP-LOCK пакет с бегунком',
                value: false
            }
        }
    }
}

type SwitchWrapping = {
    type: 'toggleWrapping',
    payload: boolean
}

type SwitchToggle = {
    type: 'switchToggle',
    payload: ToggleId
}

type SwitchSubtoggle = {
    type: 'switchSubtoggle',
    payload: SubtoggleId
}

type InputChange = {
    type: 'changeInput',
    payload: {
        id: InputId,
        value: string
    }
}

type Action = SwitchWrapping | SwitchToggle | SwitchSubtoggle | InputChange;

export const formReducer = (state: FormData, action: Action): FormData => {

    switch (action.type) {
        case 'changeInput': {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.payload.id]: action.payload.value
                }
            }
        }

        case 'toggleWrapping': {
            if (action.payload === false) {
                return {
                    ...state,
                    toggles: {
                        ...state.toggles,
                        subtoggles: formInitialState.toggles.subtoggles
                    }
                }
            } else {
                return {
                    ...state,
                    toggles: {
                        ...state.toggles,
                        subtoggles: {
                            ...state.toggles.subtoggles,
                            boppBag: {
                                ...state.toggles.subtoggles.boppBag,
                                value: true
                            }
                        }
                    }
                }
            }
        }

        case 'switchToggle': {
            return {
                ...state,
                toggles: {
                    ...state.toggles,
                    main: {
                        ...state.toggles.main,
                        [action.payload]: {
                            ...state.toggles.main[action.payload],
                            value: !state.toggles.main[action.payload].value
                        }
                    }
                }
            }
        }

        case 'switchSubtoggle': {
            return {
                ...state,
                toggles: {
                    ...state.toggles,
                    subtoggles: {
                        ...state.toggles.subtoggles,
                        [action.payload]: {
                            ...state.toggles.subtoggles[action.payload],
                            value: !state.toggles.subtoggles[action.payload].value
                        }
                    }
                }
            }
        }

        default:
            return state
    }
}
