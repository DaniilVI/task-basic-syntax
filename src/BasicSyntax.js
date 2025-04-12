export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let prev = 0;
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        switch (str[i]) {
            case 'I':
                count = 1;
                break;
            case 'V':
                count = 5;
                break;
            case 'X':
                count = 10;
                break;
            case 'L':
                count = 50;
                break;
            case 'C':
                count = 100;
                break;
            case 'D':
                count = 500;
                break;
            case 'M':
                count = 1000;
                break;
            default:
                break;
        }
        if (!(prev >= count || i == 0)) result -= 2 * prev;
        result += count;
        prev = count;
    }
    return result;
}
