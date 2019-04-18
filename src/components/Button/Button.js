import React from 'react';
import ButtonStyle from './Button.css';
import { Button } from 'react-bootstrap';


const ButtonElement = ({value, onClick}) => {

  return (
    <>
    <Button id="line1plus" onClick={(e) => {onClick(e)}} >Line1 Plus</Button>        
    <Button id="line1minus" onClick={(e) => {onClick(e)}} >Line1 Minus</Button>
    <Button id="line2plus" onClick={(e) => {onClick(e)}} >Line2 Plus</Button>
    <Button id="line2minus" onClick={(e) => {onClick(e)}} >Line2 Minus</Button>        
    <Button id="line3plus" onClick={(e) => {onClick(e)}} >Line3 Plus</Button>
    <Button id="line3minus" onClick={(e) => {onClick(e)}} >Line3 Minus</Button>    
    </>
      
  );
};

export default ButtonElement;
