type RecordItem = {
    tags: string[];
    notes: string;
    type: "-" | "+";
    amount: number;
    time?: Date;
};
type Tag = {
    id: string,
    name: string
}
type tagListModel = {
    data: tag[]
    fetch: () => RecordItem[],
    save: () => void,
    create: (name: string) => 'seccess' | 'duplicated'
    updateTag: (id: string, name: string) => 'seccess' | 'duplicated' | 'not found'
    removeTag: (id: string) => void
}