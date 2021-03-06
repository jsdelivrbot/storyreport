import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output("update") update: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  startTime: string = ''
    endTime: string = ''
  onStartTimeChange() {
      this.startTime = this.formatTime(this.startTime)
      this.updateTime()
    }

    onEndTimeChange() {
      this.endTime = this.formatTime(this.endTime)
      this.updateTime()
    }

    updateTime() {
      let start = this.convertStringToSeconds(this.startTime)
      let end = this.convertStringToSeconds(this.endTime)
      this.update.emit({ start, end })
    }


    private formatTime (str: string) : string {

      if (str.length > 8) {
        str = str.split('')
                  .splice(0, str.length - 8)
                  .join('')
      }

      var zeros = [48, 1632, 1776, 2406]

      /*
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
      // see http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
      var zero = {}
      var locales = ['ak','ar','ay','az','bal','bik','bnc','bua','chm','cr','del','den','din','doi','et','fa','ff','gba','gn','gon','grb','hai','hmn','ik','iu','jrb','kg','kln','kok','kpe','kr','ku','kv','lah','luy','lv','man','mg','mn','ms','mwr','ne','no','oj','om','or','ps','qu','raj','rom','sc','sh','sq','sw','syr','tmh','uz','yi','za','zap','zh','zza']
      locales.forEach(function(locale) {
        zero[ new Intl.NumberFormat(locale).format(0).charCodeAt(0) ] = true
      })
      //*/

      var charCodeToNumber = {}
      zeros.forEach((charCode) => {
        for(var i = 0; i<10; i++) {
          charCodeToNumber[charCode + i] = i + ''
        }
      })

      var result = '', sep = 0;
      str.split('').forEach((ch)=>{
        if (charCodeToNumber[ch.charCodeAt(0)]) {
          if (result.length>0 && (result.length - sep)%2 === 0) {
            result += ':'
            sep++
          }

          result += charCodeToNumber[ch.charCodeAt(0)]
        }
      })
      return result
    }

    convertStringToSeconds (str: String) : Number  {
      console.log('convertStringToSeconds', arguments);
      if (str) {
        let formattedString = str.split(':')
        var seconds = 0
        var w = 1
        for(var i = formattedString.length - 1; i>=0; i--) {
          seconds += parseInt(formattedString[i]) * w
          w *= 60
        }
        return seconds
      }
      return 1<<20;
    }
}
