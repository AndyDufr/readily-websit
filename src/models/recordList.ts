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
        window.alert('保存成功！')
    },

    create(record: RecordItem): void {
        record.time = new Date().toISOString();
        // 此处必须要对源数据进行深拷贝之后再存入数据库
        const recordDeepCope = deepCope(record);
        this.data.push(recordDeepCope);
        this.save()
    }
}
export default recordList