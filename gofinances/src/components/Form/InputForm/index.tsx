import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container, Error } from './styles';

import { Input } from '../Input';

interface Props extends TextInputProps {
    control: any;
    name: string;
    error: string
};

export const InputForm = ({ control, name, error, ...rest }: Props) => {
    return (
        <Container>
           <Controller control={control} 
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Input onChangeText={onChange} value={value} {...rest} />
                )}
            />
            {error && (<Error>{error}</Error>)}
        </Container>
    );
};