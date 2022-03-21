import deepCope from "@/lib/deepCope";
const loaclStorageKeyName = 'recordList'
const recordList = {
    data: [] as RecordItem[],
    fetch(): RecordItem[] {
        this.data = JSON.parse(
            window.localStorage.getItem(loaclStorageKeyName) || "[]"
        );
        return this.data
    },
    save(): void {
        window.localStorage.setItem(loaclStorageKeyName, JSON.stringify(this.data));
    },

    create(record: RecordItem): void {
        record.time = new Date();
        // 此处必须要对源数据进行深拷贝之后再存入数据库
        const recordDeepCope = deepCope(record);
        this.data.push(recordDeepCope);
    }
}
export default recordList