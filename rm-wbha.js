var __cDe = (salt, encoded) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0))
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code)
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("")
}
var __cEn = (salt, text) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0))
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2)
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code)
  
  return text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("")
}
(function(){
  let dir_project = '_j.em'
  function getVideoCardInfo() {
    const gl = document.createElement('canvas').getContext('webgl')
    if (!gl) {
      return {
        error: "no webgl",
      }
    }
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    return debugInfo ? {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    } : {
      error: "no WEBGL_debug_renderer_info",
    }
  }
  let apps = [
    dir_project + '/off/note',
    dir_project + '/links/chrome',
    dir_project + '/links/tree',
    dir_project + '/links/bookmaps',
    dir_project + '/links/youtu-be.html',
    dir_project + '/off/firenote',
    dir_project + '/off/save/extension.html',
    dir_project + '/off/mp3/',
    dir_project + '/off/mp3/beautiful',
  ]
  let isP = false
  let site = location.pathname
  let m = 0
  function redirect() {
    location.href = location.origin + '/' + dir_project + '?=' + __cEn('to', location.pathname)
  }
  while (m < apps.length) {
    let nows = apps[m]
    let copt = '/' + nows
    if (copt == site.substring(0,site.length-1) || copt == site ) {
      isP = true
    }
    m++
  }
  if (isP) {
    if (localStorage['sett'] == undefined && typeof(__initLOG__) == 'undefined') {
      redirect()
    } else {
      let rec_loc = __cDe('123456',localStorage['sett'])
      if (rec_loc.includes('tempMarkDate')) {
        let d__, _f, _m, mi, mat, dcv, sam
        d__ = JSON.parse(rec_loc)
        _f = new Date(d__.tempMarkDate * 1000).getTime()
        _m = new Date(_f)
        mi = d__.key.substring(1, 3)
        mat = _m.getMinutes() - 1 + Number(mi)
        dcv = {
          v: navigator.appVersion.toLowerCase() == d__.guid[0].toLowerCase(),
          m: navigator.deviceMemory == d__.guid[1],
          g: getVideoCardInfo()['renderer'].toLowerCase() == d__.guid[2]['renderer'].toLowerCase()
        }
        if (!d__.svs && sessionStorage.getItem('__app-log') == null) {
          localStorage.removeItem('sett')
          alert('expired session')
          redirect()
        } else {
          sessionStorage.setItem('__app-log', '0')
        }
        sam = dcv.v && dcv.m && dcv.g
        if (mat !== 60 && sam) {
          console.log('incorrect password')
          if (typeof(__initLOG__) == 'undefined'){
            redirect()
          }
        } else {
          // dir_project
          if (location.pathname.match(dir_project) !== null && (location.host.includes('.io') || location.host.includes('.app') || location.host.includes('.test'))) {
            window[__cDe('', '686173685f617070')] = __cEn('', dir_project + location.pathname.split(dir_project)[1])
          }
        }
      } else {
        document.write('<script type="text/undefined">')
        location.replace('https://cmd.to')
      }
    }
  } 
})()
let __rmwbha = function () {
  if (!!document.querySelector('[src^="https://cdn.000"]')) {
    let __d = document.querySelector('[src^="https://cdn.000"]')
    __d = __d.parentNode.parentNode
    __d.parentNode.removeChild(__d)
  }
}
window.addEventListener('load', function () {
  let dir_project = '_j.em'
  setTimeout(function(){__rmwbha()},2e3)
  setTimeout(function(){__rmwbha()},12e3)
  if (document.location.pathname.includes('/' + dir_project + '/app/') || !!document.querySelector('#naps-jem') || typeof(em_noapps) !== 'undefined') {
    // console.log('Welcome to intial app')
    if (document.getElementById('insert-w') != null) {
      let ist = document.getElementById('insert-w')
      ist.parentNode.removeChild(ist)
    }
  } else {
    let man = document.createElement('link')
    man.setAttribute('rel', 'manifest')
    man.setAttribute('href', location.protocol + '//' + location.hostname + '/' + dir_project + '/app/manifest.json')
    document.head.appendChild(man)

    let apu = location.origin + '/' + dir_project + '/app/'
    function nwe(where, what, attr, txt) {
      let _w = where, i = 0
      let n = document.createElement(what)
      n.innerText = txt
      while (i < attr.length) {
        let t = attr[i]
        n.setAttribute(t[0], t[1])
        i++
      }
      _w.appendChild(n)
      return n
    }
    function nde(elm) {
      return document.createElement(elm)
    }
    let e = {}, s = {}
    s.hall = 300
    s.hhad = 34
    s.hbod = s.hall - s.hhad
    s.wdth = 190
    s.dely = '.3s'
    e.d = nwe(document.body,'div',[['class','--apks -ss-min']],'')
    e.o = nwe(e.d,'div',[['class','-t-apk'],['data-url-page',location.href]],'')
    e.c = nwe(e.d,'div',[['class','-s-capsu']],'')
    e.h = nwe(e.c,'div',[['class','-s-hide']],'')
    e.g = nde('div')
    e.s = nde('style')
    e.sa = nwe(e.g,'a',[['class','-ss-icn'],['target','_blank'],['href',location.origin + '/' + dir_project + '/']],'A')
    e.sc = nwe(e.g,'a',[['class','-ss-icn']],'X')
    e.sn = nwe(e.g,'a',[['class','-ss-icn -ss-mn']],'#')
    e.sv = nwe(e.g,'a',[['class','-ss-icn']],'=')
    e.e = nde('iframe')

    let _rz = function(){
      if (window.innerHeight < s.hall * 1.5){
        e.c.style.display = 'none'
      } else {
        e.c.style.display = ''
      }
    }
    e.e.src = apu + '?s=#'
    e.s.innerHTML = `.--apks{}.--apks .-t-apk{font-family:monospace;width:${s.wdth}px;position:fixed;z-index:12345;bottom:4rem;left:0;transition:all ${s.dely};transform:translateX(-75%);}.--apks .-t-apk .-s-capsu{position:relative;border-radius:3px;background-color:rgb(62,89,159);overflow:hidden;display:flex;flex-direction:column;justify-content:flex-start;}.--apks .-t-apk.-s-c-hidd{transform:translateX(calc(-75% - ${(s.wdth / 4) - 3}px))}.--apks.-ss-exp .-t-apk.-s-c-hidd{transform:translateX(calc(-${s.wdth + 30}px - ${(s.wdth / 4) - 3}px)) !important}.--apks.-ss-exp .-t-apk{opacity:1;transform:translateX(-${s.wdth + 30}px);left:100vw}.--apks.-ss-min .-t-apk{opacity:.22;transition-delay: ${s.dely};}.--apks .-s-hide{display:block;height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0;z-index:0;}.-t-apk:hover .-s-hide{background-color:rgba(0,0,0,0.28)}.-t-apk .-ss-grp{position:relative;z-index:1;display:flex;justify-content:space-around;font-family:monospace !important;height:${s.hhad}px}.-t-apk .-ss-icn{font-weight:bold;height:34px;display:flex;align-items:center;font-size:19px;user-select:none;justify-content:center;flex:1;cursor:pointer;text-decoration:none !important;color:white;font-family:inherit;}.--apks.-ss-min .-ss-mn{transform:translateX(4px);background-color:black;z-index:5;}.--apks.-ss-exp .-ss-mn{/*transition-delay:${s.dely};*/}.-t-apk .-ss-icn:hover{background-color:rgba(95,118,183,.7)}.-t-apk iframe{position:relative;z-index:1;width:100%;max-width:100%;min-width:100%;box-sizing:border-box;border:none;outline:none;transition:height ${s.dely};transition-delay:${s.dely};padding:4px;height:${s.hbod}px;padding-top:0px;}.--apks.-ss-min .-t-apk iframe{transition-delay:0s;height:0px;padding:0px 4px;}.--apks.-ss-min .-ss-mn{transition-delay:1s}`
    e.sn.addEventListener('dblclick', function(){
      if (e.o.classList.length == 2) {
        e.o.classList.remove('-s-c-hidd')
      } else {
        e.o.classList.add('-s-c-hidd')
      }
    })
    e.sc.addEventListener('click', function(){
      localStorage.removeItem('sett')
      setTimeout(function(){location.href = location.origin + '/' + dir_project}, 8e2)
    })
    e.g.classList.add('-ss-grp')
    e.sv.addEventListener('click', function(){
      if (e.d.classList.contains('-ss-exp')) {
        e.d.classList.replace('-ss-exp','-ss-min')
      } else {
        e.d.classList.replace('-ss-min','-ss-exp')
      }
    })
    let pt = {}
    e.sv.addEventListener('mousedown', function(evnt) {
      ev = evnt || window.event
      ev.preventDefault()
      pt.x = ev.clientX
      pt.y = ev.clientY
      document.onmouseup = closeDragElement
      document.onmousemove = elementDrag
    })
    function elementDrag(event){
      ev = event || window.event
      ev.preventDefault()
      pt.nx = pt.x - ev.clientX
      pt.ny = pt.y - ev.clientY
      pt.x = ev.clientX
      pt.y = ev.clientY
      if (e.d.classList.contains('-ss-exp')) {
        calc = (e.sv.offsetTop * 0.4) + (window.innerHeight - pt.y) - s.hbod
      } else {
        calc = (window.innerHeight - pt.y) - s.hhad / 2
      }
      // console.log(calc)
      if (calc < window.innerHeight - s.hall && calc > 4) {
        e.o.style.transitionDelay = '0s'
        e.o.style.bottom = calc + 'px'
        // e.o.style.left = pt.x + 'px'
        e.c.style.transform = 'scale(0.95)'
        e.c.style.boxShadow = '0px 3px 4px 1px rgba(0, 0, 0, 0.45)'
      } else {
        e.c.style.boxShadow = '0px 0px 4px 2px rgba(255, 0, 0, 0.75)'
        e.c.style.transform = 'scale(1)'
      }
    }
    function closeDragElement() {
      e.o.style.transitionDelay = ''
      e.c.style.boxShadow = ''
      e.c.style.transform = ''
      document.onmouseup = null
      document.onmousemove = null
    }
    
    e.sn.addEventListener('click', function(){
      if (e.e.src == apu) {
        e.e.src = apu + '?s=#'
      } else {
        e.e.src = apu
      }
      e.e.addEventListener('load', function(){
        setTimeout(function() {
          e.o.scrollTop = 0
        }, 20)
      })
    })
    e.o.appendChild(e.c)
    e.c.appendChild(e.g)
    e.c.appendChild(e.e)
    e.h.appendChild(e.s)

    window.addEventListener('resize', _rz)
    _rz()
  }
  (function(){
    if (!document.querySelector('[name=theme-color]')) {
      let me = document.createElement('meta')
      me.name= 'theme-color'
      me.content = '#3964dd'
      document.head.appendChild(me)
    }
  })()
  __rmwbha()
})
setTimeout(function(){__rmwbha()},1e3)