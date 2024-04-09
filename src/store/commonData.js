// init data field of
export const dataField = [
  {
    type: 'csv',
    name: 'Import field names from CSV/Excel'
  },
  {
    type: 'text',
    name: 'Import field names from text'
  },
  {
    type: 'json',
    name: 'Import field names from JSON'
  },
  {
    type: 'sql',
    name: 'Import field names from SQL Create Table'
  }
]

export const tableHeader = ['Field Name', 'Type', 'Options', 'Actions']

export const listTypeFormat = [
  { text: 'Table', value: 'table' },
  { text: 'CSV', value: 'csv' },
  { text: 'JSON', value: 'json' },
  { text: 'Excel', value: 'excel' },
  { text: 'SQL', value: 'sql' }
]
