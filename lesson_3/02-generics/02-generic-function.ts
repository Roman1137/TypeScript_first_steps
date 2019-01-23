// Когда я буду создавать что-то Generic, то компилятор будет проверять, чтобы я
// корректно с ним(с типом T) взаимодействовал
// В след. примерах будет показано, как можно расширить информацию о типе T(добавить ограничения)

function writeLog<T>(value: T): T {
    //console.log(value.length);
    // свойство length не существует на типе T.
    // так, как в качестве значения для типа Тможет быть любой тип данных, то
    // компилятор смотрит, чтобы обращения к такому типу не привели к исключениям.
    // НАПРИМЕР, у типов Array, string свойство length есть, а вот в типе number - его нету.
    return value;
}

function writeLogArray1<T>(value: T[]): T[] {
    // массивы имеют свойство length
    console.log(value.length);
    return value;
}

function writeLogArray2<T>(value: Array<Array<T>>): Array<Array<T>> {
    // массивы имеют свойство length
    console.log(value.length);
    return value;
}