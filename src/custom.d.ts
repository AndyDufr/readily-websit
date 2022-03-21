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
    fetch: () => Tag[],
    save: () => void,
    create: (name: string) => 'seccess' | 'duplicated'
    updateTag: (id: string, name: string) => 'seccess' | 'duplicated' | 'not found'
    removeTag: (id: string) => void
}
type DataSourceItem = {
    text: string,
    value: string
}
interface Window {
    store: {
        tagList: tag[]
        createTag: (name: string) => void
        removeTag: (id: string) => void
        updateTag: (id: string, name: string) => 'seccess' | 'duplicated' | 'not found'
        recordList: RecordItem[]
        create: (record: Record) => void
    }
}