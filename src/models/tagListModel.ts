const loaclStorageKeyName = 'tagList'
const tagListModel: tagListModel = {
    data: [],
    fetch() {
        const tags = JSON.parse(window.localStorage.getItem(loaclStorageKeyName) || '[]')
        this.data = tags
        return tags
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