
export function isEmpty(obj: any): boolean {
    if (typeof(obj) !== 'object') {
        return false;
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export function clean(obj: any): any {
    for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined || isEmpty(obj[prop])) {
            delete obj[prop];
        }
    }
    return obj;
}

export function findInMap<TK, TV>(
    map: Map<TK, TV>,
    test: (item: TV) => boolean,
): TV[] {
    const results: TV[] = [];
    const iter = map.values();
    let item = iter.next().value;
    while (item) {
        if (test(item)) {
            results.push(item);
        }
        item = iter.next().value;
    }
    return results;
}

/**
 * Prepends leading zeros to a number so that it gets a fixed length
 * @param num 
 * @param size 
 */
export function pad(num: number, size: number) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

/**
 * Removes quotes and escape sequences from a string
 */
export function extractString(src: string): string {
    if (src.length <= 0) {
        return src;
    }

    let quote: string;
    switch (src[0]) {
        case '\'':
            quote = '\'';
            break;
        case '"':
            quote = '"';
            break;
        default:
            return src;
    }

    let res = src
        .replace(new RegExp(quote, 'g'), '')
        .replace(new RegExp('\\' + quote), quote);
    return res;
}

/**
 * An object that can save the position of its elements
 */
export abstract class PositionAwareObject<T> {
    public propertiesOrder: (keyof T)[] = [];

    /**
     * Saves the position of the keys
     */
    public savePropertyPosition(src: keyof T | object) {
        if (typeof src === 'object') {
            for (const key in src as any) {
                if (!src.hasOwnProperty(key) || key === 'propertiesOrder') {
                    continue;
                }
                this.savePropertyPosition(key as (keyof T));
            }
            return;
        }

        if (typeof src === 'string') {
            const key = src as keyof T;
            const existingIndex = this.propertiesOrder.indexOf(key);
            if (existingIndex >= 0) {
                this.propertiesOrder.splice(existingIndex, 1);
            }
            this.propertiesOrder.push(key);
        }

    }
}

/**
 * Applies a given order of elements to an object
 */
export function sortObject<T>(src: T, order: (keyof T)[]): T {
    const raw = Object.assign({}, src);

    // Sort object
    const sorted: any = {};
    for (const key of order) {
        if (!raw.hasOwnProperty(key)) {
            continue;
        }
        if (raw[key]) {
            sorted[key] = raw[key];
            delete raw[key];
        }
    }
    // Move remaining elements
    for (const key in raw) {
        if (!raw.hasOwnProperty(key)) {
            continue;
        }
        sorted[key] = raw[key];
        delete raw[key];
    }
    return sorted;
}
