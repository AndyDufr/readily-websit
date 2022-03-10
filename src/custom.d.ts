type RecordItem = {
    tags: string[];
    notes: string;
    type: "-" | "+";
    amount: number;
    time?: Date;
};
type tagListModel = {
    data: string[]
    fetch: () => RecordItem[],
    save: () => void,
    create: (name: string) => 'seccess' | 'duplicated'
}