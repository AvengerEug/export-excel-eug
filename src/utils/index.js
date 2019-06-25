import './blob'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

  const s2ab = s => {
    if (typeof ArrayBuffer !== 'undefined') {
      let buf = new ArrayBuffer(s.length)
      let view = new Uint8Array(buf)
      for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
      return buf
    } else {
      let buf = new Array(s.length)
      for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF
      return buf
    }
  }

  const jsonToExcel = (data, fileName) => {
    const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' }
    const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} }
    // 通过json_to_sheet转成单页(Sheet)数据
    wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(data)
    var blob = new Blob([s2ab(XLSX.write(wb, wopts))], {type: 'application/octet-stream'})
    FileSaver.saveAs(blob, fileName + '.' + (wopts.bookType === 'biff2' ? 'xls' : wopts.bookType))
  }

export {
  jsonToExcel
}