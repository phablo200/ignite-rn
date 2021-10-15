import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import AppleSvg from '../../assets/apple.svg';

import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { SignSocialButton } from '../../components/SigninSocialButton';
import { 
    Container, 
    Header, 
    TitleWrapper, 
    Title, 
    SiginTitle, 
    Footer,
    FooterWrapper 
} from './styles';

export const SignIn = () => {
    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg width={RFValue(120)} height={RFValue(68)} />

                    <Title>Controle suas finâncias de forma muito simples</Title>
                </TitleWrapper>

                <SiginTitle>
                    Faça seu login com uma das contas abaixo
                </SiginTitle>
            </Header>
            <Footer>
                <FooterWrapper title="Entrar com o google" svg={GoogleSvg} />
            </Footer>
        </Container>
    );
};
