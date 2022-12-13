import styled from "styled-components";

export const Input = styled.input`
  font-family: "Poppins", sans-serif;
  font-siz: 30px;
  margin-left: 10px;

  height: 30px;
  width: 600px;
  border: none;
  background-color: transparent;
  outline: none;
  &:active {
    outline: none;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;

  font-siz: 10px;
  padding-top: 10px;

  height: auto;
  width: auto;
`;
export const Diva = styled.div`

  display: flex;
  justify-content: space-between;
    flex-direction: row;
 
  height:  auto;
  width: auto;
  padding-top: 10px;
  
  input {
    border: 0.5px  solid;
   height: 40px;
   width:250px;
   margin-bottom:47px;
    cursor: pointer;
    align-items: center;
    font-family: sans-serif;
    font-siz: 20px;
    margin-left: 10px;
    outline:none !important;
    border-color: rgba(0, 0, 0, 0.50);
    border-radius: 5px;;
   &:active {
      border-color: rgba(10, 10, 10, 0.90);
   
    }
  
  }

  select{
    height: 40px;
   width:250px;
   margin-bottom:47px;
    cursor: pointer;
    align-items: center;
    font-family: sans-serif;
    font-siz: 20px;
    margin-left: 10px;
    outline:none;
    border-color: rgba(0, 0, 0, 0.90);
    border-radius: 5px;;
   &:active {
      border-color: rgba(10, 10, 10, 0.90);
   
  }

 
`;

export const Btn = styled.button`
  input {
    padding-top: 20px;
    align-items: center;
    background-color: #3d53c3;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;

    &:disabled {
      color: #ff0606;
      cursor: not-allowed;
    }
    &:hover,
    &:focus {
      background-color: #949fd9;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
    }

    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      background-color: #f0f0f1;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(0);
    }
  }
`;

export const PError = styled.p`
  display: flex;
  font-family: "Poppins", sans-serif;
  position: relative;
  width: auto;
  height: 60%;
  top: -50px;
  font-size: 12px;
  padding-top: 10px;
  font-weight: 600;
  color: red;
`;

export const DivError = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`;

export const DivPError = styled.div`
  display: flex;
  padding-left: 110px;
  justify-content: flex-start;
  flex-direction: column;
  width: 300px;
  height: auto;
`;

export const DivBoton = styled.div`
padding-top:20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DivID = styled.div`








  padding: 5px 0px 10px 3px;

  border-radius: 5px;
  position: relative;
  outline: 1px #40a7f0 solid;
  width: 40px;
  height: 20px;
  background: #90caf3;
  font-size: 13px;
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 0px 0px 100px;
  position: relative;
  top: -30px;
`;
