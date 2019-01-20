interface IReport {
    name: string;

    // вот так объявляем методы. Указываем возвращаемое значение и параметры, что он принимает.
    // Можно было бы сделать так:
    //build(name: string): string;
    build(): string;
}

// implements - ключевое слово для реализации интерфейса в классе
// если члены интерфейса не будут определены в классе компилятор выдаст ошибку
class DailyReport implements IReport {
    public name: string = "Daily Report";
    public build(): string {
        return "Some daily Report data";
    }
}

class WeeklyReport implements IReport {
    public name: string = "Weekly Report";
    public build(): string {
        return "Some weekly Report data";
    }
}

let daily: IReport = new DailyReport();
let weekly: IReport = new WeeklyReport();

console.log(daily.build());
console.log(weekly.build());
