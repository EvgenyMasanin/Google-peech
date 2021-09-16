const MySpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

let recognition: SpeechRecognition
let isStop = false

export class Recognition {
  static startRecognition(callback: (text: string) => void) {
    let isResult = false
    recognition = new MySpeechRecognition()
    recognition.lang = 'en-US'
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      isResult = true
      const text = [...e.results]
        .map((r) => r[0])
        .map((r) => r.transcript)
        .join('')
      callback(text)
    }
    recognition.onend = () => {
      if (isResult || isStop) {
        isResult = false
        isStop = false
      } else recognition.start()
    }

    recognition.start()
  }

  static stopRecognition() {
    isStop = true
    recognition.stop()
  }
}
