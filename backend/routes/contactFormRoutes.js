import express from 'express'
const router = express.Router()
import { sendClientEmail } from '../controllers/contactFormController.js'

router.route('/').post(sendClientEmail)

export default router
