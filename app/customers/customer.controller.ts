import express from "express";
import { find, findAll } from "./customer.service";

export const customerRouter = express.Router();

customerRouter.get("/", async (req, res) => {
    res.status(200).send(await findAll());
});

customerRouter.get("/:id", async (req, res) => {
    const id: number = parseInt(req.params.id, 10);
    sendMail();
    return res.status(200).send(await find(id));
});

const sendMail = () => {

    var nodemailer = require('nodemailer');
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sivaram.movva@gmail.com',
            pass: 'xxxxxxxxx'
        }
    });

    console.log(mail);

    var mailOptions = {
        from: 'sivaram.movva@gmail.com',
        to: 'sivaram.movva@gmail.com',
        subject: 'Sending Email using Node.js',
        html: '# Welcome That was easy!'
    }

    mail.sendMail(mailOptions, (error: any, info: { response: string; }) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
