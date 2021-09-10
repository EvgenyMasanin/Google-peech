import MySpeechRecognition from './MySpeechRecognition'
let recognition: any
let isStop = false

export class Recognition {
  static startRecognition(callback: (text: string) => void) {
    let isResult = false

    recognition = new MySpeechRecognition()
    recognition.lang = 'en-US'
    recognition.addEventListener('result', (e: any) => {
      isResult = true
      const text = [...e.results]
        .map((r) => r[0])
        .map((r) => r.transcript)
        .join('')
      console.log(text)
      callback(text)
    })
    recognition.addEventListener('end', () => {
      if (isResult || isStop) {
        isResult = false
        isStop = false
      } else recognition.start()
    })

    recognition.start()
  }

  static stopRecognition() {
    isStop = true
    recognition.stop()
  }
}
