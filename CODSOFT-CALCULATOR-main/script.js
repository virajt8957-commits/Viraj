* {
    box - sizing: border - box;
    font - family: Arial,
    sans - serif;
}

body {
    background - color: #f4f4f4;
    display: flex;
    justify - content: center;
    align - items: center;
    height: 100 vh;
}

.calculator {
    background - color: #222;

    padding: 20px;

    border-radius: 12px;

    width: 280px;

}



# display {
        width: 100 % ;
        height: 50 px;
        margin - bottom: 15 px;
        font - size: 22 px;
        text - align: right;
        padding: 10 px;
        border: none;
        border - radius: 6 px;
    }

    .buttons {
        display: grid;
        grid - template - columns: repeat(4, 1 fr);
        gap: 10 px;
    }

    button {
        padding: 15 px;
        font - size: 18 px;
        border: none;
        border - radius: 6 px;
        cursor: pointer;
        background - color: #444;

    color: white;

}



button:hover {

    background-color: # 666;
    }

    .equal {
        background - color: #ff9800;
        grid - row: span 2;
    }

    .zero {
        grid - column: span 2;
    }