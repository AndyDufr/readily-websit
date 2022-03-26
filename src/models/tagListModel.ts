import { nanoid } from "nanoid"
const loaclStorageKeyName = 'tagList'
const tagListModel: tagListModel = {
    data: [],
    fetch() {
        const tags = JSON.parse(window.localStorage.getItem(loaclStorageKeyName) || '[]')
        this.data = tags
        if (!tags || tags.length === 0) {
            this.create('衣')
            this.create('食')
            this.create('住')
            this.create('行')
        }
        return tags
    },
    save() {
        window.localStorage.setItem(loaclStorageKeyName, JSON.stringify(this.data));
    },
    create(name) {
        // 此时 data 是一个对象数组，用 map 将里面的 name 收集成一个新数组
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            return 'duplicated'
        }
        this.data.push({ id: nanoid(), name: name })
        this.save();
        return 'seccess'
    },
    updateTag(id, name) {
        const idList = this.data.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name
                this.save()
                return 'seccess'
            }
        } else {
            return 'not found'
        }
    },
    removeTag(id) {
        let index = -1
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i
                break
            }
        }
        this.data.splice(index, 1)
        this.save()
    }
}
export default tagListModel