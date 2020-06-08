

export function findBy(data: Array<any>, keyField: string, keyValue: object): object | null {
    if (!data || data.length === 0) return null;

    for (let i = 0; i < data.length; ++i) {
        const row = data[i];
        if (row[keyField] == keyValue) return row;
    }

    return null;
}