const loaclStorageKeyName = 'recordList'
const recordList = {
    fetch(): RecordItem[] {
        return JSON.parse(
            window.localStorage.getItem(loaclStorageKeyName) || "[]"
        );
    },
    save(recordList: RecordItem[]): void {
        window.localStorage.setItem(loaclStorageKeyName, JSON.stringify(recordList));
    },
    deepCope(data: RecordItem | RecordItem[]): RecordItem {
        return JSON.parse(JSON.stringify(data));
    }
}
export default recordList