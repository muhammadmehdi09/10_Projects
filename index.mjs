import express from "express"
import path from "path"

const __dirname = path.resolve()

const app = express()
const PORT = 5500

app.use(express.static("public"))

app.get("/rain", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/rain.html"))
})

app.get("/zoom", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/zoom.html"))
})

app.get("/toast-notification", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/toast-notif.html"))
})

app.get("/sounds", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/sounds.html"))
})

app.get("/carousel", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/carousel.html"))
})

app.get("/popup", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/popup.html"))
})

app.get("/dark-mode", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/dark-mode.html"))
})

app.get("/auto-write", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/auto-write.html"))
})

app.get("/bg-change", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/bg-change.html"))
})

app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/404.html"))
});


app.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT);
})



