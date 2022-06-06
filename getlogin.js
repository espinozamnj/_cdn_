(function(){
    let ready = false
    function add_login() {
        const _k = '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'
        let v_r = Math.floor(Math.random() * (9 - 0 + 1) + 0),
            eB = document.getElementById('getlogin')
            __e = {}
        __e.l = document.createElement('label'),
        __e.p = document.createElement('input'),
        __e.b = document.createElement('button')
        __e.s = document.createElement('style')
        
        __e.p.setAttribute('type', 'password')
        __e.p.setAttribute('placeholder', v_r)
        __e.b.innerText = '$'
        __e.l.appendChild(__e.p)
        __e.l.appendChild(__e.b)
        __e.l.appendChild(__e.s)
        __e.s.innerHTML = '#getlogin label{display:flex}#getlogin input,#getlogin button{background:white;height:35px;border:none;border-bottom:4px solid rgb(210,210,210);font-size:1.08rem;padding:6px 8px;}#getlogin input{font-family:monospace;margin-right:8px}#getlogin input:focus,#getlogin button:focus{background:rgb(240,240,240);outline:none;border-bottom: 4px solid rgb(85,189,126)}'
        eB.appendChild(__e.l)
        
        __e.b.addEventListener('click',function(){
            let _g = __e.p.value, g, gs, gl
            g = _g.substring(0, _g.length - 1)
            gs = g.toString()
            gl = gs.length
            g = Number(gs)
            if (isNaN(g) || gl > 7 || gl < 5){
                __e.p.value = ''
                __e.p.setAttribute('placeholder', 'NaN')
                setTimeout(
                    function (){
                        __e.p.setAttribute('placeholder', v_r)
                    }, 1e3
                )
            } else {
                let _t = document.createElement('input'), v = {w: 0}
        
                v.s = gs.substring(gl - 1, gl)
                v.s = Number(v.s)
                v.l = gs.substring(gl - 3 , gl - 1)
                v.l = Number(v.l)
                v.i = gs.substring(0, gl - 3)
                v.i = Number(v.i)
                v.i = v.i + v_r
                v.r = (Math.floor(v.l / v.s) + 1)
                v.f = v.i + (v.l + v.r * v.s)
        
                let strSum = _k.substring(v.i, v.f)
                let _y = '', _h = ''
        
                while (v.w < v.r) {
                    let _i = (v.w + 0) * v.s + v.s
                    let tv = strSum.substring(_i, _i + v.s)
                    _y = _y + tv
                    v.w++
                }
                _y = _y.substring(0, v.l)
                _h = _y.replace(/[+(\/)]/g,'k')
                
                if (_g.endsWith('i')) {
                    open('//justpaste.it/' + _h)
                } else if (_g.endsWith(':')) {
                    open('//justpaste.me/' + _h)
                } else {
                    _t.value = _y
                    eB.appendChild(_t)
                    _t.select()
                    document.execCommand('copy')
                    eB.removeChild(_t)
                }
            }
        })
        let cl = function(){
            __e.p.value = '1111111'
            setTimeout(
                function() {
                    __e.b.click()
                }, 2e2
            )
        }
        __e.p.addEventListener('keydown',function(v) {
                if ((v.which || v.keyCode || v.charCode) == 13 && v.shiftKey) {
                    __e.b.click()
                }
            }
        )
        window.document.addEventListener('keydown',function(v) {
                if (v.shiftKey && v.keyCode == 73) {
                    alert(v_r + 1)
                    __e.p.focus()
                    setTimeout(
                        function() {
                            __e.p.value = ''
                        }, 2e2
                    )
                }
                if (v.shiftKey && v.keyCode == 8) {cl()}
            }
        )
        __e.b.addEventListener('dblclick', function(){cl()})
    }
    window.addEventListener('load', function(){
        add_login()
        ready = true
    })
    setTimeout(function(){
        if (!ready) {
            add_login()
            ready = true
        }
    }, 1e3)
    setTimeout(function(){
        if (!ready) {
            add_login()
            ready = true
        }
    }, 5e3)
})()