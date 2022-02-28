exports.index = (req, res) => {
    let data = {}
    data.title = 'テストのために作られたページ'
    res.render('index.ejs', data);
}

exports.led = (req, res) => {
    let data = {}
    data.title = 'テストのために作られたページ'
    res.render('led_main.ejs', data);
}
exports.led_tokyu5050 = (req, res) => {
    let data = {}
    data.title = 'テストのために作られたページ'
    res.render('under_construction.ejs', data);
}
exports.train = (req, res) => {
    let data = {}
    data.title = 'テストのために作られたページ'
    res.render('under_construction.ejs', data);
}