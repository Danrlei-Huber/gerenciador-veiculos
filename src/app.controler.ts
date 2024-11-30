import { Controller, Get } from "@nestjs/common";


@Controller('api')
export class AppController {

    @Get()
    helloApi() : {status: boolean, msg: string} {
        return {
            status: true,
            msg: "API on"
        }
    }

}