import { useEffect, useState } from "react";
import './game.css';
import DataContainer from "./DataContainer";

const ColorPalletes = ({sqColors, onSelectColor}) => {
    return (
        <>
        {sqColors.map((color, index) => (
            <div onClick={ () => onSelectColor(color, index)}
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
            
            >
                {/* <p>{color}</p> */}

            </div>
          ))
        }
        </>
    );
}

export default function Game() {
    const [colors, setColors] = useState([]);
    const [pickedColor, setPickedColor] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [numSquare, setnumSquare] = useState(3);

    const randomPickedColor = (colors) => {
        const pickColor = colors[(Math.floor(Math.random() * colors.length))];
        setPickedColor(pickColor);
    }

    const generateRandomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return `#${randomColor}`
    }

    const generateRandomColors = () => {
        console.log("color generate", numSquare);
        const colors = [];
        for (let i = 0; i < numSquare; i++) {
            colors.push(generateRandomColor());
        }
        setColors(colors);
        randomPickedColor(colors);
    }

    const handleSuccessCheck = (selectColor, index) => {
        console.log("success check", pickedColor, selectColor, index)
        if(pickedColor === selectColor) {
            const newcolors = new Array(numSquare).fill(selectColor);
            setColors(newcolors)
            setIsSuccess(true);
        } else {
            colors[index] = "#fff";
            setColors(colors)
            setIsSuccess(false);
        }
    }

    const handleSelectedColor = (selectColor, index) => {
        console.log("color", selectColor);
        if(isSuccess) return;
        setSelectedColor(selectColor);
        handleSuccessCheck(selectColor, index);

    }

    const reset = () => {
        setSelectedColor('');
        setPickedColor('');
        setIsSuccess(false);
        generateRandomColors();
    }

    useEffect(() => {
        generateRandomColors();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    useEffect(() => {
        // console.log("mode", numSquare)
        reset();
    }, [numSquare]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="game">
            <div className="que-container">
                <DataContainer pickedColor={pickedColor} isSuccess={isSuccess} selectedColor={selectedColor} setnumSquare={setnumSquare} reset={reset} />
            </div>
            <div className="color-container">
                <ColorPalletes sqColors={colors} onSelectColor={handleSelectedColor} />
            </div>

        </div>
    );
}