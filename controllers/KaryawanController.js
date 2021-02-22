const Karyawan = require("../models/Karyawan")

module.exports = {
    // Membuat view untuk karyawan
    viewKaryawan: async (req, res) => {
        //memberi validasi untuk inputan yang kosong
        try{
            const karyawan = await Karyawan.find()
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")
            const alert = { message: alertMessage, status: alertStatus }

            console.log(alert)

            res.render("pages/karyawan/index", { karyawan, alert, title: "Karyawan"})
        }catch (e) {
            res.redirect("/karyawan")
        }
    },

    // Membuat create data untuk karyawan
    addKaryawan: async (req, res) => {
        //memberi validasi untuk inputan yang kosong
        try {
            const { nama, email, password, npp, jabatan, entitas, alamat } = req.body
            await Karyawan.create({ nama, email, password, npp, jabatan, entitas, alamat });
            req.flash("alertMessage", "Success add data Karyawan")
            req.flash("alertStatus", "success")
            res.redirect("/karyawan")
        }catch (e) {
            res.flash("alertMessage", `${error.message}`)
            req.flash("alertStatus", "danger")
            res.redirect("/karyawan")
        }
    }

    // Membuat read data untuk karyawan
    // types code in here..

    // Membuat update data untuk karyawan
    // types code in here..

    // Membuat delete data untuk karyawan
}