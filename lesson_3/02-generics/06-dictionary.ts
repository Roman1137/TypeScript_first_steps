import {KeyValuePair} from "./05-generic-class";

// суть Generic`ов в том, что мы написали один раз класс и он становится универсаьным.
// его можна применять абсолютно в разных частях приложения.

class Dictionary<TKey, TValue> {
    // для примитивных типов советуют использовать T[], но в данном случае
    // пришлось использовать Array<T>
    private data: Array<KeyValuePair<TKey, TValue>> = [];

    public add(key: TKey, value: TValue): void {
        const entry = new KeyValuePair<TKey, TValue>();
        entry.key = key;
        entry.value = value;
        this.data.push(entry);
    }

    public getValue(key: TKey): TValue | null {
        for (const pair of this.data) {
            if (pair.key === key) {
                return pair.value;
            }
        }

        return null;
    }
}

const dictionary = new Dictionary<string, string>();
dictionary.add("hello", "привет");
dictionary.add("book", "книга");
dictionary.add("apple", "яблоко");

console.log(dictionary.getValue("book"));

const dictionary2 = new Dictionary<number, boolean>();
dictionary2.add(1, true);
dictionary2.add(2, true);
dictionary2.add(7, true);

console.log(dictionary2.getValue(7));
