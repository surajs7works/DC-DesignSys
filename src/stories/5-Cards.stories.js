import React from 'react';
import { action } from '@storybook/addon-actions';
import { TagButton } from '../components/Tag';
import Gameimage from '../assets/Gameimage.png';
import '../Styles/GlobalStyle.css'
import {Cards} from '../components/Cards'
import Defaultavt from '../assets/Defaultavt.png'


export default {
    title: 'Cards',
    }; 
   


export const AllCards = () => (
    <div>
        <Cards onClick={action('clicked')}>
        <img alt="Remy Sharp" src={Gameimage}/> 
        <div className="Card-content">
        <h4>Fuji Koro (2011)</h4>
        <div className="short-info">
            <li>1-6 Palyers</li>
            <li>45-60 Min</li>
            <li>Age 14+</li>
        </div>  
        </div>          
        </Cards>
    </div>    
    );

    // export const ListCards = () => (
    //     <div>
    //         <ListCards onClick={action('clicked')}>
            
    //         <img alt="Remy Sharp" src={Gameimage}/>    
    //         <div className="Card-content">        
    //         <h4>Fuji Koro (2011)</h4>
    //         <div className="short-info">
    //             <li>1-6 Palyers</li>
    //             <li>45-60 Min</li>
    //             <li>Age 14+</li>
    //         </div>  
    //         </div>          
    //         </ListCards>
    //     </div>    
    //     );
