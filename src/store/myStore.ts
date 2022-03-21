/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import tagListModel from '@/models/tagListModel'
import recordList from '@/models/recordList'

const store = {
    // tagListModel
    tagList: tagListModel.fetch(),
    createTag: (name: string) => {
        const result = tagListModel.create(name);
        if (result === "seccess") {
            window.alert("创建成功");
        } else if (result === "duplicated") {
            window.alert("标签名重复");
        } else {
            window.alert("标签名不能为空");
        }
    },
    removeTag: (id: string) => {
        return tagListModel.removeTag(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.updateTag(id, name);
    },
    // record store
    recordList: recordList.fetch(),
    create: (record: RecordItem) => {
        recordList.create(record);
    }
}
export default store