const base = {
    get() {
                return {
            url : "http://localhost:8080/ONLYzaixianshangcheng/",
            name: "ONLYzaixianshangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ONLYzaixianshangcheng/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "ONLY在线商城系统"
        } 
    }
}
export default base
