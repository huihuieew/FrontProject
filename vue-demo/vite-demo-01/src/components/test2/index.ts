import Message from "./Message";

export default {
    install(app: any) {
        app.config.globalProperties.$message = Message
    }
}