// параметр функции в начала имена которого ипользуется ... является rest параметром.
// rest параметр - это НАБОР ОПЦИОНАЛЬНЫХ ПАРАМЕТРОВ.
// При вызове такого метода, количество параметров НЕ ОГРАНИЧЕНО.
// Аналог params[] в С#
function printValue(message: string, ...names: string[]): void {
    console.log(message);
    for (const name of names) {
        console.log(name);
    }
}

// Вызов функции с rest параметрами
printValue("sample 1");
printValue("sample 2", "1", "2");
printValue("sample 2", "1", "2", "abc");