set_dark = () => {
    var h = document.getElementsByTagName('head')[0],
        s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.setAttribute('id', 'darkmode');
    s.appendChild(document.createTextNode('html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #fff;} .line-content {background-color: #fefefe;}'));
    h.appendChild(s);
    return true
}

set_dark()

