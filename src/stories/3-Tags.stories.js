import React from 'react';
import { action } from '@storybook/addon-actions';
import { TagButton } from '../components/Tag';
import close from '../assets/close.svg';
import '../Styles/GlobalStyle.css'


export default {
    title: 'TagsButton',
    };
   


export const TagButtons = () => (
<TagButton className="tab-btn" onClick={action('clicked')}> Puzzle <span><img src=
        {close}/></span> </TagButton>
);
