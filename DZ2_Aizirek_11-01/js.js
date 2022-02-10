function  chessBoard() {  //шахматная доска
    const limit = 8;
    let result = "";
    for (let i = 0; i < limit; i++ ){
        for (let j = 0; j < limit; j++){
            if (i % 2 !== 0){
                result += j % 2 === 0 ? " ": "#"   //% деление без остатка . ! означает НЕ...
            }else {
                result += j % 2 === 0 ? "#" : " "  //тернарный оператор (новый метод if else)
            }
        }
        result += "\n"
    }
    return result
}

console.log(chessBoard());
