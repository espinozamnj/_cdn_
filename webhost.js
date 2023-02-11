(function(){
  let __wbha = function() {
    let ee = (emt) => {return document.querySelector(emt)}
    function removeEmt(path, levels = 0) {
      let em = ee(path)
      if (em != null) {
        let pp = em
        while (levels--) (pp = pp.parentNode)
        pp.parentNode.removeChild(pp)
      }
    }
    ([
      ['[src^="https://cdn.000"]', 2],
      ['body > .disclaimer', 0]
    ]).forEach(function(qs) {
      removeEmt(qs[0], qs[1])
    })
  }
  setTimeout(function(){__wbha()}, 1e3)
  setTimeout(function(){__wbha()}, 5e3)
  setTimeout(function(){__wbha()}, 7e3)
  window.addEventListener('DOMContentLoaded', function(){
    __wbha()
  })
})()