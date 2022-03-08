const model = {
    fetch(): RecordItem[] {
        return JSON.parse(
            window.localStorage.getItem("recordList") || "[]"
        );
    },
    save(recordList: RecordItem[]): void {
        window.localStorage.setItem("recordList", JSON.stringify(recordList));
    },
    deepCope(data: RecordItem | RecordItem[]): RecordItem {
        return JSON.parse(JSON.stringify(data));
    }
}
export default model;