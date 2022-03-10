const loaclStorageKeyName = 'tagList'
const tagListModel: tagListModel = {
    data: [],
    fetch() {
        return JSON.parse(
            window.localStorage.getItem(loaclStorageKeyName) || "[]"
        );
    },
    save() {
        window.localStorage.setItem(loaclStorageKeyName, JSON.stringify(this.data));
    },
    create(name: string) {
        if (this.data.indexOf(name) >= 0) {
            return 'duplicated'
        }
        this.data.push(name)
        this.save();
        return 'seccess'

    }
}
export default tagListModel