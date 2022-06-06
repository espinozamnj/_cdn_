let __wbha = function () {
    if (!!document.querySelector('[src^="https://cdn.000"]')) {
        let __d = document.querySelector('[src^="https://cdn.000"]')
        __d = __d.parentNode.parentNode
        __d.parentNode.removeChild(__d)
    }
}
setTimeout(function(){__wbha()}, 1e3)
setTimeout(function(){__wbha()}, 5e3)
setTimeout(function(){__wbha()}, 7e3)
window.addEventListener('DOMContentLoaded', function(){
    __wbha()
})