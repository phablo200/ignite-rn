import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Button, ImageContainer, Text } from './styles';

interface Props extends RectButtonProps {
    title: string;
    svg: React.FC<SvgProps>;
};

export function SignSocialButton ({ title, svg: Svg, ...rest }: Props) {
    return (
        <Button {...rest}>
            <ImageContainer>
                <Svg />
                <Text>{title}</Text>
            </ImageContainer>
        </Button>
    );
};