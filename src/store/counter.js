import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { useToast } from 'vue-toastification'
import { listTypeSupport } from './data'
import { listTypeFormat } from './commonData'

const toast = useToast()
export const useFieldStore = defineStore('field', {
  state: () => ({
    fieldList: [
      {
        id: nanoid(),
        name: '',
        type: '',
        options: []
      }
    ],
    result: [],
    format: 'table',
    rows: 10
  }),
  getters: {
    getResult: (state) => state.result,
    list: (state) => state.fieldList,
    getListName: (state) => {
      console.log(state.fieldList)
      let filter = state.fieldList.filter(
        (item) =>
          (item.name.trim() !== '' && item.type.trim() === '') ||
          (item.name.trim() === '' && item.type.trim() !== '') ||
          (item.name.trim() !== '' && item.type.trim() !== '')
      )
      let listName = filter.map((item) => item.name)

      return listName
    },
    getFormat: (state) => state.format,
    getRows: (state) => state.rows,
    getColumn: (state) => state.fieldList.length,
    getPreviewData: (state) => {
      if (
        state.format === listTypeFormat.at(1).value ||
        state.format === listTypeFormat.at(3).value
      ) {
        let listDataExample = '\n'
        listDataExample += state.fieldList.map((item) => item.name).join(', ')
        state.result.forEach((list) => {
          listDataExample += '\n'
          listDataExample += list.join(', ')
        })
        return listDataExample
      } else if (state.format === listTypeFormat.at(2).value) {
        let listName = state.fieldList.map((item) => item.name)
        let result = '\n['
        state.result.forEach((item) => {
          result += '\n\t{\n'
          for (let i = 0; i < item.length; i++) {
            result += `\t\t"${listName[i]}": "${item[i]}"`
            if (i != item.length - 1) {
              result += ','
            }
            result += '\n'
          }
          result += '\n\t},'
        })
        result += '\n]'
        return result
      } else if (state.format === listTypeFormat.at(4).value) {
        let result = '\n'
        let listName = state.fieldList.map((item) => item.name)
        state.result.forEach((list) => {
          result += `INSERT INTO [SCHEMA] (${listName.join(', ')}) VALUES ("${list.join('", "')}")`
          result += '\n'
        })
        return result
      }

      return state.result
    }
  },
  actions: {
    setResult(variable) {
      this.fieldList = variable
    },
    setFormat(variable) {
      this.format = variable
    },
    setRows(variable) {
      this.rows = variable
    },
    setResult() {
      this.result = []
      let listDataExample = []
      // Get list want to filter
      this.fieldList.forEach((field) => {
        if (field.name.trim() === '' && field.type.trim() === '') {
          console.log('return')
          return
        } else if (field.type.trim() == '') {
          listDataExample.push([])
          return
        }

        // Get object example with name
        let filter = listTypeSupport.find(
          (obj) => obj.name.toLowerCase() === field.type.toLowerCase()
        )
        // Check exist object
        if (filter == undefined) {
          return
        }
        // Get data from object field example existed

        // Add list want to filter
        listDataExample.push(filter.data)
      })

      // Add data example
      // Get random data from list object example existed
      for (let row = 0; row < this.rows; row++) {
        let listColumn = []
        for (let column = 0; column < listDataExample.length; column++) {
          let index = Math.floor(Math.random() * 50)
          // Create variable to save example
          let exampleData = listDataExample[column].at(index)

          listColumn.push(exampleData)
        }

        this.result.push(listColumn)
      }
    },
    removeField(id) {
      var index = this.fieldList.findIndex((item) => item.id === id)

      if (index >= 0) {
        this.fieldList.splice(index, 1)
      }
    },
    cloneField(item) {
      if (this.fieldList.length < 10) {
        item.id = nanoid()
        this.fieldList.push(item)
      }
    },
    addField() {
      if (this.fieldList.length < 10) {
        this.fieldList.push({
          id: nanoid(),
          name: '',
          type: '',
          options: []
        })
      }
    },
    updateField(id, field, updatedValue) {
      console.log('Updatetype')
      var item = this.fieldList.find((i) => i.id === id)
      if (item != null) {
        if (field === 'name') {
          item.name = updatedValue
          console.log(this.fieldList)
        } else if (field === 'type') {
          item.type = updatedValue
          console.log(this.fieldList)
        } else item.options = updatedValue
      }
    },
    importFile(data) {
      this.fieldList = []
      if (data != null && data.length > 0) {
        data.map((item) =>
          this.fieldList.push({
            id: nanoid(),
            name: item,
            type: '',
            options: []
          })
        )
        toast.success('Successfully added', {
          timeout: 2000
        })
      }
    }
  }
})
