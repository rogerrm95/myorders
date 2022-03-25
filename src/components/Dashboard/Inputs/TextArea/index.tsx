/* eslint-disable react-hooks/exhaustive-deps */
import { TextareaHTMLAttributes, useEffect, useRef, useState } from "react";
import { Container } from './styles'


interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string,
    hasMaxCaracters: boolean
}

export function TextArea({ label, hasMaxCaracters, ...rest }: TextAreaProps) {

    const fieldRef = useRef<HTMLTextAreaElement>(null)
    const [maxCaracters, setMaxCaractes] = useState('0')

    // Captura o valor máximo de caracteres //
    useEffect(() => {
        if (hasMaxCaracters) {
            const value = fieldRef.current?.getAttribute('maxLength')
            value && setMaxCaractes(value)
        }
        return
    }, [])

    // Foca no input ao clicar no Label //
    function activeFocus() {
        fieldRef?.current?.focus()
    }

    return (
        <Container>
            <div className='label'>
                <span onClick={activeFocus}>{label}</span>

                {
                    hasMaxCaracters && <span>Max: {maxCaracters} caracteres</span>
                }
            </div>

            <textarea ref={fieldRef} {...rest} />
        </Container>
    )
}