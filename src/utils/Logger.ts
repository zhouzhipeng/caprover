import { AnyError } from '../models/OtherTypes'
import CaptainConstants from './CaptainConstants'
const moment = require('moment')

function errorize(error: AnyError) {
    if (!(error instanceof Error)) {
        return new Error(`Wrapped: ${error ? error : 'NULL'}`)
    }

    return error
}

function getTime() {
    return `[36m${moment().format('MMMM Do YYYY, h:mm:ss.SSS a    ')}[0m`
}

class Logger {
    static d(msg: string) {
        console.log(getTime() + msg + '')
    }

    static w(msg: string) {
        console.log(getTime() + msg + '')
    }

    static dev(msg: string) {
        if (CaptainConstants.isDebug) {
            console.log(`${getTime()}########### ${msg}`)
        }
    }

    static e(msgOrError: AnyError) {
        let err = errorize(msgOrError)
        console.error(`${getTime() + err}
${err.stack}`)
    }
}
export default Logger
