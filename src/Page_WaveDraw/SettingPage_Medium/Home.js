import styled from "styled-components";
import React, { useState, useEffect, useRef, createRef } from 'react';

const Container = styled.div`
  position: relative;
  display:flex;
  width:900px;
`;
const SmallTextLine = styled.span`
  display: block;             // This ensures that it occupies its own line.
  font-size: 18px;            // A small font size. Adjust as needed.
  line-height: 1;             // This ensures minimal spacing between top and bottom.
  padding-top: 3px;           // Small space on top.
  padding-bottom: 3px;        // Small space on bottom.
  white-space: nowrap;        // This ensures the text stays on a single line.
`;
const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: white;
  border: 1px solid #ccc;
  cursor:pointer;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const RadioColumn = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;

  input[type="radio"] {
    margin-right: 5px;
  }
`;

const Icon_Wrapper = styled.div`
  width:29px;
  height:29px;
  margin-top:3px;
  margin-bottom:3px;
  margin:3px 8px 3px 3px;
  border:1px solid black;
`
const Icon_Inner = styled.div`
  width:100%;
  height:100%;
`
const Garbage_Inner = styled.div`
  position:relative;
  height:30px;
  width:40px;
`
const MediumLabel = styled.div`
  padding: 5px 10px;
  background-color: #f6f6f6;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-left: 10px;  // space it out from the Icon_Wrapper
  width:70px;
  display: flex; 
  align-items: center; // vertically centers the text
`;
const SVG_Wrapper = styled.div`
  border-radius: 10px;
  height: 26px;
  width: 36px;
  margin-top: 2px;
  margin-bottom: 2px;
  background-color: pink;
  display: flex;
  
  &:hover {
    background-color: red;
  }
`;
const Label_Wrapper = styled.div`
  width:100px;
  display:flex;
  padding-left:5px;
  align-items: center;

`
const SVG_Inner = styled.div`
  position: relative;
  width: 32px;
  height: 24px;
  margin: auto;
`;
const Button_setting = styled.div`
    background: #332cf2;
    border: 0;
    border-radius: .375rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Circular,Helvetica,sans-serif;
    font-size: 1.0rem;
    font-weight: 600;
    padding: 0.75rem 1.0rem;
    text-align: left;
    transition: transform .2s;

    &:disabled {
        color: #787878;
        cursor: auto;
    }
     
    &:not(:disabled):hover {
        transform: scale(1.05);
    }

    &:not(:disabled):hover:active, &:not(:disabled):active {
        transform: scale(1.05) translateY(.125rem);
    }
     
    &:focus {
        outline: 0;
    }
     
    &:focus:before {
        border-width: .125rem;
        content: "";
        left: calc(-1*.375rem);
        position: absolute;
        top: calc(-1*.375rem);
    }
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; // Ensure the image is always on top
`;
const Input_Wrapper = styled.div`
position:relative;
display: flex;
  align-items: center;
  padding-right:5px;
  input {
    font-size: 16px;  // Adjust to the font size you prefer
  }
`
const InputLabel = styled.div`
margin-left: 5px;
align-items: center;
`
const RightSide = styled.div`
  margin-bottom:5px;
  margin-left:10px;
  margin-top:5px;
  width:800px;
  background-color:rgb(240,240,240);
  padding-left:20px;
  padding-right:20px;
  padding-top:20px;
`
const MainContentWrapper = styled.div`
  padding-left:10px;
  padding-right:10px;
  padding-top:20px;
`
const MainContentInner = styled.div`
padding-top:16px;
padding-bottom:20px;
position:relative;
display: inline-block;
display:flex;
@media screen and (max-width:800px){
  flex-direction:column;
}
`

const SettingWrapper = styled.div`
padding-top:20px;
`
const SettingBoxContent = styled.div`
padding-top:16px;
padding-bottom:20px;
`
const Front = styled.div`
position:relative;
`
const FrontWrapper = styled.div`
  box-sizing:border-box;
  background-color:rgb(255,255,255);
  border-spacing:0;
  cursor:auto;
  direction 1tr;
  empty-cells:show;
  hyphens:none;
  tab-size:8;
  text-align:left;
  text-indent:0;
  text-transform:none;
  widows:2;
  word-spacing:normal;
  font-weight:400;
  -webkit-font-smoothing:auto;
  word-break:bread-word;
  display:block;
  position:relative;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &::before{
    content:"";
    position:absolute;
    left:0px;
    width:100%;
    height:100%;
    pointer-events:none;
    box-sizing:border-box;
    border-top: 1px solid #eaeded;
    z-index:1;
  }
  &::after{
    content:"";
    position:absolute;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    pointer-events:none;
    box-sizing:border-box;
    box-shadow:0 1px 1px 0 rgba(0,28,36,0,3) 1px 1px 1px 1px 0 rgba(0,28,36,0.15), -1px 1px 1px 0 rgba(0,28,36,0.15);
    mix-blend-mode:multiply;
  }

`


const FrontHeader = styled.div`
  border-bottom:1px solid #eaeded;
  background-color: rgb(250,250,250);

`
const FrontHeaderInner = styled.div`
 width:100%;
 display:flex;
 padding:10px 20px 10px 20px;
 box-sizing:border-box;
 border:none;
 line-height 22px;
 tex-align:left;
 justify-content:space-between;
`
const TitleWrapper = styled.div`
padding-top:4px;
flex-wrap:wrap;
justify-content:space-between;

`
const TitleInner = styled.div`
  font-size:18px;
  padding:4px 0 0px 0px;
  min-width:0;
  color:#16191f;
`
const CustomH3 = styled.div`
 font-size:24px;
 letter-spacing:normal;
 font-weight:600;
 -webkit-font-smoothing:auto;
 margin:0;
 display:inline;
 margin-right:8px;
 margin:0px;
 color:rgb(40,40,40);
`
const FrontBody = styled.div`
position:relative;
padding-top:16px;
padding:30px 30px 30px 20px;
`
const FrontHeaderLeft = styled.div`
line-height:none;
display:flex;
flex-direction:row;
`
const AWSStyledButton = styled.button`
background:#fff;
color:#545b64;
border: 1px solid #545b64;
border-radius: 2px;
padding: 0.4rem 1.3rem;
font-weight: 700;
letter-spacing: .25px;
display: inline-block;
cursor: pointer;
text-align: left;
font-size: 1.0rem;
line-height: 1.15;
animation: none 0s ease 0s 1 normal none running;
backface-visibility: visible;
border-collapse: separate;
border-image: none;
border-spacing: 0;
bottom: auto;
box-shadow: none;
box-sizing: content-box;
caption-side: top;
clear: none;
clip: auto;
column-fill: balance;
column-gap: normal;
column-span: 1;
columns: auto;
content: normal;
counter-increment: none;
counter-reset: none;
direction: ltr;
empty-cells: show;
float: none;
font-family: serif;
font-style: normal;
font-variant: normal;
font-stretch: normal;
height: auto;
hyphens: none;
left: auto;
list-style: disc outside none;
margin: 0;
max-height: none;
max-width: none;
min-height: 0;
opacity: 1;
orphans: 2;
outline: medium none invert;
overflow: visible;
overflow-x: visible;
overflow-y: visible;
page-break-after: auto;
page-break-before: auto;
page-break-inside: auto;
perspective: none;
perspective-origin: 50% 50%;
position: static;
right: auto;
tab-size: 8;
table-layout: auto;
text-align: left;
text-align-last: auto;
text-indent: 0;
text-shadow: none;
text-transform: none;
top: auto;
transform: none;
transform-origin: 50% 50% 0;
transform-style: flat;
transition: none 0s ease 0s;
unicode-bidi: normal;
vertical-align: baseline;
visibility: visible;
white-space: normal;
widows: 2;
width: auto;
word-spacing: normal;
z-index: auto;
-webkit-box-sizing: border-box;
box-sizing: border-box;
font-family: Amazon Ember,Helvetica Neue,Roboto,Arial,sans-serif;
display: inline-block;
min-width: 0;
-ms-word-break: break-all;
word-break: break-word;
&:hover {
    color: #16191f;
    border-color: #16191f;
    background-
}
&:active{
    background-color:#EAEDED;
}
`
const RowFlex = styled.div`
box-sizing:border-box;
padding:1rem 0;
`
const ButtonDownloadWrapper = styled.div`
margin-top:30px;
margin-bottom:15px;
text-align: center
`
const ButtonDownload = styled.div`
backface-visibility: hidden;
background-color:rgb(255,153,0);
border: 0;
border-radius: .3rem;
box-sizing: border-box;
color:rgb(0,0,0);
cursor: pointer;
display: inline-block;
font-family: Circular,Helvetica,sans-serif;
font-size: 1.2rem;
font-weight: 600;
line-height: 1.1;
padding: 10px 25px;
position: relative;
text-align: left;
text-decoration: none;
transition: transform .2s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

&:hover{
  background-color:rgb(236,114,17);
}
&:active{
  background-color:#EB5F07;
}
`
export const Home = ({ mediumColor, mediumArray, funcShowWindow, changeMedium }) => {
    const [medium, setMedium] = useState([]);
    const [defaultMedium, setDefaultMedium] = useState([]);
    const [hoveredItemId, setHoveredItemId] = useState(-1);
    const [errorlog, setErrorLog] = useState([]);
    useEffect(() => {
        if (mediumArray && mediumColor && mediumArray.length >= 2) {
            setDefaultMedium(mediumArray.slice(0, 2));
            setMedium(mediumArray.slice(2));
        }
    }, [mediumArray, mediumColor])
    const handleInputChange = (columnIndex, field, value) => {
        const newMedium = [...medium];
        newMedium[columnIndex][field] = value;
        setMedium(newMedium);
    };

    function delete_Onclick(index) {
        const newMedium = [...medium];
        newMedium.splice(index, 1);
        setMedium(newMedium);
    }

    function handleHover(index) {
        setHoveredItemId(index)
    }
    function handleLeave() {
        setHoveredItemId(-1);
    }
    const handleKeyDown = (e) => {
        // Here we're checking if the key is NOT one of the allowed characters/keys
        if (!/^[0-9.]$/.test(e.key) && e.key !== "Backspace" && e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Tab") {
            e.preventDefault();
        }
    }
    function infinate(value) {
        if (value === "-1") { value = "∞"; }
        return value;
    }
    function isValidNumber(input) {
        let str = String(input);  // Convert the input to a string
        if (!str.length) {
            return "未入力です";
        }
        if (/e/i.test(str)) {
            return "指数表記は無効です"; // "Scientific notation is invalid"
        }
        // Check for any character that's not 0-9 or .
        if (/[^0-9.]/.test(str)) {
            return "数字と.以外入力禁止です";
        }
        // Check for more than one period
        if ((str.match(/\./g) || []).length > 1) {
            return ".が二つ以上あります";
        }
        // Check for strings starting with "0" followed by another number without a decimal
        if (str.startsWith('0') && str.length > 1 && str[1] !== '.') {
            return "0の後は.のみ入力可能です";
        }
        // Check for strings starting with "."
        if (str.startsWith('.')) {
            return "数字がない小数点は無効です";
        }
        // Check if string ends with a period or with a 0 after a period
        if (str.endsWith('.') || /0+$/.test(str.split('.')[1] || '')) {
            return "小数点以下の0で終了する値は無効です";
        }

        function countSignificantFigures(str) {
            // If there's a decimal, remove leading zeros and replace the dot
            if (str.includes('.')) {
                str = str.replace(/^0+/, '').replace('.', '');
            } else {
                // If no decimal, remove leading and trailing zeros
                str = str.replace(/^0+|0+$/g, '');
            }
            return str.length;
        }
        const totalSignificantFigures = countSignificantFigures(str);

        if (totalSignificantFigures > 7) {
            return "有効桁数は６桁までです";
        }
        var v = parseFloat(str);
        if (v !== 0 && v < 0.0001) {
            return "値が小さすぎます(0は入力可能)";
        }
        return true;
    }
    const addMedium = () => {
        setMedium([...medium, { 'DielectricConstant': "1", 'DielectricLoss': "0" ,'MagneticConstant':"1",'MagneticLoss':"0"}]);
    }
    const save = () => {
        const error = [];
        medium.forEach(obj => {
            Object.values(obj).forEach(value => {
                const validationResult = isValidNumber(value);
                if (validationResult !== true) {
                    error.push(validationResult);
                }
            });
        });
        if (error.length === 0) {
            changeMedium(medium);
            funcShowWindow();
            setErrorLog(error);
        } else {
            console.error('Errors found:', error);
            setErrorLog(error);
        }
    }
    
    return (
        <div className="App">
            <MainContentWrapper>
                <MainContentInner>
                    <RightSide>
                        <SettingBoxContent>
                            <Front>
                                <FrontWrapper>
                                    <FrontHeader>
                                        <FrontHeaderInner>
                                            <FrontHeaderLeft>
                                                <TitleWrapper>
                                                    <TitleInner>

                                                        <CustomH3 style={{ margin: 0 }}>媒質の設定</CustomH3>
                                                    </TitleInner>
                                                </TitleWrapper>
                                            </FrontHeaderLeft>
                                        </FrontHeaderInner>
                                    </FrontHeader>
                                    <FrontBody>
                                        <Container>
                                            <Garbage_Inner></Garbage_Inner>  {/* Just a placeholder for alignment */}
                                            <Icon_Wrapper style={{ border: '1px solid white' }}></Icon_Wrapper>    {/* Just a placeholder for alignment */}
                                            <Label_Wrapper>
                                                <InputLabel>複素誘電率実部</InputLabel>
                                            </Label_Wrapper>
                                            <Label_Wrapper>
                                                <InputLabel>複素誘電率虚部</InputLabel>
                                            </Label_Wrapper>
                                            <Label_Wrapper>
                                                <InputLabel>複素透磁率実部</InputLabel>
                                            </Label_Wrapper>
                                            <Label_Wrapper>
                                                <InputLabel>複素透磁率虚部</InputLabel>
                                            </Label_Wrapper>
                                        </Container>
                                        {defaultMedium.map((column, index) => (
                                            <Container key={index}>
                                                <Garbage_Inner></Garbage_Inner>
                                                <Icon_Wrapper>
                                                    <Icon_Inner style={{ backgroundColor: mediumColor[index] }}></Icon_Inner>
                                                </Icon_Wrapper>
                                                <Input_Wrapper>
                                                    <div style={{ width: '150px', paddingLeft: '5px' }}>
                                                        {column.DielectricConstant}
                                                    </div>
                                                </Input_Wrapper>
                                                <Input_Wrapper>
                                                <div style={{ width: '150px', paddingLeft: '5px' }}>
                                                    {column.DielectricLoss}
                                                    </div>
                                                </Input_Wrapper>
                                                <Input_Wrapper>
                                                <div style={{ width: '150px', paddingLeft: '5px' }}>
                                                    {column.MagneticConstant}
                                                    </div>
                                                </Input_Wrapper>
                                                <Input_Wrapper>
                                                    {column.MagneticLoss}
                                                </Input_Wrapper>
                                            </Container>
                                        ))}
                                        {medium.map((column, index) => (
                                            <Container key={index}>
                                                <Garbage_Inner
                                                    onMouseEnter={() => handleHover(index)}
                                                    onMouseLeave={handleLeave}
                                                    onClick={() => delete_Onclick(index)}
                                                >
                                                    <SVG_Wrapper style={{ backgroundColor: hoveredItemId === index ? "gray" : "white" }}>
                                                        <SVG_Inner>
                                                            <StyledImg
                                                                src={`${window.location.origin}/svgtrash.svg`}
                                                                alt="Trash Icon"
                                                            />
                                                        </SVG_Inner>
                                                    </SVG_Wrapper>
                                                </Garbage_Inner>
                                                <Icon_Wrapper>
                                                    <Icon_Inner style={{ backgroundColor: mediumColor[index + 2] }}></Icon_Inner>
                                                </Icon_Wrapper>
                                                <Input_Wrapper>
                                                    <input
                                                        maxLength="16"
                                                        type="text"
                                                        value={column.DielectricConstant}
                                                        style={{ width: '150px' }}
                                                        onChange={(e) => handleInputChange(index, 'DielectricConstant', e.target.value)}
                                                        onKeyDown={(e) => {
                                                            handleKeyDown(e);
                                                        }}
                                                    />
                                                </Input_Wrapper>
                                                <Input_Wrapper>
                                                    <input
                                                        maxLength="16"
                                                        type="text"
                                                        value={column.DielectricLoss}
                                                        style={{ width: '150px' }}
                                                        onChange={(e) => handleInputChange(index, 'DielectricLoss', e.target.value)}
                                                        onKeyDown={(e) => {
                                                            handleKeyDown(e);
                                                        }}
                                                    />
                                                </Input_Wrapper>
                                                <Input_Wrapper>
                                                    <input
                                                        maxLength="16"
                                                        type="text"
                                                        value={column.MagneticConstant}
                                                        style={{ width: '150px' }}
                                                        onChange={(e) => handleInputChange(index, 'MagneticConstant', e.target.value)}
                                                        onKeyDown={(e) => {
                                                            handleKeyDown(e);
                                                        }}
                                                    />
                                                </Input_Wrapper>
                                                <Input_Wrapper>
                                                    <input
                                                        maxLength="16"
                                                        type="text"
                                                        value={column.MagneticLoss}
                                                        style={{ width: '150px' }}
                                                        onChange={(e) => handleInputChange(index, 'MagneticLoss', e.target.value)}
                                                        onKeyDown={(e) => {
                                                            handleKeyDown(e);
                                                        }}
                                                    />
                                                </Input_Wrapper>
                                            </Container>
                                        ))}
                                        {medium.length < 3 && (
                                            <RowFlex>
                                                <AWSStyledButton onClick={() => addMedium()}>媒質の追加</AWSStyledButton>
                                            </RowFlex>
                                        )}
                                        {errorlog.map((value,index) => (
                                            <div key={index}>
                                            { value }
                                            </div>
                                        ))}
                                    </FrontBody>
                                </FrontWrapper>
                            </Front>
                        </SettingBoxContent>
                        <ButtonDownloadWrapper><ButtonDownload onClick={() => save()}>更新</ButtonDownload></ButtonDownloadWrapper>
                    </RightSide>
                </MainContentInner>
            </MainContentWrapper>
        </div>
    );
};