import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';
import COLOR from '../utils/colors.js';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const StatusBarHeight = Constants.statusBarHeight

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${COLOR.primary}
    padding-bottom: 75px;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`

export const PageTitle = styled.Text`
    font-size: 48px;
    text-align: left;
    font-weight: bold;
    color: ${COLOR.secondary};
    fontFamily: 'Ubuntu-Bold'
`

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-bottom: ${height * 0.03}px;
    letter-spacing: 1.5px;
    font-weight: bold;
    color: ${COLOR.secondary};
    fontFamily: 'Roboto-Light'
    padding-top: 10px
    padding-bottom: 20px
`

export const StyledFormArea = styled.View`
    width: 100%;
`

export const StyledTextInput = styled.TextInput`
    background-color: ${COLOR.tertiary};
    padding: 15px;
    padding-left: 22px;
    padding-right: 22px;
    border-radius: 8px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 50px;
    color: ${COLOR.secondary};
    fontFamily: 'Roboto-Light'
`
export const StyledInputLabel = styled.Text`
    color: ${COLOR.secondary};
    font-size: 16px;
    text-align: left;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${COLOR.secondary};
    justify-content: center;
    border-radius: 10px;
    height: 60px;
`;

export const StyledButtonText = styled.Text`
    color: ${COLOR.primary};
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 45px;
    position: absolute;
    z-index: 1;
`

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const ExtraText = styled.Text`
    justify-content: center;
    color: ${COLOR.secondary}
    align-items: center;
    font-size: 16px;
    margin: 5px;
    margin-top: 25px;
    fontFamily: 'Roboto-Light'
`

export const ExtraTextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const ExtraLinkContent = styled.Text`
    color: ${COLOR.secondary}
    font-size: 16px;
    margin: 5px;
    margin-top: 25px;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
`

