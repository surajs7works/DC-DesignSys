import React from 'react';
import { action } from '@storybook/addon-actions';
import { TagButton } from '../components/Tag';
import avatar from '../assets/avatar.png';
import '../Styles/GlobalStyle.css'
import {Avatar, AvatarLarge} from '../components/Avatar'
import Defaultavt from '../assets/Defaultavt.png'


export default {
    title: 'Avatar',
    }; 
   
const Smallavatar={
    height:'28px',
    width:'28px',
}
const LargeAvatar={
    height:'150px',
    width:'150px',
}

export const DefaultAvatars = () => (
    <div>
            <Avatar onClick={action('clicked')}>
        <img alt="Remy Sharp" src={Defaultavt}/> </Avatar>
    </div>    
    );

export const Avatars = () => (
<Avatar onClick={action('clicked')}>
    <img alt="Remy Sharp" src={avatar}/> </Avatar>
);

export const SmallAvatars = () => (
    <Avatar style={Smallavatar} onClick={action('clicked')}>
        <img alt="Remy Sharp" src={Defaultavt}/> </Avatar>
    );

    export const LargeAvatars = () => (
        <AvatarLarge onClick={action('clicked')}>
            <img alt="Remy Sharp" src={avatar}/> </AvatarLarge>
        );