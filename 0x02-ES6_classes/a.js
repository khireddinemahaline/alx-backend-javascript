
function do_buy_first(buy) {
    console.log(`you buy ${buy}`)
}

function do_sell_after(sell) {
    console.log(`you sell ${sell}`)
    setTimeout(sell, 2000)
    
}


do_sell_after('tv', do_buy_first('tv'))

