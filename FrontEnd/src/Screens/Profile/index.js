import React from 'react';

import Menu from '../../Components/Menu';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useInfo } from '../../Contexts/info.context';

import { 
  Scroll,
  Container,
  Pfp,
  BgImg,
  H1,
  H2,
  H3,
  InfoContainer,
  Row,
  Text,
  BookContainer,
  Book,
  BookPlus,
  ImagePreview,
  IconContainer
} from './styles';

import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const {userName, userCity, userState, userPfp, userDescricao} = useInfo();

  const image = { uri: "https://lcconroy.files.wordpress.com/2014/04/london-rain.jpg" };

  const navigation = useNavigation();

  const handleEditClick = () => {
    navigation.navigate('EditProfile');
  };

  const handleBookClick = () => {
    navigation.navigate('AddBook');
  };

  return(
    <>
      <Scroll>

        <IconContainer onPress={handleEditClick}>
          <Icon name={'ellipsis-v'} size={40} color={'white'} />
        </IconContainer>
        <Container>
          <BgImg source={image}>
            <Pfp>
              <ImagePreview source={{uri: userPfp}} />
            </Pfp>
          </BgImg>

          <InfoContainer>
            <H1>{userName}</H1>
            <H3>Idade: 23 / {userCity}, {userState} </H3>

            <Row>
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'gray'} size={20} style={{ margin: 2 }} />
            </Row>

            <H2>Descrição:</H2>
            <H2 style={{ width: 250 }}>{userDescricao}</H2>
          </InfoContainer>

        </Container>

        <Text>Biblioteca</Text>
        <BookContainer>
          <Book/><Book/><Book/>
          <Book/><Book/><Book/>
          <Book/><Book/><Book/>
          <BookPlus onPress={handleBookClick}><Icon name="plus" color="white" size={50} /></BookPlus>
        </BookContainer>

      </Scroll>
      <Menu />
    </>
  );
}

export default Profile;
