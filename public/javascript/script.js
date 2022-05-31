// Bitcoin withdrawal method dropdown
function openwithbtc() {
    document.getElementById("with-opp-btc").style.display = "block";
}
function closewithbtc() {
    document.getElementById("with-opp-btc").style.display = "none";
}

// Btc-cash withdrawal method dropdown
function openwithbch() {
    document.getElementById("with-opp-bch").style.display = "block";
}
function closewithbch() {
    document.getElementById("with-opp-bch").style.display = "none";
}

// Ethereum withdrawal method dropdown
function openwitheth() {
    document.getElementById("with-opp-eth").style.display = "block";
}
function closewitheth() {
    document.getElementById("with-opp-eth").style.display = "none";
}

// Litecoin withdrawal method dropdown
function openwithlte() {
    document.getElementById("with-opp-lte").style.display = "block";
}
function closewithlte() {
    document.getElementById("with-opp-lte").style.display = "none";
}






// Dashboard display chart script
new TradingView.widget(
    {
        "autosize": true,
        "symbol": "FX:EURUSD",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": true,
        "withdateranges": true,
        "range": "YTD",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": true,
        "container_id": "tradingview_49726"
    }
);