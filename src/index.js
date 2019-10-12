module.exports = function check(str, bracketsConfig) {
    let mas = str.split('');
    for (let i = 0; i < mas.length; i++) {
        for(let j = 0; j < bracketsConfig.length; j++) {
        if (mas[i] == bracketsConfig[j][0] && mas[i+1] == bracketsConfig[j][1]) { 
            mas.splice(i, 2);
            i = i - 2;
        }
      }
    }
    return mas.length == 0;
}
