export class KeyValuePair<TKey, TValue> {
    private _key: TKey;
    get key() {
        return this._key;
    }

    set key(value: TKey) {
        if (!value) {
            throw new Error("Значение value не может быть пустым");
        }
        this._key = value;
    }

    private _value: TValue;
    get value() {
        return this._value;
    }

    set value(value: TValue) {
        if (!value) {
            throw new Error("Значение value не может быть пустым");
        }
        this._value = value;
    }
}

let strAndNum = new KeyValuePair<string, number>();
strAndNum.key = "key1";
strAndNum.value = 123;

//strAndNum.value = "123";
//strAndNum.key = ""; // Error: Значение value не может быть пустым
