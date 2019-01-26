// этот файл тоже модуль
// сначала мы объявляем бизнес логику, а потом в конце определяем, что открывать(export`ировать наружу)

class EmailValidator {
    isCorrect(email: string): never {
        throw new Error(`Method is not implemented ${email}`);
    }
}

// этот класс не экспортируется наружу. Он используется строго внутри.
// а если допишу слово 'export' перед классом, то класс StrictlyInside будет экспртировать снаружу
class StrictlyInside {
    public message: string = "aa";
}

new StrictlyInside();

export {EmailValidator};
// export с указанием другого имени
export {EmailValidator as VasyaPupkin};

