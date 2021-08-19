// 控制网站的标题

let siteTitle = '',
    routerTitle = '';

function setTitle() {
    if (!siteTitle && !routerTitle) {
        document.title = '(｡･∀･)ﾉﾞ嗨';
    } else if (siteTitle && !routerTitle) {
        document.title = siteTitle;
    } else if (!siteTitle && routerTitle) {
        document.title = routerTitle;
    } else {
        document.title = `${siteTitle}-${routerTitle}`;
    }
}

export default {
    setRotuerTitle(title) {
        routerTitle = title;
        setTitle();
    },
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    }
}